 const orders = [
      { id: 1, products: [{ name: "Phone", price: 500 }, { name: "Headphones", price: 50 }], customer: { name: "Alice", premium: true } },
      { id: 2, products: [{ name: "Laptop", price: 1500 }],                                  customer: { name: "Bob", premium: false } },
      { id: 3, products: [{ name: "Shoes", price: 100 }],                                    customer: { name: "Charlie", premium: true } }
    ];

function firstOrderPremiumAndIdNames(orders){
   let findOrder =  orders.find(order =>{

    return    order.customer.premium 
        && order.products.reduce((acc,curr)=>{
            return  acc += curr.price
            },0) > 100
      
    })
   
    return{
        ID : findOrder.id,
        names : findOrder.products.map(p=>p.name)
    }
}
console.log(firstOrderPremiumAndIdNames(orders))
// { ID: 1, names: [ 'Phone', 'Headphones' ] }