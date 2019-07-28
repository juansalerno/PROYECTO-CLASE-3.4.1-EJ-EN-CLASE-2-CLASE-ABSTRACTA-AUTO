export default abstract class Auto {
    protected marca: string;
    protected modelo: string;
    protected año: number;
    protected estaPrendido: boolean;
    protected velocidadActual: number;
    protected patente: string;
    protected precio: number;
    protected velocidadMaxima: number;

    public constructor(marca: string, modelo: string, año: number, patente: string, precio: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.precio = precio;
        this.velocidadMaxima = 0;
        this.estaPrendido = false;
        this.velocidadActual = 0;
        this.patente = patente;
    }

    public encenderApagar(): void {
        if (this.estaPrendido)
            this.estaPrendido = false;
        else this.estaPrendido = true;
    }

    abstract acelerar(): void

    abstract frenar(): void;

    public getVelocidadActual(): number {
        console.log('La velocidad actual de ' + this.patente + 'es: ' + this.velocidadActual);
        return this.velocidadActual
    }

    public getEstaPrendido(): boolean {
        return this.estaPrendido;
    }

    public getAño(): number {
        return this.año;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public getMarca(): string {
        return this.marca;
    }

    public getPatente(): string {
        return this.patente;
    }

    public getPrecio(): number {
        return this.precio;
    }

    public getVelocidadMaxima(): number {
        return this.velocidadMaxima;
    }

    public imprimirDatos(): void {
        console.log(this);
    }
}