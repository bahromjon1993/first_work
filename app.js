// let createDiv=document.createElement('h1');
//     createDiv.className='section';
//     createDiv.id='sectionId';
//     createDiv.setAttribute('align','center');
//     createDiv.style.backgroundColor='indigo';
// console.log(createDiv);
let button=document.getElementById('button');
button.addEventListener('click',runEvent);

function runEvent(e){
    let header=document.getElementById('header-title');
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.textContent);
    header.textContent='New Header';
    header.style.color='red';
    let output=document.getElementById('output');
    output.textContent=header.textContent;
    console.log(e.type);
}