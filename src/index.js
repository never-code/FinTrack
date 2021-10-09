import React from 'react';
import ReactDOM from 'react-dom';
import {SpeechProvider} from '@speechly/react-client';
import {Providers} from './context/context';
import App from './App';
import store from '././app/store';
import './index.css';
import { Provider } from 'react-redux';

ReactDOM.render(
    <SpeechProvider appId="d7c2d077-bef9-481f-81cc-d6a4f4cb32bc" language="en-US">
        <Providers>
         <Provider store={store}> 
        <App />
    </Provider>
    </Providers>
    </SpeechProvider>,
   
    document.getElementById('root')
);