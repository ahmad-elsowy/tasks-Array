    const users = [
        { name: "Alice", transactions: [{ amount: 150 }, { amount: 250 }] },
        { name: "Bob", transactions: [{ amount: 500 }, { amount: 200 }] },
        { name: "Charlie", transactions: [{ amount: 50 }, { amount: 30 }] }
      ];
      
      function sortUsers(users){
      let sorted =   users.sort((b,a)=> a.transactions.reduce((acc,res)=>acc + res.amount,0) - b.transactions.reduce((acc,res)=>acc + res.amount,0))
    return  sorted.map(u=>{
        return {
            name : u.name,
            transactions : u.transactions.reduce((acc,res)=>acc + res.amount,0)
        }
      })
      }
      console.log(sortUsers(users))

    