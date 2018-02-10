function isFunction(fn) {
  return typeof fn === 'function';
}

export function DynamicComponentUnsubscribeOnDestroy() {
  return function (constructor: Function) {
    const original = constructor.prototype.ngOnDestroy;

    constructor.prototype.ngOnDestroy = function () {
      for (const prop in this) {
        if (this.hasOwnProperty(prop)) {
          const property = this[prop];
          if (property && isFunction(property.unsubscribe)) {
            property.unsubscribe();
          }
        }
      }

      if (original && isFunction(original)) {
        original.apply(this, arguments);
      }
    };
  };
}
