Index.js

- [ ] constante app recebe express()
- [ ] app.use para CORS, express.json() e cada rota de cada entidade, também para chamar rota de documentação com Swagger
- [ ] app.listen para rodar o servidor

Routes/

- [ ] cada entidade possui seu arquivo de rota
- [ ] importação da camada de controllers o início do arquivo
- [ ] routes recebe o express.Routes()
- [ ] para cada endpoint chamar o método específico com a rota e a chamada da função de controller

Controllers/

- [ ] cada entidade possui seu arquivo de controller
- [ ] importar as funções de services no início do arquivo
- [ ] uma função para cada rota, dentro da função passar parâmetro de req, res
- [ ] receber o dado dentro da req (body, params, query..)
- [ ] controller responsável pela resposta da requisição (podendo separar ou não as respostas de erro em middlewars)
- [ ] chamar próxima camada passando os parâmetros (função service)

Services/

- [ ] cada entidade possui seu arquivo de service
- [ ] importar as funções de repository no início do arquivo
- [ ] recebe na função os parâmetros que vêm de controller
- [ ] responsável pela lógica da rota, lançar erros para serem recebidos para controller dar a resposta
- [ ] chamar próxima camada passando os parâmetros(função repository)

Repositories/

- [ ] cada entidade possui seu arquivo de repository
- [ ] importar o Prisma Client no início do arquivo
- [ ] criar funções que recebem os parâmetros e passar a query para acessar o banco a partir do prisma.

---

prisma/schema.prisma

- [ ] possui configuração com dados do banco
- [ ] descrição das models (entidades/tabelas do banco)

migrations/

- [ ] alterações das models guardadas em histórico

middleware/

- [ ] arquivos que são executados entre requisição e resposta
- [ ] authMiddleware - responsável por verificar token JWT
