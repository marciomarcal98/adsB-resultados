# 28/02

## Os 10 mandamentos do ReactJS

1º npm create vite@latest

2º Escolher o nome do projeto

3º Escolher sempre o React

4º Escolher o Javascript

5º Arrastar a pasta do projeto criada para o meio do VS Code (isso vai fazer com que a pasta seja aberta sozinha)

6º Excluir o seguinte:
    pasta public
    o arquivo index.css de dentro do src
    o arquivo App.css de dentro do src

7º Reescrever o arquivo App.jsx

8º Apagar o import do index.css de dentro do main.jsx (geralmente a linha 4)

9º No terminal, npm install (ou npm i) => serve para instalar as dependências do projeto que estão no package.json

10º Para executar o projeto, npm run dev

## Atalhos úteis
ctrl + ' => abrir o terminal

## import e export
export default App => import App from './App'

export function App() => import { App } from './App'

As importações devem ser feitas sempre no início de cada arquivo.

## Componentes
Um componente é uma função que retorna HTML.

Geralmente os componentes são colocados dentro de uma pasta chamada *components* que ficará dentro de *src*.

Todo componente começará com letra maiúscula.

## Elementos HTML

<strong></strong>
    * Elemento para textos
    * Deixa o texto em negrito
    * Dá importância ao texto

<span></span>
    * Elemento genérico para textos
    * Geralmente utilizado para textos curtos ou para marcar palavras em algum parágrafo

## Props
Maneira que podemos utilizar para passar informações de um elemento pai para o elemento filho.

As props são passadas em formato de objeto.

Abaixo tempos o componente Rectangle que recebe duas propriedades, type e number
    <Rectangle type={"Reaction"} number={80} />

No arquivo do componente Rectangle, recebemos as propriedades assim:
```js
    export function Rectangle(props) 
```

*props* é um objeto que contém as propriedades type e number. Para utilizá-las, basta acessá-las como um objeto:
```js
    return (
        <div>
            <span>{props.type}</span>
            <strong>{props.number} / 100</strong>
        </div>
    )
```

## Desestruturação
Retirar de dentro de um objeto as suas propriedades.

Ainda pensando no Rectangle do exemplo das props, podemos desestruturar as propriedades que virão do componente pai:
```js
    export function Rectangle({ type, number }) 
```

Como sabemos as propriedades que virão, basta colocar as chaves no lugar onde ficaria o nome do objeto e escrever o nome de cada uma das propriedades que queremos utilizar.
Assim, não precisamos mais nos referenciar a elas como props:
```js
    return (
        <div>
            <span>{type}</span>
            <strong>{number} / 100</strong>
        </div>
    )
```

## Propriedades do CSS
margin => espaço entre os elementos (espaço externo)

padding => espaço interno do elemento

## Extensões úteis
Material Icon Theme => ícones mais bonitos


# 01/03

1º entrar no canvas

2º baixar os 4 ícones da pasta resultados

3º colocar os ícones dentro da pasta *assets*

## Navegação
./ => na mesma pasta
../ => voltar uma pasta