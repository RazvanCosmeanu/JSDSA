/*
A list is an ordered sequence of data. Each data item stored in a list is called an element. In JavaScript, the elements of a list can be of any data type. There is no predetermined number of elements that can be stored in a list, though the practical limit will be the amount of memory available to the program using the list.
A list with no elements is an empty list. The number of elements stored in a list is called the length of the list. Internally, the number of elements in a list is kept in a listSize variable. You can append an element to the end of a list, or you can insert an element into a list after an existing element or at the beginning of a list. Elements are deleted from a list using a remove operation. You can also clear a list so that all of its current elements are removed.
The elements of a list are displayed using either a toString() operation, which displays all the elements, or with a getElement() operation, which displays the value of the current element.
Lists have properties to describe location. There is the front of a list and the end of a list. You can move from one element of a list to the next element using the next() operation, and you can move backward through a list using the prev() operation. You can also move to a numbered position in a list using the moveTo(n) operation, where n specifies the position to move to. The currPos property indicates the current position in a list.
The List ADT does not specify a storage function for a list, but for our implementation will use an array named dataStore.
*/
class List {
  constructor() {
    this._listSize = 0;
    this._pos = 0;
    this._dataStore = [];
  }

  length() {
    return this._listSize;
  }

  append(element) {
    this._dataStore[this._listSize++] = element;
  }

  remove(element) {
    const foundAt = this.find(element);

    if (foundAt > -1) {
      this._dataStore.splice(foundAt, 1);
      --this._listSize;
      return true;
    }
    return false;
  }

  insert(element, after) {
    const insertPos = this.find(after);

    if (insertPos > -1) {
      this._dataStore.splice(insertPos + 1, 0, element);
      ++this._listSize;
      return true;
    }
    return false;
  }

  clear() {
    delete this._dataStore;
    this._dataStore = 0;
    this._listSize = this.pos = 0;
  }

  contains(element) {
    for (let i = 0; i < this._dataStore.length; ++i) {
      if (this._dataStore[i] == element) {
        return true;
      }
    }
    return false;
  }

  find(element) {
    for (let i = 0; i < this._dataStore.length; ++i) {
      if (this._dataStore[i] == element) {
        return i;
      }
    }
    return -1;
  }

  front() {
    this._pos = 0;
  }

  end() {
    this._pos = this._listSize - 1;
  }

  currPos() {
    return this._pos;
  }

  toString() {
    return this._dataStore;
  }

  prev() {
    if (this._pos > 0) {
      --this._pos;
    }
  }

  next() {
    if (this._pos < this._listSize - 1) {
      ++this._pos;
    }
  }

  moveTo(position) {
    this._pos = position;
  }

  getElement() {
    return this._dataStore[this._pos];
  }
}

module.exports = {
  List
};
