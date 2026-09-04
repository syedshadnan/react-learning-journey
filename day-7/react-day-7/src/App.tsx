// // task
// function App() {
//   const hasNotification = true;

//   return (
//     <div>
//       {hasNotification ? (
//           <h1>You have new notifications</h1>
//         ): (
//           <h2>No new notifications</h2>
//         )}
//     </div>
//   )
// }
// task end
// ---------------------------

// task
// function PremiumDashboard() {
//   return <h1>You're using premium features</h1>
// }

// function FreeDashboard() {
//   return <h1>You're using free features</h1>
// }

// function App() {
//   const isPremium = false;

//   return isPremium ? <PremiumDashboard /> : <FreeDashboard />;
// }
//-------------------------------

// task
// const Profile = () => {
//   const isLoggedIn = false

//   if(!isLoggedIn){
//     return <h1>Please log in</h1>
//   }
//   return(
//     <div>
//   <h1>Welcome to your profile</h1>
//   <p>Here is your personal information.</p>
// </div>
//   )
// }
// export default Profile;
// ------------------------------

// const App = () => {
//   const isSaleActive = true;

//   return (
//     <>
//     <h1>Product Store</h1>
//     {isSaleActive && <h1>🔥 Sale is live!</h1>}
//     </>
//   )
// }
// ----------------------------------

// function App() {
//   const isLoading = false;
//   const isLoggedIn = true;

//   if (isLoading) {
//     return <h1>Loading...</h1>;
//   }

//   if (!isLoggedIn) {
//   return <h1>Please log in</h1>;
//   }

//   return (
//       <div>
//         <h1>Welcome back!</h1>
//         <p>You are successfully logged in.</p>
//       </div>
//   );
// }
// ------------------------------

// const App = () => {
//   const isLoading = false;
//   const hasError = false;
//   const isLoggedIn = true;

//   if (isLoading) {
//     return <h1>Loading...</h1>;
//   }

//   if (hasError) {
//     return <h1>Something is Wrong Here. Please Try Again!</h1>;
//   }

//   if (!isLoggedIn) {
//     return <h1>Please Login....</h1>;
//   }

//   return (
//     <div>
//       <h1>Welcome back!</h1>
//       <p>You are successfully logged in.</p>
//     </div>
//   );
// };
// --------------------------------

// Mini Challenge: User Account

// const App = () => {
//   const isLoading = false;
//   const hasError = false;
//   const isLoggedIn = true;
//   const hasNotifications = true;

//   if (isLoading){
//     return <h1>Loading account...</h1>
//   }

//   if (hasError){
//     return <h1>Failed to load account.</h1>
//   }

//   if (!isLoggedIn){
//     return <h1>Please log in to continue.</h1>
//   }

//   return (
//     <div>
//        <h1>Welcome to your account!</h1>

//     {hasNotifications && <p>You have new notifications.</p>}
//     </div>
//   )
// };
// ------------------------

// function Login() {
//   return <h1>Please Login</h1>
// }

// function UserDashboard() {
//   return <h1>You're Successfully Logged in as a <i>User</i></h1>
// }

// function AdminDashboard() {
//   return <h1>You're Successfully Logged in as <i>Admin</i></h1>
// }

// function App() {
//   const isLoggedIn = true;
// const isAdmin = true;

// if (!isLoggedIn){
//   return <Login />
// }

// if (!isAdmin){
//   return <UserDashboard />
// }
// return <AdminDashboard />
// }

/**
 * 1. There are 3 explicit UI states
 * 2. What Conditions Determine Them?The UI states are determined by evaluating the variables in a hierarchical order of dependency:State 1: <Login />Condition: !isLoggedInLogic: If this is true, the evaluation stops immediately. The user's admin status is irrelevant.State 2: <UserDashboard />Condition: isLoggedIn && !isAdminState 3: <AdminDashboard />Condition: isLoggedIn && isAdmin
 */

// 🔥 Day 7 Final Challenge — Smart Dashboard

const Admin = () => {
  return (
  <div>
    <h1>Welcome Admin!</h1>
    <p>This is your dashboard.</p>
  </div>
)
}

const User = () => {
  return (
  <div>
    <h1>Welcome User!</h1>
    <p>This is your dashboard.</p>
  </div>
)}

const App = () => {
  const isLoading = false;
  const hasError = false;
  const isLoggedIn = true;
  const isAdmin = false;
  const hasNotifications = true;

  if (isLoading) {
    return <h1>Loading dashboard...</h1>
  }

  if(hasError) {
    return <h1>Something went wrong!</h1>
  }

  if(!isLoggedIn) {
    return <h1>Please log in first.</h1>
  }
  
  return (
    <div>
      {isAdmin ? <Admin />: <User />}
      {hasNotifications && <p>You have new notifications!</p>}
    </div>
  )

};

export default App;


/**
 * 1. Here loading is the priority; if it is true then other functions won't be checked; if it is not loading we will check is there any error; if there's error then the functions instantly return error and ui will show it. if not error we will check is the user is loggedIn or not; in all this function we will use if and early return; if all 3 condition is satisfied; then we will check is the the user admin or normal user. in this case we will use ternary; we initially made two Admin and User Component; in the final return we can use them in the ternary operator; lastly in the final return block we use logical && to show if there's any message;
 * 
 * 2. With this current value UserDashboard will be opened;
 * 
 * 3. If is LoggedIn became false then the UI wil show "Please Login First.""
 */