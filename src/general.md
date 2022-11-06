# General Fixes:

### How to prevent immediate load of all values from functions in a component:

- The way this function will output all values to console on load

```
        const complexExample = (author: string) => void console.log(author);
        <button type="button" onClick={complexExample(author)}>
```

- The way this function will output individual values on click of button for the element it's being referenced to as the arrow function is added directly in the onClick{} statement **() =>**

```
        const complexExample = (author: string) => void console.log(author);
        <button type="button" onClick={() => complexExample(author)}>
```

### Type problem in a function that returns no value

// Above example is how i solved this type error
// Still not clear if better way to do it but issue was a function requires a return statement and can't be void
// Following example allows that to continue when passing a prop
// https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/explicit-function-return-type.md

- Before code - Reason issue is occuring is I'm not doing an inline arrow function with onClick before calling function (I.e. () => ) due to a function needing to return a value:

```
          (property) React.DOMAttributes<HTMLButtonElement>.onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
          Type 'void' is not assignable to type 'MouseEventHandler<HTMLButtonElement> | undefined'.ts(2322)
          index.d.ts(1481, 9): The expected type comes from property 'onClick' which is declared here on type 'DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>'
          No quick fixes available

          const Book = ({author}: BookProps) => {

            const complexExample = (author: string) => {
              console.log("from complexExample", author);
            };

            return (
              <article className="book">
                </button>
                <button type="button" onClick={complexExample(author)}>
                  More Complex
                </button>
              </article>
            );
          };
```

- First potential fix which is just included inline arrow function before function is called:

```
        const Book = ({author}: BookProps) => {

          const complexExample = (author: string) => {
            console.log("from complexExample", author);
          };

          return (
            <article className="book">
              </button>
              <button type="button" onClick={() => complexExample(author)}>
                More Complex
              </button>
            </article>
          );
        };
```

- Second potential fix is to add void to the function being called, I prefer the previous one with inline arrow function as in my case I want attributes called by button click versus all author properties to be displayed immediately, but both did fix type issue:

```
        const Book = ({author}: BookProps) => {

        const complexExample = (author: string) =>
            void console.log("from complexExample", author);

          return (
            <article className="book">
              </button>
              <button type="button" onClick={complexExample(author)}>
                More Complex
              </button>
            </article>
          );
        };
```

- Also keeping types with below example and still calling it as inline arrow function will also work:

```
        const Book = ({author}: BookProps) => {

        const complexExample = (author: string) =>
            void console.log("from complexExample", author);

          return (
            <article className="book">
              </button>
              <button type="button" onClick={() => complexExample(author)}>
                More Complex
              </button>
            </article>
          );
        };
```
