export default class Currency
  constructor(String code,String name){
    this._name=name;
    this._code=code;
  }
  get name(){
    return this._name;}
  get code(){
    return this._code;}
  set code(newcode){
    if(typeof newcode !== 'string'){
      throw new TypeError('code must be a string!');}
      this._code=newcode;
  }
  set name(newname){
    if (typeof newname !== 'string'){
      throw new TypeError('name must be a string!');}
      this._name=newname;
    }
  displayFullCurrency(){
    return '${this.name} (${this.code})';
  }
}
