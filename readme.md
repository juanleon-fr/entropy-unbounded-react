En este repositorio se encuentra la primera entrega del proyecto final del curso de ReactJS de Coderhouse.

Adjunto link al video del funcionamiento del sitio:

https://drive.google.com/drive/u/1/folders/1u8EY_YvVb9omEtzxILDD3x_yfmNPg8SU

El sitio funciona mediante componentes para una buena modularización y para reusar código con facilidad, además de ofrecer la posibilidad de encontrar errores más rápidamente y de modificar el código de un componente para aplicar esas modificaciones en todo lugar donde se implemente ese mismo componente.

El proyecto consiste en una simulación de Ecommerce de una marca ficticia de ropa. Se implementa la librería React Router para poder mostrar el sitio como una SPA, y de esa manera mejorar los tiempos de carga y la experiencia de usuario, cargando solo el contenido que se necesita y no volver a cargar elementos que se reutilizan constantemente en un sitio web como lo son la barra de navegación y el pie de página (footer).


EDIT DESAFÍO: CART VIEW

Se creó un archivo firebaseConfig.jsx que exporta dos funciones: una para obtener todos los documentos y otra para obtener un solo documento a través de la id (proporcionada por el React Router Dom al hacer click en algún elemento de la lista de productos).
La primera función se ejecuta en el inicio de la App y se filtra el resultado por categorías si es necesario. La segunda función se ejecuta al ingresar a los detalles de un producto, buscando en la base de datos el documento que contenga la misma id que muestra la ruta item/id.