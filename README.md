-------------------------------------------------- README 1 --------------------------------------------------
- A project that generates random password of specified length and type of characters to include.
- The following angular concepts are covered:
   1. Event Binding
   2. Property Binding
   3. Interpolation
   4. Structural Directives
- This project uses bulma styling Framework
- Errors encountered:
   1. property 'value' does not exist on $event.target
      - debugged using '$any' type casting($any($event.target).value)
	  
-------------------------------------------------- README 2 --------------------------------------------------
	  
- A project that displays cards.
- The following angular concepts are covered:
   1. Putting images in the assets folder and referencing them from HTML tags using the 'src' attribute 
   2. Components
   3. Typescript decorators(@Component({...}))
   4. @Input decorator
   5. *ngFor="let element of list", then property off element attribute during property binding
   6. selector ':host' in component.css file;same as component name selector from styles.css file
- This project uses bulma styling Framework
- Errors encountered:
   1. 
      - 
	  
-------------------------------------------------- README 3 --------------------------------------------------

- A project uses pipes to format data.
- The following angular pipes are covered:
   1. titlecase => {{string | titlecase}}
   2. date:"longDate"
   3. currency:"ETH"
   4. number:"1.0-0"
   5. Create custom pipes using "ng generate pipe <pipename>"
   6. It is possible to cascade pipes
- This project uses bootstrap styling Framework

- A project that shows images in a paginated manner.
- The following angular concepts are covered:
   1. [ngClass]="{active:condition1===condition2}"
   2. Don't add HTML element to account for addition of multiple structural directives
      Intead use <ng-container></ng-container>
   3. [ngSwitch]=""
      *ngSwitchCase=""
	  *ngSwitchDefault
   4. Create custom directives using "ng generate directive <directivename>"
   5. Use the '@Input()' decorator along with a setter to allow for property binding
   6. We can use Input Aliasing to avoid using a separate call to the directive and property binding.
   7. ElementRef used in attribute directive
   8. "TemplateRef", "ViewContainerRef" used in structural directive   
- This project uses bootstrap styling Framework

-------------------------------------------------- README 4 --------------------------------------------------

An application that has different navigation pages.
This project uses the semantic ui styling library. 
--------------------------------------------------
Module 7

- Each page resides in a module. To create a module, use the command "ng generate module <modulename> --routing" or "ng g m <modulename> --routing" in short.
- "--routing" flag is used for routed modules
- To generate a component in a module use "ng g c <modulename>/<componentname>"

--------------------------------------------------
Module 8

- To add routing to a module, add an object containing path and component to the routes field
- Use <router-outlet></router-outlet> tag in the html file to get the actual UI rendered 
- Use 'routerLink' property on tags like '<a></a>' instead of 'href' to avoid making HTTP requests continously
- Use property 'routerLinkActive' to assign a set of styling classes when that link is active
- Use path:'**' for unknown path
- Place the AppRoutingModule at the end of the imports lists to avoid improper routing 

--------------------------------------------------
Module 9 

- By Default angular applications use "Eager loading", where all the modules in the application are loaded during the first HTTP request.
- It is possible to use "lazy loading" where only modules that are requested are loaded at a time.
- To use "lazy loading": 
    1. Remove any import of the lazy loaded file.
    2. Define a route in the route array of the lazy loading module.
    3. In the lazy loaded module, edit the path of the route to avoid redundancy.
- Use "<ng-content></ng-content>" tag in the component HTML file to read content passed from the parent.
- Use "<ng-content select="<HTML Tag Name>"></ng-content>" to use multiple of this element in the component.
- Alternatively use "<ng-content select="[<attributename>]"></ng-content>" and place an attribute name on the tag.
- "<ng-container></ng-container>" can be used to apply mutliple structural directive, for even a single one when the tag is only used to apply the directive
  or wrap multiple tags that need access to a directives property. It is NOT actually rendered on the DOM. 
 	
--------------------------------------------------
Module 10

- We can add child routes with in a component and display those routes using the "<router-outlet></router-outlet>" tag just like before.
- Use "./" as path to get the current route.
- If an array is provided to the "routerLink" with a propery binding, angular will join the elements and form a new route.
- Add [routerLinkActiveOptions]= "{exact:true}" to the Anchor tag to avoid sub sets of the current routes from being considered as active.  

--------------------------------------------------
Module 11

- When a parent has a relative positioning property, the child will also take that same property; Even if an absolute property is applied to it(CSS).
- To display a modal in a correct way, the best solution is, to display the modal under the "body" element.
  - To do so in angular, Use the "ElementRef" to add the modal directly on the "body" element, use the "document" to access the body.
  - use the "ngOnInit()" function of that modal to append to the body.
