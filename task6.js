const products = [
    { name: "Shirt", price: 30, category: "Clothing", inStock: true },
    { name: "Laptop", price: 1500, category: "Electronics", inStock: true },
    { name: "Phone", price: 1100, category: "Electronics", inStock: true },
    { name: "Shoes", price: 70, category: "Footwear", inStock: true }
];

const calculateTotalDiscountAndPrice = (items) => {
    return items
        .filter(item => item.inStock && item.category === "Electronics") // Step 1: Filter items
        .map(item => {
            if (item.price > 1000) {              
                return {
                    ...item,
                    discountedPrice: item.price * 0.9// Calculate new price after discount
                };
            }
            return {
                item               
            };
        })
        .reduce((acc, item) => {
          return  acc += item.discountedPrice;                   
        }, 0 )/9; 
};

const result = calculateTotalDiscountAndPrice(products);
console.log("Total Discount:", result);

