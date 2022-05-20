import './App.css';
// import Dashboard from './pages/Dashboard'
// import Login from './pages/Login';
import Navbar from './components/menu/Navbar'
import Sidebar from './components/menu/Sidebar'


function App() {
  return (
    <>
      <Navbar />
        <div className="container">
          <Sidebar />
        </div>
    
    </>
  );
}

export default App;
