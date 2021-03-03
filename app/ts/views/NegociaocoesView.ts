class NegociacoesView {

  private _elemento: Element;

  constructor(seletor: string){
    this._elemento = document.querySelector(seletor);
  
  }

  update(modelo: Negociacoes): void{
    this._elemento.innerHTML = this.template(modelo);

  }

  template(model: Negociacoes): string {
    return `
    <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
              ${model.paraArray().map(negociacao=>
                  `
                    <tr>
                        <th>${negociacao.data.getDate()}/${negociacao.data.getMonth()+1}/${negociacao.data.getFullYear()}</th>
                        <th>${negociacao.quantidade}</th>
                        <th>${negociacao.valor}</th>
                        <th>${negociacao.volume}</th>
                    </tr>
                  `
                  // string em branco após join para não colocar uma virgula como separador
              ).join('')}  
            </tbody>

            <tfoot>
            </tfoot>
        </table>
    `;
  }
}
