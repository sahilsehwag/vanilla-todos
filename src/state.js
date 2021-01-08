import { v4 as getUId } from "uuid";
import { render } from "./index";

let items = [];

const _addItem = (itemText) =>
	items.push({
		id: getUId(),
		text: itemText,
		status: false
	});

const _removeItem = (itemId) =>
	(items = items.filter((_) => _.id !== itemId));

const _updateItem = (updatedItem) =>
	(items = items.map((_) =>
		_.id === updatedItem.id ? updatedItem : _
	));

const _setStatus = (itemId, status) =>
	(items = items.map((_) =>
		_.id === itemId ? { ..._, status } : _
	));

const updateItems = (fn) => (...args) => fn(...args) && render();

export const getItems = () => [...items];
export const addItem = updateItems(_addItem);
export const removeItem = updateItems(_removeItem);
export const updateItem = updateItems(_updateItem);
export const setStatus = updateItems(_setStatus);
