import React from 'react';
import './admin-list.scss';
import AdminListRow from './admin-list-row';

export type TableFields = {
  name: any | undefined;
  nameClass: string | undefined;
};

export type DataFields = {
  id: string;
  row: TableFields[];
};

export type ListProps = {
  actions: string[];
  dataToShow: DataFields[];
  header: TableFields[];
  editListItem?: (id: string) => void;
  deleteListItem?: (id: string) => void;
};

const AdminList: React.FC<ListProps> = ({ actions, dataToShow, deleteListItem, editListItem, header }) => {
  const headerData = !actions ? header : [...header, { name: 'Acciones', nameClass: 'medium' }];
  const data = dataToShow;
  return (
    <div className="admin-list">
      <div className="admin-list__header-row">
        {headerData &&
          headerData.map(hrow => {
            const nameOfClass = `admin-list__row__item-${hrow.nameClass}`;
            return (
              <div className={nameOfClass} key={hrow.name}>
                {hrow.name}
              </div>
            );
          })}
      </div>
      <AdminListRow actions={actions} data={data} deleteListItem={deleteListItem} editListItem={editListItem} />
    </div>
  );
};

export default AdminList;
