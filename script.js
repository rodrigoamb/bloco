const sendTask = document.querySelector(".confirm-task");

sendTask.addEventListener("click", (e) =>{
    e.preventDefault();

    const task = document.getElementById("add-task");
    const contentTask = task.value;

    if(contentTask !== ""){
        const ulContainer = document.querySelector(".ul-task");
            
        const item = document.createElement("li");
        item.innerHTML = contentTask;
        
        ulContainer.appendChild(item);
         
        const btnRemove = document.createElement("button");
        btnRemove.innerHTML = "remover";
        
        item.appendChild(btnRemove);
        
        const line = document.createElement("hr");
        ulContainer.appendChild(line);

        task.value ='';

        btnRemove.addEventListener("click", () =>{
            item.remove();
            line.remove();
        });
    }
})

