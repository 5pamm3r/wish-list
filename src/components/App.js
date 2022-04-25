import React from 'react';
import { AppUI } from './AppUI';
import { Provider } from './Context/index'




function App() {
   return (
     <Provider>
       <AppUI />

     </Provider>
  );
}

export default App;
