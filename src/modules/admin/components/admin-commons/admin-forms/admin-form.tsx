import React, { Fragment, useState } from 'react';
import AdminInput from './admin-input/admin-input';
import AdminArrayInput from './admin-array-input/admin-array-input';
import './admin-form.scss';

type formProps = {
  entity?: any;
  dataForm?: any;
  updateChangesInParentData: (data: any) => void;
};

const AdminForm: React.FC<formProps> = ({ dataForm, entity, updateChangesInParentData }: formProps) => {
  const [entityData, setEntityData] = useState(entity);
  const handleChange = (value: any, name: string) => {
    const valueToChange = {
      ...entityData,
      [name]: value,
    };
    setEntityData(valueToChange);
    updateChangesInParentData(valueToChange);
  };
  const handleArrayInputChange = (value: any, name: string) => {
    handleChange(value, name);
  };

  return (
    <section className="admin-form">
      <div className="admin-form__title">
        <h6>Editando</h6>
        <h2>{dataForm.find((d: { name: string }) => d.name === 'Name').defaultValue}</h2>
      </div>
      <div className="admin-form__content">
        {dataForm &&
          dataForm.map((field: any, index: number) => (
            <Fragment key={`${field.defaultValue}${index}`}>
              {Array.isArray(field.defaultValue) ? (
                <AdminArrayInput
                  arrayInputName={field.arrayInputName}
                  arrayInputBuildData={field.arrayInputBuildData}
                  arrayInputParameterName={field.arrayInputParameterName}
                  defaultValue={field.defaultValue}
                  key={field.defaultValue}
                  handleArrayInputChange={handleArrayInputChange}
                />
              ) : (
                <AdminInput
                  defaultValue={field.defaultValue}
                  name={field.name}
                  handleChange={handleChange}
                  index={0}
                  key={field.defaultValue}
                  options={field.options}
                  parameterName={field.parameterName}
                  size={field.size}
                  type={field.type}
                />
              )}
            </Fragment>
          ))}
      </div>
    </section>
  );
};

export default AdminForm;
