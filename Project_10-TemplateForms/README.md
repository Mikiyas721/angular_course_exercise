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

