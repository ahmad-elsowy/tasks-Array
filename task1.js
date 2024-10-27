const employee = {
      name : 'Alice',
      position : "Developer",
      getDetails(){
            return `${this.name} is a ${this.position}`
            
      }
}
const manager = {
      name: 'Bob',
      position: 'Manager',
      department: 'Engineering',
    };
    

const getManagerDetails = function() {
      return `${this.name} is a ${this.position} in the ${this.department} department.`;
};

console.log(employee.getDetails())  //Alice is a Developer
console.log(employee.getDetails.call(manager)) //Bob is a Manager

console.log(getManagerDetails.call(manager)) //Bob is a Manager in the Engineering department.
console.log(getManagerDetails.call(employee)) //Alice is a Developer in the undefined department.
