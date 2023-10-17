//VARIÁVEIS E SELEÇÃO DE ELEMENTOS

const Key = ""; //Chave da API
//const apiUnsplash = "https://source.unsplash.com/1600x900/?";//URL da imagem de fundo

//FUNÇÕES

//3.Colocar os dados das cidades na tela do usuario
function colocarDadosNaTela(dados) {
    console.log(dados);

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temperatura").innerHTML = "Temperatura: " + Math.floor(dados.main.temp) + " °C"
    ;
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = "Umidade relativa do ar: " + dados.main.humidity + "%";
    document.querySelector(".img-previsao").src = `http://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;

     // Altera a imagem de fundo
     document.body.style.backgroundImage = `url("${apiUnsplash + city}")`;
}

//2.Busca as informações das cidades no servidor
async function buscarCidade(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${Key}&lang=pt_br&units=metric`).then(resposta => resposta.json());

    colocarDadosNaTela(dados);
    
}

//1.Pega as informações do input, ou seja, o nome das cidades digitadas pelo usuario
function cliqueiNoBotao() {

    const cidade = document.querySelector(".input-cidade").value;

    buscarCidade(cidade);
}

//EVENTOS para mostrar a informações na tela com enter
document.querySelector(".input-cidade").addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        const cidade = e.target.value;
        buscarCidade(cidade);
    }
});



