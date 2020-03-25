const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);


/*
 * Rota / Recurso
 */
/*
 * Métodos HTTP:
 * 
 * Get: Buscar/Listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após o simbolo "?" (filtros, paginação)
  * Route Params: Parâmetros utilizados para identificar recursos 
  * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
  */

  /**
   * Tipos de BDD:
   * 
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, MS SQL Server.
   * NoSQL: MongoDB, CouchDB, etc...
   */

   /**
    * Driver: SELECT * FROM user
    * Query Builder: table('users').select('*').where()  
    */




