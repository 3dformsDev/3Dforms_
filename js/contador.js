<script>
  document.addEventListener("DOMContentLoaded", function() {
    // Añadir eventos de click para los botones de incremento y decremento
    const incrementButtons = document.querySelectorAll('.btn-increment');
    const decrementButtons = document.querySelectorAll('.btn-decrement');

    incrementButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        const quantityInput = button.previousElementSibling; // Input de cantidad
        let currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1; // Incrementa la cantidad
      });
    });

    decrementButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        const quantityInput = button.nextElementSibling; // Input de cantidad
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
          quantityInput.value = currentValue - 1; // Decrementa la cantidad
        }
      });
    });
  });
</script>