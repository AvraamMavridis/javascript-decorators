# javascript-decorators

[![npm version](https://badge.fury.io/js/javascript-decorators.svg)](https://badge.fury.io/js/javascript-decorators) [![Build Status](https://travis-ci.org/AvraamMavridis/javascript-decorators.svg?branch=master)](https://travis-ci.org/AvraamMavridis/javascript-decorators) [![Code Climate](https://codeclimate.com/github/AvraamMavridis/javascript-decorators/badges/gpa.svg)](https://codeclimate.com/github/AvraamMavridis/javascript-decorators) [![bitHound Overall Score](https://www.bithound.io/github/AvraamMavridis/javascript-decorators/badges/score.svg)](https://www.bithound.io/github/AvraamMavridis/javascript-decorators) [![bitHound Dependencies](https://www.bithound.io/github/AvraamMavridis/javascript-decorators/badges/dependencies.svg)](https://www.bithound.io/github/AvraamMavridis/javascript-decorators/master/dependencies/npm) [![CocoaPods](https://img.shields.io/cocoapods/l/AFNetworking.svg)]() [![semantic-versioning](https://img.shields.io/badge/semantic%20-versioning-green.svg)]()

Common helpers using es7 decorators.

You can see the [Changelog](https://github.com/AvraamMavridis/javascript-decorators/blob/master/CHANGELOG.md) for the version specific changes.

This project adheres to [Semantic Versioning](http://semver.org/).

![Splitline](http://www.centrosanisidoro.es/wp-content/themes/simplegridtheme/images/banner.png "Splitline")

## How to use

[![NPM](https://nodei.co/npm/javascript-decorators.png?mini=true)](https://nodei.co/npm/javascript-decorators/)

`npm i --save javascript-decorators`

And then to use a decorator just import it:

```js
import { multiInherit } from 'javascript-decorators'

class Manager{
  render(){ return 42; }
  init(){ return 43; }
  t(){ return 44; }
};
class Employee{
  render(){ return 45; }
  mount(){ return 46; }
  t(){ return 47;}
};

@multiInherit( Manager, Employee )
class Person{
  t(){ return 3; }
};

const p = new Person();
p.render(); // 45
p.t(); // 3
p.init(); // 43
```

**More examples [here](https://github.com/AvraamMavridis/javascript-decorators/blob/master/EXAMPLES.md)**

## Decorators

###Class decorators:

+ **@abstract()** :  Make a class "abstract". It cannot be instantiated directly, but it can be inherrited.

+ **@multiInherit( array of classes )** (alias: `@multiExtend()`)  :  Inherit all the methods of the passed classes. If two classes have method with the same name the last one is inheritted.

+ **@partiallyInherit( class or array of classes, methodName or array of methodNames )** (alias: `@partiallyExtend()`)  :  Inherit only the specified methods.

###Method decorators:

+ **@autobind**: function calls always have this refer to the class instance

+ **@compose( methods ) (alias: @rightCompose)**: Call each method passing the result of the previous as an argument. In mathematics `(g º f)(x) = g(f(x))`. The functions are executed from right-to-left with the class's method executed last. See more on examples.

+ **@leftCompose( methods )**: The left-to-right version of the previous.

+ **@deprecated**: Logs a warning message indicating that the method has been deprecated.

+ **@before ( beforeFunc )**: Executes the `beforeFunc` before the class" method.

+ **@after ( afterFunc )**: Executes the `afterFunc` after the class" method.

+ **@valuesEqualToNumberOfArguments ( failSilent )**: Executes the method only if the number of values pass to the function is equal with the number of function's parameters, otherwise it will through an exception unless failSilent = true.

+ **@overridden()** The method can be called from an instance of the base class, but cannot be called from an instance of a derived class. The derived class has to define its own version.

+ **@forceoverridden()** This is a more strict version of the previous. The method cannot be called from an instance of the base class or derived class. The derived class has to define its own version. Not particularly useful, mostly as a signal that the method has to be implemented on the subclass.

+ **@once()** : Executes the function only once. Repeat calls return the value of the first call.

+ **@times(n)** : Executes the function at most `n` times. Repeat calls return the value of the **nth** call.
*n: number*

+ **@timesCalled()** : Attaches a `timesCalled` property to the function that indicates how many times the function has been called.

+ **@trycatch( errorHandler )** : Wraps the function around a try/catch, requires a passed errorHandler function

+ **@validateSchema( schema )** :  Executes the function only if the schema is valid,
*schema: object*

+ **@acceptsObject( positions, failSilent )**      :  Executes the function only if the passed arg is an object
*positions: number|array (optional, default 0), failSilent: boolean(optional, default false)*

+ **@acceptsArray( positions, failSilent )** :  Executes the function only if the passed arg is an array

+ **@acceptsInteger( positions, failSilent )**:   Executes the function only if the passed arg is an integer

+ **@acceptsNumber( positions, failSilent )**:  Executes the function only if the passed arg is a number

+ **@acceptsBoolean( positions, failSilent )**:  Executes the function only if the passed arg is a boolean

+ **@acceptsFunction( positions, failSilent )**:  Executes the function only if the passed arg is a function

+ **@acceptsString( positions, failSilent )**:  Executes the function only if the passed arg is a string

+ **@acceptsPromise( positions, failSilent )**:  Executes the function only if the passed arg is a promise

+ **@immutable()**:  Makes a deepcopy of the passed arguments and executes the method with the copy to ensure that the initial parameters are not mutated

+ **@doesNotMutate()** :  Executes the method only if it doesnt mutate the passed arguments. Useful when the class extends another class and/or calls methods from the parent.

+ **@memoization()** :  Use the [memoization](https://en.wikipedia.org/wiki/Memoization) technique to prevent expensive function calls.

+ **@log()**: Logs the passed values and the returned result.

+ **@loglocalstorage()** : Logs the size of the localstorage before and after the function call.

+ **@donotlog()** : Do not log messages, errors and warnings.

+ **@donotlogmessages()** : Do not log messages.

+ **@donotlogwarnings()** : Do not log warnings.

+ **@donotlogerrors()** : Do not log errors.

+ **@timeout( ms )** (alias: `@debounce( ms )`)  : Executes the function after the specified wait (default 300ms)
*ms: number*

+ **@defer()**  : Executes the function when the current call stack has cleared

+ **@enumerable()**

###Method & Property decorators:

+ **@readony()**

+ **@nonconfigurable()**

### Property decorators:

+ **@nonenumerable()**

![Splitline](http://www.centrosanisidoro.es/wp-content/themes/simplegridtheme/images/banner.png "Splitline")

## Contributing
Feel free to open issues, make suggestions or send PRs.
This project adheres to the Contributor Covenant [code of conduct](http://contributor-covenant.org/). By participating, you are expected to uphold this code.

Contact:

Twitter: [@avraamakis](https://twitter.com/avraamakis)
