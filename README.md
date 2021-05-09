# GoTeam

### Descrição:
O GoTeam é um aplicativo desenvolvido por mim e mais outros dev's (Bernardo Ventura e João Luka) durante a última fase do processo seletivo da EJCM - Consultoria. A principal 
ideia do projeto gira em torno do jogo League of Legends. O objetivo do aplicativo é ajudar jogadores a encontrar outros jogadores do mesmo nível de habilidade e rank para
jogar partidas ranqueadas e também ajudar a criar uma comunidade mais amigável e menos tóxica. O GoTeam é gratuito e o único requisito para usá-lo é que o(a) usuário(a) tenha
uma conta Riot.

**Status do projeto:** Finalizado.

![Badge](https://img.shields.io/badge/Ionic-1572B6?style=for-the-badge&logo=ionic&logoColor=white)
![Badge](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Badge](https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)
![Badge](https://img.shields.io/badge/MySQL-316192?style=for-the-badge&logo=mysql&logoColor=white)

### Tabela de Conteúdo:

 1. [Tecnologias utilizadas](#tecnologias-utilizadas)
 2. [Instalação](#instalação)
 3. [Configuração](#configuração)
 4. [Uso](#uso)
 5. [Autores](#autores)
 6. [Notas pessoais](#notas-pessoais)

### Tecnologias usadas:
**Aplicativo mobile:**
- Ionic
- Angular

**Backend:**
- Laravel

**Linguagens:**
- Typescript
- Javascript
- PHP

### Instalação:
Após clonar este projeto em seu computador e tendo todos os pré-requisitos instalados, faremos o setup em cada uma das pastas.

**Pasta *front*:**

Nesta pasta, basta rodar o seguinte comando através do terminal:

``` bash
$ npm install
```

**Pasta *back*:**

Nesta pasta, basta rodar o seguinte comando através do terminal:

``` bash
$ composer install
```

### Configuração:
Neste tópico, será apenas necessário fazer a configuração do backend PHP.

Sendo assim, acesse a pasta 'back'. Nela, seguiremos os seguintes passos:

1. Utilizando algum banco de dados relacional, como MySQL, criaremos uma nova database, de preferência na codificação 'utf8'.

2. Feito isso, copiaremos o arquivo **.env.example** sob o nome de **.env**.

    ***Obs:** Podemos fazer esse mesmo passo digitando o seguinte comando no terminal:*
    ``` bash
    $ cp .env.example .env
    ```

    Dentro deste arquivo, serão setadas as informações de usuário, host, senha e demais configurações que envolvam o banco de dados.

3. Com o banco criado e retornando à pasta backend, rodaremos os seguintes comandos através do terminal:
    ``` bash
    $ php artisan key:generate
    ```

    ``` bash
    $ php artisan migrate:fresh --seed
    ```

    ``` bash
    $ php artisan passport:install
    ```

### Uso:
Após a instalação e configuração, serviremos o projeto em cada uma das pastas.

**Pasta *front***

Nesta pasta, basta rodar o seguinte comando através do terminal:

``` bash
$ ionic serve
```

Para visualizar o frontend mobile, basta acessar [http://localhost:8100/](http://localhost:8100/) pelo seu navegador.

**Backend PHP (*pasta 'backend'*):**

Nesta pasta, basta rodar o seguinte comando através do terminal:

``` bash
$ php artisan serve
```

Para visualizar o backend PHP, basta acessar [http://localhost:8000/](http://localhost:8000/).

### Autores:
> **Período:** Desenvolvimento
* Gerente - Luciana Vitória
* Tech Lead - Mileny Loyolla
* Tech Lead - Nayara Gomes
* Dev Front-end - Bernardo Ventura
* Dev Front-end - Pedro Ferreira
* Dev Back-end - João Luka

### Notas pessoais:
Eu desenvolvi as seguintes pages, components e services:
- Cadastro (page)
- Criar-post (page)
- Editar-post (page)
- Eventos (page)
- Home (page)
- Listar-todos-usuarios (page)
- Card-evento-destaque (component)
- Card-evento-oficial (component)
- Card-following-post (component)
- Card-post (component)
- Header (component)
- Authentification (service)
- Event (service)
- Post (service)
- Usuario (service)
