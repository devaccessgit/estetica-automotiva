function abrirWhatsApp() {
    const numero = '5511999321830'; // Ex: 5511999998888
    const mensagem = encodeURIComponent("Olá! Quero fazer um orçamento ou agendar um serviço.");
    window.open(`https://wa.me/${numero}?text=${mensagem}`, '_blank');
  }