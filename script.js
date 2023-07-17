'use strict'

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const choice = document.querySelector('.choice');




let Rock = 'Rock';
let Paper = 'Paper';
let Scissor = 'Scissor';


//// Computer Function  ////
const button4= document.getElementById('button4');
const button5 = document.getElementById('button5');
const button6 = document.getElementById('button6');
const choice2 = document.querySelector('.choice2')


let Rock1 = 'Rock';
let Paper2 = 'Paper';
let Scissor3 =  'Scissor';

const random = Math.floor(Math.random() * 3) + 1;

//result variables ///
const content = document.querySelector('.content');
const user = document.querySelector('.options');
const computer = document.querySelector('.computer');
const container = document.querySelector('.container'); 


///////// button 1 //////////

button1.addEventListener('click', function() {
    choice.textContent = Rock;
    button1.style.backgroundColor = '#00240b';
    choice.classList.remove('hidden')
    choice2.classList.remove('hidden')

    if(random === 1){
        button5.style.backgroundColor = '#00240b';
        choice2.textContent = Paper2;
    }
    else if(random === 2){
        button6.style.backgroundColor = '#00240b';
        choice2.textContent = Scissor3;
    }
    
    else if(random === 3){
        button4.style.backgroundColor = '#00240b';
        choice2.textContent = Rock1;
    };

///////////  Result ///////////////
    if(choice.textContent === Rock &&  choice2.textContent === Paper){
        content.classList.remove('hidden');
        content.textContent = 'Computer Wins'
        computer.style.backgroundColor = '#44a318';
    }
    else if(choice.textContent === Paper &&  choice2.textContent === Rock){
        content.classList.remove('hidden');
        content.textContent = 'You Wins'
        user.style.backgroundColor = '#44a318';
    }
    else if(choice.textContent === Rock &&  choice2.textContent === Scissor){
        content.classList.remove('hidden');
        content.textContent = 'You Wins'
       user.style.backgroundColor = '#44a318';
    }
    else if(choice.textContent === Scissor &&  choice2.textContent === Rock){
        content.classList.remove('hidden');
        content.textContent = 'Computer Wins'
        computer.style.backgroundColor = '#44a318';
    }
    else if(choice.textContent === Paper &&  choice2.textContent === Scissor){
        content.classList.remove('hidden');
        content.textContent = 'Computer Wins'
        computer.style.backgroundColor = '#44a318';
    }
    else if (choice.textContent === Scissor &&  choice2.textContent === Paper){
        content.classList.remove('hidden');
        content.textContent = 'You Wins'
        user.style.backgroundColor = '#44a318';
    }
    else{
        content.classList.remove('hidden');
        content.textContent = 'TIE'
        container.style.backgroundColor = '#af6900'
    }

});

///////// button 2 /////////
button2.addEventListener('click', function() {
    choice.textContent = Paper;
    button2.style.backgroundColor = '#00240b';
    choice.classList.remove('hidden')
    choice2.classList.remove('hidden')

    if(random === 1){
        button5.style.backgroundColor = '#00240b';
        choice2.textContent = Paper2;
    }
    else if(random === 2){
        button6.style.backgroundColor = '#00240b';
        choice2.textContent = Scissor3;
    }
    
    else if(random === 3){
        button4.style.backgroundColor = '#00240b';
        choice2.textContent = Rock1;
    };

    ///////////  Result ///////////////
    if(choice.textContent === Rock &&  choice2.textContent === Paper){
        content.classList.remove('hidden');
        content.textContent = 'Computer Wins'
        computer.style.backgroundColor = '#44a318';
    }
    else if(choice.textContent === Paper &&  choice2.textContent === Rock){
        content.classList.remove('hidden');
        content.textContent = 'You Wins'
        user.style.backgroundColor = '#44a318';
    }
    else if(choice.textContent === Rock &&  choice2.textContent === Scissor){
        content.classList.remove('hidden');
        content.textContent = 'You Wins'
       user.style.backgroundColor = '#44a318';
    }
    else if(choice.textContent === Scissor &&  choice2.textContent === Rock){
        content.classList.remove('hidden');
        content.textContent = 'Computer Wins'
        computer.style.backgroundColor = '#44a318';
    }
    else if(choice.textContent === Paper &&  choice2.textContent === Scissor){
        content.classList.remove('hidden');
        content.textContent = 'Computer Wins'
        computer.style.backgroundColor = '#44a318';
    }
    else if (choice.textContent === Scissor &&  choice2.textContent === Paper){
        content.classList.remove('hidden');
        content.textContent = 'You Wins'
        user.style.backgroundColor = '#44a318';
    }
    else{
        content.classList.remove('hidden');
        content.textContent = 'TIE'
        container.style.backgroundColor = '#af6900'
    }
});

///////// button 3 ////////
button3.addEventListener('click', function() {
    choice.textContent = Scissor;
    button3.style.backgroundColor = '#00240b';
    choice.classList.remove('hidden')
    choice2.classList.remove('hidden')

    if(random === 1){
        button5.style.backgroundColor = '#00240b';
        choice2.textContent = Paper2;
    }
    else if(random === 2){
        button6.style.backgroundColor = '#00240b';
        choice2.textContent = Scissor3;
    }
    
    else if(random === 3){
        button4.style.backgroundColor = '#00240b';
        choice2.textContent = Rock1;
    };

    ///////////  Result ///////////////
    if(choice.textContent === Rock &&  choice2.textContent === Paper){
        content.classList.remove('hidden');
        content.textContent = 'Computer Wins'
        computer.style.backgroundColor = '#44a318';
    }
    else if(choice.textContent === Paper &&  choice2.textContent === Rock){
        content.classList.remove('hidden');
        content.textContent = 'You Wins'
        user.style.backgroundColor = '#44a318';
    }
    else if(choice.textContent === Rock &&  choice2.textContent === Scissor){
        content.classList.remove('hidden');
        content.textContent = 'You Wins'
       user.style.backgroundColor = '#44a318';
    }
    else if(choice.textContent === Scissor &&  choice2.textContent === Rock){
        content.classList.remove('hidden');
        content.textContent = 'Computer Wins'
        computer.style.backgroundColor = '#44a318';
    }
    else if(choice.textContent === Paper &&  choice2.textContent === Scissor){
        content.classList.remove('hidden');
        content.textContent = 'Computer Wins'
        computer.style.backgroundColor = '#44a318';
    }
    else if (choice.textContent === Scissor &&  choice2.textContent === Paper){
        content.classList.remove('hidden');
        content.textContent = 'You Wins'
        user.style.backgroundColor = '#44a318';
    }
    else{
        content.classList.remove('hidden');
        content.textContent = 'TIE'
        container.style.backgroundColor = '#af6900'
    }
});







