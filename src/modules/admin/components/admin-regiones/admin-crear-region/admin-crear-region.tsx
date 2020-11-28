import React, { useReducer, Fragment, useEffect } from 'react';
import AdminForm from '../../admin-commons/admin-forms/admin-form';
import { obtainDataForTriggerFieldList, obtainFormDataConstructor } from '../../../admin';
import { regionConstructor, Region } from '../../admin-commons/admin-models/region.model';
import { debounce } from 'lodash';
import { db } from '../../../../core/Firestore';
import { useRouteMatch } from 'react-router-dom';
import { Nation } from '../../admin-commons/admin-models/nation.model';

const initialState = {
  nation: null,
  region: null,
};

const reducer = (state: any, action: { type: any; data: any }) => {
  switch (action.type) {
    case 'NATION_DATA':
      return { ...state, nation: action.data };
    case 'DATA_TO_SUBMIT':
      return { ...state, nation: action.data, region: action.data };
    default:
      return { ...state };
  }
};

const AdminCrearRegion: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  let match: any = useRouteMatch();
  const nationId: string = match.params.id;
  useEffect(() => {
    const unsubscribe = db
      .collection('nations')
      .doc(nationId)
      .onSnapshot(doc =>
        dispatch({
          type: 'NATION_DATA',
          data: {
            ...(doc.data() as Nation),
            id: doc.id,
          },
        }),
      );
    return () => unsubscribe();
  }, [match]);

  const obtainFormattedData = () => {
    return obtainFormDataConstructor(regionConstructor, state.region);
  };

  const handleChangedData = debounce((data: Region) => {
    dispatch({ type: 'DATA_TO_SUBMIT', data: data });
  }, 500);

  const handleSaveData = () => {
    db.collection('nations')
      .doc(nationId)
      .collection('regions')
      .add(state.region as Region);
  };

  return (
    <div>
      {state.nation && (
        <Fragment>
          <AdminForm
            creatingData={{ name: 'una región', parent: state.nation.name.full || state.nation.fullName }}
            dataForm={obtainFormattedData()}
            entity={state.region}
            triggerFieldListData={obtainDataForTriggerFieldList(obtainFormattedData())}
            updateChangesInParentData={handleChangedData}
          />
          <button className="admin-form__save-button" onClick={() => handleSaveData()}>
            Guardar
          </button>
        </Fragment>
      )}
    </div>
  );
};

export default AdminCrearRegion;
