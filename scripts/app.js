const radioList = document.getElementById("radioList");
const radioPlayer = document.getElementById("radioPlayer");
const radioName = document.getElementById("radioName");

function carregarRadios() {
    radios.forEach((radio) => {
        const li = document.createElement("li");
        li.className = "p-4 bg-gray-700 rounded-lg cursor-pointer shadow-md hover:bg-gray-600 transition duration-300";
        li.textContent = `📡 ${radio.nome}`;
        li.onclick = () => tocarRadio(radio);
        radioList.appendChild(li);
    });
}

function tocarRadio(radio) {
    radioPlayer.src = radio.url;
    radioPlayer.play()
        .then(() => radioName.textContent = `▶ Tocando: ${radio.nome}`)
        .catch(error => console.error("Erro ao reproduzir áudio:", error));
}

document.addEventListener("DOMContentLoaded", carregarRadios);