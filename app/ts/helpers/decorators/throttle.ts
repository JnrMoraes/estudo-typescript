export function throttle(milisegundos = 500) {
  return function (
    target: any, //instancia do qual o método decorator foi colocado, nada impede de definir any
    propertyKey: string, // tem o nome do método como string como o decorator esta sendo colocado
    descriptor: PropertyDescriptor //descriptor nos dará acesso ao método que desejamos modificar sua execução, através de descriptor.value.
  ) {
    const metodoOriginal = descriptor.value;

    descriptor.value = function (...args: any[]) {

      let timer = 0;
      if(event)  event.preventDefault();
     clearInterval(timer);
     timer = setTimeout(() => metodoOriginal.apply(this, args))
     
    };
    return descriptor;
  };
}
