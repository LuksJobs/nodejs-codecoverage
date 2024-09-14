# Aplicação Node.js com MongoDB, Testes Unitários e Cobertura de Código

Este projeto é uma aplicação Node.js que se conecta a um banco de dados MongoDB. Está configurada para executar testes unitários e medir a cobertura de código usando Supertest e SonarQube Scanner. O Docker é utilizado para containerização, garantindo um ambiente consistente.

## Índice

- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Uso](#uso)
- [Executando Testes](#executando-testes)
- [Cobertura de Código](#cobertura-de-código)
- [SonarQube Scanner](#sonarqube-scanner)
- [Licença](#licença)

## Pré-requisitos

Certifique-se de ter os seguintes itens instalados:

- [Node.js](https://nodejs.org/) (v14 ou superior)
- [MongoDB](https://www.mongodb.com/try/download/community) (ou use o Docker para executar o MongoDB)
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## How to Use (Container)

1. Clone o repositório:
```bash
   git clone https://github.com/LuksJobs/nodejs-codecoverage.git
   cd seu-nome-do-repositorio
```
2. Instale as dependências:
bash
   npm install
3. Configure as variáveis de ambiente. Crie um arquivo `.env` no diretório raiz e adicione sua string de conexão do MongoDB:
`MONGODB_URI=mongodb://mongo:27017/seunomebanco`
4. Para executar o MongoDB usando Docker, use o seguinte comando:
```bash
   docker-compose up -d
```
## Rodar Localmente (NPM)

Para iniciar a aplicação, execute:
```bash
   npm install #instalar as dependências do projeto
   npm start #executar o projeto local via npm 
```
Sua aplicação estará rodando em `http://localhost:8000`.

## Executando Testes

Para executar testes unitários, use o seguinte comando:
```bash
   npm test
```
Este comando executará sua suíte de testes usando Jest e Supertest.

## Cobertura de Código

Para verificar a cobertura de código dos seus testes, execute:
```bash
   npm run test:coverage
```
Este comando gerará um relatório de cobertura no diretório `coverage`.

## SonarQube Scanner

Para analisar seu código com o SonarQube, certifique-se de que você tenha um servidor SonarQube em execução. Você pode usar o Docker para rodar o SonarQube localmente:
```bash
   docker run -d --name sonarqube -p 9000:9000 sonarqube
```
Uma vez que o SonarQube esteja em execução, você pode analisar seu projeto com o seguinte comando:
```bash
   npm run sonar-scanner
```