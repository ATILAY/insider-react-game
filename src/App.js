import React from 'react';


import TTContainer from "./components/TTContainer";
import  {Provider} from "react-redux";
import { store } from "./store/redux";

// HELLO GOKHAN, EXPLAINING IS WRITTEN WITH CAPITAL LATTERS
const App = () => {
  return(
    <Provider store = {store}>
    <div  className="App">
      <TTContainer/>
    </div>
    </Provider>
    
  );
}
export default App;
