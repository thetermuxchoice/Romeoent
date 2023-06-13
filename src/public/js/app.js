document.addEventListener("DOMContentLoaded", (event) => {
  
  // Obtén la referencia al elemento div y la imagen dentro de él
  document.querySelectorAll('.index-event-section-item').forEach(divElement => {
    const imagenElement = divElement.querySelector('.index-event-section-img');

    // Valores iniciales
    const valorInicial = 1; // Escala inicial de la imagen
    const valorFinal = 1.5; // Escala final de la imagen

    // Función para manejar el evento de desplazamiento
    function handleScroll() {
      // Calcula la posición del elemento en la ventana del navegador
      const rect = divElement.getBoundingClientRect();

      // Verifica si el elemento está visible en la ventana
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        // Calcula el progreso de desplazamiento (scroll) basado en la posición del elemento
        const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);

        // Calcula el valor de escala interpolado entre valorInicial y valorFinal
        const escala = valorInicial + (valorFinal - valorInicial) * scrollProgress;

        // Aplica la propiedad CSS "transform: scale" a la imagen
        imagenElement.style.transform = `scale(${escala})`;
      }
    }

    // Agrega el evento de desplazamiento al documento
    document.addEventListener('scroll', handleScroll);

    // Ejecuta handleScroll al cargar la página para aplicar el efecto inicialmente
    handleScroll();


  })
  



 

});
