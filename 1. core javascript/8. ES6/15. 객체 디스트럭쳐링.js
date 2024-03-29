
const employee = {
  empName: '뽀로로',
  age: 10,
  hireDate: '2020-01-30',
  birthDate: '2015-12-31'
};

const {  empName, hireDate, } = employee;
console.log(`name: ${empName}, hire: ${hireDate}`);


function foo(employee, age) {
  // const { empName, age } = employee;
  console.log(`내 이름은 ${employee.empName}입니다.`);
  console.log(`나이는 ${employee.age}입니다.`);

}