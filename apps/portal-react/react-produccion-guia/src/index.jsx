import React from "react";
import {createRoot} from 'react-dom/client';
import App from './App';
import { inicializarMonitoreo } from "./monitoring/globalErrorHandler";

inicializarMonitoreo();

createRoot(document.getElementById('root')).render(<App/>);