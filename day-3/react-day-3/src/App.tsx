function App() {
  const name = 'Syed Shadnan';
  const age = 20;
  return (
    <div className="profile">
      <h2>Hello, {name}</h2>
      <p>Age: {age}</p>
      <p>{age >= 18 ?  `Status: Adult` : `Status: Minor`}</p>
      </div>
  );
}

export default App;