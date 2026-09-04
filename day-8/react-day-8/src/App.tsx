// task
// const products = ["Laptop", "Phone", "Keyboard"];

// function App() {
//   return (
//     <>
//     {products.map((product) => (
//       <p>{product}</p>
//     ))}
//     </>
//   )
// }

// --------------------------------

// task
// const fruits = ["Apple", "Banana", "Mango", "Orange"];

// function App() {
//   return (
//     <>
//     <ul>
//       {fruits.map((fruit) => (
//         <li>{fruit}</li>

//     ))}
//     </ul>
//     </>
//   )
// }
// -------------------------

// // task
// const students = [
//   { id: 1, name: "Ifty", department: "CSE" },
//   { id: 2, name: "Rahim", department: "EEE" },
//   { id: 3, name: "Karim", department: "BBA" },
// ];

// function Student({name, department}:{name:string; department:string}){
//   return (
//     <>
//     <p>{name}</p>
//     <p>{department}</p>
//     </>
//   )
// }

// function App() {
//   return (
//     <>
//       {students.map((student) => (
//         <Student
//           key={student.id}
//           name={student.name}
//           department={student.department}
//         />
//       ))}
//     </>
//   )
// }
// ------------------------------

// // task 3
// const students = [
//   { id: 1, name: "Ifty", department: "CSE", isActive: true},
//   { id: 2, name: "Rahim", department: "EEE", isActive: false},
//   { id: 3, name: "Karim", department: "BBA", isActive: true},
// ];

// type StudentType = {
//   name: string;
//   department: string;
//   isActive: boolean; 
// }

// function Student({name,department,isActive}:StudentType){
//   return (
//     <div>
//       <p>{name}</p>
//       <p>{department}</p>
//       {isActive ? 'Active': 'Inactive'}
//     </div>
//   )
// }

// function App() {
//   return (
//     <>
//     {students.map((student => (
//       <Student 
//       key={student.id}
//       name={student.name}
//       department={student.department}
//       isActive={student.isActive}
//        />
//     )))}
//     </>
//   )
// }
// -----------------------------

// task
const products = [
  { id: 1, name: "Laptop", price: 80000, inStock: true },
  { id: 2, name: "Phone", price: 50000, inStock: false },
  { id: 3, name: "Keyboard", price: 3000, inStock: true },
];

type ProductProps = {
  name: string;
  price: number;
  inStock: boolean;
}

function Product({name, price, inStock}:ProductProps){
  return (
    <>
    <h1>{name}</h1>
    <h2>{price}</h2>
    <h3>{inStock ? 'In Stock': 'Out of Stock'}</h3>
    </>
  )
}

function App(){
  return (
    <>
    {products.map((product) => (
      <Product
      key={product.id}
      name={product.name}
      price={product.price}
      inStock={product.inStock}
      />
    ))}
    </>
  )
}

export default App;
