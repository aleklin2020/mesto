export default class Section {
	constructor ({renderer}, template) {
   // this._items= items;
    this._renderer = renderer;
    this._container = document.querySelector(template);
	}
  render(items) {
    items.forEach(item => this._renderer(item))
  }
	addItem (element) {
		this._container.append(element);
	}
	 clear() {
    this._container.innerHTML = '';
  }
}




