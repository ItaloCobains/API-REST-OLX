<h1 align="center">
    API REST - OLX 🏪
</h1>

<p align="center">
  <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rodando">Rodando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#license">Licença</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

<a id="tecnologias"></a>

## Tecnologias 🖥️

<div align="cemter">
    <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white" />
    <img src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white" />
</div>

<a id="projeto"></a>

## Projeto 📕

Um projeto fictício que tem como função simular o Backend da OLX.

Construindo em NodeJS com TypeScript, rodando no servidor local

<a id="rodando"></a>

## Rodando o App 🚀

Com o arquivo .env.example, renomeie o mesmo para .env e preencha as informações que são solicitadas:

```
# APP
PORT=

#url nativa, exemplo: http://localhost:5000
BASE=

# MYSQL
MYSQL_DB=
MYSQL_USERNAME=
MYSQL_PASSWORD=
MYSQL_PORT=
```

Tenha em mente que você possua:

    - Um editor de código
    - NodeJS
    - Servidor MySQL ( Caso for rodar nativamente )


### Rodando Nativamente 🌅

1. Primeiro instale todas as dependências, utilize o gerenciador de pacotes a seu gosto.

```bash
npm install
# ou
yarn install
```

2. Lembre-se de ter um servidor MYSQL rodando na sua maquina.

3. Agora abra o diretório atual e digite no terminal:

```bash
npm run dev
# ou
yarn dev
```

<a id="como-contribuir"></a>

## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

<a id="license"></a>

### 🔖 Licença

Caso queira conferir a licença do projeto, só olhar esse arquivo [LICENSE](./LICENSE)