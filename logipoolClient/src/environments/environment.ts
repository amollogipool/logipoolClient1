
let base_url = 'http://localhost:1337';

export const environment = {
  production: false,
  // login: base_url + '/inventory/login',
  addNewEmployee: base_url + '/employee/add',
  getAllEmployee: base_url + '/employee/read',
  getEmployeeById: base_url + '/employee/read',
  updateEmployeeById: base_url + '/employee/update',
  deleteEmployeeById: base_url + '/employee/delete',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
