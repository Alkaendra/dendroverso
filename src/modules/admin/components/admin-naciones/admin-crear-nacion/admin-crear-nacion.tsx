import React, { useReducer, Fragment } from 'react';
import AdminForm from '../../admin-commons/admin-forms/admin-form';
import { obtainDataForTriggerFieldList, obtainFormDataConstructor } from '../../../admin';
import { nationConstructor, Nation } from '../nation.model';
import { debounce } from 'lodash';
import { db } from '../../../../core/Firestore';

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

const AdminCrearNacion: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const obtainFormattedData = () => {
    return obtainFormDataConstructor(nationConstructor, state.nation);
  };

  const handleChangedData = debounce((data: Nation) => {
    dispatch({ type: 'DATA_TO_SUBMIT', data: data });
  }, 500);

  const handleSaveData = () => {
    db.collection('nations').add(state.nation as Nation);
  };

  return (
    <div>
      <Fragment>
        <AdminForm
          creatingData={{ name: 'Región' }}
          dataForm={obtainFormattedData()}
          entity={state.nation}
          triggerFieldListData={obtainDataForTriggerFieldList(obtainFormattedData())}
          updateChangesInParentData={handleChangedData}
        />
        <button className="admin-form__save-button" onClick={() => handleSaveData()}>
          Guardar
        </button>
      </Fragment>
    </div>
  );
};

export default AdminCrearNacion;
