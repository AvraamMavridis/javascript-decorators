[![Build Status](https://travis-ci.org/AvraamMavridis/Couturier.js.svg?branch=master)](https://travis-ci.org/AvraamMavridis/Couturier.js)

Common helpers using es7 decorators

## Decorators

Method decorators: 

[@validateSchema](#@validateSchema) :  Executes the function only if the schema is valid

<a name="acceptsObject">@acceptsObject</a>      :  Executes the function only if the passed arg is an object

<a name="acceptsArray">@acceptsArray</a> :  Executes the function only if the passed arg is an array

<a name="acceptsInteger">@acceptsInteger</a> :  Executes the function only if the passed arg is an integer

<a name="acceptsNumber">@acceptsNumber</a> :  Executes the function only if the passed arg is a number

<a name="acceptsBoolean">@acceptsBoolean</a> :  Executes the function only if the passed arg is a boolean

<a name="acceptsFunction">@acceptsFunction</a> :  Executes the function only if the passed arg is a function

<a name="acceptsString">@acceptsString</a> :  Executes the function only if the passed arg is a string

<a name="acceptsPromise">@acceptsPromise</a> :  Executes the function only if the passed arg is a promise

<a name="immutable">@immutable</a> :  Makes a deepcopy of the passed arguments and executes the method with the copy to ensure that the initial parameters are not mutated

<a name="doesNotMutate">@doesNotMutate</a> :  Executes the method only if it doesnt mutate the passed arguments. Useful when the class extends another class and/or calls methods from the parent.

### <a name="@validateSchema"></a>@validateSchema

Executes the method only if the passed values are valid according to the provided **schema**. Example:

```js

class Person{
  @validateSchema( { age: 'number', childs: 'object', jobs: 'array', name: 'string' } );
  setPersonDetails( obj ) { ... }
}

  ``` 
