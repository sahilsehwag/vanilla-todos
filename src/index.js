import "./styles.css";
import App from "./App";

export const render = () => {
	const root = document.getElementById("root");
	root.innerHTML = "";
	root.appendChild(App());
};

render();
