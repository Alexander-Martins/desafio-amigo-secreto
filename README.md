# Sorteador de Amigo Secreto

![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![Status](https://img.shields.io/badge/status-completo-yellow) ![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg) ![Feito com Amor](https://img.shields.io/badge/feito%20com-%E2%9D%A4-purple)

## 📌 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Uso](#uso)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Contato](#contato)

## 📖 Sobre o Projeto

Descrição: Uma aplicação web estática e simples, composta por arquivos HTML, CSS e JavaScript com intuito de realizar um sorteio de amigos para um jogo de amigo secreto. O sorteio é feito de forma divertida e aleatória, com uma animação de confetes após aparecer o nome do sorteado. O projeto foi desenvolvido como um desafio do curso do programa ONE (Oracle Next Education) em parceria com a Alura.

Funcionalidades:

- **Adicionar nomes:**  
  - Os usuários escrevem o nome de um amigo em um campo de texto e o adicionam a uma lista visível ao clicar em "Adicionar".

- **Validar entrada:**  
  - Se o campo de texto estiver vazio, o programa exibe um alerta solicitando um nome válido.  
  - Se o usuário tentar inserir um nome já presente na lista, um prompt perguntará se deseja adicionar o nome repetido.

- **Ativar o botão "Sortear":**  
  - O botão de sorteio fica desativado até que ao menos três nomes sejam adicionados à lista.

- **Visualizar a lista:**  
  - Os nomes inseridos aparecem em uma lista abaixo do campo de entrada.

- **Sorteio aleatório:**  
  - Ao clicar no botão "Sortear Amigo", um nome da lista é selecionado aleatoriamente e exibido na página.  
  - Após o sorteio, os nomes da lista são apagados.  
  - Uma animação de confetes é exibida após apresentar o nome sorteado.

![Demonstração da Aplicação](assets/desafio-amigo-secreto.gif)

## 🛠 Tecnologias Utilizadas

Lista das tecnologias, frameworks e bibliotecas utilizadas no projeto:

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)  
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)  
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)  
- [Confetti.js](https://www.kirilv.com/canvas-confetti/) (para a animação de confetes)  

## 🔧 Pré-requisitos

Antes de começar, certifique-se de ter os seguintes requisitos instalados:

1. **Navegador Web**  
   - Um navegador moderno atualizado, como:  
     - [Google Chrome](https://www.google.com/chrome/)  
     - [Mozilla Firefox](https://www.mozilla.org/firefox/)  
     - [Microsoft Edge](https://www.microsoft.com/edge/)  
     - [Safari](https://www.apple.com/safari/)  

2. **Editor de Código (Opcional, mas recomendado)**  
   - Para visualizar e editar os arquivos do projeto, recomenda-se o uso de um editor de código, como:  
     - [Visual Studio Code](https://code.visualstudio.com/)  
     - [Sublime Text](https://www.sublimetext.com/)  
     - [Atom](https://atom.io/)  

Certifique-se de que seu navegador esteja atualizado para garantir compatibilidade com as tecnologias utilizadas no projeto.

## 📦 Instalação

Siga os passos abaixo para configurar o ambiente de desenvolvimento:

1. Clone o repositório:
   ```sh
   git clone git@github.com:Alexander-Martins/desafio-amigo-secreto.git
   ```
2. Acesse o diretório do projeto:
   ```sh
   cd desafio-amigo-secreto
   ```

## 🚀 Uso

Como executar e utilizar o projeto:

Acesse no navegador: `https://alexander-martins.github.io/desafio-amigo-secreto/`

## 📁 Estrutura do Projeto

Na pasta principal Desafio-amigo-secreto temos a pasta assets, que contem as imagens utilizadas no nosso arquivo CSS e fornecidas pelo curso e uma gif feita por mim para demonstrar a aplicação. 

Em sequência temos os arquivos que compõem a aplicação web, o JavaScript app.JS, o HTML index.html e o CSS style.css.

Por ultimo, temos os arquivos texto README e LICENSE.

```
📂 Desafio-amigo-secreto
 ├── 📁 assets
 │   ├── 📸 amigo-secreto.png
 │   ├── 📸 play_circle_outline.png
 │   ├── 📸 desafio-amigo-secreto.gif
 ├── 🟨 app.js
 ├── 🟠 index.html
 ├── 📄 LICENSE.txt
 ├── 📄 README.md
 ├── 🔵 style.css
```

## 🤝 Contribuição

Se deseja contribuir com o projeto, siga estas etapas:

1. Faça um fork do projeto.
2. Crie uma nova branch: `git checkout -b minha-feature`.
3. Faça as alterações desejadas e commit: `git commit -m 'Minha contribuição'`.
4. Envie as alterações: `git push origin minha-feature`.
5. Abra um Pull Request.

## 📜 Licença

Este projeto está sob a licença MIT - consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📩 Contato

Caso tenha dúvidas ou sugestões, entre em contato:

- **Nome:** Alexander Martins
- **Email:** Martins.adm.tf@gmail.com
- **LinkedIn:** [linkedin](https://www.linkedin.com/in/alexander-martins-118562210/)
- **GitHub:** [usuario](https://github.com/Alexander-Martins)

---