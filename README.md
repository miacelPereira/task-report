<h1 align="center"> Task Report </h1>

Task Report é um gerenciador de tarefas e gerador de relatórios com base nas tarefas e seus status.

## Dependências

- Node.js
- Mysql
- Git
- Yarn - _opcional_

## Modo de usar

- Clone o projeto com o comando: `git clone https://github.com/ROiPinheiro/task-report.git`
- Navegue até a pasta `database` e execute o script `SQL` para criar o banco-de-dados.

### Back-End

- Navegue até o diretório `./backend`.
- Altere os arquivos `.env.example` do diretório raiz e do `./prisma` para `.env` e preencha as variáveis.

Após isso, execute os seguintes comandos:

- `yarn` ou `npm i` para instalar as dependências.
- `yarn gen` para criar a _mágica_ do `prisma2`.
- `yarn dev` para executar o servidor `express`.

#### Observações

O _Back-End_ é dependente do banco-de-dados, garanta que ele esteja funcionando corretamente e que a _string_ de conexão esteja correta, para que ele possa ser utilizado corretamente.

Todos os comandos feitos com `yarn` podem ser feitos com o `npm` substituindo o `yarn` por `npm run` com exceção do comanda de instalação das dependências.

Caso faça qualquer alteração na estrutura do banco de dados, execute `yarn intro` ou `npm run intro` para que o `prisma2` gere novamente as _models_.

### Front-End

- Navegue até o diretório `./frontend`.
- Execute o comando `yarn` ou `npm i` para instalar as dependências.
- Execute o comando `yarn start` ou `npm start` para executar o servidor.

## Parceiros do projeto

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/roipinheiro">
        <img
          src="https://avatars3.githubusercontent.com/u/38002838?s=400&v=4"
          width="75px;"
          alt="Rafael Oliveira"
        />
        <br />
        <sub><b>Rafael Oliveira</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/miacelpereira">
        <img
          src="https://avatars0.githubusercontent.com/u/38002823?s=400&v=4"
          width="75px;"
          alt="Micael Pereira"
        />
        <br />
        <sub><b>Micael Pereira</b></sub>
      </a>
    </td>
  </tr>
</table>
