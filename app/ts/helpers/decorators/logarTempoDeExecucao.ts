export function logarTempoDeExecucao() {
  return function (
    target: any, //instancia do qual o método decorator foi colocado, nada impede de definir any 
    propertyKey: string, // tem o nome do método como string como o decorator esta sendo colocado
    descriptor: PropertyDescriptor //descriptor nos dará acesso ao método que desejamos modificar sua execução, através de descriptor.value.
  ) {
    const metodoOriginal = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const retorno = metodoOriginal.apply(this, args);
      return retorno;

    };
    return descriptor;
  };
}
