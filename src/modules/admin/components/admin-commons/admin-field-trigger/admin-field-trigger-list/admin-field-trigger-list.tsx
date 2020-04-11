import React from 'react';
import AdminFieldTrigger from '../admin-field-trigger';

import './admin-field-trigger-list.scss';

type adminFieldTriggerListProps = {
  fields: any[];
  onTriggerField: (data: string) => void;
};

const AdminFieldTriggerList: React.FC<adminFieldTriggerListProps> = ({ fields, onTriggerField }) => {
  return (
    <div className="admin-field-trigger-list">
      {fields &&
        fields.map(field => <AdminFieldTrigger field={field} onTriggerField={onTriggerField} key={field.name} />)}
    </div>
  );
};

export default AdminFieldTriggerList;
