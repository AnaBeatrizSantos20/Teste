var conteudo = document.getElementById('conteudoPersonagem');

var botaoPesquisar = document.getElementById('pesquisar');

// Retorna todos os personagens
const getPersonagem = function(){
    let url ='https://rickandmortyapi.com/api/character';
    
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(dadosPersonagem){
        creatCard(dadosPersonagem)
    })
};

// Retorna os livros filtrando pelo nome
const getPersonagemByName = function(nomePersonagem){
    let url=`https://rickandmortyapi.com/api/character/?name=${nomePersonagem}`;

    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(dadosPersonagem){
        creatCard(dadosPersonagem);
    })
}

// Cria todos os card no HTML 
const creatCard = function(dados){

    dados.results.forEach(function(item){

        // CRIA OS ELEMENTOS HTML

        // Cria a div para receber os cards 
        let card = document.createElement('div');
        card.setAttribute('class', 'card');
        // Cria o elemento figure
        let figure = document.createElement('figure');
        // Cria o elemento img
        let img = document.createElement('img');
        img.setAttribute('src', item.image);
        // Cria a div para receber o nome do personagem e o Status
        let personagem = document.createElement('div');
        personagem.setAttribute('class', 'personagemStatus');
        // Cria  o elemento h2
        let h2 = document.createElement('h2');
        // Cria o elemento span para o status
        let spanStatus = document.createElement('span');
        spanStatus.setAttribute('class', 'status')
        // Cria a div para receber a ultima localizaçao
        let lastLocation = document.createElement('div');
        lastLocation.setAttribute('class', 'lastLocation');
        // Cria o elemento span para a ultima localização 
        let spanLocation = document.createElement('span');
        spanLocation.setAttribute('class', 'textGrey');
        // cria a div para receber a primeira vez 
        let firstSeen = document.createElement('div');
        firstSeen.setAttribute('class', 'firstSeen');
        // Cria o elemento span para a primeira vez
        let spanFirstSeen = document.createElement('span');
        spanFirstSeen.setAttribute('class', 'textGrey');


        // Cria o texto nome do personagem h2
        let nomePersonagem = document.createTextNode(item.name);

        let status = document.createTextNode(item.status);

        // Cria o texto do LastLocation e firstSeen
        let txtLastLocation = document.createTextNode('Last Known Locarion' + item.location.name)

        let txtFirstSeen = document.createTextNode('First seen In' + item.episode)


        // ASSOCIAR OS ELEMENTOS CONFORME O HTML

       conteudo.appendChild(card);
       card.appendChild(figure);
       figure.appendChild(img);
       card.appendChild(personagem);
       personagem.appendChild(h2);
       personagem.appendChild(spanLocation);
       card.appendChild(lastLocation);
       lastLocation.appendChild(spanLocation);
       card.appendChild(firstSeen);
       firstSeen.appendChild(spanFirstSeen);

       // ASSOCIA OS TEXTOS NOS ELEMENTOS 

       h2.appendChild(nomePersonagem);
       spanLocation.appendChild(txtLastLocation);
       spanFirstSeen.appendChild(txtFirstSeen);

    });
};

// Limpa os cards da tela 
const clearCards = function(){
    conteudo.innerText='';
}


window.addEventListener('load', function(){getPersonagem()});

botaoPesquisar.addEventListener('click', function(){
    let nome = document.getElementById('nomePersonagem').value;
    clearCards();

    if(nome == ''){
        getPersonagem();
    }else{
        getPersonagemByName(nome);
    }
})