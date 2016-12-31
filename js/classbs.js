/**
 * Created by Andrew on 12/30/2016.
 */
function Person()
{
    this.firstName = 'Andrew';
    this.lastName = 'Johnson';
    this.age = '22';

    this.sayHello = function ()
    {
        return "Hello";
    }

    this.sayHelloTwice = function ()
    {
        this.sayHello();
        this.sayHello();
    }.bind(this);
}

var person = new Person();