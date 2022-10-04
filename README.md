

My todolist app


<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Todolist Perfection</title>
<link rel = "stylesheet" href = "style.css">
<style>



      *{
      	box-sizing: border-box;
      	font-family: Serif;
      	margin: 0;
      }
	body{
display: flex;
 background-color: #4B6F44;
flex-direction: column;
min-height: 100vh;
color: #585858;
	}
#newtaskform{
display: flex;  /*so that the form is adjustable*/

}
h1{
margin-bottom: 50px;
font-size:2rem;

}
header{
padding: 2rem 1rem;
max-width: 800px;

}

input, button{
appearance :none;
border: none;
outline: none;
background: none;

}

#newtaskinput{
flex: 1 1 0%;
color: snow;
padding: 1rem;
border-radius: 1rem;
font-size :1.5rem;
background-color:#A9A9A9 ;

}
h2{
color:  #585858;
font-size: 2rem;
margin-bottom: 40px;

}
main{
flex: 1 1 0%;
padding: 2rem 1rem;
margin: auto 0;
width: 100%;

}

.task-list{
	padding: 1rem;
}

.task{
display: flex;
justify-content: space-between;
border-radius: 1.25rem;
margin-bottom: 1rem;
background-color:#A9A9A9 ;
padding: 1rem;
;

}
.actions{
display: flex;
}

.edit{
font-size: 1.25rem;
font-family: monospace;
color: #66FF00;
cursor: pointer;	
}

.delete{
font-size: 1.25rem;
font-family: monospace;
color: #66FF00;
cursor: pointer;
}

.delete:hover{

color: #585858;	
}

.edit:hover{
color: #585858;

}

.text{

color: ghostwhite;
font-size: 1.25rem;
display: block;
}

.text:not(:read-only){

	color:#66FF00 ;
}

.addtask{
font-size: 1.25rem;
font-family: monospace;
color: #66FF00;
cursor: pointer;
font-weight: 700;

}

.addtask:hover{
	color:#585858 ;
}

#newtaskinput::placeholder{
	color: whitesmoke;
	font-size:1.1rem ;

}

.content{
flex:  1 1 0%;

}

</style>
</head>
<body>
	<header>

		<!-- Html code-->
		<h1>  MyTodoList</h1>
		<form id ="newtaskform">
			<input id ="newtaskinput"
			type = "text"
			placeholder = "What do you have planned"/>
			<input type = "submit"
			class = "addtask"
			value = "Addtask"/>    <!-- This is for the add task button-->
			</form>

			<main>
			<section class = "task-list">
				<h2> Tasks</h2>
<div id = "tasks">             <!-- i commented it out just to show you how its going to look like.-->
					<!--<div class = "task">
						<div class ="content">
						<input type = "text";
						class = "text"
						value = "Write task Here"
						readonly/>
					</div>

						<div class = "actions">
							<button class = "edit">Edit</button>
							<button class = "delete">Delete</button>
						
						
					</div>
				</div>-->



				



			</section>
              </main>



		

	</header>


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
<script src= main.js></script>
</body>
</html>
