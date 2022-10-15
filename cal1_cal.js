var input = document.getElementById('input');
buttons = document.querySelectorAll('button');

var inputValue = "";
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);

        if (buttonText == 'X') {
            buttonText = '*';
            inputValue += buttonText;
            input.value = inputValue;
        }
        else if (buttonText == 'C') {
            inputValue = "";
            input.value = inputValue;
        }
        else if (buttonText == '=') {
            input.value = eval(inputValue);
        }
        else if (buttonText == '|x|') {
            // inputValue 
            this.input.value = this.input.value.slice(0, -1);
            inputValue = this.input.value;
        }

        else if (buttonText == 'sin') {
            buttonText = 'sin()';
            input.value = Math.sin(inputValue);
        }
        else if (buttonText == 'cos') {
            buttonText = 'cos()';
            input.value = Math.cos(inputValue);
        }
        else if (buttonText == 'tan') {
            buttonText = 'tan()';
            input.value = Math.tan(inputValue);
        }

        else {
            inputValue += buttonText;
            input.value = inputValue;
        }
    })
}