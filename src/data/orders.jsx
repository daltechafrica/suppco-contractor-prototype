// Concerns: does the breakdown plans deduct from the total amount?

const orders = [
  {
    id: 1,
    status: "Pending",
    created: "2022-03-02 12:03:45",
    employee: "Employee 1",
    product: "Product 1",
    productDetail: {
      inventory: "Shell Equipment",
      category: "Roof",
      subcategory: "Roof Truss",
      material: "Sheets",
      rental: false,
      lease: null,
    },
    paymentDetail: {
      price: 100,
      plan: "Fixed - 50/50",
      method: "Bank Transfer",
      quantity: 2000,
      hours: null,
      get total() {
        return this.price * this.quantity;
      },
      get vat() {
        return this.total * 0.16;
      },
      deposit: 50, // Percentage
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
            name: "Final Payment",
            amount: remainingAmount,
            status: "Pending Payment",
            date: "2022-04-02 12:03:45",
          },
        ];
        return breakdowns;
      },
    },
    deliveryPlan: {
      option: "Supplier",
      destination: "Site A",
      siteInfo: {
        siteName: "Site A",
        siteAddress: "123 Main St, Anytown, USA",
        sitePhone: "1234567890",
        siteEmail: "3GqQe@example.com",
        siteAdmin: "Employee 1",
      },
      pricing: "Distance",
      cost: 1000,
      status: "Pending",
      timeline: "3 Days",
      employee: "Employee 1",
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
  },
  {
    id: 2,
    status: "Pending",
    created: "2022-03-02 12:03:45",
    employee: "Employee 2",
    product: "Steel Tape Measure",
    productDetail: {
      inventory: "Site Equipment",
      category: "Measuring Equipment",
      subcategory: "Distance Measuring",
      material: "Tape Measures",
      rental: false,
      lease: null,
    },
    paymentDetail: {
      price: 500,
      plan: "Fixed - upfront",
      method: "Bank Transfer",
      quantity: 5,
      hours: null,
      get total() {
        return this.price * this.quantity;
      },
      get vat() {
        return this.total * 0.16;
      },
      deposit: null,
      breakdown: null,
    },
    deliveryPlan: {
      option: "Self-Collect",
      destination: "Site B",
      siteInfo: {
        siteName: "Site B",
        siteAddress: "123 Main St, Anytown, USA",
        sitePhone: "1234567890",
        siteEmail: "3GqQe@example.com",
        siteAdmin: "Employee 1",
      },
      pricing: null,
      cost: 0,
      status: "Completed",
      timeline: "1 Days",
      employee: "Employee 2",
      deliveryInfo: {
        date: "2022-03-02 12:03:45",
        state: "Initiated",
        startStatus: "Yes",
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
  },
  {
    id: 3,
    status: "Pending",
    created: "2022-03-02 12:03:45",
    employee: "Employee 3",
    product: "Product 3",
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
  },

  // Active Orders
  {
    id: 4,
    status: "Active",
    created: "2022-03-02 12:03:45",
    employee: "Employee 34",
    product: "Product XYZ",
    productDetail: {
      inventory: "Shell Equipment",
      category: "Roof",
      subcategory: "Roof Truss",
      material: "Sheets",
      rental: false,
      lease: null,
    },
    paymentDetail: {
      price: 100,
      plan: "Fixed - 50/50",
      method: "Bank Transfer",
      quantity: 200,
      hours: null,
      get total() {
        return this.price * this.quantity;
      },
      get vat() {
        return this.total * 0.16;
      },
      deposit: 50, // Percentage
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
            status: "Paid",
            date: "2022-03-02 12:03:45",
          },
          {
            id: 2,
            name: "Final Payment",
            amount: remainingAmount,
            status: "Pending Payment",
            date: "2022-04-02 12:03:45",
          },
        ];
        return breakdowns;
      },
    },
    deliveryPlan: {
      option: "Supplier",
      destination: "Site A",
      siteInfo: {
        siteName: "Site A",
        siteAddress: "123 Main St, Anytown, USA",
        sitePhone: "1234567890",
        siteEmail: "3GqQe@example.com",
        siteAdmin: "Employee 1",
      },
      pricing: "Distance",
      cost: 1000,
      status: "Active",
      timeline: "3 Days",
      employee: "Employee 1",
      deliveryInfo: {
        date: "2022-03-02 12:03:45",
        state: "Initiated",
        startStatus: "Yes",
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
  },
  {
    id: 5,
    status: "Active",
    created: "2022-03-02 12:03:45",
    employee: "Employee 6",
    product: "Fibreglass Tape Measure",
    productDetail: {
      inventory: "Site Equipment",
      category: "Measuring Equipment",
      subcategory: "Distance Measuring",
      material: "Tape Measures",
      rental: false,
      lease: null,
    },
    paymentDetail: {
      price: 500,
      plan: "Fixed - upfront",
      method: "Bank Transfer",
      quantity: 10,
      hours: null,
      get total() {
        return this.price * this.quantity;
      },
      get vat() {
        return this.total * 0.16;
      },
      deposit: null,
      breakdown: null,
    },
    deliveryPlan: {
      option: "Self-Collect",
      destination: "Site B",
      siteInfo: {
        siteName: "Site B",
        siteAddress: "123 Main St, Anytown, USA",
        sitePhone: "1234567890",
        siteEmail: "3GqQe@example.com",
        siteAdmin: "Employee 1",
      },
      pricing: null,
      cost: 0,
      status: "Completed",
      timeline: "1 Days",
      employee: "Employee 2",
      deliveryInfo: {
        date: "2022-03-02 12:03:45",
        state: "Initiated",
        startStatus: "Yes",
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
  },
  {
    id: 6,
    status: "Active",
    created: "2022-03-02 12:03:45",
    employee: "Employee 3",
    product: "Product 345",
    productDetail: {
      inventory: "Builders Plant",
      category: null,
      subcategory: null,
      material: null,
      rental: true,
      lease: "wet",
    },
    paymentDetail: {
      price: 897000,
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
            status: "Paid",
          },
          {
            id: 2,
            name: "First Installment",
            amount: remainingAmount * 0.25,
            status: "Paid",
          },
          {
            id: 3,
            name: "Second Installment",
            amount: remainingAmount * 0.25,
            status: "Pending Payment",
          },
          {
            id: 4,
            name: "Final Installment",
            amount: remainingAmount * 0.5,
            status: "Pending Payment",
          },
        ];
        return breakdowns;
      },
    },
    deliveryPlan: {
      option: "Supplier",
      destination: "Site D",
      siteInfo: {
        siteName: "Site D",
        siteAddress: "123 Main St, Anytown, USA",
        sitePhone: "1234567890",
        siteEmail: "3GqQe@example.com",
        siteAdmin: "Employee 1",
      },
      pricing: "Distance",
      cost: 1000,
      status: "Active",
      timeline: "3 Days",
      employee: "Employee 3",
      deliveryInfo: {
        date: "2022-03-02 12:03:45",
        state: "Initiated",
        startStatus: "Yes",
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
  },

  // Completed Orders
  {
    id: 7,
    status: "Completed",
    created: "2022-03-02 12:03:45",
    employee: "Employee 1",
    product: "Product 1",
    productDetail: {
      inventory: "Shell Equipment",
      category: "Roof",
      subcategory: "Roof Truss",
      material: "Sheets",
      rental: false,
      lease: null,
    },
    paymentDetail: {
      price: 100,
      plan: "Fixed - 50/50",
      method: "Bank Transfer",
      quantity: 200,
      hours: null,
      get total() {
        return this.price * this.quantity;
      },
      get vat() {
        return this.total * 0.16;
      },
      deposit: 50, // Percentage
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
            status: "Paid",
            date: "2022-03-02 12:03:45",
          },
          {
            id: 2,
            name: "Final Payment",
            amount: remainingAmount,
            status: "Paid",
            date: "2022-04-02 12:03:45",
          },
        ];
        return breakdowns;
      },
    },
    deliveryPlan: {
      option: "Supplier",
      destination: "Site A",
      siteInfo: {
        siteName: "Site A",
        siteAddress: "123 Main St, Anytown, USA",
        sitePhone: "1234567890",
        siteEmail: "3GqQe@example.com",
        siteAdmin: "Employee 1",
      },
      pricing: "Distance",
      cost: 1000,
      status: "Completed",
      timeline: "3 Days",
      employee: "Employee 1",
      deliveryInfo: {
        date: "2022-03-02 12:03:45",
        state: "Initiated",
        startStatus: "Yes",
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
  },
  {
    id: 8,
    status: "Completed",
    created: "2022-03-02 12:03:45",
    employee: "Employee 2",
    product: "Steel Tape Measure",
    productDetail: {
      inventory: "Site Equipment",
      category: "Measuring Equipment",
      subcategory: "Distance Measuring",
      material: "Tape Measures",
      rental: false,
      lease: null,
    },
    paymentDetail: {
      price: 500,
      plan: "Fixed - upfront",
      method: "Bank Transfer",
      quantity: 5,
      hours: null,
      get total() {
        return this.price * this.quantity;
      },
      get vat() {
        return this.total * 0.16;
      },
      deposit: null,
      breakdown: null,
    },
    deliveryPlan: {
      option: "Self-Collect",
      destination: "Site B",
      siteInfo: {
        siteName: "Site B",
        siteAddress: "123 Main St, Anytown, USA",
        sitePhone: "1234567890",
        siteEmail: "3GqQe@example.com",
        siteAdmin: "Employee 1",
      },
      pricing: null,
      cost: 0,
      status: "Completed",
      timeline: "1 Days",
      employee: "Employee 2",
      deliveryInfo: {
        date: "2022-03-02 12:03:45",
        state: "Initiated",
        startStatus: "Yes",
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
  },
  {
    id: 9,
    status: "Completed",
    created: "2022-03-02 12:03:45",
    employee: "Employee 3",
    product: "Product 3",
    productDetail: {
      inventory: "Builders Plant",
      category: null,
      subcategory: null,
      material: null,
      rental: true,
      lease: "wet",
    },
    paymentDetail: {
      price: 1000,
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
            status: "Paid",
          },
          {
            id: 2,
            name: "First Installment",
            amount: remainingAmount * 0.25,
            status: "Paid",
          },
          {
            id: 3,
            name: "Second Installment",
            amount: remainingAmount * 0.25,
            status: "Paid",
          },
          {
            id: 4,
            name: "Final Installment",
            amount: remainingAmount * 0.5,
            status: "Paid",
          },
        ];
        return breakdowns;
      },
    },
    deliveryPlan: {
      option: "Supplier",
      destination: "Site B",
      siteInfo: {
        siteName: "Site B",
        siteAddress: "123 Main St, Anytown, USA",
        sitePhone: "1234567890",
        siteEmail: "3GqQe@example.com",
        siteAdmin: "Employee 1",
      },
      pricing: "Distance",
      cost: 1000,
      status: "Completed",
      timeline: "3 Days",
      employee: "Employee 3",
      deliveryInfo: {
        date: "2022-03-02 12:03:45",
        state: "Initiated",
        startStatus: "Yes",
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
  },
];

export { orders };
