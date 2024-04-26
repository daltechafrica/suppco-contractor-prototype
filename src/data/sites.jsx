const sites = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbnN0cnVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Site A",
    description: "Site Description",
    address: "Site Address",
    phone: "+254 712345678",
    employees: [
      {
        id: 1,
        name: "Employee 1",
        username: "employee1",
        email: "employee1@mail",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA",
        role: "Foreman",
        site: "Site A",
        driverDetail: {
          license: null,
          licenseExpiry: null,
          plateReg: null,
        },
      },
      {
        id: 7,
        name: "Employee 7",
        username: "employee7",
        email: "employee7@mail",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA",
        role: "Secretary",
        site: "Site A",
        driverDetail: {
          license: null,
          licenseExpiry: null,
          plateReg: null,
        },
      },
      {
        id: 8,
        name: "Employee 8",
        username: "employee8",
        email: "employee8@mail",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA",
        role: "Accountant",
        site: "Site A",
        driverDetail: {
          license: null,
          licenseExpiry: null,
          plateReg: null,
        },
      },
    ],
    orders: [
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
    ],
  },

  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1567954970774-58d6aa6c50dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29uc3RydWN0aW9uJTIwc2l0ZXxlbnwwfHwwfHx8MA%3D%3D",
    name: "Site B",
    description: "Site Description",
    address: "Site Address",
    phone: "+254 712345678",
    employees: [
      {
        id: 2,
        name: "Employee 2",
        username: "employee2",
        email: "employee2@mail",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA",
        role: "Driver",
        site: "Site B",
        driverDetail: {
          license: "ABC123",
          licenseExpiry: "01/01/2022",
          plateReg: "DEF456",
        },
      },
      {
        id: 10,
        name: "Employee 10",
        username: "employee10",
        email: "employee10@mail",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA",
        role: "Driver",
        site: "Site B",
        driverDetail: {
          license: "MNO345",
          licenseExpiry: "01/01/2024",
          plateReg: "PQR678",
        },
      },
    ],
    orders: [
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
    ],
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1610459716431-e07abcf74230?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MHx8MHx8fDA%3D",
    name: "Site C",
    description: "Site Description",
    address: "Site Address",
    phone: "+254 712345678",
    employees: [
      {
        id: 3,
        name: "Employee 3",
        username: "employee3",
        email: "employee3@mail",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA",
        role: "Secretary",
        site: "Site C",
        driverDetail: {
          license: null,
          licenseExpiry: null,
          plateReg: null,
        },
      },
      {
        id: 5,
        name: "Employee 5",
        username: "employee5",
        email: "employee5@mail",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA",
        role: "Foreman",
        site: "Site C",
        driverDetail: {
          license: null,
          licenseExpiry: null,
          plateReg: null,
        },
      },
      {
        id: 6,
        name: "Employee 6",
        username: "employee6",
        email: "employee6@mail",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA",
        role: "Driver",
        site: "Site C",
        driverDetail: {
          license: "GHI789",
          licenseExpiry: "01/01/2023",
          plateReg: "JKL012",
        },
      },
    ],
    orders: [
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
          destination: "Site C",
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
    ],
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1591955506264-3f5a6834570a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29uc3RydWN0aW9uJTIwc2l0ZXxlbnwwfHwwfHx8MA%3D%3D",
    name: "Site D",
    description: "Site Description",
    address: "Site Address",
    phone: "+254 712345678",
    employees: [
      {
        id: 4,
        name: "Employee 4",
        username: "employee4",
        email: "employee4@mail",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA",
        role: "Accountant",
        site: "Site D",
        driverDetail: {
          license: null,
          licenseExpiry: null,
          plateReg: null,
        },
      },
      {
        id: 9,
        name: "Employee 9",
        username: "employee9",
        email: "employee9@mail",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA",
        role: "Foreman",
        site: "Site D",
        driverDetail: {
          license: null,
          licenseExpiry: null,
          plateReg: null,
        },
      },
    ],
    orders: [
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
    ],
  },
];

export { sites };
