# Proyecto final de Vue para Bootcamp de GeeksHub

Proyecto final para curso de Vue.js de GeeksHub

Realizado por Raúl Núñez Carrero (raul.nunez@codeoscopic.com)

## Especificaciones

Crear una aplicación Vue 2 con las siguientes características:

- Generar la aplicación usando el comando vue create de la @vue/cli
- Instala el plugin vue-router para controlar el enrutamiento de componentes en base a la URL visitada en el navegador.
- Instalar el plugin VueAxios o el paquete axios de NPM para gestionar las peticiones HTTP.
- Instala el plugin vuex para centralizar los datos de la aplicación usando un store.
- Crear una página de inicio que muestre la lista de posts publicados (https://jsonplaceholder.typicode.com/posts). Los posts deben ser almacenados en el store al renderizar la página de inicio (mounted hook). Mostrar un feedback de cargando (spinner o mensaje) al usuario mientras se realiza la petición.
- Crear una página de contacto con un formulario: email, nombre y mensaje. El formulario de contacto estará almacenado en el store de la aplicación (a ser posible en un módulo de contacto). * (v-model vuex). Crear un componente botón personalizado (BaseButton) con un slot para introducir la etiqueta del mismo y una propiedad “disabled” booleana que controle si el botón está desactivado. El botón de enviar del formulario estará desactivado hasta que todos los campos estén rellenos.
- Crear una página de autor con una foto y un par de párrafos de texto.
- Crear una página detalle de un post (con URL dinámica usando un parámetro) a la que accederemos a pulsar sobre un post de la página de inicio. Esta página renderizará la información del post seleccionado recuperándola del store mediante el parámetro en URL.
- Añadir una barra de navegación en el layout de la aplicación para que sea visible en todas las vistas sin tener que añadir el componente repetidamente. Esta barra contiene un enlace/botón a las páginas: inicio, contacto, y autor.
- Añadir un footer a la web en el layout de la aplicación para que sea visible en todas las vistas sin tener que añadir el componente repetidamente. Debe contener los créditos y enlaces a redes sociales de la web.
- Incluir estilos CSS y transiciones de vue para decorar la aplicación a libre elección.
- Añadir algún recurso (imagen o vídeo) en la carpeta /src/assets y usarlos desde los componentes: por ejemplo la foto de la página de autor y un logo en la barra de navegación.

## Requisitos

- Tener instalado en el sistema el gestor de paquetes npm

## Instrucciones

- Descargar el código de la aplicación desde github
- Entrar en el directorio donde se ha descargado la aplicación
- Levantar el servidor para que funcione la aplicación con el comando npm run serve
- Acceder desde cualquier navegador a la aplicación con la URL especificada en la salida del comando anterior (normalmente http://localhost:8080)
