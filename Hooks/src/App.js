import UseRef from './components/day11/UseRef';
import UseReducer from './components/day11/UseReducer';
import UseMemo from './components/day11/UseMemo';
import { UseContext1, UseContext2 } from './components/day11/UseContext';

function App() {
  return (
    <>
      <UseRef></UseRef>
      <UseReducer></UseReducer>
      {/* <UseMemo></UseMemo> */}
      <UseContext1></UseContext1>
      <UseContext2></UseContext2>
    </>
  );
}

export default App;