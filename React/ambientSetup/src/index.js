// npm init -y 
// npm i react react-dom
// npm i -D webpack webpack-cli webpack-dev-server
import { createRoot } from "react-dom/client";
import { App } from './App'
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
/* no package = 
"scripts": {
    "webpack": "webpack" 
  }
*/
// npm run webpack
//npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react babel-loader