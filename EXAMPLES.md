## Examples

### <a name="@multiInherit"></a>@multiInherit

```js
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

### <a name="@partiallyInherit"></a>@partiallyInherit

```js
class Manager{
  render(){ return 42; }
  init(){ return 43; }
  t(){ return 44; }
};

@partiallyInherit( Manager, ['render', 't'] )
class Person{
  t(){ return 3; }
};

const p = new Person();
p.render(); // 42
p.t(); // 3
p.init(); // throws error, init undefined
```

### <a name="@compose"></a>@compose

```js

const r = (t) => t * 5;
const r2 = (t) => t + 3;

class Person {
  @compose([r, r2])
  doSomething() {
    return 2;
  }

  @leftCompose([r, r2])
  doSomething2() {
    return 2;
  }
};


var p = new Person();
p.doSomething(); // 13
p.doSomething2(); // 25
```

### <a name="@valuesEqualToNumberOfArguments"></a>@valuesEqualToNumberOfArguments

```js
class Person {
  @valuesEqualToNumberOfArguments()
  doSomething( a ) {
    return a;
  }
};


var p = new Person();
p.doSomething( 1,2,3,4,5,5,6); // throws an exception
```

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
  @acceptsObject( [0,2], true );
  doSomething( obj, str, obj ) { ... }
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

### <a name="@memoization"></a>@memoization

  ```js

class Person{
  @memoization();
  doSomethingTimeConsuming( arg1 ) {
     arg1.test = 10;
  }
}

var obj = { test: 5 };
var p = new Person();
p.doSomethingTimeConsuming( obj ); // calls the function
p.doSomethingTimeConsuming( obj ); // immediately returns the result without calling the function
  ```

### <a name="@log"></a>@log

  ```js

class Person{
  @log();
  doSomething(...args){
    return args.join('-');
  }
}

var p = new Person();
p.doSomething( 2 , 3 );
  ```
Will log in the console:

![Logged on console](http://oi64.tinypic.com/120ta1c.jpg "Logged on console")


### <a name="@loglocalstorage"></a>@loglocalstorage

  ```js

class Person{
  @loglocalstorage()
  doSomething(){
    localStorage.setItem('somethingonlocalstorage', "Lorem ipsum dol'or sit amet, consectetur adipiscing elit. Morbi congue urna id enim lobortis placerat. Integer commodo nulla in ipsum pharetra, ac malesuada tellus viverra. Integer aliquam semper nisi vehicula lobortis. Ut vel felis nec sem sollicitudin eleifend. Ut sem magna, vehicula in dui in, sodales ultrices arcu. Aliquam suscipit sagittis aliquet. Phasellus convallis faucibus massa, quis tincidunt nisl accumsan sed.")
  }
}

var p = new Person();
p.doSomething( );
  ```
Will log in the console something like:

![Logged on console](http://oi68.tinypic.com/n33tzo.jpg "Logged on console")


### <a name="@timeout"></a>@timeout (alias: @debounce)

  ```js

class Person{
  @timeout( 2000 );
  doSomething(){
    ...
  }
}

var p = new Person();
p.doSomething(); // Executed after 2secs
  ```


### <a name="@once()"></a>@once()

  ```js

class Person{
  @once();
  doSomething(a, b){
    return a + b;
  }
}

var p = new Person();
p.doSomething(1,2); // returns 3
p.doSomething(21,2); // keeps returning 3
p.doSomething(14,42); // keeps returning 3
  ```

### <a name="@times(n)"></a>@times(n)

  ```js

class Person{
  @times(2);
  doSomething(a, b){
    return a + b;
  }
}

var p = new Person();
p.doSomething(1,2); // returns 3
p.doSomething(21,2); // returns 23
p.doSomething(14,42); // keeps returning 23
p.doSomething(14,542); // keeps returning 23
  ```

### <a name="@timesCalled()"></a>@timesCalled()

  ```js

class Person{
  @timesCalled();
  doSomething(a, b){
    return a + b;
  }
}

var p = new Person();
p.doSomething(1,2);
p.doSomething(21,2);
p.doSomething(14,42);
console.log( p.doSomething.timesCalled ); // 3
  ```
