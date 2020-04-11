import React, { useState } from 'react';
import AdminInput from '../admin-input/admin-input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './admin-array-input.scss';

type inputDataItems = {
  name: string;
  options?: any[];
  parameterName: string;
  size: string;
  type: string;
};

export type arrayInputDataProps = {
  arrayInputBuildData: inputDataItems[];
  arrayInputName: string;
  arrayInputParameterName: string;
  defaultValue: any[];
  value?: any;
  handleArrayInputChange: (value: any, name: string, index?: number) => void;
};

const AdminArrayInput: React.FC<arrayInputDataProps> = ({
  arrayInputBuildData,
  arrayInputName,
  arrayInputParameterName,
  defaultValue,
  handleArrayInputChange,
}) => {
  const initialDataValue = [...defaultValue];
  const [dataValue, setDataValue] = useState(initialDataValue);

  const handleInputArrayChange = (value: any, parameter: string, index: number) => {
    console.log('ENTRO');
    const data = [...dataValue];
    data[index] = { ...data[index], [parameter]: value };
    setDataValue(data);
    handleArrayInputChange(data, arrayInputParameterName);
  };

  const addField = () => {
    const data = [...dataValue];
    const fieldParameters = Object.values(arrayInputBuildData).reduce(
      (acc, current) => ({
        ...acc,
        [current.parameterName]:
          current.type === 'text' || current.type === 'textarea' || current.type === 'select' ? '' : 0,
      }),
      {},
    );
    setDataValue([...data, fieldParameters]);
  };

  const deleteFieldItem = (index: number) => {
    const data = [...dataValue];
    data.splice(index, 1);
    setDataValue(data);
  };

  return (
    <div className="admin-array-input">
      <div className="admin-array-input__title__container">
        <p className="admin-array-input__title">{arrayInputName}</p>
        <div className="admin-button__container">
          <FontAwesomeIcon icon={['fas', 'plus-square']} size="sm" onClick={addField} />
        </div>
      </div>
      <div className="admin-array-input__list">
        {handleArrayInputChange &&
          dataValue.map((item: any, index: number) => {
            return (
              <div className="admin-array-input__item" key={`${item}${index}`}>
                {arrayInputBuildData.map((subitem, subindex) => (
                  <AdminInput
                    defaultValue={item[subitem.parameterName]}
                    handleChange={handleInputArrayChange}
                    index={index}
                    key={`${subitem.name}${subindex}`}
                    name={subitem.name}
                    options={subitem.options}
                    parameterName={subitem.parameterName}
                    type={subitem.type}
                    size={subitem.size}
                  />
                ))}
                <FontAwesomeIcon icon={['fas', 'minus-square']} size="sm" onClick={() => deleteFieldItem(index)} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AdminArrayInput;
