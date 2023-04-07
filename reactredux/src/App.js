import "./Components/Style.css"

import { Provider } from 'react-redux';
import {Store} from './Store/Store'
import { MainRouter } from './Router/MainRouter';
function App() {
  return (
    <div className="TodoContainer">
      <Provider store={Store}>
        <MainRouter />
      </Provider>
    </div>
  );
}

export default App;
