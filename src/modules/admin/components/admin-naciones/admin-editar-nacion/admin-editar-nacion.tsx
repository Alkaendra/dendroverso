import React, { useEffect, useReducer, Fragment } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { debounce } from 'lodash';
import { db } from '../../../../core/Firestore';
import AdminForm from '../../admin-commons/admin-forms/admin-form';
import { Nation, nationConstructor } from '../nation.model';
import { obtainFormDataConstructor, obtainDataForTriggerFieldList } from '../../../admin';

const initialState = {
  nation: null,
};

const reducer = (state: any, action: { type: any; data: any }) => {
  switch (action.type) {
    case 'DATA_TO_SUBMIT':
      return { ...state, nation: action.data };
    default:
      return { ...state };
  }
};

const AdminEditarNacion: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const history = useHistory();
  let match: any = useRouteMatch();
  useEffect(() => {
    const unsubscribe = db
      .collection('nations')
      .doc(match.params.id)
      .onSnapshot(doc =>
        dispatch({
          type: 'DATA_TO_SUBMIT',
          data: {
            ...(doc.data() as Nation),
            id: doc.id,
          },
        }),
      );
    return () => unsubscribe();
  }, [match]);

  const handleChangedData = debounce((data: Nation) => {
    dispatch({ type: 'DATA_TO_SUBMIT', data: data });
  }, 500);

  const handleSaveData = () => {
    db.collection('nations')
      .doc(match.params.id)
      .update(state.nation as Nation);
  };

  const handleCreateRegion = () => history.push(`/admin/naciones/${match.params.id}/crear-region/`);

  const obtainFormattedData = () => {
    return obtainFormDataConstructor(nationConstructor, state.nation);
  };

  return (
    <div className="admin-editar-nacion">
      {state.nation && (
        <Fragment>
          <AdminForm
            dataForm={obtainFormattedData()}
            entity={state.nation}
            triggerFieldListData={obtainDataForTriggerFieldList(obtainFormattedData())}
            updateChangesInParentData={handleChangedData}
          />
          <div className="admin-form__buttons-bar">
            <button className="admin-form__save-button" onClick={() => handleCreateRegion()}>
              Crear Región
            </button>
            <button className="admin-form__save-button" onClick={() => handleSaveData()}>
              Guardar
            </button>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default AdminEditarNacion;
