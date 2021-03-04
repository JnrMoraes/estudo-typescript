System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function throttle(milisegundos = 500) {
        return function (target, propertyKey, descriptor) {
            const metodoOriginal = descriptor.value;
            descriptor.value = function (...args) {
                if (event)
                    event.preventDefault();
                let timer = 0;
                clearInterval(timer);
                timer = setTimeout(() => metodoOriginal.apply(this, args));
            };
            return descriptor;
        };
    }
    exports_1("throttle", throttle);
    return {
        setters: [],
        execute: function () {
        }
    };
});
