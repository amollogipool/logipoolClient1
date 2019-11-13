let base_url = 'http://localhost:1337';

export const environment = {
  production: true,
  // login: base_url + '/inventory/login',
  addNewEmployee: base_url + '/employee/add',
  getAllEmployee: base_url + '/employee/read',
  getEmployeeById: base_url + '/employee/read',
  updateEmployeeById: base_url + '/employee/update',
  deleteEmployeeById: base_url + '/employee/delete',
};