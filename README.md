
# Happy
![GoFinances](https://i.imgur.com/SKpHPYi.png)

### Sobre
Happy é uma aplicação que permite que administradores de orfanatos cadastrarem sua unidade informando localização, instruções de visitação, contato e horário de funcionamento, assim todos podem encontrar com mais facilidade e agendar uma visita. O design do projeto foi originalmente desenvolvido pela Rocketseat em um evento e disponibilizado para o público.

### Tecnologias:

- Typescript
- NodeJS
- ReactJS
- TypeORM

### Instruções:

#### Backend:
1. Baixe e instale o [Docker](https://www.docker.com/get-started) e crie um container com o  Postgres.
	```
	docker run --name happy -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
	```
	após criar o container, dentro dele crie um banco de dados com o nome "gofinances", utilize o software que preferir para gerenciar o banco, recomento o [DBeaver](https://dbeaver.io/).
	
2. Vá até a pasta "./backend" e utilize o comando abaixo para baixar todas as dependências do projeto.
	```
	yarn
	```
	e em seguida o comando abaixo para criar o banco de dados e startar o servidor respectivamente:
	```
	yarn typeorm migration:run
	```
	```
	yarn dev:server
	```

#### Front-end:

1. Entre no diretório "./web"  e utilize os comandos abaixo para baixar as dependências e startar o projeto respectivamente.
	```
	yarn
	```
	```
	yarn start
	```
	