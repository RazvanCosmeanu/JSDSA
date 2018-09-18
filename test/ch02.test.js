const { expect } = require('chai');
const { List } = require('../ch02');

describe('List ADT', () => {
  describe('append, length', () => {
    it('should provide an append function that appends a new element onto the list at the next available position. It should have a length function that returns the number of elements in the list', () => {
      const list = new List();
      expect(list.length()).to.equal(0);
      list.append('new element');
      expect(list.length()).to.equal(1);
    });
  });

  describe('find', () => {
    it(`should provide a find function that is able to find an element from the list. If the element is found, it should return the element's position, otherwise, it should return -1`, () => {
      const list = new List();
      list.append('element 1');
      list.append('element 2');
      expect(list.find('element 1')).to.equal(0);
      expect(list.find('element 3')).to.equal(-1);
    });
  });

  describe('remove', () => {
    it(`should provide a remove function that removes an element from the list. If the element is removed, it should return true. Otherwise, it should return false`, () => {
      const list = new List();
      list.append('element 1');
      expect(list.remove('element 1')).to.be.true;
      expect(list.remove('element 1')).to.be.false;
    });
  });

  describe('toString', () => {
    it(`should provide a toString function that returns the current representation of the list`, () => {
      const list = new List();
      list.append('element 1');
      list.append('element 2');
      expect(list.toString()).to.eql(['element 1', 'element 2']);
    });
  });

  describe('insert', () => {
    it(`should provide an insert function that should insert an element after a certain position in the list. If insertion successful, should return true. Otherwise, should return false`, () => {
      const list = new List();
      list.append('element 1');
      list.append('element 2');
      list.append('element 3');
      expect(list.insert('element 2.5', 'element 2')).to.be.true;
      expect(list.find('element 2.5')).to.equal(2);
      expect(list.length()).to.equal(4);
      expect(list.insert('element 6.5', 'element 6')).to.be.false;
      expect(list.length()).to.equal(4);
      expect(list.find('element 6.5')).to.equal(-1);
    });
  });

  describe('clear', () => {
    it(`should provide a clear function that should clear out the list`, () => {
      const list = new List();
      list.append('element 1');
      list.append('element 2');
      list.append('element 3');
      list.clear();
      expect(list.length()).to.equal(0);
    });
  });

  describe('contains', () => {
    it(`should provide a contain function that should return true if an element is in the list and false if not.`, () => {
      const list = new List();
      list.append('element 1');
      list.append('element 2');
      expect(list.contains('element 1')).to.be.true;
      expect(list.contains('element 3')).to.be.false;
    });
  });

  describe('currPos', () => {
    it('should provide a currPos function that returns the current position of the list', () => {
      const list = new List();
      list.append('element 1');
      list.append('element 2');
      list.append('element 3');

      list.end();
      expect(list.currPos()).to.equal(2);
    });
  });

  describe('front, end', () => {
    it(`should provide a front function that sets current position to first element of list. it should provide an end function that sets current position to the last element of the list`, () => {
      const list = new List();
      list.append('element 1');
      list.append('element 2');
      list.end();
      expect(list.currPos()).to.equal(1);
      list.front();
      expect(list.currPos()).to.equal(0);
    });
  });

  describe('prev', () => {
    it(`should provide a prev function that moves current position back one element`, () => {
      const list = new List();
      list.append('element 1');
      list.append('element 2');
      list.end();
      list.prev();
      expect(list.currPos()).to.equal(0);
    });
  });

  describe('next', () => {
    it(`should provide a next function that moves current position forward one element`, () => {
      const list = new List();
      list.append('element 1');
      list.append('element 2');
      list.front();
      list.next();
      expect(list.currPos()).to.equal(1);
    });
  });

  describe('moveTo', () => {
    it(`should provide a moveTo function that moves current position to specified position`, () => {
      const list = new List();
      list.append('element 1');
      list.append('element 2');
      list.append('element 3');
      list.moveTo(2);
      expect(list.currPos()).to.equal(2);
    });
  });

  describe('getElement', () => {
    it(`should provide a getElement function that returns element at specified position in the list`, () => {
      const list = new List();
      list.append('element 1');
      list.append('element 2');
      list.append('element 3');

      list.next();
      list.next();
      expect(list.getElement()).to.equal('element 3');
      list.prev();
      expect(list.getElement()).to.equal('element 2');
    });
  });
});
