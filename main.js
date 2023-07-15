function add(){
w=document.getElementById("i").value;
q=document.getElementById("in").value;
z=Number(q)+Number(w);
localStorage.setItem("add",z);
p=localStorage.getItem("add");
document.getElementById("answer").innerHTML=" The Answer Is "+p;
}