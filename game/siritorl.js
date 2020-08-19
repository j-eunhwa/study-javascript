const body = document.body;
const word = document.createElement('div');
word.textContent = 'free';
document.body.append(word);
const form = document.createElement('form');
document.body.append(form);
const input = document.createElement('input');
form.append(input);
const button = document.createElement('button');
button.textContent = 'input data!';
form.append(button);
const result = document.createElement('div');
document.body.append(result);

form.addEventListener('submit', function callback (e) {
    e.preventDefault();
    if (word.textContent[word.textContent.length - 1] === input.value[0]) {
        result.textContent = 'That is right!';
        word.textContent = input.value;
        input.value = '';
        input.focus();
    } else {
        result.textContent = 'That is wrong!';
        input.value = '';
        input.focus();
    }
})