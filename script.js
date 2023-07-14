const h1 = document.querySelector("h1");
const input1 = document.getElementById("calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btncalcular");
const pResult = document.querySelector("#result");

btn.addEventListener("click",btnOnClick);

function btnOnClick (){
    console.log(input1.value)
    const sumaImputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = sumaImputs;
}
