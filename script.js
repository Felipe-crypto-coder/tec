// Ativar menu responsivo
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector("#menu-btn");
  const nav = document.querySelector("nav ul");

  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

  // Validação e mensagem de envio no formulário de contato
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // evita recarregar a página
      alert("✅ Obrigado por entrar em contato! Em breve retornaremos sua mensagem.");
      form.reset();
    });
  }
});

