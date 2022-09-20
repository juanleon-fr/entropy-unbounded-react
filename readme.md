En este repositorio se encuentra la primera entrega del proyecto final del curso de ReactJS de Coderhouse.

Adjunto link al video del funcionamiento del sitio:

https://drive.google.com/drive/u/1/folders/1u8EY_YvVb9omEtzxILDD3x_yfmNPg8SU

El sitio funciona mediante componentes para una buena modularización y para reusar código con facilidad, además de ofrecer la posibilidad de encontrar errores más rápidamente y de modificar el código de un componente para aplicar esas modificaciones en todo lugar donde se implemente ese mismo componente.

El proyecto consiste en una simulación de Ecommerce de una marca ficticia de ropa. Se implementa la librería React Router para poder mostrar el sitio como una SPA, y de esa manera mejorar los tiempos de carga y la experiencia de usuario, cargando solo el contenido que se necesita y no volver a cargar elementos que se reutilizan constantemente en un sitio web como lo son la barra de navegación y el pie de página (footer).


EDIT DESAFÍO: CART VIEW

Para este desafío creo que me enrosqué más de la cuenta, además de que al querer remover elementos del carrito, tengo problemas con el useState, que no actualiza los estados. Sé que para esto debo usar un useEffect pero todavía estoy viendo de qué manera implementarlo, dado que mi código es bastante confuso... Creo que mi mejor opción es rehacer CartContext.jsx y usar variables, estados y funciones globales donde convenga. Pero si se trata de pasar estos entre dos componentes emparentados directamente entonces será mediante props en el componente hijo.