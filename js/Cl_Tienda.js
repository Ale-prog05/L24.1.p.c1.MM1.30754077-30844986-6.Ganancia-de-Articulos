export default class Cl_Tienda {
    constructor(){
       this.acumGt=0; 
        this.mayorP=0;
        this.auxCod=0;
    }
    procesarArticulo(art){
        this.acumGt+=art.ganancia();
        
        if(art.precioV>this.mayorP){
            this.mayorP=art.precioV;
            this.auxCod=art.cod;
        }
    }
    devolverAcumGt(){
        return this.acumGt;
    }
    devolverMayorP(){
        return this.mayorP;
    }
    devolverAuxCod(){
        return this.auxCod;
    }
}