- This is an application that uses Wikipedia for search operations.
------------------------------------------------------------------
Module 13

- Use command "ng generate service <service name>" to generate a service file.
- Wrap an input tag with a form tag. When ever the user presses enter with the input active, submit event on the form is activated.(Vanilla JS).
- In a child -> parent communication, the data passed when the child emits an event can be accessed on the parent using the "$event" variable.
- Service instances are created by Angular and made available to all the different components in our application.
  This is because, these classes are annotated by "@Injectable" decorator. This decorator creates an instance of that 
    class and provides it to any component that requires it 
  To make use of this, we need to have out constructor called with the service instance. 
  
------------------------------------------------------------------
Module 14

- When ever angular faces HTML tags comming from the JS, it passes it through an "Angular Escaper".
  The Angualr Escaper would change the "<" with "&lt;" and ">" with "&gt;".
  The browser would then interprate "$lt;" and "$gt;" with "<" and ">" sign respectively
  Interprating those characters sequences as "<" and ">" is the normal behaviour of browser.
- Angular does this to prevent "Cross-site Scripting"(XSS).
  Using XSS, a malicious HTML can fetch inputs of users like their username and password.
  When ever we want the HTML comming from a server to be rendered as HTML, we can bind the innerHTML property with the content comming from the server.
  But even then, Angular looks for any possible malicious JS code embedded in the HTML and removes it, to prevent XSS.  
------------------------------------------------------------------
Module 15

- "RxJS" -> is a functional reactive programming library.
  It is used extensively by angular to manage data.
- RxJS - Terminologies:
  -> OBSERVABLE - Something that emits events over time.
  -> OPERATOR - transforms a value 
  -> PIPE - Series of processing steps where the Operators take action.
  -> OBSERVER - a handle for either the error or the final value coming out of the pipe.
- The "fromEvent()" operator returns an observable provided with two parameters(element, eventType).
- The "pipe()" operator allows us to pass a series of different operators, separated with a comma.
  This operator will return the return value of the last operator in the series of operators that goes in it.
- To add an observer, we call the "subscribe()" method on the observer.
- We can pass either
        - object ->(
			{
			next(value){},
			error(error){},
			complete(){},
			})  
        - function ->(
		    (value)=>/*do something*/,
			(error)=>/*do something*/,
			()=>/*do something*/
			)
- Some of the basic operator groups are:
  - Transform - eg: map(), pluck()
  - Filtering - eg: 
  - Creation  - eg: fromEvent()

- Unicast vs Multicast Observable

- UNICAST Observable emits a separate event for each observer that subscribe to the observable.(Meaning one to one relationship)
  All the operators will also be called for each observer.
  This is a behaviour. For example it results in multiple server request.
  
- MULTICAST Observable emits a single set of values for the different observers that subscribe.(Meaning one to many relationship)
  Use the share() operator to make the Observable a multicast Observable.
  ISSUE 1: A later subscriber might not listen to earlier events.
  ISSUE 2: If complete() is called, the observable will invoke the subscriber again. Gives the same result as a Unicast  

- Hot vs Cold Observable
------------------------------------------------------------------
Module 16


------------------------------------------------------------------
MODULES 13 - 16 of the course are covered under this project

