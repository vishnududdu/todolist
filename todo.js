let c=0;
function addTodo() {
    var todoInput = document.getElementById("todoInput");
    var count = document.getElementById("count");
    var todoText = todoInput.value.trim();
  
    if (todoText === "") {
      alert("Please enter a todo.");
      return;
    }
  
    var todoList = document.getElementById("todoList");
    var li = document.createElement("li");
    // li.textContent = todoText;
    li.innerHTML=`<input type='checkbox' class='checkbox-round'> ${todoText}`;
    
    var deleteBtn = document.createElement("span");
    deleteBtn.textContent = "❌";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function() {
      li.remove();
      c--;
      count.textContent=c;
    };
    c++;
    count.textContent=c;
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
    
    todoInput.value = "";
  }
  