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