export default class ToDoItem {
    constructor() {
        this._id = null;
        this._item = null;
        this._itemDate = null;
    }

    getId() {
        return this._id;
    }

    setId(id) {
        this._id = id;
    }

    getItem() {
        return this._item;
    }

    setItem(item) {
        this._item = item;
    }

    getItemDate() {
        return this._itemDate;
    }

    setItemDate(itemDate) {
        this._itemDate = itemDate;
    }
}