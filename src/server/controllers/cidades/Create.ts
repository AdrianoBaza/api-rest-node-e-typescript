import { Request, Response } from "express";

interface ICidade {
  nome: String
}

export const create = (req: Request<{}, {}, ICidade>, res: Response) => {
  console.log(req.body)
  return res.send('Create!')
}