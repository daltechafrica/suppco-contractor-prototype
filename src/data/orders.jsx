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
      quantity: 2000,
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
      pricing: "Distance",
      cost: 1000,
      status: "Pending",
      timeline: "3 Days",
      employee: "Employee 1",
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
      pricing: null,
      cost: 0,
      status: "Pending",
      timeline: "1 Days",
      employee: "Employee 2",
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
      price: 1000,
      plan: "Negotiable Plan",
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
          },
          {
            id: 2,
            name: "First Installment",
            amount: remainingAmount * 0.25,
            status: "Pending Payment",
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
      destination: "Site E",
      pricing: "Distance",
      cost: 1000,
      status: "Pending",
      timeline: "3 Days",
      employee: "Employee 3",
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
      quantity: 200,
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
      pricing: "Distance",
      cost: 1000,
      status: "Active",
      timeline: "3 Days",
      employee: "Employee 1",
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
      pricing: null,
      cost: 0,
      status: "Active",
      timeline: "1 Days",
      employee: "Employee 2",
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
      price: 10000,
      plan: "Negotiable Plan",
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
      destination: "Site E",
      pricing: "Distance",
      cost: 1000,
      status: "Active",
      timeline: "3 Days",
      employee: "Employee 3",
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

  // Complete Orders
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
      quantity: 200,
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
      pricing: "Distance",
      cost: 1000,
      status: "Completed",
      timeline: "3 Days",
      employee: "Employee 1",
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
      pricing: null,
      cost: 0,
      status: "Completed",
      timeline: "1 Days",
      employee: "Employee 2",
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
      destination: "Site E",
      pricing: "Distance",
      cost: 1000,
      status: "Completed",
      timeline: "3 Days",
      employee: "Employee 3",
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
