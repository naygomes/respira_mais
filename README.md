<p align="center">
    <img src="./src/assets/logotipo.png" height="70" alt="logo"/>
    <br/>
</p>
<br/>
<br/>

  
![Badge](https://img.shields.io/badge/Next.js-1b1d20?style=for-the-badge&logo=nextjs&logoColor=white)
![Badge](https://img.shields.io/badge/Tailwind-00bcff?style=for-the-badge&logo=tailwind&logoColor=white)


## O que é o Respira +?
O Respira + é um projeto que busca manter o carioca informado sobre a qualidade de ar da sua cidade através de seu mapa interativo e seus dados.

## Status do projeto
  <h4 align="center"> 
	🚧  Projeto em constante evolução...  🚧
  </h4>

## Conteúdo
 * Pré-requisitos
 * Como Rodar o projeto
 * Interface WEB
 * Autora
 
## Pré-requisitos

- Instalação Node

- Clone o projeto em seu computador:
``` bash
$ git clone https://github.com/naygomes/respira_mais.git
```
## Decisões do projeto
- *Framework*: Para melhor versatilidade e gerenciamento de rotas e estados, utilizou-se o framework Next.js;
- *Estilização*: Para maior qualidade de UI e versatilidade, utilizou-se o Tailwind CSS para a estilização, com poucas complementações usando CSS puro;
- *Linguagem de programação*: Utilizou-se Typescript para toda a parte lógica, visando trazer mais confiabilidade e qualidade para o código;
- *Mapa interativo*: Utilizou-se o Leaflet/React-leaflet, uma ferramenta simples, potente e completa para a construção de mapas interativos;
- *Gráficos*: Para exibir os gráficos e exibir os dados com maior clareza e de forma simples, utilizou-se a ferramenta de código aberto Chart.js.

## Como Rodar o projeto

+ Estando dentro da pasta 'respira_mais', execute o seguinte comando no terminal:
``` bash
$ npm install
```
+ Agora, faça uma cópia do arquivo *.env.example* e renomeie-o para *.env* ou execute o seguinte comando no terminal:
``` bash
$ cp .env.example .env
```
+ Abra o arquivo *.env* e, no campos existentes, adicione os seguintes valores:
``` bash
NEXT_PUBLIC_HOST_MAP='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
NEXT_PUBLIC_HOST_API='https://67e2530e97fc65f535357469.mockapi.io'
```
+ Por fim, execute o seguinte comando para servir o projeto:
``` bash
$ npm run dev
```

O projeto foi desenvolvido para ser um sistema web versátil, por isso pode ser acessado de qualquer dispositivo, desde smartphones à monitores de alta resolução. Entretanto, para uma experiência mais completa, recomenda-se a navegação em telas a partir de 720p de largura.

---
## Autora
 <img style="border-radius: 50px;" src="./frontend/src/assets/nayara.jpeg" width="100" alt="foto da autora"/>
 <br />
 
 Nayara Gomes<br/>
 <sub><b>Desenvolvedora Pleno</b></sub>

[![Linkedin Badge](https://img.shields.io/badge/-Nayara-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/nayara-gomes-15727756/)](https://www.linkedin.com/in/nayara-gomes-15727756/) 
[![Gmail Badge](https://img.shields.io/badge/-nayara.gomes13@poli.ufrj.br-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:nayara.gomes13@poli.ufrj.br)](mailto:nayara.gomes13@poli.ufrj.br)

