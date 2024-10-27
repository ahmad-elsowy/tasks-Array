const employees = [
    { name: "Alice", salary: 50000, department: "Engineering" },
    { name: "Bob", salary: 70000, department: "Marketing" },
    { name: "Charlie", salary: 60000, department: "Engineering" }
  ];

  function empFunc(employees){
    return employees.map(emp =>{
        if(emp.department === 'Engineering'){
            return{
                ...emp,
                salary : emp.salary * 1.05
            }
        }
        return emp
    })
   .sort((a,b)=> b.salary - a.salary)
   .map(e=>{
    return`Name: ${e.name}, Department: ${e.department}, Salary: $${e.salary}`
   })
  }
  console.log(empFunc(employees))