import React from 'react';
import AdminLayout from './components/admin-layout/admin-layout';
import AdminAreas from './components/admin-areas/admin-areas';
import AdminNaciones from './components/admin-naciones/admin-naciones';
import AdminNacionesList from './components/admin-naciones/admin-naciones-list/admin-naciones-list';
import AdminEditarNacion from './components/admin-naciones/admin-editar-nacion/admin-editar-nacion';
import AdminNacionesControl from './components/admin-naciones/admin-naciones-control/admin-naciones-control';

const Admin = () => <AdminLayout />;
export const adminMainTabs = [
  {
    routeProps: {
      path: '/areas',
      component: AdminAreas,
    },
    name: 'Áreas',
  },
  {
    routeProps: {
      path: '/naciones',
      component: AdminNaciones,
    },
    name: 'Naciones',
  },
  {
    routeProps: {
      path: '/regiones',
      component: Admin,
    },
    name: 'Regiones',
  },
  {
    routeProps: {
      path: '/sectores',
      component: Admin,
    },
    name: 'Sectores',
  },
  {
    routeProps: {
      path: '/planetas',
      component: Admin,
    },
    name: 'Planetas',
  },
];

export const adminNationUrls = [
  {
    routeProps: {
      path: '/',
      component: AdminNacionesControl,
    },
    name: 'Áreas',
  },
  {
    routeProps: {
      path: '/listado-naciones',
      component: AdminNacionesList,
    },
    name: 'Listado de Naciones',
  },
  {
    routeProps: {
      path: '/editar-nacion/:id',
      component: AdminEditarNacion,
    },
    name: 'Naciones',
  },
  {
    routeProps: {
      path: '/eliminar-nacion/:id',
      component: AdminNacionesList,
    },
    name: 'Regiones',
  },
];

export const adminNacionesActions = [
  {
    name: 'Crear Nación',
    url: '/crear-nacion',
    url_name: 'Crear',
  },
  {
    name: 'Listar Naciones',
    url: '/listado-naciones',
    url_name: 'Listado',
  },
];

export default {
  routeProps: {
    path: '/admin',
    component: Admin,
  },
  name: 'Admin',
};

export const obtainFormDataConstructor = (entityConstructor: { [s: string]: any } | ArrayLike<any>, entity?: any) => {
  const entityParameters: any[] = Object.keys(entityConstructor);
  const entityValues: any[] = Object.values(entityConstructor);
  let entityModeller: any[] = [];

  entityParameters.forEach((key, index) => {
    if (!Array.isArray(entityValues[index])) {
      let entityModellerItem = {
        name: `${key.substr(0, 1).toUpperCase()}${key.substr(1, key.length)}`,
        parameterName: key,
        size: entityValues[index].size,
        type: entityValues[index].type,
        defaultValue: entityValues[index].type === 'text' || entityValues[index].type === 'textarea' ? '' : 0,
        ...(entityValues[index].type === 'select' && {
          options: entityValues[index].options,
        }),
      };

      entityModeller = [...entityModeller, entityModellerItem];
    } else {
      let composedValue: any[] = [];
      let item: any[] = Object.keys(entityValues[index][0]);
      let itemValues: any[] = Object.values(entityValues[index][0]);
      item.forEach((element, elementIndex) => {
        let subItem = {
          name: `${element.substr(0, 1).toUpperCase()}${element.substr(1, element.length)}`,
          parameterName: element,
          size: itemValues[elementIndex].size,
          type: itemValues[elementIndex].type,
          defaultValue:
            itemValues[elementIndex].type === 'text' || itemValues[elementIndex].type === 'textarea' ? '' : 0,
          ...(itemValues[elementIndex].type === 'select' && {
            options: itemValues[elementIndex].options,
          }),
        };
        composedValue = [...composedValue, subItem];
      });
      let entityModellerArrayItem = {
        arrayInputBuildData: composedValue,
        arrayInputName: `${key.substr(0, 1).toUpperCase()}${key.substr(1, key.length)}`,
        arrayInputParameterName: key,
        defaultValue: [],
      };
      entityModeller = [...entityModeller, entityModellerArrayItem];
    }
  });

  if (entity) {
    Object.values(entityModeller).forEach((element: any, index: number) => {
      const entityElement =
        Object.keys(entity).find(el => el === element.parameterName || el === element.arrayInputParameterName) || '';
      const entityElementDefaultValue: any = Object.values(entity)[Object.keys(entity).indexOf(entityElement)];
      if (entityElement !== '') {
        entityModeller[index] = {
          ...element,
          defaultValue: entityElementDefaultValue,
        };
      }
    });
    console.log('EYYY ', entityModeller);
  }

  return entityModeller;
};
