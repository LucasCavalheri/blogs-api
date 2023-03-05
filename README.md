<div align='center'>
  <img width="180px" alt="mysql logo" src="https://cdn-icons-png.flaticon.com/512/4660/4660439.png" />
  <h1>Blogs API</h1>
  <p>
    Uma API RESTful para a produção de conteúdo para um blog onde é possível criar, visualizar, deletar e atualizar posts e usuários, usando banco de dados MySQL e arquitetura MSC (model-service-controller).
  </p>
</div>

<br /><hr /><br />

## 🖥️ Tecnologias
Este projeto foi desenvolvido usando as seguintes tecnologias:

-  **MySQL e Sequelize**, para criação e gerencialmente do banco de dados;
-  **Express** para criação de rotas e requisições;
-  **Docker** para conteinerização de toda a aplicação;
-  **ESLint** para padronização de código;
-  **Git** para versionamento de código;
-  **Visual Studio Code** para edição de código.

## ℹ️ Como usar
Para testar este projeto, precisará das seguintes ferramentas instaladas:

- Git
- Docker
- Docker Compose

<br/>

```bash
# Clone o repositório
git clone https://github.com/LucasCavalheri/blogs-api.git
# Inicie o Docker Compose
docker-compose up -d
# Entre no container
docker exec -it blogs_api bash
# Instale as dependências
npm install
# Crie e popule o banco de dados
npm run prestart && npm run seed
# Inicie o servidor
npm run debug
```

<br /><hr /><br />

<p align="center">
  Criado e desenvolvido por <b>Lucas Cavalheri</b>
  <br/><br/>

  <a href="https://www.linkedin.com/in/lucas-cavalheri">
    <img alt="linkedIn" height="30px" src="https://i.imgur.com/TQRXxhT.png" />
  </a>
  &nbsp;&nbsp;
</p>