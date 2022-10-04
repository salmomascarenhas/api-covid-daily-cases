

  # Backend Challenge 🏅 2022 - Covid Daily Cases
  API desenvolvida para o desafio do processo seletivo da empresa BeTruck na vaga de JavaScript Backend Developer.
  
## Sobre o desafio
API Rest que utiliza o histórico de casos de Covid ([Kaggle](https://www.kaggle.com/yamqwe/omicron-covid19-variant-daily-cases))  para exibir o número de casos por país, dia e variante.

## Rodando a aplicação em ambiente Local Linux
### Instalando o Docker ###

- Instalar docker - https://docs.docker.com/engine/install/ubuntu/

- Os comandos `docker` devem ser rodados com sudo, para roda-los sem sudo, siga os seguintes passos:

    - Passo 1: Adicione o grupo `docker` se ele ainda não existir:

    
    ```bash
    $ sudo groupadd docker
    ```
  
    - Passo 2: Adicione o usuário conectado $USER ao grupo `docker`:
     
    ```bash
    $ sudo gpasswd -a $USER docker
    ```
  
    - Passo 3: Reinicie o `docker daemon`:
    
     ```bash
    $ sudo service docker restart 
    ```
  
    - Observação: Se você está no Ubuntu 14.04-15.10, use `docker.io` em vez de `docker`:
    
    ```bash
    $ sudo service docker.io restart
    ``` 

    - Passo 4: Mude o grupo para  `docker``:
    
     ```bash
    $ newgrp - docker
    ```
    
- Verificar instalação do Docker

```bash
$ docker --version
Docker version 20.10.18, build b40c2f6
```

- Instalar Docker Compose - https://docs.docker.com/compose/install/

-  Verificar instalação do Docker Compose

```bash
$ docker compose version
Docker Compose version v2.10.2
```

### Variáveis de ambiente ###

- Para executar a  aplicação será necessário definir algumas variáveis de ambiente. Na raiz do projeto existe um arquivo de exemplo chamado **.env.example** contendo as variáveis abaixo:



```bash
API_PORT=3000
CORS_ALLOWED_ORIGINS=http://localhost:3000
POSTGRES_HOST=
POSTGRES_DATABASE=
POSTGRES_USERNAME=
POSTGRES_PORT=5432
POSTGRES_PASSWORD=
```

- **Observação**: Este projeto foi desenvolvido utilizando o banco de dados [PostgreSQL do Heroku](https://elements.heroku.com/addons/heroku-postgresql) e com SSL.  Para se conectar a um banco local, primeiro é necessário ir no arquivo **index.ts** do caminho **./src/database/** e alterar a linha **13 para false** e comentar as linhas **18 até 23**, removendo o requisito do banco ter um certificado SSL.

- Após preencher as variáveis de ambiente, siga o tutorial.

### Iniciando e Parando o Ambiente ###

- Na pasta raíz do projeto execute o comando:

```bash
$ docker compose up -d
```

- Após criar a rede, os volumes, construir as imagens e rodar os scripts do entrypoint de cada _container_ , será apresentado no final do log estas informações:

```bash
[...]
[+] Running 2/2
⠿ Network api-covid-daily-cases ... Created
⠿ Contaner api-covid-daily-cases    ... Started
```
- observação: a instalação de tudo pode demorar alguns minutos.


- Após a instalação a aplicação poderá ser acessada: **http://localhost:3000** e  **OPEN API** em **http://localhost:3000/docs**

- observação: certifique-se de que não exista nenhum processo rodando na porta: **3000**

- Você pode fazer a verificação seguindo os seguintes passos:

    - Passo 1: Rode o seguinte código, informando uma das portas, por exemplo:

    ```bash
    $ sudo lsof -i :3000
    ```

    - A saída será nesse formato:

    ```bash
    COMMAND     PID USER   FD   TYPE  DEVICE SIZE/OFF NODE NAME
    docker-pr 14817 root    4u  IPv6 1776586      0t0  TCP *:postgresql (LISTEN)
    ```

    - Passo 2: Mate a aplicação utilizando o `PID` informado no comando anterior:
    
    ```bash
    $ sudo kill -9 14817
    ```

- Para parar a execução do ambiente, basta entrar na pasta raíz e executar o comando `docker compose down`, esse é o resultado esperado:

```bash
$ docker-compose down
[+] Running 2/2
⠿ Container api-covid-daily-cases ... Removed
⠿ Network api-covid-daily-cases ... Removed
```

### Ambiente ###

O docker-compose é o orquestrador de _containers_ do Docker, ou seja, ele é o responsável pela criação de _containers_ de modo automatizado, a partir de configurações prévias, com o objetivo de se possuir uma infraestrutura que possa ser commitada e versionada.

As configurações deste ambiente estão presentes no arquivo `./docker-compose.yml` e elas são responsáveis por gerar o ambiente de desenvolvimento para uma máquina com S.O. Linux.

Os _containers_ gerados são:

```text
 - NodeJS (aplicação)
 - Postgres (apenas descomentando linhas **10 a 20** do arquivo .docker-compose.yaml)
```
### Endpoints ###

- Retorna um Status: 200 e uma Mensagem "Backend Challenge 2021 🏅 - Covid Daily Cases":

```text
[GET]/ 
```

- Lista todos os registros da base de dados no dia selecionado, agrupados por país e separados por variante.

```text
[GET]/cases/:date/count
```

- Lista todos os registros da base de dados, retornando a soma dos casos registrados de acordo desde o início do dataset até a data selecionada, agrupados por país e separados por variante.

```text
[GET]/cases/:date/cumulative
```

- Listar as datas disponíveis no dataset

```text
[GET]/dates
```

### Dependências ###

#### NodeJS:

+ [NodeJS 16.17.0](https://nodejs.dev/)
+ [TypeScript](https://www.typescriptlang.org/)
  - Linguagem JavaScript com tipos.
+ [ExpressJS](https://expressjs.com/pt-br/)
  - Framework web NodeJS
+ [Celebrate](https://www.npmjs.com/package/celebrate)
  - Biblioteca middleware para validação de dados.
+ [TypeORM](https://typeorm.io/)
  - ORM Typescript para interface com banco de dados postgreSQL.
+ [Fast-CSV](https://c2fo.github.io/fast-csv/)
  - Biblioteca Stream para parsear CSV.
+ [Open API 3](https://swagger.io/)
  - Biblioteca para documentar API Rest.
 + [ApiCache](https://github.com/kwhitley/apicache)
  - Biblioteca simples para cache de endpoints.

#### Postgres:
+ [PostgreSQL 13](https://www.postgresql.org/)


## Referência

> [README REFERÊNCIA](https://lab.coodesh.com/salmo/covid-daily-cases-20220127/-/blob/main/README.md)

> This is a challenge by [Coodesh](https://coodesh.com/)
