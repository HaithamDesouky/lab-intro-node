class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);

    this.length = this.items.length;

    this.items.sort(function (a, b) {
      return a - b;
    });
  }

  get(pos) {
    if (this.items.indexOf(pos) === -1) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (!this.items.length) {
      throw new Error('EmptySortedList');
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if (!this.items.length) {
      throw new Error('EmptySortedList');
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    if (!this.items.length) {
      return 0;
    } else {
      return this.items.reduce((acc, next) => acc + next);
    }
  }

  avg() {
    if (!this.items.length) {
      throw new Error('EmptySortedList');
    } else {
      return this.sum(this.items) / this.length;
    }
  }
}

module.exports = SortedList;
