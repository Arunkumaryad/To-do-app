// Get the form and the list
const form = document.getElementById("form");
const list = document.getElementById("list");

// Add an event listener to the form
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the value of the input field
  const newItem = document.getElementById("new-item").value;

  // Create a new list item
  const li = document.createElement("li");

  // Add the text to the list item
  li.innerText = newItem;

  // Create a delete button and add it to the list item
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", () => {
    li.remove();
  });
  li.appendChild(deleteButton);
  // Add the new list item to the list
  list.appendChild(li);

  // Reset the input field
  document.getElementById("new-item").value = "";
});
