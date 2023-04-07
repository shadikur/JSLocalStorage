// Select fields
const user = document.querySelector("#user");
const btn = document.querySelector(".btn");
const list = document.querySelector("#list");
const clearBtn = document.querySelector("#clear");

// Check for existing storage
const getExistingUsers = () => {
  let existingUsers = JSON.parse(localStorage.getItem("users"));
  if (!existingUsers) {
    console.warn("No data stored yet");
    return [];
  } else {
    return existingUsers;
  }
};

// Add user to storage and display it
const addUser = (userName) => {
  let existingUsers = getExistingUsers();
  let newData = [...existingUsers];
  newData.push(userName);
  localStorage.setItem("users", JSON.stringify(newData));
  const li = document.createElement("li");
  li.innerHTML = userName;
  list.appendChild(li);
};

// Load existing users on page load
const loadUsers = () => {
  let existingUsers = getExistingUsers();
  existingUsers.map((userli) => {
    const li = document.createElement("li");
    li.innerHTML = userli;
    list.appendChild(li);
  });
};

btn.addEventListener("click", () => {
  addUser(user.value);
});

// Clear local storage
const clearStorage = () => {
  localStorage.clear();
  list.innerHTML = "";
};
clearBtn.addEventListener("click", () => {
  clearStorage();
});

loadUsers();
