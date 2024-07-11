export default class Cl_Articulo{
    constructor(cd,c,pV){
        this.cod= cd;
        this.costo = c;
        this.precioV = +pV;
    }
    set cod(cd){
        this._cod = cd;
    }
    get cod(){
        return this._cod;
    }
    set costo(c){
        this._costo = c;
    }
    get costo(){
        return this._costo;
    }
    set precioV(pV){
        this._precioV = +pV;
    }
    get precioV(){
        return this._precioV;
    }
    ganancia(){
        return this.precioV-this.costo;

    }
}