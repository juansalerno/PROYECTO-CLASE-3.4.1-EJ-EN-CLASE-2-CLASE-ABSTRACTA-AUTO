import AutoCiudad from './AutoCiudad';
import AutoDeportivo from './AutoDeportivo';
import Camioneta from './Camioneta';

let autoCiudad: AutoCiudad = new AutoCiudad('Ford', 'Fiesta', 1999, 'ABC456', 190000);
autoCiudad.encenderApagar();
autoCiudad.frenar();
autoCiudad.acelerar();
autoCiudad.acelerar();
autoCiudad.frenar();
autoCiudad.imprimirDatos();

console.log(' ');

let autoDeportivo: AutoDeportivo = new AutoDeportivo('Subaru', 'G-200', 2010, 'GE435JI', 450000);
autoDeportivo.encenderApagar();
autoDeportivo.acelerar();
autoDeportivo.acelerar();
autoDeportivo.acelerar();
autoDeportivo.frenar();
autoDeportivo.getEstadoPloteado();
autoDeportivo.imprimirDatos();

console.log(' ');

let miCamioneta: Camioneta = new Camioneta('Toyota', 'Hilux', 2017, 'AB201HD', 320000);
miCamioneta.encenderApagar();
miCamioneta.acelerar();
miCamioneta.acelerar();
miCamioneta.frenar();
miCamioneta.descargar();
miCamioneta.cargar();
miCamioneta.cargar();
miCamioneta.cargar();
miCamioneta.getEstadoCarga();
miCamioneta.imprimirDatos();