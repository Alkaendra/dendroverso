import React, { Fragment } from 'react';
import './admin-input.scss';

export type inputDataProps = {
  index: number;
  name: string;
  type: string;
  size: string;
  defaultValue: any;
  options?: any[];
  parameterName: string;
  value?: any;
  handleChange: (value: any, name: string, index: number) => void;
};

const AdminInput: React.FC<inputDataProps> = ({
  defaultValue,
  index,
  name,
  options,
  parameterName,
  type,
  size,
  handleChange,
}) => {
  const sendData = (value: any) => {
    handleChange(value, parameterName, index);
  };

  return (
    <div className="admin-input">
      {handleChange && (
        <Fragment>
          {(type === 'text' || type === 'number') && (
            <Fragment>
              <label htmlFor={name}>{name}</label>
              <input
                name={name}
                type={type}
                defaultValue={defaultValue}
                className={`admin-input--${size}`}
                onChange={e => sendData(e.target.value)}
              />
            </Fragment>
          )}
          {type === 'textarea' && (
            <Fragment>
              <label htmlFor={name}>{name}</label>
              <textarea
                cols={26}
                name={name}
                defaultValue={defaultValue}
                className={`admin-input--${size}`}
                onChange={e => sendData(e.target.value)}
                rows={5}
              />
            </Fragment>
          )}
          {type === 'select' && (
            <Fragment>
              <label htmlFor={name}>{name}</label>
              <select
                defaultValue={defaultValue || (options && options[0].value)}
                name={name}
                className={`admin-input--${size}`}
                onChange={e => sendData(e.target.value)}
              >
                {options &&
                  options.map(option => (
                    <option value={option.value} key={option.value}>
                      {option.name}
                    </option>
                  ))}
              </select>
            </Fragment>
          )}
        </Fragment>
      )}
    </div>
  );
};

export default AdminInput;
