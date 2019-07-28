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
var AutoCiudad = /** @class */ (function (_super) {
    __extends(AutoCiudad, _super);
    function AutoCiudad(marca, modelo, año, patente, precio) {
        var _this = _super.call(this, marca, modelo, año, patente, precio) || this;
        _this.velocidadMaxima = 190;
        return _this;
    }
    AutoCiudad.prototype.acelerar = function () {
        if (this.velocidadActual <= 180)
            this.velocidadActual += 10;
        else
            console.log('El auto ya se encuentra a su velocidad máxima');
    };
    AutoCiudad.prototype.frenar = function () {
        if (this.velocidadActual >= 10)
            this.velocidadActual -= 10;
        else
            console.log('El auto ya está frenado');
    };
    return AutoCiudad;
}(Auto_1["default"]));
exports["default"] = AutoCiudad;
