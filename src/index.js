import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import DragdropUtility from "./DragdropUtility";


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="dragdropUtility" element={<DragdropUtility />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);