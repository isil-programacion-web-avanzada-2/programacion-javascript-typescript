class Personaje{

    private nombre: string;
    public nivel: number;
    protected poder: number;

    constructor(nombre: string, nivel:number, poder:number){
        this.nombre = nombre;
        this.nivel= nivel;
        this.poder=poder;
    }

    public presentarse(): string{
        return `Soy ${this.nombre}, nivel ${this.nivel}`;
    }
}

class Guerrero extends Personaje{
    public atacar(): string{
        return `Ataque con poder de: ${this.poder}`
    }    
}

const goku = new Guerrero("Diego", 999, 9800);

console.log(goku.presentarse());
console.log(goku.atacar());