const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
const tBody = document.querySelector('#tBody');

myForm.addEventListener('submit' , onsubmit);

function onsubmit(e) {
    e.preventDefault();
    
    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML ='please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    }else{
        userList.style.display='block';
        const newRow = document.createElement('tr');
        tBody.appendChild(newRow);
        let newData = [nameInput.value , emailInput.value];
        for(var i=0; i<newData.length; i++){
            const newTd = document.createElement('td');
            newTd.innerHTML = newData[i]
            newRow.appendChild(newTd);
     }
        //clear fields
     nameInput.value ='';
     emailInput.value ='';
    }

    
}