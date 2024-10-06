export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set code(newCode) {
    if (typeof newCode !== 'string'){
      throw new TypeError('code must be a string');
    }
    this._code = newCode;
  }

  set name(newName) {
    if (typeof newname !== 'string'){
      throw new TypeError('name must be a string!');
    }
    this._name = newName;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
