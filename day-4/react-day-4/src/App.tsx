// function Welcome() {
//   return <h1>Welcome to React!</h1>
// };

// function Test () {
//   return <h2>Hello World!</h2>
// };

// function ProductCard() {
//   return (
//     <div>
//       <h2>Product Name: <b>Graphics Card</b></h2>
//       <p>RTX-5080</p>
//     </div>
//   );
// }


// function App() {
//   return (
//     <div>
//       <Welcome />
//       <Test/>
//       <ProductCard/>
//       <ProductCard/>
//       <ProductCard />
      
//     </div>
//   );

// }

// export default App;


// Exercise 1 — Break a UI into components

// function Header() {
//     return <h1>My Portfolio</h1>
// }

// function Main() {
//     return (
//       <>
//       <h2>Hello, I'm Shadnan</h2>
//       <p> I am Learning React!</p>
//       </>
//     )
// }

// function Footer() {
//     return <footer>© 2026 Shadnan</footer>
// }

// function App() {
//     return (
//         <>
//         <Header/>
//         <Main/>
//         <Footer/>
//         </>
//     )
// }

// export default App

// Challenge 2 — Slightly harder 🧠

// function Navbar() {
//   return <h1>My Portfolio</h1>;
// }

// function Avatar() {
//   return <img src="https://via.placeholder.com/150" alt="Profile" />;
// }

// function UserInfo() {
//   return (
//     <>
//       <h2>Name: Shadnan</h2>
//       <p>Role: React Learner</p>
//     </>
//   );
// }

// function Profile() {
//   return (
//     <div>
//       <Avatar />
//       <UserInfo />
//     </div>
//   );
// }

// function Footer() {
//   return <footer>© 2026 Shadnan</footer>
// }


// function App() {
//   return (
//     <>
//       <Navbar />
//       <Profile />
//       <Footer />
//     </>
//   );
// }


// Final Mini Challenge — Code + Design

function WebsiteHeader() {
  return <h1>Welcome to My Website</h1>
}

function ProfileImage() {
  return <img src="https://via.placeholder.com/150" alt="Profile Image" />;
}

function ProfileDetails() {
  return (
    <>
    <h2>Syed Shadnan Mozammel</h2>
    <p>Student</p>
    <p>Learning React</p>
    </>
  )
}


function ProfileSection() {
  return (
    <>
    <ProfileImage />
    <ProfileDetails />
    </>
  )
}

  function WebsiteFooter() {
    return <footer>© 2026 Shadnan</footer>
  }


function App() {
  return(
    <>
    <WebsiteHeader />
    <ProfileSection />
    <WebsiteFooter />
    </>
  )
}


export default App;
