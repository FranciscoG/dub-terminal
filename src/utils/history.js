/**
 * Command History
 * 
 * Stores history of previous commands up to a certain
 * provided limit.
 */

class CommandHistory {
  constructor(limit=30) {
    this._history = [];
    this._index = 0;
    this._limit = limit;
  }

  /**
   * return history item at index + 1 
   */
  forward() {
    if (this._history.length > 0) {
      if (this._index < this._history.length - 1) {
        this._index++;
      }
      return this._history[this._index];
    }
    return '';
  }

  /**
   * return history item going backwards from
   * end of the array
   */
  back() {
    var val = '';
    if (this._history.length > 0) {
      val = this._history[this._index];
      if (this._index > 0) {
        this._index--;
      }
    }
    return val;
  }

  insert(txt) {
    this._history.push(txt);
    if (this._history.length > 30) {
      this._history.shift();
    }
    // reset the index to point to newly added item in array
    this._index = this._history.length - 1;
  }
}

var cmdHistory = new CommandHistory();
export default cmdHistory;