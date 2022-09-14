En este repositorio se encuentra la primera entrega del proyecto final del curso de ReactJS de Coderhouse.

Adjunto link al video del funcionamiento del sitio:

https://drive.google.com/drive/u/1/folders/1u8EY_YvVb9omEtzxILDD3x_yfmNPg8SU

El sitio funciona mediante componentes para una buena modularización y para reusar código con facilidad, además de ofrecer la posibilidad de encontrar errores más rápidamente y de modificar el código de un componente para aplicar esas modificaciones en todo lugar donde se implemente ese mismo componente.

El proyecto consiste en una simulación de Ecommerce de una marca ficticia de ropa. Se implementa la librería React Router para poder mostrar el sitio como una SPA, y de esa manera mejorar los tiempos de carga y la experiencia de usuario, cargando solo el contenido que se necesita y no volver a cargar elementos que se reutilizan constantemente en un sitio web como lo son la barra de navegación y el pie de página (footer).


EDIT DESAFÍO: SINCRONIZAR COUNTER

Lo que hice para este desafío básicamente fue enviarle desde un componente padre (ItemDetail) a un componente hijo (ItemCount) una función setPassedCount como prop, con el objetivo de utilizarlo para actualizar el estado de un "contador" ubicado en ItemDetail en una vez que se presiona en "sumar al carrito", dentro del ItemCount. Luego de presionado el botón, el componente ItemCount se intercambia por un botón Checkout que una vez presionado lleva a "/cart", donde por ahora solo hay un tag h1.