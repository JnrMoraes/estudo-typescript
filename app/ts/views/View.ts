export abstract class View<T> {
  protected _elemento: JQuery;
  private _scalping: boolean;

  // parâmetro opcional temque ser sempre o ultimo do constructor
  constructor(seletor: string, scalping?: boolean) {
    this._elemento = $(seletor);
    this._scalping = scalping
  }

  update(model: T) {
    let template = this.template(model);
    if(this._scalping)
      template = template.replace(/<script>[\s\S]*?<\/script>/, '');
    this._elemento.html(template);

    this._elemento.html(this.template(model));
  }

  abstract template(model: T): string;
}
