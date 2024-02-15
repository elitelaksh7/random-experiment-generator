const experiment={1:"Error Analysis",2:"Thermistor",3:"Solar cell",4:"P-N Junction Diode",
5:"Energy Gap",6:"Optical Fiber",7:"Planck's Constant",8:"Laser",9:"Newton Rings",10:"Hall Effect"}
let i =prompt("enter 12 digit starting roll no")
let j =prompt("enter 12 digit ending roll no")

alert("click generate to generate the random experiments")
const generator = document.getElementById("generate")
/*  let clicked = false;  */
/* const result = document.getElementById("name") */
generator.addEventListener("click", ()=>{
  
  /* if(clicked == true){
    while(j<=138){
    document.getElementById("myTable").deleteRow(0);
    j++
    }
  } */
  /* j=71 */
  getExperiment();
  /* clicked = true */
  /* i=71 */
});
function getExperiment() {
  while(i<=j){
  let info = Math.floor((Math.random()*10)+1)
  let rand = experiment[info]
  //IMPORTANT IF NOT TO ADD TO TABLE USE THIS APPENDCHILD NOT APPEND OR INNERHTML
  /* const node = document.createTextNode(rand);
  const data  = document.createElement('div') */
  const table= document.getElementById("myTable")
  const row = table.insertRow()
  const rollno = row.insertCell(0)
  const exp = row.insertCell(1)
  /* data.appendChild(node) */
  /* result.appendChild(data) */
  rollno.innerText = i
  exp.innerText = rand
  i++;
  }
} 


