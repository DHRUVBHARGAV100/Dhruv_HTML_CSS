let editedUser = null;

document.getElementById('addUserForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    var username = document.getElementById('usernameInput').value;
    var email = document.getElementById('emailInput').value;

    if (username && email) {  
        const userData = {username: username, email: email};
        
        fetch('', {
            method: 'POST', 
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then((data) => {
            alert("User added successfully");
            window.location.reload(); 
        })
        .catch((error) => {
            console.error('Error:', error);
            alert("Failed to add user, please try again.");
        });
    } else {
        alert('Please fill all fields');
    }
});
document.getElementById('editBtn').onclick = function() {
    let editUsername = editedUser.username; 
    
    document.getElementById('emailInput').value = editedUser.email; 
    
    document.getElementById('updateBtn').disabled = true; 
    document.getElementById('cancelBtn').disabled = false;  
}

document.getElementById('cancelBtn').onclick = function() {
  
    editedUser = null; 
    
    document.getElementById('usernameInput').value = '';
    document.getElementById('emailInput').value = '';
          
    document.getElementById('editBtn').disabled = false;  
    document.getElementById('cancelBtn').disabled = false;  
}

function editUser(btn) {
    editedUser = JSON.parse(btn.parentNode.innerText); 
    
    document.getElementById('usernameInput').value = editedUser.username;
    document.getElementById('emailInput').value = editedUser.email;
  
    btn.innerHTML = 'Update';
    btn.onclick = function() {updateUser(this)}; 
}

function deleteUser(username) {
    fetch('/api/delete', {
        method: 'DELETE', 
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({username: username})
    })
    .then(response => response.json())
    .then((data) => {
        alert("User deleted successfully");
        window.location.reload(); 
    })
    .catch((error) => {
        console.error('Error:', error);
        alert("Failed to delete user, please try again.");
    });
}

function updateUser(btn) {
    const username = editedUser.username; 
  
    const newUsername = document.getElementById('usernameInput').value || username;
    const newEmail = document.getElementById('emailInput').value || editedUser.email;
    
    const updatedUserData = {username: newUsername, email: newEmail};  
  
    fetch('/api/update', {
        method: 'PUT', 
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({oldUserData: editedUser, updatedUserData: updatedUserData})
    })
    .then(response => response.json())
    .then((data) => {
        alert("User updated successfully");
        
        editedUser = null; 
        document.getElementById('usernameInput').value = '';
        document.getElementById('emailInput').value = '';
          
        window.location.reload();
    })
    .catch((error) => {
        console.error('Error:', error);
        alert("Failed to update user, please try again.");
    });
}


