const students = [
    { name: "Alice", age: 23, grade: "A" },
    { name: "Bob", age: 20, grade: "B" },
    { name: "Charlie", age: 22, grade: "C" }
  ];


  let globalfunction = function(student){
    let x1 = filterGrades(student)
    let x2 = sortAges(x1)
  return  arrayNames(x2)
  }
  console.log(globalfunction(students))  //[ 'Name: Charlie, Grade: C', 'Name: Bob, Grade: B' ]


  //     Filter 
 function filterGrades(student){
    
    return student.filter(element => {
        return  element.grade >= "B"
    })
  
  }

/*
// console.log(filterGrades(students))
[
  { name: 'Bob', age: 20, grade: 'B' },
  { name: 'Charlie', age: 22, grade: 'C' }
]
*/


//     sort 
function sortAges(student){

   return student.sort((a,b)=>b.age -a.age ) 
    
  }

  /*
  // console.log(sortAges(students))
  [
  { name: 'Alice', age: 23, grade: 'A' },
  { name: 'Charlie', age: 22, grade: 'C' },
  { name: 'Bob', age: 20, grade: 'B' }
]
*/


//  return names
function arrayNames (student){
    return student.map(st =>{
         return `Name: ${st.name}, Grade: ${st.grade}`
     })
 }
 
 /*
 // console.log(arrayNames(students)) 
 [
     'Name: Alice, Grade: A',
     'Name: Bob, Grade: B',
     'Name: Charlie, Grade: C'
 ]
 */
 