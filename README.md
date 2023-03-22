# Paint&Point Employee Management Web App
Este proyecto es una solución Frontend desarrollada en Angular 14, utilizando RxJs, Angular Materials, Prettier y Eslint para gestionar a los empleados de la empresa de pintura Paint&Point S.L.

## Características del proyecto
- Proyecto con estructura clásica con header, body y footer.
- Un grid que muestre una tarjeta por cada usuario con su foto de avatar, nombre completo y teléfono.
- Al hacer clic en una tarjeta se abre una modal con el detalle del empleado, mostrando todos los datos y la fecha de nacimiento en formato "dd/mm/yyyy".
- Un buscador en el header que permita filtrar a los usuarios por cualquier dato.
- Una paginación que permita visualizar los usuarios de 5 en 5, pudiendo variar la cantidad a mostrar.
## Se hace énfasis en los siguientes aspectos a nivel tecnico:
- Uso de Angular 14.
- Código limpio, estructurado y entendible.
- Consumo de datos utilizando HttpClient de Angular.
- Diseño responsive.
- Utilización de algún tipo de procesador de CSS como SASS.
- Friendly UX/UI.
- Optimización (tiempo de carga, recursos y renders).
- Uso de RXJS de manera declarativa, con especial atención al uso de flujos combinados.
- Patrón unsubscribe en componentes.
- Preparación del proyecto para ampliación, gestionando routing y lazyLoading de módulos.

## Instrucciones para arrancar el proyecto
Para ejecutar el proyecto, sigue los siguientes pasos:

1. Clona el repositorio en tu máquina local.
2. Instala las dependencias ejecutando el comando npm install.
3. Inicia el servidor de desarrollo con ng serve y abre la aplicación en el navegador en la dirección http://localhost:4200.
4. Para testear, correr el comando npm run test.
