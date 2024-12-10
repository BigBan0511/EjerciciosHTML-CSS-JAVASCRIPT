//Para declarar una clase en JS
class Coche{
    //No tenemos que definir los atributos como haciamos en Java, en JS lo hacemos 
    //directamente en el constructor
    constructor(litrosGasolina, velocidad, peso, tipoCarnet){
        this.litrosGasolina=litrosGasolina;
        this.velocidad=velocidad;
        this.peso=peso;
        this.tipoCarnet=tipoCarnet;
        this.encendido=false;
    }
    
    getLitros(){
        return this.litrosGasolina;
    }
    
    getVelocidad(){
        return this.velocidad;
    }
    
    getPeso(){
        return this.peso;
    }
    
    getTipoCarnet(){
        return this.tipoCarnet;
    }
    
    setLitros(){
        this.litrosGasolina=prompt("Introduce los litros de tu coche");
    }
    
    getEncendido(){
        return this.encendido;
    }
    
    setVelocidad(){
        this.velocidad=prompt("Introduce la vel de tu coche");
    }
    
    setPeso(){
        this.peso=prompt("Introduce la peso de tu coche");
    }
    
    encenderCoche(){
        if(this.encendido==false){
            alert("Coche encendido.")
            this.encendido=true;
        }else{
            alert("El coche ya estaba encendido");
        }
    }
    
    apagarCoche(){
        if(this.encendido===true){
            alert("Coche apagado.");
            this.encendido=false;
        }else{
            alert("El coche ya estaba apagado");
        }
    }
}

var miCoche=new Coche(20, 200, 500, "B");
miCoche.encenderCoche();
miCoche.encenderCoche();;
alert("El coche tiene " + miCoche.getLitros() + " litros de gasolina");
alert("El coche tiene una velocidad máxima de " + miCoche.getVelocidad());
miCoche.apagarCoche();
miCoche.setLitros();
alert("El coche tiene " + miCoche.getLitros() + " litros de gasolina");