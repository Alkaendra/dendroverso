import React, { Fragment } from 'react';
import { DataFields } from './admin-list';
import AdminListActions from './admin-list-actions';

type adminListRowProps = {
  actions: string[];
  data: DataFields[];
  deleteListItem?: (id: string) => void;
  editListItem?: (id: string) => void;
};

const AdminListRow: React.FC<adminListRowProps> = ({ actions, data, deleteListItem, editListItem }) => (
  <Fragment>
    {data &&
      data.map(item => (
        <div className="admin-list__row" key={item.id}>
          {item.row.map(dataItem => {
            const nameOfClass = `admin-list__row__item-${dataItem.nameClass}`;
            return (
              <Fragment key={dataItem.name}>
                {Array.isArray(dataItem.name) ? (
                  <div className={`${nameOfClass} multi`}>
                    {dataItem.name.map(item => (
                      <p key={item.name}>
                        {'title' in item && (
                          <span>
                            {item.title} {item.name}
                          </span>
                        )}
                      </p>
                    ))}
                  </div>
                ) : (
                  <div className={nameOfClass} key={dataItem.name}>
                    {dataItem.name}
                  </div>
                )}
              </Fragment>
            );
          })}
          {actions && (
            <AdminListActions
              actions={actions}
              deleteListItem={deleteListItem}
              editListItem={editListItem}
              id={item.id}
            />
          )}
        </div>
      ))}
  </Fragment>
);

export default AdminListRow;
