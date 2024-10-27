const departments = [
  {
    name: "Engineering",
    employees: [
      { name: "Alice", age: 30, skills: ["JavaScript", "React", "Node.js"] },
      { name: "Bob", age: 40, skills: ["JavaScript", "Vue.js"] },
    ],
  },
  {
    name: "Marketing",
    employees: [
      { name: "Charlie", age: 35, skills: ["SEO", "Content Creation"] },
      { name: "David", age: 25, skills: ["JavaScript", "React"] },
    ],
  },
];
// -------------------------------------------------------//
function checkEvery(departments) {
  let selectedDep = departments.find((dep) => dep.name === "Engineering");
  return selectedDep.employees.every((ele) =>
    ele.skills.includes("JavaScript")
  );
}

// -------------------------------------------------------//
console.log(checkEvery(departments));

function checkSome(departments) {
  let selectedDep = departments.find((dep) => dep.name === "Marketing");
  return selectedDep.employees.some((ele) =>
    ele.skills.includes("JavaScript")
  );
}

console.log(checkSome(departments));
