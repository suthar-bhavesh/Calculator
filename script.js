let Input = document.getElementById('calc-input');
let buttons = document.querySelectorAll('.btn-calc');

Input.focus();

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent

        if (value === "AC") {
            Input.value = "";
        }
        else if (value === "DEL") {
            Input.value = Input.value.slice(0, -1)
        }
        else if (value === "=") {
            let UserInput = Input.value;
            const operators = ['+', '*', '-', '/'];

            let userchar = UserInput.slice(-1);

            if (operators.includes(userchar)) {
                UserInput = UserInput.slice(0, -1);
            }

            try {
                if (UserInput.includes('%')) {
                    UserInput = UserInput.replace(/%/g, '/100');
                }
                Input.value = eval(UserInput)
            } catch {
                alert('Please Enter Valid Digit');
            }
        } else {
            Input.value += value;
        }
    });
});