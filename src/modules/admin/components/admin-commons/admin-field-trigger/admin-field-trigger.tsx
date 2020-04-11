import React from 'react';

import './admin-field-trigger.scss';

export type adminFieldTriggerProps = {
  field: {
    name: string;
    quantity: number;
  };
  onTriggerField: (value: string) => void;
};

const AdminFieldTrigger: React.FC<adminFieldTriggerProps> = ({ field, onTriggerField }) => {
  return (
    <div className="admin-field-trigger" onClick={() => onTriggerField(field.name)}>
      <div className="admin-field-trigger-name">{field.name}</div>
      <div className="admin-field-trigger-fields-amount">Entradas: {field.quantity}</div>
    </div>
  );
};

export default AdminFieldTrigger;
