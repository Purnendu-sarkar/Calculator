let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let expression = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerHTML;

        if (value === '=') {
            try {
                // Validate the expression and evaluate it
                if (expression) {
                    expression = expression.replace(/[^0-9+\-*/.%]/g, ''); // Basic validation
                    input.value = eval(expression);
                    expression = input.value; // Update expression with the result
                }
            } catch {
                input.value = "Error";
                expression = ""; // Reset expression on error
            }
        } else if (value === 'AC') {
            expression = "";
            input.value = "0"; // Reset display
        } else if (value === 'DEL') {
            expression = expression.slice(0, -1);
            input.value = expression || "0"; // Update display or reset to zero
        } else {
            // Prevent multiple operators in a row
            const lastChar = expression[expression.length - 1];
            if (!['+', '-', '*', '/', '%'].includes(lastChar) || !['+', '-', '*', '/', '%'].includes(value)) {
                expression += value;
                input.value = expression;
            }
        }
    });
});
