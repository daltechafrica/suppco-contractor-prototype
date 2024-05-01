const buildersPlant = [
  {
    id: 1,
    title: "Cranes",
    manufacturer: "Caterpiller",
    model: "CR123",
    year: "2024",
    weight: "12T",
    liftingHeight: "15m",
    horsepower: "2000hp",
    leaseType: "wet",
    ratePerHour: "20000",
    supplier: {
      name: "Big Suppliers",
      username: "bigsuppliers",
      email: "bigsuppliers@me.com",
      phone: "+1 123 456 7890",
    },
    location: "Site A",
  },
  {
    id: 2,
    title: "Bulldozers",
    manufacturer: "Tata",
    model: "BT656",
    year: "2022",
    weight: null,
    liftingHeight: null,
    horsepower: "3456hp",
    leaseType: "dry",
    ratePerHour: "30000",
    supplier: {
      name: "Big Suppliers",
      username: "bigsuppliers",
      email: "bigsuppliers@me.com",
      phone: "+1 123 456 7890",
    },
    location: "Site D",
  },
  {
    id: 3,
    title: "Loaders",
    manufacturer: "Hyundai",
    model: "LD123",
    year: "2023",
    weight: "15T",
    liftingHeight: null,
    horsepower: "2000hp",
    leaseType: "wet",
    ratePerHour: "15000",
    supplier: {
      name: "Big Suppliers",
      username: "bigsuppliers",
      email: "bigsuppliers@me.com",
      phone: "+1 123 456 7890",
    },
    location: "Site C",
  },
  {
    id: 4,
    title: "Excavators",
    manufacturer: "Hyundai",
    model: "HYE234",
    year: "2021",
    weight: "36T",
    liftingHeight: "20m",
    horsepower: "2390hp",
    leaseType: "dry",
    ratePerHour: "23900",
    supplier: {
      name: "Big Suppliers",
      username: "bigsuppliers",
      email: "bigsuppliers@me.com",
      phone: "+1 123 456 7890",
    },
    location: "Site B",
  },
];

const placedOrder = {
  id: 3,
  status: "Pending",
  created: "2022-03-02 12:03:45",
  employee: "Employee 3",
  product: "Crane",
  productDetail: {
    inventory: "Builders Plant",
    category: null,
    subcategory: null,
    material: null,
    rental: true,
    lease: "wet",
  },
  paymentDetail: {
    price: 134000,
    plan: "Negotiable Plan",
    method: "Bank Transfer",
    quantity: null,
    hours: 36,
    get total() {
      return this.price * this.hours;
    },
    get vat() {
      return this.total * 0.16;
    },
    deposit: 20, // Percentage
    get depositAmount() {
      return this.total * (this.deposit / 100);
    },
    get breakdown() {
      let remainingAmount = this.total - this.depositAmount;
      const breakdowns = [
        {
          id: 1,
          name: "Deposit",
          amount: this.depositAmount,
          status: "Pending Payment",
          date: "2022-03-02 12:03:45",
        },
        {
          id: 2,
          name: "First Installment",
          amount: remainingAmount * 0.25,
          status: "Pending Payment",
          date: "2022-04-02 12:03:45",
        },
        {
          id: 3,
          name: "Second Installment",
          amount: remainingAmount * 0.25,
          status: "Pending Payment",
          date: "2022-05-02 12:03:45",
        },
        {
          id: 4,
          name: "Final Installment",
          amount: remainingAmount * 0.5,
          status: "Pending Payment",
          date: "2022-06-02 12:03:45",
        },
      ];
      return breakdowns;
    },
  },
  deliveryPlan: {
    option: "Supplier",
    destination: "Site C",
    siteInfo: {
      siteName: "Site C",
      siteAddress: "123 Main St, Anytown, USA",
      sitePhone: "1234567890",
      siteEmail: "3GqQe@example.com",
      siteAdmin: "Employee 1",
    },
    pricing: "Distance",
    cost: 1000,
    status: "Pending",
    timeline: "3 Days",
    employee: "Employee 3",
    deliveryInfo: {
      date: "2022-03-02 12:03:45",
      state: "Pending Initiation",
      startStatus: "No",
      carType: "Van",
      carNumber: "ABC123",
      driverName: "John Doe",
      driverPhone: "1234567890",
      driverLicense: "ABC123",
    },
  },
  supplierDetail: {
    name: "Supplier 1",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
  supplierCompany: {
    name: "Supplier Company 1",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  },
  get finalTotal() {
    return this.paymentDetail.total + this.deliveryPlan.cost;
  },
};

export { buildersPlant, placedOrder };
