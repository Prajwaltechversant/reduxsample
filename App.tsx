

import React from 'react';
import Main from './src/Main';
import ContextShare from './src/context/ContextShare';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import ScreenContextProvider from './src/context/ScreenContext.js/ScreenContextProvider';



function App(): React.JSX.Element {



  return (
    <Provider store={store}>
      < ScreenContextProvider>   
      <ContextShare>
          <Main />
        </ContextShare>
      </ScreenContextProvider>
    </Provider>

  );
}



export default App;
