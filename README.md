# Doña Leo - Landing Page

**Autor:** Hamir Villegas  
**Proyecto:** Landing Page para el restaurante *Doña Leo*  

## Contexto
Este proyecto fue desarrollado para una amiga que tiene un restaurante y aún no contaba con página web.  
El objetivo principal fue crear una landing page moderna, sencilla y optimizada para que sus clientes puedan:  

- Conocer el restaurante.  
- Visualizar el menú del día.  
- Leer opiniones de otros clientes.  
- Ubicar fácilmente la dirección en Google Maps.  
- Contactar a través de redes sociales.  

La dueña me proporcionó el **logo oficial**, así como los enlaces de sus redes sociales y la ubicación exacta de su local.  

## Decisiones de diseño
- **Paleta de colores:** tonos cálidos con acento rojo terracota, en relacion con el logo del negocio.  
- **Tipografía:** fuente clara y legible para todo tipo de usuarios.  
- **Layout:** estructura modular con secciones destacadas (Nosotros, Menú, Opiniones, Ubicación, Contacto).  
- **Header:** sticky y responsivo para mejorar la experiencia de navegación.  
- **Footer:** moderno, con enlaces de interés y redes sociales con iconos.  
- **Mapa:** embebido con Google Maps en un diseño estilizado y con botón “Cómo llegar”.  
- **Responsive Design:** optimizado para móviles, tablets y desktops con uso de `grid` y `flexbox`.  

## Recursos utilizados
- **Logo:** archivo proporcionado por la dueña del restaurante.  
- **Google Maps:** código de inserción (iframe) personalizado.  
- **Imágenes de platos:** fotografías de referencia agregadas en el apartado del menú.  

## IA (consultas técnicas realizadas)
Durante el desarrollo, utilicé IA como apoyo puntual para resolver dudas específicas de código.  
Algunos ejemplos de prompts fueron:  

- “¿Cómo hago que al pasar el puntero por encima de una opción del `nav` cambie de color?”  
- “El iframe de Google Maps no me carga, ¿me ayudas a corregirlo?”  
- “¿Cómo separo visualmente las opiniones (`blockquote`) en la sección de testimonios para que no se vean pegadas?”  
- “¿Cómo agregar un botón debajo del mapa que diga ‘Cómo llegar’ con estilo moderno?”  
- "El iframe de Google Maps no me carga, ¿me ayudas a corregirlo? tengo la parte de ubicacion en html en el siguiente codigo <div class="map-container"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.637672136741!2d-76.950417!3d-12.0384432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c708450f869f%3A0xd185e98bb426cee7!2sRestaurant%20Do%C3%B1a%20Leo!5e0!3m2!1ses!2spe!4v1695760000000!5m2!1ses!2spe" width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"> </iframe> </div> pero con el codigo no me carga el mapa y google maps me genero este iframe <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3211.081529430574!2d-76.950417!3d-12.038443199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c708450f869f%3A0xd185e98bb426cee7!2sRestaurant%20Do%C3%B1a%20Leo!5e1!3m2!1ses!2spe!4v1758928365080!5m2!1ses!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>"

Estas consultas me sirvieron para optimizar y pulir detalles de la implementación, manteniendo la autoría del proyecto en su totalidad.  
Adjuntare las capturas de los promts en la carpeta capturas.


## Estructura de archivos
- `index.html` – Página principal.  
- `contacto.html` – Formulario de contacto.  
- `style.css` – Estilos personalizados y diseño responsivo.  
- `script.js` – Validaciones y comportamiento del formulario.  
- `img/` – Carpeta con imágenes (logo y platos).  
- `capturas/` – Capturas de la landing page.  
- `README.md` – Documentación del proyecto.  

## Notas
- El formulario de contacto no envía datos a un servidor, actualmente simula un envío exitoso.  
