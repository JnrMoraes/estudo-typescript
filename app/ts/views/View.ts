export abstract class View<T> {
  protected _elemento: JQuery;
  private _scalping: boolean;

  // refatorado padrao opcional(sempre é undefined) pois "strictNullChecks": true em tsconfig
  constructor(seletor: string, scalping: boolean = false) {
    this._elemento = $(seletor);
    this._scalping = scalping
  }

  update(model: T) {

    const t1 = performance.now();

    let template = this.template(model);
    if(this._scalping)
      template = template.replace(/<script>[\s\S]*?<\/script>/, '');
    this._elemento.html(template);

    this._elemento.html(this.template(model));
    
    const t2 = performance.now();

    console.log(`Tempo de execução é ${t1 - t2} ms`);

  }

  abstract template(model: T): string;
}
