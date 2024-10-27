const cart = [
  {
    name: "Laptop",
    price: 1000,
    discount: 10,
    type: "Electronics",
    brand: "BrandA",
  },
  { name: "Phone", price: 500, type: "Electronics", brand: "BrandB" },
  {
    name: "Shoes",
    price: 150,
    discount: 20,
    type: "Footwear",
    brand: "BrandA",
  },
  { name: "Hat", price: 50, type: "Accessories", brand: "BrandC" },
];

function cartCommerce(cart) {
  let cartAfterDiscount = cart.map((c) => {
    return {
      name: c.name,
      price: c.discount ? c.price * (1 - c.discount / 100) : c.price,
      type: c.type,
      brand: c.brand,
    };
  });
  /*
    [
      { name: 'Laptop', price: 900, type: 'Electronics', brand: 'BrandA' },
      { name: 'Phone', price: 500, type: 'Electronics', brand: 'BrandB' },
      { name: 'Shoes', price: 120, type: 'Footwear', brand: 'BrandA' },
      { name: 'Hat', price: 50, type: 'Accessories', brand: 'BrandC' }
    ]
  */

  let totalPriceAfterDiscount = cartAfterDiscount.reduce(
    (acc, res) => acc + res.price,
    0
  ); //1570

  let electronicsCart = cartAfterDiscount.filter(
    (c) => c.type === "Electronics"
  );
  /*
  [
    { name: 'Laptop', price: 900, type: 'Electronics', brand: 'BrandA' },
    { name: 'Phone', price: 500, type: 'Electronics', brand: 'BrandB' }
  ]
  */

  let calcPriceElectronics = electronicsCart.reduce(
    (acc, res) => acc + res.price,
    0
  ); //1400

  let cartWithElectronicsDiscount = cartAfterDiscount.map((e) => {
    if (calcPriceElectronics > 1000) {
      return {
        name: e.name,
        price: e.type === "Electronics" ? e.price * (1 - 5 / 100) : e.price,
        type: e.type,
        brand: e.brand,
      };
    }
  });
  /*
  [
  { name: 'Laptop', price: 855, type: 'Electronics', brand: 'BrandA' },
  { name: 'Phone', price: 475, type: 'Electronics', brand: 'BrandB' },
  { name: 'Shoes', price: 120, type: 'Footwear', brand: 'BrandA' },
  { name: 'Hat', price: 50, type: 'Accessories', brand: 'BrandC' }
]
  */

  let BrandAandFootwearDiscount = cartWithElectronicsDiscount.map((b) => {
    return {
      name: b.name,
      price:
        b.type === "Footwear" && b.brand === "BrandA"
          ? b.price * (1 - 10 / 100)
          : b.price,
      type: b.type,
      brand: b.brand,
    };
  });
  /*
[
  { name: 'Laptop', price: 855, type: 'Electronics', brand: 'BrandA' },
  { name: 'Phone', price: 475, type: 'Electronics', brand: 'BrandB' },
  { name: 'Shoes', price: 108, type: 'Footwear', brand: 'BrandA' },
  { name: 'Hat', price: 50, type: 'Accessories', brand: 'BrandC' }
]
*/
let finalTotalPrice = BrandAandFootwearDiscount.reduce(
  (acc, res) => acc + res.price,
  0
);
return finalTotalPrice
}
console.log(cartCommerce(cart)); //1488
