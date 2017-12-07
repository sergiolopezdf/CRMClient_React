import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import ReduxProvider from './components/ReduxProvider';

import App from './components/App';

/*const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(App);*/

const render = (Component) => {
    ReactDOM.render(
        <ReduxProvider/>,
        document.getElementById('root'),
    );
};

render(ReduxProvider);

if (module.hot) {
    module.hot.accept('./components/App', () => {
        const newApp = require('./components/App').default;
        render(newApp);
    });
}
