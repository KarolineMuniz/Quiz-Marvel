const perguntas = [
    {
        pergunta: "Qual é o nome do primeiro filme do Universo Cinematográfico Marvel (MCU)?",
        respostas: [
            "Homem de Ferro",
            "Vingadores: Ultimato",
            "Thor: Ragnarok",
        ],
        correta: 0
    },
    {
        pergunta: "Quem é o antagonista principal em 'Vingadores: Guerra Infinita'?",
        respostas: [
            "Loki",
            "Thanos",
            "Ultron",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o nome do reino natal de T'Challa em 'Pantera Negra'?",
        respostas: [
            "Wakanda",
            "Atlântida",
            "Latvéria",
        ],
        correta: 0
    },
    {
        pergunta: "Quem é o mentor de Tony Stark em 'Homem de Ferro'?",
        respostas: [
            "Bruce Banner",
            "Nick Fury",
            "Obadiah Stane",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o nome do cientista que se torna o Hulk?",
        respostas: [
            "Bruce Wayne",
            "Bruce Banner",
            "Peter Parker",
        ],
        correta: 1
    },
    {
        pergunta: "Quem é o Deus da Trapaça no Universo Cinematográfico Marvel?",
        respostas: [
            "Thor",
            "Loki",
            "Hela",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o nome da nave espacial usada pelos Guardiões da Galáxia?",
        respostas: [
            "Tesseract",
            "Milano",
            "Quinjet",
        ],
        correta: 1
    },
    {
        pergunta: "Quem interpreta o Capitão América nos filmes da Marvel?",
        respostas: [
            "Chris Hemsworth",
            "Chris Evans",
            "Chris Pratt",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o nome da joia do infinito que concede poderes telepáticos?",
        respostas: [
            "Joia do Espaço",
            "Joia da Mente",
            "Joia da Realidade",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o título do último filme da Saga do Infinito no MCU?",
        respostas: [
            "Vingadores: Ultimato",
            "Pantera Negra",
            "Homem-Aranha: Longe de Casa",
        ],
        correta: 0
    },
];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if (estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      quizItem.querySelector('dl').appendChild(dt)
    }
  
  
    quizItem.querySelector('dl dt').remove()
  
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }