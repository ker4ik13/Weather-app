import { func } from 'prop-types';
import React from 'react';
import * as ReactDomClient from 'react-dom/client';
import App from './App';

const root = ReactDomClient.createRoot(document.getElementById('container'));
root.render(<App/>);