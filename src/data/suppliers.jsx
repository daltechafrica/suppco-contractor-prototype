const buildersSuppliers = [
  {
    id: 1,
    name: "Big Suppliers",
    username: "bigsuppliers",
    email: "bigsuppliers@me.com",
    phone: "+1 123 456 7890",
    location: "Kigali",
    paymentConditions: {
      ratePerHour: 20000,
      leaseType: "wet",
      plans: [
        {
          id: 1,
          name: "Fixed | 50-50",
          deposit: 50,
          conditions: "Final payment upon delivery",
        },
        {
          id: 2,
          name: "Fixed | Upfront",
          deposit: null,
          conditions: "Full payment done upfront",
        },
        {
          id: 3,
          name: "Negotiable | Installment Plan",
          deposit: 20,
          conditions: "Stretch out payments as long as delivery is paid",
        },
      ],
    },
    deliveryCondition: {
      status: "Available",
      pricingMethod: "Distance",
      rate: 1000,
    },
    productSpecifications: [
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
      },
    ],
  },
  {
    id: 2,
    name: "Rock Suppliers",
    username: "bigsuppliers",
    email: "bigsuppliers@me.com",
    phone: "+1 123 456 7890",
    location: "Kigali",
    paymentConditions: {
      ratePerHour: 21000,
      leaseType: "dry",
      plans: [
        {
          id: 2,
          name: "Fixed | Upfront",
          deposit: null,
          conditions: "Full payment done upfront",
        },
        {
          id: 3,
          name: "Negotiable | Installment Plan",
          deposit: 20,
          conditions: "Stretch out payments as long as delivery is paid",
        },
      ],
    },
    deliveryCondition: {
      status: "Available",
      pricingMethod: "Distance",
      rate: 1000,
    },
    productSpecifications: [
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
      },
    ],
  },
  {
    id: 3,
    name: "Elevation Suppliers",
    username: "bigsuppliers",
    email: "bigsuppliers@me.com",
    phone: "+1 123 456 7890",
    location: "Kigali",
    paymentConditions: {
      ratePerHour: 10000,
      leaseType: "dry",
      plans: [
        {
          id: 1,
          name: "Fixed | 50-50",
          deposit: 50,
          conditions: "Final payment upon delivery",
        },
        {
          id: 2,
          name: "Fixed | Upfront",
          deposit: null,
          conditions: "Full payment done upfront",
        },
      ],
    },
    deliveryCondition: {
      status: "Not Available",
      pricingMethod: null,
      rate: 0,
    },
    productSpecifications: [
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
      },
    ],
  },
  {
    id: 4,
    name: "Africa Suppliers",
    username: "bigsuppliers",
    email: "bigsuppliers@me.com",
    phone: "+1 123 456 7890",
    location: "Kigali",
    paymentConditions: {
      ratePerHour: 20000,
      leaseType: "wet",
      plans: [
        {
          id: 1,
          name: "Fixed | 50-50",
          deposit: 50,
          conditions: "Final payment upon delivery",
        },
        {
          id: 2,
          name: "Fixed | Upfront",
          deposit: null,
          conditions: "Full payment done upfront",
        },
        {
          id: 3,
          name: "Negotiable | Installment Plan",
          deposit: 20,
          conditions: "Stretch out payments as long as delivery is paid",
        },
      ],
    },
    deliveryCondition: {
      status: "Available",
      pricingMethod: "Weight",
      rate: 2000,
    },
    productSpecifications: [
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
      },
    ],
  },
];

const shellSuppliers = [
  {
    id: 1,
    name: "Small Suppliers",
    username: "smallsuppliers",
    email: "smallsuppliers@me.com",
    phone: "+1 123 456 7890",
    location: "Kigali",
    paymentConditions: {
      priceMeasure: "Weight",
      pricePerKg: 100,
      plans: [
        {
          id: 1,
          name: "Fixed | 50-50",
          deposit: 50,
          conditions: "Final payment upon delivery",
        },
      ],
    },

    deliveryCondition: {
      status: "Available",
      pricingMethod: "Distance",
      rate: 1000,
    },
    productSpecifications: [
      {
        id: 1,
        title: "River Sand",
        density: "12344",
        moistureContent: "12344",
        gradiation: "12344",
        size: "12344",
        shape: "12344",
        image: "",
        variation: "",
        woodSpecies: "",
        grade: "",
        treatment: "",
        surfaceFinish: "",
        other: "12344",
        location: "Kigali",
      },
    ],
    order: {
      id: 1,
      status: "Pending",
      created: "2022-03-02 12:03:45",
      employee: "Employee 1",
      product: "River Sand",
      productDetail: {
        inventory: "Shell Equipment",
        category: "Sand",
        subcategory: "River Sand",
        material: "Sand",
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
  },

  {
    id: 2,
    name: "Big Suppliers",
    username: "bigsuppliers",
    email: "bigsuppliers@me.com",
    phone: "+1 123 456 7890",
    location: "Kigali",
    paymentConditions: {
      priceMeasure: "Weight",
      pricePerKg: 100,
      plans: [
        {
          id: 1,
          name: "Fixed | Upfront",
          deposit: null,
          conditions: "Full payment done upfront",
        },
      ],
    },

    deliveryCondition: {
      status: "Available",
      pricingMethod: "Distance",
      rate: 1000,
    },
    productSpecifications: [
      {
        id: 1,
        title: "River Sand",
        density: "12344",
        moistureContent: "12344",
        gradiation: "12344",
        size: "12344",
        shape: "12344",
        image: "",
        variation: "",
        woodSpecies: "",
        grade: "",
        treatment: "",
        surfaceFinish: "",
        other: "12344",
        location: "Kigali",
      },
    ],
    order: {
      id: 1,
      status: "Pending",
      created: "2022-03-02 12:03:45",
      employee: "Employee 1",
      product: "River Sand",
      productDetail: {
        inventory: "Shell Equipment",
        category: "Sand",
        subcategory: "River Sand",
        material: "Sand",
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
  },
];

const shellSuppliersUpfront = [
  {
    id: 1,
    name: "Big Suppliers",
    username: "bigsuppliers",
    email: "bigsuppliers@me.com",
    phone: "+1 123 456 7890",
    location: "Kigali",
    paymentConditions: {
      priceMeasure: "Weight",
      pricePerKg: 100,
      plans: [
        {
          id: 1,
          name: "Fixed | 50-50",
          deposit: 50,
          conditions: "Final payment upon delivery",
        },
      ],
    },

    deliveryCondition: {
      status: "Available",
      pricingMethod: "Distance",
      rate: 1000,
    },
    productSpecifications: [
      {
        id: 1,
        title: "River Sand",
        density: "12344",
        moistureContent: "12344",
        gradiation: "12344",
        size: "12344",
        shape: "12344",
        image: "",
        variation: "",
        woodSpecies: "",
        grade: "",
        treatment: "",
        surfaceFinish: "",
        other: "12344",
        location: "Kigali",
      },
    ],
  },
];

export { buildersSuppliers, shellSuppliers, shellSuppliersUpfront };
