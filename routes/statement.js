import { Router } from "express";
import { addStatement, allStatements, getStatement, updateStatement, deleteStatement } from "../controllers/statement_controller.js";

const statementRouter = Router()

statementRouter.post('/statements', addStatement);

statementRouter.get('/statements', allStatements);

statementRouter.get('/statements/:id', getStatement);

statementRouter.patch('/statements/:id', updateStatement);

statementRouter.delete('/statements/:id', deleteStatement);
export default statementRouter; 