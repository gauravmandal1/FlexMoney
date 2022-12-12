import './App.css';
import Form from './Components/Form'
import Payment from './Components/Payment';
import Header from './Components/Header';
import Completion from './Components/Completion'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Form></Form>
      <Payment></Payment>
      <Completion></Completion>
    </div>
  );
}

export default App;
