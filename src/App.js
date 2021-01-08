import ItemForm from "./ItemForm";
import ItemList from "./ItemList";

const Title = () => {
	const _ = document.createElement("h1");
	_.className = "title";
	_.innerHTML = "TODOing";
	return _;
};

export default () => {
	const _ = document.createElement("div");
	_.className = "app";

	_.appendChild(Title());
	_.appendChild(ItemForm());
	_.appendChild(ItemList());

	return _;
};
