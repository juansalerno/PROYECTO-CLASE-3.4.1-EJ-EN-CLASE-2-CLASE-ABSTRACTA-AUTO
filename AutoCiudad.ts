import Auto from './Auto';

export default class AutoCiudad extends Auto {

    public constructor(marca: string, modelo: string, año: number, patente: string, precio: number) {
        super(marca, modelo, año, patente, precio);
        this.velocidadMaxima = 190;
    }

    public acelerar(): void {
        if (this.velocidadActual <= 180)
            this.velocidadActual += 10;
        else console.log('El auto ya se encuentra a su velocidad máxima');
    }

    public frenar(): void {
        if (this.velocidadActual >= 10)
            this.velocidadActual -= 10;
        else console.log('El auto ya está frenado');
    }
}