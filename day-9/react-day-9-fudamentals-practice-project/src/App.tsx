const students = [
  {
    id: 1,
    name: "Ifty",
    department: "CSE",
    isActive: true,
  },
  {
    id: 2,
    name: "Rahim",
    department: "EEE",
    isActive: false,
  },
  {
    id: 3,
    name: "Jakir",
    department: "BBA",
    isActive: true,
  },
  {
    id: 4,
    name: "Fakir",
    department: "BBA",
    isActive: true,
  },
  {
    id: 5,
    name: "Makir",
    department: "BBA",
    isActive: true,
  },
];

function Header() {
  return <h1>Student Dashboard</h1>
}

type SummaryProps = {
  totalStudent: number;
  activeStudent: number;
  inActiveStudent: number;
}
function DashboardSummary({totalStudent, activeStudent, inActiveStudent}: SummaryProps) {
  return (
    <div> 
      <h2>Total Students: {totalStudent}</h2>
      <h2>Active Students: {activeStudent}</h2>
      <h2>Inactive Students: {inActiveStudent}</h2>
    </div>
  )
}

type StudentCardProps = {
  name: string;
  department: string;
  isActive: boolean;
  label: string;
  onView: (name: string, isActive: boolean) => void; 
}

function Student({name, department, isActive, label, onView}:StudentCardProps){
  
  return (
    <>
    <h1>{name}</h1>
    <h2>{department}</h2>
    <h2>{isActive ? 'Active' : 'InActive'}</h2>
    <button onClick={() => onView(name, isActive)}>{label}</button>
    </>
  )
}

function Footer() {
  return (
    <footer>
      <p>Total Students: {students.length}</p>
    </footer>
  )
}


function App() {
  function handleButton(name: string, isActive: boolean) {
  alert(
    isActive
      ? `Hello, ${name}. Welcome to your portal!`
      : `Hello, ${name}. Your account is currently inactive.`
  );
}
  
  return (
    <div>
      <Header />
      <DashboardSummary 
      totalStudent={students.length}
      activeStudent={students.filter(student=> student.isActive).length}
      inActiveStudent={students.filter(student=> !student.isActive).length}
      />
      {students.map((student) => (
        <Student 
        key={student.id}
        name={student.name} 
        department={student.department}
        isActive={student.isActive}
        onView={handleButton}
        label={student.isActive ? "Enter Portal": 'View Details'}
        />
      ))}
      <Footer />
    </div>
  )
}

export default App
