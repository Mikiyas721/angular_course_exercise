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