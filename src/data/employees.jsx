const employees = [
  {
    id: 1,
    name: "Employee 1",
    username: "employee1",
    email: "employee1@mail",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
    role: "Foreman",
    driverDetail: {
      license: null,
      licenseExpiry: null,
      plateReg: null,
    },
  },
  {
    id: 2,
    name: "Employee 2",
    username: "employee2",
    email: "employee2@mail",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
    role: "Driver",
    driverDetail: {
      license: "ABC123",
      licenseExpiry: "01/01/2022",
      plateReg: "DEF456",
    },
  },
];

export { employees };
