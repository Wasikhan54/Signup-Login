  // Get logged in user info from LocalStorage
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  const note = document.getElementById('areaa')

  // If no user is logged in, redirect to login page
  if (!loggedInUser) {
      alert('No user is logged in');
      setTimeout(() => {
          window.location.href = 'login.html';
      }, 1000);
  } else {
      // Display username on home page
      document.getElementById('username1').textContent = loggedInUser.username;
  }

  // Add event listener to logout button
  document.getElementById('logoutButton').addEventListener('click', function() {
      // Remove logged in user info from LocalStorage
      localStorage.removeItem('loggedInUser');
      alert('Logged out successfully');

      // Redirect to login page after 1 second
      setTimeout(() => {
          window.location.href = 'login.html';
      }, 1000);
  });


  function submitnote(){
    // const email = localStorage.getItem('loggedInUser');
    const name = loggedInUser.username
    var obj = {
        email: name,
        note : note.value
    }
    saveValueLocalStorge(obj);
    console.log(obj)
}
function saveValueLocalStorge(obj){
    var notes = localStorage.getItem("notes")
    console.log(notes)
    if (notes){
        notes= JSON.parse(notes)
        notes.push(obj)
        localStorage.setItem('notes',JSON.stringify(notes))
    }
    else{
        notes = [obj]
        localStorage.setItem('notes',JSON.stringify(notes))
    }    
    displayUsernote();
}
function displayUsernote() {
    var notes = localStorage.getItem("notes")
    var list = document.getElementById('list')
    if (notes){
        list.innerHTML= "";

        notes= JSON.parse(notes);
        notes.forEach(element  => {
            var liElement= ` <li class="border rounded p-3 my-2">
            ${element.note}
            <p>${element.email}</p>
            
            </li>`;
            console.log(element)
            list.innerHTML += liElement;
        });
    }
    
}
displayUsernote();
