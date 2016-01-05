[![Build Status](https://travis-ci.org/AvraamMavridis/Couturier.js.svg?branch=master)](https://travis-ci.org/AvraamMavridis/Couturier.js)

Common helpers using es7 decorators

## Decorators

###Method decorators:

#### Validation related decorators

[@validateSchema](#@validateSchema) :  Executes the function only if the schema is valid

[@acceptsObject](#@acceptsObject)      :  Executes the function only if the passed arg is an object

[@acceptsArray](#@acceptsArray) :  Executes the function only if the passed arg is an array

[@acceptsInteger](#@acceptsInteger) :   Executes the function only if the passed arg is an integer

[@acceptsNumber](#@acceptsNumber):  Executes the function only if the passed arg is a number

[@acceptsBoolean](#@acceptsBoolean):  Executes the function only if the passed arg is a boolean

[@acceptsFunction](#@acceptsFunction):  Executes the function only if the passed arg is a function

[@acceptsString](#@acceptsString):  Executes the function only if the passed arg is a string

[@acceptsPromise](#@acceptsPromise):  Executes the function only if the passed arg is a promise

#### Immutability related decorators

[@immutable](#@immutable) :  Makes a deepcopy of the passed arguments and executes the method with the copy to ensure that the initial parameters are not mutated

[@doesNotMutate](#@doesNotMutate) :  Executes the method only if it doesnt mutate the passed arguments. Useful when the class extends another class and/or calls methods from the parent.

### <a name="@validateSchema"></a>@validateSchema

Executes the method only if the passed values are valid according to the provided **schema**. Example:

```js

class Person{
  @validateSchema( { age: 'number', childs: 'object', jobs: 'array', name: 'string' } );
  setPersonDetails( obj ) { ... }
}

  ``` 
  
### <a name="@acceptsObject"></a>@acceptsObject

Executes the method only if the passed value is an object otherwise throws an exception, accepts position (default=0) or array of positions. Example:
  
  ```js

class Person{
  @acceptsObject( [0,2] );
  doSomething( obj, str, obj ) { ... }
}

  ``` 
  
### <a name="@acceptsArray"></a>@acceptsArray

Executes the method only if the passed value is an array otherwise throws an exception, accepts position (default=0) or array of positions. Example:
  
  ```js

class Person{
  @acceptsArray();
  doSomething( arr ) { ... }
}

  ``` 

### <a name="@acceptsString"></a>@acceptsString

Executes the method only if the passed value is a string otherwise throws an exception, accepts position (default=0) or array of positions. Example:
  
  ```js

class Person{
  @acceptsString();
  doSomething( str ) { ... }
}

  ``` 
  
### <a name="@acceptsInteger"></a>@acceptsInteger

Executes the method only if the passed value is an integer otherwise throws an exception, accepts position (default=0) or array of positions. Example:
  
  ```js

class Person{
  @acceptsInteger();
  doSomething( int ) { ... }
}

  ```
  
### <a name="@acceptsNumber"></a>@acceptsNumber

Executes the method only if the passed value is a number otherwise throws an exception, accepts position (default=0) or array of positions. Example:
  
  ```js

class Person{
  @acceptsNumber();
  doSomething( number ) { ... }
}

  ``` 
  
### <a name="@acceptsBoolean"></a>@acceptsBoolean

Executes the method only if the passed value is a boolean otherwise throws an exception, accepts position (default=0) or array of positions. Example:
  
  ```js

class Person{
  @acceptsBoolean();
  doSomething( bol ) { ... }
}

  ``` 
  
### <a name="@acceptsFunction"></a>@acceptsFunction

Executes the method only if the passed value is a function otherwise throws an exception, accepts position (default=0) or array of positions. Example:
  
  ```js

class Person{
  @acceptsFunction();
  doSomething( func ) { ... }
}

  ``` 
  
### <a name="@acceptsPromise"></a>@acceptsPromise

Executes the method only if the passed value is a promise otherwise throws an exception, accepts position (default=0) or array of positions. Example:
  
  ```js

class Person{
  @acceptsPromise();
  doSomething( prom ) { ... }
}

  ``` 
  
### <a name="@immutable"></a>@immutable

Makes a deepcopy of the passed arguments and executes the method with the copy to ensure that the initial parameters are not mutated. Example: 
  
  ```js

class Person{
  @immutable();
  doSomething( arg1 ) { 
     arg1.test = 10;
  }
}

var obj = { test: 5 };
var p = new Person();
p.dosomething( obj );
console.log( obj.test ); // 5;
  ``` 

### <a name="@doesNotMutate"></a>@doesNotMutate

Executes the method only if it doesnt mutate the passed arguments. Useful when the class extends another class and/or calls methods from the parent. Example: 
  
  ```js

class Person{
  @doesNotMutate();
  doSomething( arg1 ) { 
     arg1.test = 10;
  }
}

var obj = { test: 5 };
var p = new Person();
p.dosomething( obj ); // throws an exception because doSomething mutates the passed object.
  ``` 
