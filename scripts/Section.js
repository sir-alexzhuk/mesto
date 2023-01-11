export default class Section {
	constructor({ items, renderer }, selector) {
		this._selector = selector;
		this._items = items;
		this._renderer = renderer;
		const containerNode = document.querySelector(selector);
		if (containerNode === null) {
			throw new Error(`Section узла с селектором ${selector} не существует`);
		}
		this._containerNode = containerNode;
	}

	addItem(node) {
		this._containerNode.prepend(node);
	}

	render() {
		for (const item of this._items) {
			const node = this._renderer(item);
			this.addItem(node);
		}
	}


}