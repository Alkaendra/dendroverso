import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type actionProps = {
  actions: string[];
  id: string;
  editListItem?: (id: string) => void;
  deleteListItem?: (id: string) => void;
};

const AdminListActions: React.FC<actionProps> = ({ actions, deleteListItem, editListItem, id }) => (
  <div className="admin-list__row__actions">
    {actions.includes('edit') && editListItem && (
      <FontAwesomeIcon icon={['fas', 'pencil-ruler']} size="lg" onClick={() => editListItem(id)} />
    )}
    {actions.includes('delete') && deleteListItem && (
      <FontAwesomeIcon icon={['fas', 'trash-alt']} size="lg" onClick={() => deleteListItem(id)} />
    )}
  </div>
);

export default AdminListActions;
