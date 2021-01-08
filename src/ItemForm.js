import { addItem, updateItem } from "./state";

let itemText = "";
let editing = false;
let editingItem = null;

const submitForm = (e) => {
	if (itemText !== "") {
		if (editing) updateItem({ ...editingItem, text: itemText });
		else addItem(itemText);

		itemText = "";
		editing = false;
		editingItem = null;
	}
};

const submitOnEnter = (e) => (e.which === 13 ? submitForm(e) : null);

const Input = () => {
	const _ = document.createElement("input");
	_.className = "item-form__input";
	_.type = "text";
	_.placeholder = "Enter TODO Item...";

	_.onchange = (e) => (itemText = e.target.value);
	_.onkeypress = submitOnEnter;

	return _;
};

const Submit = () => {
	const _ = document.createElement("button");
	_.className = "item-form__submit";
	_.textContent = "Add";

	_.onclick = submitForm;

	return _;
};

const ItemForm = () => {
	const _ = document.createElement("div");
	_.className = "item-form";

	_.appendChild(Input());
	_.appendChild(Submit());

	return _;
};

export const editItem = (item) => {
	editing = true;
	editingItem = item;
	itemText = item.text;

	document.getElementsByClassName(
		"item-form__input"
	)[0].value = itemText;

	document.getElementsByClassName(
		"item-form__submit"
	)[0].textContent = "Update";
};

export default ItemForm;
