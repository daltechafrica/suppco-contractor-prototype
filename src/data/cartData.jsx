const lumberTruss = [
  {
    id: 1,
    site: "Site D",
    size: "12344",
    shape: "12344",
    variation: "1234",
    woodSpecies: "Mahogany",
    grade: "A",
    treatment: "1234",
    surfaceFinish: "smooth",
    other: "12344",
    quantity: 50,
    rate: 2000,
  },
  {
    id: 2,
    site: "Site B",
    size: "12344",
    shape: "12344",
    variation: "1234",
    woodSpecies: "Timber",
    grade: "A",
    treatment: "1234",
    surfaceFinish: "coarse",
    other: "12344",
    quantity: 80,
    rate: 3000,
  },
  {
    id: 3,
    site: "Site D",
    size: "12344",
    shape: "12344",
    variation: "1234",
    woodSpecies: "Palm",
    grade: "A",
    treatment: "1234",
    surfaceFinish: "smooth",
    other: "12344",
    quantity: 50,
    rate: 2000,
  },
  {
    id: 4,
    site: "Site C",
    size: "12344",
    shape: "12344",
    variation: "1234",
    woodSpecies: "Soft Wood",
    grade: "A",
    treatment: "1234",
    surfaceFinish: "coarse",
    other: "12344",
    quantity: 80,
    rate: 2000,
  },
  {
    id: 5,
    site: "Site A",
    size: "12344",
    shape: "12344",
    variation: "1234",
    woodSpecies: "Mahogany",
    grade: "A",
    treatment: "1234",
    surfaceFinish: "smooth",
    other: "12344",
    quantity: 50,
    rate: 1000,
  },
  {
    id: 6,
    site: "Site B",
    size: "12344",
    shape: "12344",
    variation: "1234",
    woodSpecies: "Mahogany",
    grade: "A",
    treatment: "1234",
    surfaceFinish: "coarse",
    other: "12344",
    quantity: 80,
    rate: 3000,
  },
];

const lumberTrussSuppliers = [
  {
    id: 1,
    name: "Big Suppliers",
    username: "bigsuppliers",
    email: "bigsuppliers@me.com",
    phone: "+1 123 456 7890",
    address: "123 Main Street",
    products: [
      {
        id: 1,
        size: "12344",
        shape: "12344",
        variation: "1234",
        woodSpecies: "Mahogany",
        grade: "A",
        treatment: "1234",
        surfaceFinish: "coarse",
        other: "12344",
        quantity: 40,
        rate: 1000,
      },
      {
        id: 2,
        size: "12344",
        shape: "12344",
        variation: "1234",
        woodSpecies: "Soft Wood",
        grade: "A",
        treatment: "1234",
        surfaceFinish: "coarse",
        other: "12344",
        quantity: 80,
        rate: 2000,
      },
    ],
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
    deliveryCondition: {
      status: "Available",
      pricingMethod: "Distance",
      rate: 1000,
    },
    paymentConditions: {
      rate: 20000,
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
    get finalTotal() {
      return this.paymentDetail.total + this.deliveryPlan.cost;
    },
  },
  {
    id: 2,
    name: "Small Suppliers",
    username: "smallsuppliers",
    email: "smallsuppliers@me.com",
    phone: "+1 123 456 7890",
    address: "123 Main Street",
    products: [
      {
        id: 1,
        size: "12344",
        shape: "12344",
        variation: "1234",
        woodSpecies: "Mahogany",
        grade: "A",
        treatment: "1234",
        surfaceFinish: "smooth",
        other: "12344",
        quantity: 40,
        rate: 2000,
      },
      {
        id: 2,
        size: "12344",
        shape: "12344",
        variation: "1234",
        woodSpecies: "Soft Wood",
        grade: "A",
        treatment: "1234",
        surfaceFinish: "coarse",
        other: "12344",
        quantity: 80,
        rate: 3000,
      },
      {
        id: 3,
        size: "12344",
        shape: "12344",
        variation: "1234",
        woodSpecies: "Palm",
        grade: "A",
        treatment: "1234",
        surfaceFinish: "coarse",
        other: "12344",
        quantity: 45,
        rate: 4000,
      },
    ],
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
    deliveryCondition: {
      status: "Available",
      pricingMethod: "Distance",
      rate: 1000,
    },
    paymentConditions: {
      rate: 10000,
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
    get finalTotal() {
      return this.paymentDetail.total + this.deliveryPlan.cost;
    },
  },
];

export { lumberTruss, lumberTrussSuppliers };
