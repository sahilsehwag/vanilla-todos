import { getItems, removeItem, setStatus } from "./state";
import { editItem } from "./ItemForm";

const ItemStatus = ({ item }) => {
	const _ = document.createElement("span");

	_.innerHTML = `<i class="${
		item.status
			? "item-list__status fas fa-check-square"
			: "item-list__status far fa-square"
	}"></i>
	`;

	_.onclick = () => setStatus(item.id, !item.status);
	return _;
};

const ItemText = ({ item }) => {
	const _ = document.createElement("span");
	_.className = "item-list__text " + (item.status ? "checked" : "");
	_.innerText = item.text;
	return _;
};

const ItemDelete = ({ item }) => {
	const _ = document.createElement("span");
	_.className = "-w-item-list__delete";
	_.innerHTML = `<i class="item-list__delete fas fa-trash"></i>`;
	_.onclick = () => removeItem(item.id);
	return _;
};

const ItemEdit = ({ item }) => {
	const _ = document.createElement("span");
	_.className = "-w-item-list__edit";
	_.innerHTML = `<i class="item-list__edit fas fa-pencil-alt"></i>`;
	_.onclick = () => editItem(item);
	return _;
};

const Item = ({ item }) => {
	const _ = document.createElement("div");
	_.className = "item-list__item";
	_.id = item.id;

	_.appendChild(ItemStatus({ item }));
	_.appendChild(ItemText({ item }));
	_.appendChild(ItemEdit({ item }));
	_.appendChild(ItemDelete({ item }));

	return _;
};

const ItemList = () => {
	const _ = document.createElement("div");
	_.className = "item-list";
	_.innerHTML = '<p class="no-items-text">No items...</p>';

	if (getItems().length > 0) {
		const fragment = document.createDocumentFragment();

		getItems()
			.map((item) => ({ item }))
			.map(Item)
			.forEach((_) => fragment.appendChild(_));

		_.innerHTML = "";
		_.appendChild(fragment);
	}

	return _;
};

export default ItemList;
