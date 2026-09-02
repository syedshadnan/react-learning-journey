// function Profile(Props: {name:string; role:string}) {
//   return (
//   <>
//   <h1>{Props.name}</h1>
//   <h2>{Props.role}</h2>
//   </>
// )
// }



// function App() {
//   return (
//     <>
//     <Profile name="Ifty" role="React Learner" />
//     <Profile name="Shadnan" role="Instructor" />
//     <Profile name="Mozammel" role="CEO" />
//     </>
//   )
// }


// task
// function Student(props: {name:string; department:string}) {
//   return (
//     <>
//     <h1>{props.name}</h1>
//     <h2>{props.department}</h2>
//     </>
//   )
// }

// function App() {
//   return (
//     <>
//     <Student name="Ifty" department="Political Science" />
//     <Student name="Rahim" department="CSC" />
//     </>
//   )
// }

// self task: destructuring
// function Profile({name, department}: {name:string; department:string;}) {
//   return (
//     <>
//     <h1>{name} </h1>
//     <h1>{department}</h1>
//     </>
//   )
// }


// function App() {
//   return(
//     <>
//     <Profile name="Ifty" department="development" />
//     <Profile name="Rahim" department="Testing" />
//     </>
//   )
// }


// Practice Challenge — User Profile Card

function ProfileCard({name, age, role = 'student', children}:{name:string; age:number; role?:string; children:React.ReactNode}) {
  return (
    <>
    <p>Name: {name}</p>
    <p>Age: {age}</p>
    <p>Role: {role}</p>
    {children}
    </>
  )
}

function App() {
  return (
    <>
    <ProfileCard name="Ifty" age={22}><p>I am learning React.</p>
    </ProfileCard>

    <ProfileCard name="Rahim" 
    age={25} role="Developer">
  <button>View Profile</button>
</ProfileCard>
    </>
  )
}

export default App
