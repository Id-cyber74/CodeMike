  

<script>
// javascript code 
	window.addEventListener("load",function(){
      const form = document.getElementById("newtaskform");
      const input = document.getElementById("newtaskinput");// getting all elements from the dom by their id
      const listel = document.getElementById("tasks");
      form.addEventListener("submit",function(e){
e.preventDefault(); //stopd the page from refreshing 
const task = input.value;
if(!task){  
	alert("Please fill out this field");// if there is no task input it tells us to fill it out
	return;
}
const taskel = document.createElement("div")
taskel.classList.add("task");
const taskcontent = document.createElement("div");
taskcontent.classList.add("content")
	taskel.appendChild(taskcontent);
const taskinput = document.createElement("input");
taskinput.value= task;
taskinput.type = "text";
taskinput.classList.add("text");

taskinput.setAttribute("readonly","readonly");  // setting the taskinput to readonly so that we cannot edit 
taskcontent.appendChild(taskinput);
const actions = document.createElement("div")

actions.classList.add("actions");

const editbutton = document.createElement("button")  

editbutton.classList.add("edit");
editbutton.innerHTML = "EDIT"



const deletebutton = document.createElement("button");
deletebutton.classList.add("delete");
deletebutton.innerHTML = "DELETE"


actions.appendChild(editbutton);
actions.appendChild(deletebutton);

taskel.appendChild(actions);

listel.appendChild(taskel);
editbutton.addEventListener("click",function(){
if(editbutton.innerText.toLowerCase()=="edit"){
	taskinput.removeAttribute("readonly");
	taskinput.focus();
editbutton.innerText = "Save"
}else{

	taskinput.setAttribute("readonly","readonly");
	editbutton.innerText = "edit"
}
})
deletebutton.addEventListener("click",function(){
listel.removeChild(taskel);

})

})

})
</script>
<script src = "main.js"></script>










































































































































































</script>
<script src= main.js></script>