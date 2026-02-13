function enviarWhats(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5511999805253';

    if (!nome || !mensagem) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Alguma coisa deu errado!",
            footer: 'Certifique-se que preencheu todos os campos.'
        });
        return;
    }

    const texto = `Olá! Me chamo ${nome}. ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);

    const url = `https://web.whatsapp.com/send?phone=${telefone}&text=${msgFormatada}`;

    window.open(url, '_blank');

    document.getElementById('nome').value = '';
    document.getElementById('mensagem').value = '';

    Swal.fire({
        title: "Parabéns!",
        text: "Mensagem enviada com sucesso!",
        icon: "success"
    });
}