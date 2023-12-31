/**
 * Entry point of application, where App is rendered within the div with the id of "app" 
 */

import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

 const root = createRoot(document.getElementById('app'));
 root.render(<App />);

