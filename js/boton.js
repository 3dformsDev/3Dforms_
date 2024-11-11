<script>
  document.addEventListener("DOMContentLoaded", function() {
    // Añadir un evento de click a todos los botones de "Ver detalle"
    const detailButtons = document.querySelectorAll('.btn-detail');

    detailButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault(); // Evita el comportamiento por defecto del enlace
        document.getElementById('portfolio').scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });
</script>
