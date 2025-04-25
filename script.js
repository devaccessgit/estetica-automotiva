document.getElementById('toggle-theme').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

document.getElementById('form-agendamento').addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const servico = document.getElementById('servico').value;
  const data = document.getElementById('data').value;
  const hora = document.getElementById('hora').value;

  const numeroWhatsApp = '5511999321830';
  const mensagem = `Olá! Novo agendamento:\n\n👤 Nome: ${nome}\n🔧 Serviço: ${servico}\n📅 Data: ${data}\n⏰ Hora: ${hora}`;
  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

  const confirmar = confirm(`Deseja confirmar o agendamento para ${data} às ${hora}?`);

  if (confirmar) {
    window.open(url, '_blank');
    setTimeout(() => {
      alert('Agendamento enviado com sucesso via WhatsApp!');
      document.getElementById('form-agendamento').reset();
    }, 500);
  }
});