- Life cycle hooks are functions that are called by angular at a specific point of time.
- Some of the basic lifecycle hooks are:
  - "ngOnInit():void" -> called after angular has initialized all data-bound properties of a component.
    In this method we can access properties passed down from a parent component and anything we want to do before the component is displayed.
  
  - ngOnDestroy():void -> called when angular is about to remove the component off the screen.
  
  - ngOnChanges(changes: SimpleChanges): void -> called anytime a property is passed down from a parent or when that property changes.
    This is a function that is called continously.While the first two are called only one time.
	
- Implementing the interfaces that correspond to the "lifecycle hooks" is optional.
- In general(Vanilla JS), there are two ways of opening and closing modals.
  1. Use Structural directive to show/hide the modal.
  2. 
- To perform child to parent communication, use "Output" decorator and "EventEmitter".
  - On the parent component, use event binding on the child component to do something when the child fires an event.
- To add a default tag to a component, it is better to use CSS. Refer to "modal.component.css" file.  

--------------------------------------------------
- Errors encountered:
  1. Type '{ value: number; label: string; }[]' is not assignable to type 'never[]'
     - annoatated type 'any[]' to variable
  2. "Event bubbling", a condition where an event go up the HTML hierarchy if the event is not handled on the event causing tag.(Vanilla JS concept)
     - call event.stopPropagation()  


MODULES 7 - 11 of the course are covered under this project	  

-------------------------------------------------- README 5 --------------------------------------------------

An application that has different navigation pages.
---------------------------------------------------
npm install typescript ts-node-dev
---------------------------------------------------
- Variable declaration takes the following form in typescript:
 
   <Variable declaring key word> <Variable name>:<Variable type> = <Variable initialization>

    where:  Variable declaring key word -> 'let' or 'const'
            Variable name -> variable indentifying name
	   	    Variable type -> string
		                     number
						     boolean
						     undefined
						     null
						     any
						     never
						     object	
- Type inference is used by typescript when a variable is declared and initialized.
  It will automatically assign a type the initialized value to the variable.
- Type inference also works for functions, but can also be annotated after the parenthesis just like in variables.  
- We can use an interface to create a custom object type and annotate a variable with the interface name.
- Inside a class, variables are declared without the "Variable declaration key word".
- By using the access specifiers ("public","private" and "protected" in typescript),
  we can avoid declaration of fields in the class and assigning to them in the constructor.
  
- "npx typescript --init" - used to create typescript configuration file.
- Decorators are called the first time the thing being decorated is executed.
- Can be applied to a class, attributes of a class, functions of a class and accessor.
- A decorator function receives different arguments depending on where it is used.
- A decorator can be:
		- plain decorator or 
		- decorator factory
- A decorator factory is applied with a parenthesis and returns a function.
- Generics can be applied using the <Type> before the parenthesis of the function. 
--------------------------------------------------- 
MODULES 12 of the course are covered under this project

-------------------------------------------------- README 6 --------------------------------------------------

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
  The Angular Escaper would change the "<" with "&lt;" and ">" with "&gt;".
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


-------------------------------------------------- README 7 --------------------------------------------------


This application uses input forms to simulate a credit card filling form.
----------------------------------------------------------
- There are two way of building forms. 
  1. Reactive Forms
  2. Template Forms
  
1. Reactive Forms

- Most of the form logic is is driven by configuration in a component class file.
- More suited for complex forms.
- Uses the ReactiveFormsModule.
- Use "FormGroup"(bind to form element "formGroup" prop) and "FormControl"(assign to the input element "formControlName") objects.
- Angular has a built in Validator, which can be passed to the FormControl instance.
- It is better to use a reusable component to display validation errors to avoid bulky and repetitive.
- To use regular expression to validate inputs, use "Validators.pattern()"
- To handle form submission, we can perform event binding "ngSubmit" on the form element.
- "Input mask" - a string of characters on a form field that indicate the format of a valid input.
- Input masking possible ways: 
  - Extending the FormControl class and override the "setValue()" method.
     -> This has an issue with the "formGroup.reset()" method, if not handled.
  - Use a library(ngx-mask)
  
   
2. Template Forms

- Most of the form logic is is driven by configuration in a component template file.
- More suited for simple forms.
- Uses the FormsModule.



  
----------------------------------------------------------
MODULE 18 of the course is covered under this project

-------------------------------------------------- README 8 --------------------------------------------------

This application uses input forms to simulate a credit card filling form.
----------------------------------------------------------
- There are two way of building forms. 
  1. Reactive Forms
  2. Template Forms
  
1. Reactive Forms

