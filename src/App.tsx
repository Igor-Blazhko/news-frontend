import { FC } from 'react';
import { BrowserRouter  } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store/mainStore';
import Routers from './components/shared/routerPage/Router';

const App: FC<{}> = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routers/>
      </BrowserRouter>
    </Provider>
  )
}

export default App
