// Alternar entre claro e escuro
document.getElementById('toggle-theme').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Enviar agendamento para WhatsApp
document.getElementById('form-agendamento').addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = document.querySelector('input[name="nome"]').value;
  const data = document.querySelector('input[name="data"]').value;
  const hora = document.querySelector('input[name="hora"]').value;

  // Coletar os serviços selecionados (checkboxes marcados)
  const checkboxes = document.querySelectorAll('input[name="servicos"]:checked');
  const servicosSelecionados = Array.from(checkboxes)
    .map(cb => cb.value)
    .join(', ');

  // Número fixo da estética automotiva
  const numeroWhatsApp = '5511999321830';

  const mensagem = `Olá! Novo agendamento:\n\n👤 Nome: ${nome}\n🔧 Serviços: ${servicosSelecionados}\n📅 Data: ${data}\n⏰ Hora: ${hora}`;
  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, '_blank');
});