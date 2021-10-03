import Info from './components/Info'

const App = () => {

  return (
    <div className="App">
      <h1>WHOIS API APP</h1>
      <span>Let's find out some information about specific domain or ip address</span>
      <div>
        <Info />
      </div>
      
    </div>
    
  );
}

export default App;
