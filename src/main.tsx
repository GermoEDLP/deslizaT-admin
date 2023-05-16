import ReactDOM from "react-dom/client";
import "./index.css";
import { store } from "./state/store";
import { App } from "./App";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
