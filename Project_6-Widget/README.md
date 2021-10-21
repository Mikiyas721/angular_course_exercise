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