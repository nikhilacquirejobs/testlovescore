
let lovescore =Math.random()
lovescore = lovescore*100
lovescore= Math.floor(lovescore)+1
console.log(lovescore)

function getNames(){
    let firstName=document.getElementById("firstName").value
    let secondName=document.getElementById("secondName").value
console.log(typeof firstName,secondName)
document.getElementById("firstName").value=""
document.getElementById("secondName").value=""
if(firstName===""||secondName===""){
    alert("enter the name please")
}else
document.getElementById("result").innerHTML=`hey ${firstName} and ${secondName} your love score is :- ${lovescore}`


}
