// app/ts/services/NegociacaoService.ts

import { NegociacaoParcial, Negociacao } from "../models/index";

export class NegociacaoService {
  obterNegociacoes(handler: ResponseHandler): Promise<Negociacao[]> {
    return <Promise<Negociacao[]>>fetch("http://localhost:8080/dadosx")
      .then((res) => handler(res))
      .then((res) => res.json())
      .then((dados: NegociacaoParcial[]) =>
        dados.map(
          (dado) => new Negociacao(new Date(), dado.vezes, dado.montante)
        )
      )
      .catch((err) => console.log(err));
    throw new Error("Não foi possivel importar as Negociações");
  }
}

export interface ResponseHandler {
  (res: Response): Response;
}
