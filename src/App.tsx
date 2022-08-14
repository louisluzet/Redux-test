import { createStore } from 'redux';
import './App.css';
import { Provider, useSelector, useDispatch } from 'react-redux';
const reducer = (currentState: any, action: any) => {
  if (currentState === undefined ) {
    return {
      number: 1,
    };
  }
  const newState ={...currentState};
  return newState
}
const store = createStore(reducer);

function App() {
  return (
    <div className="App">
      <Provider store={store}>

      </Provider>

    </div>
  );
}

export default App;
