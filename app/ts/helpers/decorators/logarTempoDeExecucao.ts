export function logarTempoDeExecucao(emSegundos: boolean = false) {
  return function (
    target: any, //instancia do qual o método decorator foi colocado, nada impede de definir any
    propertyKey: string, // tem o nome do método como string como o decorator esta sendo colocado
    descriptor: PropertyDescriptor //descriptor nos dará acesso ao método que desejamos modificar sua execução, através de descriptor.value.
  ) {
    const metodoOriginal = descriptor.value;

    descriptor.value = function (...args: any[]) {

      let unidade = 'ms'
      let divisor = 1
      if(emSegundos){
        unidade = 's'
        divisor = 1000
        console.log("dentro em Segundos");
      }

      console.log('-- Temporizador --');
      console.log(
        `parâmentros passados para o método ${propertyKey}: ${JSON.stringify(
          args
        )}`
      );
      const t1 = performance.now();
      const retorno = metodoOriginal.apply(this, args);
      const t2 = performance.now();
      console.log(
        `O retorno do método ${propertyKey} é ${JSON.stringify(retorno)}`
      );
      console.log(` O tempo de execução foi de ${(t2 - t1)/divisor} ${unidade}` );
      return retorno;
    };
    return descriptor;
  };
}
