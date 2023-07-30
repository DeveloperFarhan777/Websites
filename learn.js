const passinput = document.querySelector('.input');
const rangeinput = document.querySelector('.range');
const slidenum = document.querySelector('.slidenum');
const btn = document.querySelector('.generatebtn');
const link = document.querySelector('.copylink');

////// range input function /////
rangeinput.addEventListener('click', function() {
    slidenum.innerText = rangeinput.value;
});

let allchars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*%-_{}[]()1234567890*:;''-+"

const generatepassword = () => {
    let newpass = " ";
    for(let i = 0; i < rangeinput.value; i++){
        let randompass = Math.floor(Math.random() * allchars.length)
        newpass += allchars[randompass];
    }
    passinput.value = newpass;
}

//// new pass Generator
btn.addEventListener('click', generatepassword);


/// copy pass function ///
link.addEventListener('click', function() {
    navigator.clipboard.writeText(passinput.value);
})