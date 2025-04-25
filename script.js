const toggleThemeButton = document.getElementById('toggle-theme');

toggleThemeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Função para enviar mensagem via WhatsApp
function enviarMensagemWhatsApp(nome, servico, data, hora, telefone) {
  const mensagem = `Olá ${nome}! Seu agendamento para o serviço de ${servico} foi confirmado para o dia ${data} às ${hora}.`;
  const numeroWhatsApp = `https://wa.me/55${telefone.replace(/\D/g, '')}?text=${encodeURIComponent(mensagem)}`;
  window.open(numeroWhatsApp, '_blank');
}

// Função para o envio do agendamento
const form = document.getElementById('form-agendamento');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const servico = document.getElementById('servico').value;
  const data = document.getElementById('data').value;
  const hora = document.getElementById('hora').value;
  const telefone = document.getElementById('telefone').value;

  enviarMensagemWhatsApp(nome, servico, data, hora, telefone);
});