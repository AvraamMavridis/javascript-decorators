/**
 * Decorator that makes a class abstract
 * ( it cannot being instantiated directly )
 *
 * @method _abstract
 *
 * @return { Class }  decorator function
 */
export const _abstract = function ()
{
  return function ( target )
  {
    return class Abstract extends target {
      constructor()
      {
        super();
        if ( new.target === Abstract )
        {
          throw Error( `The ${target.name} is an abstract class` );
        }
      }
    };
  };
};
