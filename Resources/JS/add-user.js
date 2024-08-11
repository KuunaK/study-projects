const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.js-msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    
    if (nameInput.value === '' || emailInput.value === ''){
        clearTimeout()
        msg.classList.add('text-white', 'bg-red-700', 'p-1')
        msg.innerHTML = 'Please enter all fields'

        setTimeout(() => (msg.innerHTML = '', msg.className = ''), 3000)
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        li.className = 'bg-gray-200 mt-2 p-1 font-semibold text-sm'
        userList.appendChild(li);

        nameInput.value = '';
        emailInput.value = '';
    }
}