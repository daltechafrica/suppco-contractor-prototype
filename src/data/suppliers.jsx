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
  },
];

export { buildersSuppliers };