- Most of the form logic is is driven by configuration in a component class file.
- More suited for complex forms.
- Uses the ReactiveFormsModule.
- Use "FormGroup"(bind to form element "formGroup" prop) and "FormControl"(assign to the input element "formControlName") objects.
- Angular has a built in Validator, which can be passed to the FormControl instance.
- It is better to use a reusable component to display validation errors to avoid bulky and repetitive.
- To use regular expression to validate inputs, use "Validators.pattern()"
- To handle form submission, we can perform event binding "ngSubmit" on the form element.
- "Input mask" - a string of characters on a form field that indicate the format of a valid input.
- Input masking possible ways: 
  - Extending the FormControl class and override the "setValue()" method.
     -> This has an issue with the "formGroup.reset()" method, if not handled.
  - Use a library(ngx-mask)
  
   
2. Template Forms

- Most of the form logic is is driven by configuration in a component template file.
- More suited for simple forms.
- Uses the FormsModule.
- Two way binding takes [(something)]="" syntax
- Use "[(ngModal)]="prop" along with name="prop", to update the prop with the entered value.
- The above two way binding does update of the prop from the input element and update of the input element from the class attribute.
- In a template form, angular creates a "FormGroup" and "FormControl" automatically due to a markup that we wrote.
- This creates a difference in our ability to directly access these objects.Hence, this is used for simple forms.
- #elementName="ngForm" -> creates a reference of the element. The reference name being "elementName"
  The "ngForm" gives us a very specific kind of reference, a reference to the FormGroup created by angular.
- We can add a validation as an attribute of an HTML element.

  
----------------------------------------------------------
MODULE 19 of the course is covered under this project

-------------------------------------------------- README 9 --------------------------------------------------

This is an application that mocks an email client.
--------------------------------------------------
Module 21

- If all users of the application are guaranteed to access a module, the module can be loaded eagerly.
- Custom validators can be implemented as classes or functions.
- Better to use the class based custom validator for async validator.
- Implement "Validator" interface for sync validation and "AsyncValidator" for async validation.
- Use the @Injectable() decorator to add the custom validator class in the dependency injection system, 
	that is to be able to access the class in other classes.
- Angular doesnot run any of the async validators until all the sync validators are valid.

--------------------------------------------------
Module 22

- Use arrow function for the async validator validate method to bind the context of the function to the instance of the class.
  If es5 function is used, we run into undefined "this" variable.
- Observable visualization tool at https://out.stegrider.vercel.app/
- Add a [routerLinkActiveOptions]="{exact:true}" to avoid matching only the initial part of the link for homepages.
- Use "async" pipe to update template based on an observable or promise.
- Add an object with property withCredentials set to true to the options parameter of the http library to 
  prevent the library from ignoring cookies sent from the API.
- To add the option to all Http request, we can use "HTTP Interceptor".
- The properties in the request object that we get in the interceptor are read only.
  To update values, clone() the request object and pass the updated object to the next() method call.
- To navigate without an anchor being clicked, use the "Router" package.
  Invoke the "navigateByUrl()" method on the router instance.   
--------------------------------------------------
Module 23

- To prevent users from manually routing to a route that requires authentication, we can use Guard.
- There are three types of guards:
  - canActivate        -> restrict access to a route. 
  - canActivateChild   -> restrict access to a child routed component.
  - canLoad            -> restrict access to lazily loaded modules and routes inside of it.
  - canDeactivate      -> 
- use "ng g guard" to generate a guard.
- A single guard can implement multiple types of guards. 
- Besides implementing the method in the guard class, we need to add an attribute to the route in the Routes array.
  The attribute is "canLoad", "canActivate", ... based on the guard type.
- "take" operator can be used to trick subscribers, make the observable seem like it has complete marked.
- To prevent the application from crashing when the "canLoad" method is called, we can use the tap operator and 
  navigate to the root route manually.  
--------------------------------------------------
Module 24

- 
--------------------------------------------------
--------------------------------------------------
MODULES 21 - 24 of the course is covered under this project

-------------------------------------------------- README 10 --------------------------------------------------

A Math game Application.
--------------------------------------------------
Module 20

- Custom validators can be implemented as a class or as a function.
- When implementing custom validators as a class, implement an interface(Validator or AsyncValidator).
- When implementing a custom validator as a function, the validator function has the same signature as the 
  "validate" method that is implemented in the class based custom validator.
- If we want to pass parameters to the validator, when we assign it, We can make a function that
  accepts the functions and returns the validator function.
- "delay" operator to delay emission of items from the source Observable.
- Accessing FormGroups from custom directives ...



--------------------------------------------------
MODULES 20 of the course is covered under this project