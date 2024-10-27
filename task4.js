const products = [
    { name: "Laptop", price: 1200, category: "Electronics" },
    { name: "Mouse", price: 25, category: "Accessories" },
    { name: "Keyboard", price: 75, category: "Electronics" }
  ];



function productProcess(products){
   return  products.map((p)=>{
      if(p.category === 'Electronics'){
        return{
            ...p,
            price : p.price * 0.9,
            discountApplied: true
        }
    }else{
        return{
            ...p,
            discountApplied: false
        }
    }
    })
}
console.log(productProcess(products))