// function App() {
//   function handleClick() {
//     alert('hello');
//     console.log('Yesss. I figure out this')
//   }

//   return <button onClick={handleClick}>Click Me</button>
// }
// export default App

// ==========================
// // My First Small Practice
// function ActionButtons() {

//   function handleLike() {
//     console.log('Liked')
//   }

//   function handleShared() {
//     console.log('Shared!')
//   }

//   function handleSubscription() {
//     console.log('Subscribed!')
//   }

//   return (
//     <>
//     <button onClick={handleLike}>Like</button>
//     <button onClick={handleShared}>Share</button>
//     <button onClick={handleSubscription}>Subscribe</button>
//     </>
//   )
// }
// export default ActionButtons;
// ======================

// self task
// function App() {
//   function handleClick(name:string) {
//     alert(`Hello, ${name}`);
//   }

//   return <button onClick={() => handleClick('Syed Shadnan Mozammel!')}>Click</button>
// }
// ======================

// task
// function App() {
//    function handleGreeting(name:string) {
//     alert(`Hello, ${name}`)
//   }

//   return (
//     <>
//     <button onClick={() => handleGreeting('Ifty!')}>Ifty</button>
//     <button onClick={() => handleGreeting('Rahim!')}>Rahim</button>
//     <button onClick={() => handleGreeting('Karim!')}>Karim</button>
//     </>
//   )

// }
// ======================

// task
// type UserButtonProps = {
//   name: string;
// };

// function UserButton({name}: UserButtonProps) {

//   return <button onClick={() => alert(`Hello, ${name}`)}>{name}</button>;
// }

// function App() {
//   return (
//     <>
//       <UserButton name="Ifty" />
//       <UserButton name="Rahim" />
//       <UserButton name="Karim" />
//     </>
//   );
// }
// ======================

// task
// type DeleteButtonProps = {
//   onDelete: () => void;
// }

// function DeleteButton({onDelete}: DeleteButtonProps) {
//   return <button onClick={onDelete}>Delete</button>
// }

// function App() {
//   function handleDelete() {
//     alert('Deleted!')
//   }
//   return <DeleteButton onDelete={handleDelete} />
// }
// ======================

// // task
// type ActionButtonProps = {
//   label: string;
//   onAction: () => void;
// };

// function ActionButton({ label, onAction }: ActionButtonProps) {
//   return <button onClick={onAction}>{label}</button>;
// }

// function App() {
//   function handleLike() {
//     alert("Liked!");
//   }
//   function handleShare() {
//     alert("Shared!");
//   }
//   function handleSubscribe() {
//     alert("Subscribed!");
//   }

//   return (
//     <>
//       <ActionButton label="Like" onAction={handleLike} />
//       <ActionButton label="Share" onAction={handleShare} />
//       <ActionButton label="Subscribe" onAction={handleSubscribe} />
//     </>
//   );
// }
// ======================

// task
type productCardProps = {
  name: string;
  price: number;
  onBuy: (name: string) => void;
};

function ProductCard({ name, price, onBuy }: productCardProps) {
  function click(){
    onBuy(name)
  }
  return (
    <>
      <h1>Product Name: {name}</h1>
      <h2>Price: {price}</h2>
      <button onClick={click}>Bye</button>
    </>
  );
}

function App() {
  function handleBuy(name: string) {
    alert(`Buying ${name}`);
  }

  return (
    <>
      <ProductCard name="Laptop" price={1000} onBuy={handleBuy} />
      <ProductCard name="Mouse" price={50} onBuy={handleBuy} />
      <ProductCard name="Keyboard" price={80} onBuy={handleBuy} />
    </>
  );
}

export default App;
