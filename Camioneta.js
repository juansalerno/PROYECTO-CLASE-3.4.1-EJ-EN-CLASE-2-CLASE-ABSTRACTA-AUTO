"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Auto_1 = require("./Auto");
var Camioneta = /** @class */ (function (_super) {
    __extends(Camioneta, _super);
    function Camioneta(marca, modelo, año, patente, precio) {
        var _this = _super.call(this, marca, modelo, año, patente, precio) || this;
        _this.velocidadMaxima = 230;
        _this.pesoCarga = 0;
        _this.pesoCargaMaxima = 1000;
        _this.velocidadActual = 200;
        return _this;
    }
    Camioneta.prototype.acelerar = function () {
        if (this.velocidadActual <= 200)
            this.velocidadActual += 30;
        else
            console.log('El auto ya se encuentra a su velocidad máxima');
    };
    Camioneta.prototype.frenar = function () {
        if (this.velocidadActual >= 30)
            this.velocidadActual -= 30;
        else
            console.log('El auto ya está frenado');
    };
    Camioneta.prototype.cargar = function () {
        if (this.pesoCarga <= (this.pesoCargaMaxima - 1))
            this.pesoCarga += 1;
        else
            console.log('No se pudo realizar la carga por haber llegado ésta a su límite máximo');
    };
    Camioneta.prototype.estaVacia = function () {
        return this.pesoCarga == 0;
    };
    Camioneta.prototype.descargar = function () {
        if (this.estaVacia() == false)
            this.pesoCarga -= 1;
        else
            console.log('No hay nada para descargar en la camioneta');
    };
    Camioneta.prototype.getEstadoCarga = function () {
        return this.pesoCarga;
    };
    return Camioneta;
}(Auto_1["default"]));
exports["default"] = Camioneta;
