import Auto from './Auto';

export default class AutoDeportivo extends Auto {

    private ploteado: boolean;

    public constructor(marca: string, modelo: string, año: number, patente: string, precio: number) {
        super(marca, modelo, año, patente, precio);
        this.velocidadMaxima = 300;
        this.ploteado = true;
    }

    public acelerar(): void {
        if (this.velocidadActual <= 250)
            this.velocidadActual += 50;
        else console.log('El auto ya se encuentra a su velocidad máxima');
    }

    public frenar(): void {
        if (this.velocidadActual >= 50)
            this.velocidadActual -= 50;
        else console.log('El auto ya está frenado');
    }

    public plotearDesplotear(): void {
        if(this.ploteado)
            this.ploteado = false;
        else 
            this.ploteado = true;
    }

    public getEstadoPloteado(): boolean {
        return this.ploteado;
    }
}