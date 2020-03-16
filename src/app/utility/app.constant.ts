export const MULTISELEC_TSETTING = {
  singleSelection: false,
  text: 'Select',
  selectAllText: 'Select All',
  unSelectAllText: 'UnSelect All',
  enableSearchFilter: true,
  classes: 'myclass custom-class'
};

export const INDUSTRY_LIST = [
  {id: 1, itemName: 'Sales'},
  {id: 2, itemName: 'Marketing'},
  {id: 3, itemName: 'Advertising'}
];

export const LOCATION_LIST = [
  {id: 1, itemName: 'India'},
  {id: 2, itemName: 'China'},
  {id: 3, itemName: 'Singapore'}
];

export const DEPARTMENT_LIST = [
  {id: 1, itemName: 'Sales'},
  {id: 2, itemName: 'Marketing'},
  {id: 3, itemName: 'Advertising'}
];


export const IS_CONTROL_SELECTED = {
  industry: false,
  location: false,
  department: false,
  revenue: false,
  employeeSize: false
}

export const DASHBOARD_CONSTANT = {
  controlList: [{
    displayName: 'Revenue',
    isSelected: false,
    controlName: 'revenue'
  },
    {
      displayName: 'Employee Size',
      isSelected: false,
      controlName: 'employeeSize'
    },
    {
      displayName: 'Industry',
      isSelected: false,
      controlName: 'industry'
    },
    {
      displayName: 'Location',
      isSelected: false,
      controlName: 'location'
    },
    {
      displayName: 'Department',
      isSelected: false,
      controlName: 'department'
    }
  ]
};
export const SESSION_STORAGE_Keys = {
  controlSelected: 'controlSelected'
}
