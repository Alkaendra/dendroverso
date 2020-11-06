import React, { Fragment, useState } from 'react';
import AdminInput from './admin-input/admin-input';
import AdminArrayInput from './admin-array-input/admin-array-input';
import './admin-form.scss';
import AdminFieldTriggerList from '../admin-field-trigger/admin-field-trigger-list/admin-field-trigger-list';

type formProps = {
  creatingData?: any;
  editingData?: any;
  entity?: any;
  dataForm?: any;
  triggerFieldListData?: any;
  updateChangesInParentData: (data: any) => void;
};

const AdminForm: React.FC<formProps> = ({
  creatingData,
  editingData,
  dataForm,
  entity,
  triggerFieldListData,
  updateChangesInParentData,
}: formProps) => {
  const [entityData, setEntityData] = useState(entity);
  const [fieldToShow, setFieldToShow] = useState('');
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
  const handleTriggerField = (value: string) => {
    setFieldToShow(value);
  };

  console.log('data ', triggerFieldListData, dataForm);

  return (
    <section className="admin-form">
      <div className="admin-form__title">
        <h6>
          {creatingData && (
            <span>
              Creando {creatingData.name} de {creatingData.parent}
            </span>
          )}
          {editingData && (
            <span>
              Editando {editingData.type} {editingData.name} de {editingData.parent}
            </span>
          )}
        </h6>
        {/* <h2>{dataForm.find((d: any) => d.arrayInputName === 'Name').defaultValue}</h2> */}
      </div>
      <div className="admin-form__content">
        {triggerFieldListData && (
          <AdminFieldTriggerList fields={triggerFieldListData} onTriggerField={handleTriggerField} />
        )}
        <section className="admin-form__content__fields">
          {dataForm &&
            dataForm.map((field: any, index: number) => {
              console.log('FIELDVLAUE ', field.defaultValue, typeof field.defaultValue === 'object');
              return (
                <Fragment key={`${field.defaultValue}${index}`}>
                  {Array.isArray(field.defaultValue) ||
                  (typeof field.defaultValue === 'object' && field.defaultValue !== null) ? (
                    <Fragment>
                      {fieldToShow === field.arrayInputName && (
                        <AdminArrayInput
                          arrayInputName={field.arrayInputName}
                          arrayInputBuildData={field.arrayInputBuildData}
                          arrayInputParameterName={field.arrayInputParameterName}
                          defaultValue={field.defaultValue}
                          key={field.defaultValue}
                          handleArrayInputChange={handleArrayInputChange}
                        />
                      )}
                    </Fragment>
                  ) : (
                    <Fragment>
                      {fieldToShow === field.name && (
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
                  )}
                </Fragment>
              );
            })}
        </section>
      </div>
    </section>
  );
};

export default AdminForm;
