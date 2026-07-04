   // Collecting all html element
    const list = document.getElementById("todo-list");
    const input = document.getElementById("todo-input");
    const button = document.getElementById("add-button");
   
     // attaching the click event to the button
    button.addEventListener('click', function(event) {
      // It's stops the page from refreshing
      event.preventDefault(); 
      // Read text inside the input
     const myText = input.value.trim();

     if (myText === "") {
        return; 
    }

     // Creating new list item(li)
     const newItem = document.createElement("li");

     // Create span to hold task
     const textSpan = document.createElement("span");
     textSpan.textContent = myText; // makes every items different
     newItem.appendChild(textSpan); // append item to list

     // Create a delete button for identified item
      const deletebtn = document.createElement("button");
      deletebtn.textContent = "Delete";
      deletebtn.style.marginLeft = "15px"; // add space

      // Tell delete button to remove list
      deletebtn.addEventListener('click', function(event){
        event.preventDefault(); // stop refreshing delete button
        list.removeChild(newItem);
      });

      // put the delete inside the list item
      newItem.appendChild(deletebtn);

      // Put the full list item into the main list
      list.appendChild(newItem);

      // clear input so you can type next item
     input.value = "";
      
    });
    
    


