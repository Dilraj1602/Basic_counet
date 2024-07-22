
const datavalue=document.getElementById('data');

function Incrementfn(){

    console.log('Increment clicked');
    let value=parseInt(datavalue.innerText);
    value=value+1;
    datavalue.innerText=value;
}

function Decrementfn(){

    console.log('Decrement clicked');
    let value=parseInt(datavalue.innerText);
    value=value-1;
    datavalue.innerHTML=value;
}