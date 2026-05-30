
# Aula 3 React

Projeto desenvolvido utilizando React com a ferramenta Vite durante a Aula 3 da disciplina de Desenvolvimento Front-End.

## Objetivo

Praticar os conceitos fundamentais do React, incluindo:

* JSX
* Componentes funcionais
* Composição de componentes
* Expressões JavaScript no JSX
* Estilização com CSS
* Estrutura de aplicações React com Vite

## Atividades Implementadas

### Atividade 01

Criação do projeto React utilizando a ferramenta Vite, executando o código: npm create vite@latest.

### Atividade 02

Instalação das dependências e execução do servidor de desenvolvimento.

### Atividade 03

Criação do componente funcional `Saudacao` colocando essa mesagem "Olá, turma da Aula 3! introduindo" e importando no App.jsx.

### Atividade 04

Nesta atividade, foram utilizadas constantes, funções e expressões JSX para exibir dinamicamente o título, o progresso de conclusão dos tópicos e a quantidade de tópicos restantes no componente `Cartao`.

### Atividade 05

Nesta atividade, foram utilizadas expressões JSX para exibir informações dinâmicas no componente `Cartao`, incluindo variáveis, operações matemáticas e chamadas de função para calcular e mostrar o progresso e os tópicos restantes.

### Atividade 06

Nesta atividade, foram aplicados estilos inline no componente Cartao utilizando `style={{ }}`, além do uso de `className` e propriedades em `camelCase`. Também foi criada uma variável de estilo reutilizável para personalizar elementos da lista.

### Atividade 07

Nesta atividade, os estilos inline do componente `Cartao` foram substituídos por uma folha de estilo externa (`Cartao.css`). Foram criadas classes CSS para estilizar o cartão, o título e os itens da lista, utilizando `className` para aplicar os estilos definidos no arquivo CSS.

### Atividade 08

Criação do componente reutilizável `Cabecalho`, responsável por exibir o título da aplicação e um subtítulo. O componente foi estilizado com CSS e integrado ao `App.jsx`, compondo a interface juntamente com os componentes `Saudacao e Cartao` dentro de um único `Fragment`.

### Atividade 09

Análise da estrutura de inicialização do React, compreendendo como a aplicação é renderizada a partir do fluxo `index.html → main.jsx → App.jsx → DOM`. Foram realizados testes alterando o identificador do elemento raiz (`root`) para verificar como o React conecta os componentes à página e como o método `createRoot()` monta a aplicação no navegador.

### Atividade 10

Desenvolvimento de uma página pessoal utilizando React e Vite, aplicando os conceitos de JSX, componentes funcionais, composição de componentes e estilização com CSS externo. A aplicação foi estruturada com os componentes `Cabecalho, Saudacao, Cartao e Rodape`, incluindo informações pessoais e acadêmicas, além do uso de expressões JSX para exibição dinâmica de dados. O projeto foi renderizado através do `createRoot()` em `main.jsx` e executado em `React.StrictMode`.

## Tecnologias Utilizadas

* React
* Vite
* JavaScript
* CSS

## Como executar o projeto

```bash
npm install
npm run dev
```

depois acesse o pelo URL do projeto, utiliznaodo comando npm run dev.

