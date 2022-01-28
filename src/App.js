import { useDispatch, useSelector } from 'react-redux';
import { actionCreator } from './state/index';

import './App.css';
import { bindActionCreators } from 'redux';

const App = () => {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreator,
    dispatch
  );

  console.log(account);

  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(1000)}>With Draw</button>
    </div>
  );
};

export default App;
