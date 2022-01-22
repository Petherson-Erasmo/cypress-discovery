# Cypress Discovery

## 👨‍💻 Sobre o projeto 💻

Script de Automação do curso Cypress Discovery da escola QA Ninja ministrado pelo Fernando Papito. É uma automação da camada E2E de um site fictício chamado Buger-eats.
O curso propõe usar Page Object invés de usar o *custom commands*.

## Pré-Requisitos para rodar o Cypress na máquina local

* NodeJs instalado 
* Chrome Browser

### Comandos

Para instalar o Cypress é preciso o rodar o seguinte comando 

``` npm install cypress ```

Para abrir a interface do cypress basta rodar o comando 

``` npx cypress open ```

Exemplo da interface versão 9.1.1 
![cypress 1](https://user-images.githubusercontent.com/53876624/150656825-94bec729-fa29-41cc-955f-1f6430da3c1a.png)

Após abrir a interface de usuário é possível escolher o navegador que deseja que os testes rode e rodar todos os cenários criados de uma só vez clicando em *Run 2 integration specs*

Caso você queria rodar os testes no modo *headless* basta rodar o seguinte comando

``` npx cypress run ```

> Obs: nesse caso não irá abrir a interface 

## Pré-Requisitos para rodar o Cypress com um contêiner

* Docker-desktop instalado 

Como uma alternativa para não instalar o NodeJs e o Cypress na sua máquina é possível rodar o cypress dentro de um contêiner.

Comando para construir uma imagem

``` docker build -f Dockerfile -t cypress .```

Comando para rodar a imagem gerada 

``` docker run cypress ```

> Caso queira saber mais sobre o cypress acesse o site <a href='https://www.cypress.io/'>cypress.io</a> ou a sua <a href='https://docs.cypress.io/guides/getting-started/installing-cypress'>documentação.</a>