import React, { useEffect, useState } from 'react';
import { db } from '../../../../core/Firestore';
import { Nation } from '../../admin-commons/admin-models/nation.model';
import AdminList, { ListProps } from '../../admin-commons/admin-list/admin-list';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './admin-naciones-list.scss';
import { useHistory } from 'react-router-dom';

const AdminNacionesList: React.FC = () => {
  const [nationsList, setNationsList] = useState();
  const history = useHistory();
  useEffect(() => {
    const unsubscribe = db.collection('nations').onSnapshot(snapshot => {
      let nations: Nation[] = [];
      snapshot.forEach(doc => {
        nations = [...nations, { ...doc.data(), id: doc.id } as Nation];
      });
      setNationsList(transformDataToList(nations));
    });

    return () => unsubscribe();
  }, []);

  const transformDataToList = (data: Nation[]) => {
    const dataToSend: ListProps = {
      actions: ['edit', 'delete'],
      header: [],
      dataToShow: [],
    };
    data.forEach((d: Nation) => {
      const { area, code, id, leaders, name, power } = d;
      dataToSend.header = [
        { name: 'Nombre', nameClass: 'medium' },
        { name: 'Código', nameClass: 'small' },
        { name: 'Poder', nameClass: 'small' },
        { name: 'Área', nameClass: 'large' },
        { name: 'Líderes', nameClass: 'large' },
      ];
      dataToSend.dataToShow = [
        ...dataToSend.dataToShow,
        {
          id: String(id),
          row: [
            { name: name, nameClass: 'medium' },
            { name: code, nameClass: 'small' },
            { name: power, nameClass: 'small' },
            { name: area, nameClass: 'large' },
            { name: leaders, nameClass: 'large' },
          ],
        },
      ];
    });
    return dataToSend;
  };

  const editItemFromList = (id: string) => history.push(`/admin/naciones/editar-nacion/${id}`);

  const removeItemFromList = (id: string) => {
    console.log(id);
  };

  return (
    <section className="admin-naciones">
      {!nationsList ? (
        <div className="spinner">
          <FontAwesomeIcon icon={['fas', 'spinner']} spin size="3x" />
        </div>
      ) : (
        <div>
          <h2>Listado de Naciones</h2>
          <AdminList
            actions={nationsList.actions}
            dataToShow={nationsList.dataToShow}
            deleteListItem={removeItemFromList}
            editListItem={editItemFromList}
            header={nationsList.header}
          />
        </div>
      )}
    </section>
  );
};

export default AdminNacionesList;
