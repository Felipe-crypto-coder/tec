document.addEventListener("DOMContentLoaded", () => {
  // --- MENU RESPONSIVO ---
  const menuBtn = document.querySelector("#menu-btn");
  const nav = document.querySelector("nav ul");

  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

  // --- FORMULÁRIO DE CONTATO ---
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // impede envio real

      const nome = document.querySelector("#nome").value.trim();
      const email = document.querySelector("#email").value.trim();
      const mensagem = document.querySelector("#mensagem").value.trim();

      // Validação
      if (nome.length < 3) {
        alert("⚠️ O nome deve ter pelo menos 3 caracteres.");
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("⚠️ Informe um e-mail válido.");
        return;
      }

      if (mensagem.length < 10) {
        alert("⚠️ A mensagem deve ter pelo menos 10 caracteres.");
        return;
      }

      // passou nas validações
      alert("✅ Obrigado, " + nome + "! Sua mensagem foi enviada com sucesso.");
      form.reset();
    });
  }
});
