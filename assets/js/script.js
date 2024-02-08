document.addEventListener("DOMContentLoaded", function() {

    // Modal
    const myModal = document.getElementById('exampleModal');

    myModal.addEventListener('shown.bs.modal', () => {
      const firstInput = myModal.querySelector('input, button');
      if (firstInput) {
        firstInput.focus();
      }
    });
  });