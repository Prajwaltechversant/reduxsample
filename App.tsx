

import React from 'react';
import Main from './src/Main';
import ContextShare from './src/context/ContextShare';
import { Provider } from 'react-redux';
import store from './src/redux/store';



function App(): React.JSX.Element {



  return (
    <Provider store={store}>
      <ContextShare>
        <Main />
      </ContextShare>
    </Provider>

  );
}



export default App;
