document.querySelector('form').addEventListener('submit', function(e) {
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    
    if (!email || !name || !message) {
      e.preventDefault();
      alert("Por favor, preencha todos os campos.");
    }
  });
  