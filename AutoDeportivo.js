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
var AutoDeportivo = /** @class */ (function (_super) {
    __extends(AutoDeportivo, _super);
    function AutoDeportivo(marca, modelo, año, patente, precio) {
        var _this = _super.call(this, marca, modelo, año, patente, precio) || this;
        _this.velocidadMaxima = 300;
        _this.ploteado = true;
        return _this;
    }
    AutoDeportivo.prototype.acelerar = function () {
        if (this.velocidadActual <= 250)
            this.velocidadActual += 50;
        else
            console.log('El auto ya se encuentra a su velocidad máxima');
    };
    AutoDeportivo.prototype.frenar = function () {
        if (this.velocidadActual >= 50)
            this.velocidadActual -= 50;
        else
            console.log('El auto ya está frenado');
    };
    AutoDeportivo.prototype.plotearDesplotear = function () {
        if (this.ploteado)
            this.ploteado = false;
        else
            this.ploteado = true;
    };
    AutoDeportivo.prototype.getEstadoPloteado = function () {
        return this.ploteado;
    };
    return AutoDeportivo;
}(Auto_1["default"]));
exports["default"] = AutoDeportivo;
