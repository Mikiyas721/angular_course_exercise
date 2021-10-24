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

