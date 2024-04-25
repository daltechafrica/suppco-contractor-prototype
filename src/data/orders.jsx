const orders = [
  {
    id: 1,
    status: "Pending",
    created: "2022-03-02 12:03:45",
    employee: "Employee 1",
    product: "Product 1",
    productDetail: {
      category: "Shell Equipment",
      subcategory: "Roofing",
      material: "Sheets",
      rental: null,
    },
    paymentDetail: {
      price: 100,
      plan: "Fixed - 50/50",
      quantity: 200,
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
];

export { orders };
