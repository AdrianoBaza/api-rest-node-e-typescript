import { Router } from "express"
import { StatusCodes } from "http-status-codes";
import { CidadesControllers } from "./../controllers";

const router = Router()

router.get('/', (req, res) => {
  return res.send('Olá Dev')
})

router.post('/cidades', (CidadesControllers.create))

export { router }