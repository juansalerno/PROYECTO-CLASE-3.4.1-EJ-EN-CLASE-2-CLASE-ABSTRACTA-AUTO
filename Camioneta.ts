import Auto from './Auto';

export default class Camioneta extends Auto {

    private pesoCarga: number;
    private pesoCargaMaxima: number;

    public constructor(marca: string, modelo: string, año: number, patente: string, precio: number) {
        super(marca, modelo, año, patente, precio);
        this.velocidadMaxima = 230;
        this.pesoCarga = 0;
        this.pesoCargaMaxima = 1000;
        this.velocidadActual = 200;
    }

    public acelerar(): void {
        if (this.velocidadActual <= 200)
            this.velocidadActual += 30;
        else console.log('El auto ya se encuentra a su velocidad máxima');
    }

    public frenar(): void {
        if (this.velocidadActual >= 30)
            this.velocidadActual -= 30;
        else console.log('El auto ya está frenado');
    }

    public cargar(): void {
        if (this.pesoCarga <= (this.pesoCargaMaxima-1))
            this.pesoCarga += 1;
        else 
            console.log('No se pudo realizar la carga por haber llegado ésta a su límite máximo');
    }

    private estaVacia(): boolean {
        return this.pesoCarga == 0
    }

    public descargar(): void {
        if (this.estaVacia() == false)
            this.pesoCarga -= 1;
        else 
            console.log('No hay nada para descargar en la camioneta');
    }

    public getEstadoCarga(): number {
        return this.pesoCarga;
    }
}