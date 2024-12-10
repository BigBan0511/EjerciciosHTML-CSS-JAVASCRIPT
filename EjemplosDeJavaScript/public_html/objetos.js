class Coche{
    constructor(litrosGasofa, velocidad, peso, tipoCarnet){
        this.litrosGasofa = litrosGasofa;
        this.velocidad = velocidad;
        this.peso = peso;
        this.tipoCarnet = tipoCarnet;
        this.encendido = false;
    }
    
    getLitros(){
        return this.litrosGasofa;
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
        this.litrosGasofa = prompt("Introduce los litros de tu coche");
    }
    
    setVelocidad(){
        this.velocidad = prompt("Introduce la velocidad de tu coche");
    }
    
    setPeso(){
        this.peso = prompt("Introduce el peso de tu coche");
    }
    
    encenderCoche(){
        if(this.encendido == false){
            alert("Coche encendido");
            this.encendido = true;
        }else{
            alert("El coche ya estaba encendido");
        }
    }
    
    apagarCoche(){
        if(this.encendido == true){
            alert("Coche apagado");
            this.encendido = false;
        }else{
            alert("El coche ya estaba apagado");
        }
    }
}

var miCoche = new Coche(20,200,500,"B");
miCoche.apagarCoche();