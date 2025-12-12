function atualizarRelogio() {
    const agora = new Date();

    const horas = agora.getHours();
    const minutos = agora.getMinutes();
    const segundos = agora.getSeconds();

    const ponteiroHoras = document.querySelector('.hour-hand');
    const ponteiroMinutos = document.querySelector('.minute-hand');
    const ponteiroSegundos = document.querySelector('.second-hand');

    const rotacaoHoras = (horas % 12) * 30 + minutos * 0.5;
    const rotacaoMinutos = minutos * 6 + segundos * 0.1;
    const rotacaoSegundos = segundos * 6;

    ponteiroHoras.style.transform = `rotate(${rotacaoHoras}deg)`;
    ponteiroMinutos.style.transform = `rotate(${rotacaoMinutos}deg)`;
    ponteiroSegundos.style.transform = `rotate(${rotacaoSegundos}deg)`;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();
