# Gerenciamento Aluguel Livros API

Esta é a API para o sistema de **Gerenciamento de Aluguel de Livros**. A API foi desenvolvida com **Node.js**, utilizando **Express**, **Sequelize**, **Sequelize-CLI**, e **MySQL**, e serve como backend para a interface web desenvolvida com **Next.js**, **Tailwind CSS** e **Shadcn UI**.

A API fornece endpoints para a gestão de **livros**, **usuários**, e **aluguéis**, permitindo o gerenciamento completo das operações de aluguel de livros.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework web para Node.js.
- **Sequelize**: ORM para interagir com o banco de dados MySQL.
- **Sequelize-CLI**: Ferramenta de linha de comando para facilitar as migrações e outras operações do Sequelize.
- **MySQL**: Banco de dados relacional para armazenamento de dados.
- **dotenv**: Gerenciamento de variáveis de ambiente.
- **nodemon**: Ferramenta para reiniciar o servidor automaticamente durante o desenvolvimento.

## Instalação

Siga os passos abaixo para configurar a API localmente:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/SEU_USUARIO/gerenciamento-aluguel-livros-api.git

   ```

2. **Navegue até o diretório da API:**

```bash
  cd gerenciamento-aluguel-livros-api

```

3. **Instale as dependências:**

```bash
  npm install

```

4. **Crie um arquivo `.env` no diretório raiz do projeto e adicione suas variáveis de ambiente para conexão com o banco de dados. Um exemplo de `.env` seria:**

```bash
  DB_HOST=localhost
DB_PORT=3306
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=gerenciamento_livros

```

## Criação do Banco de Dados
- Antes de rodar as migrações, você precisa criar o banco de dados e a visão VW_DASHBOARD.

1. **Crie o banco de dados com o seguinte comando SQL no MySQL:**

```bash
  CREATE DATABASE gerenciamento_livros;

```
- Substitua `gerenciamento_livros` pelo nome do banco de dados, se necessário.


2. **Após criar o banco de dados, você precisa criar a visão `VW_DASHBOARD`. Isso pode ser feito com o seguinte comando SQL:**

```bash
  CREATE VIEW VW_DASHBOARD AS
SELECT 
    livros.id AS livro_id,
    livros.titulo AS livro_titulo,
    COUNT(alugueis.id) AS total_alugueis
FROM livros
LEFT JOIN alugueis ON alugueis.livro_id = livros.id
GROUP BY livros.id;

```
- Essa visão agregará a quantidade total de aluguéis por livro, sendo útil para a sua dashboard.


## Rodando as Migrações
- Após criar o banco de dados e a visão, rode o comando abaixo para aplicar as migrações no banco:

```bash
  npx sequelize-cli db:migrate

```
- Este comando irá aplicar todas as migrações criadas, configurando a estrutura do banco de dados conforme as tabelas definidas.


## Iniciando a API

- Após realizar as configurações e rodar as migrações, inicie o servidor de desenvolvimento da API com o comando:

```bash
  npm run dev

```
- A API estará acessível em http://localhost:3000.

## Contribuição

1. Faça um fork deste repositório.
2. Crie uma branch para suas modificações (git checkout -b minha-modificacao).
3. Faça commit das suas alterações (git commit -am 'Adicionando nova funcionalidade').
4. Envie para o repositório remoto (git push origin minha-modificacao).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

Esse `README.md` fornece todas as informações necessárias sobre como usar, instalar e contribuir para o seu projeto, além de explicar claramente a funcionalidade principal do sistema.

---

Feito com ❤️ por [Pedro Henrique](https://github.com/Peedrohenrique)
