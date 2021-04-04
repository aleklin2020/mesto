export default class Section {
	constructor ({items, renderer}, template) {
    this._items= items;
    this._renderer = renderer;
    this._container = document.querySelector(template);
	}
  render() {
    this._items.forEach(item => this._renderer(item))
  }
	addItem (element) {
		this._container.append(element);
	}
	 clear() {
    this._container.innerHTML = '';
  }
}




