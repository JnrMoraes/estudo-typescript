import { Negociacao } from "./Negociacao";

export class Negociacoes {
  private _negociacoes: Negociacao[] = [];

  adiciona(negociacao: Negociacao) {
    this._negociacoes.push(negociacao);
  }
// typescript vê concat pode fazer com qualquer tipo de elemento, tipando o array como Negociacao ele para 
  paraArray(): Negociacao[] {
    return ( [] as Negociacao[]).concat(this._negociacoes);
  }
}