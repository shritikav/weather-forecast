function login() {
  var username = document.getElementById('loginUsername').value;
  var password = document.getElementById('loginPassword').value;

  fetch('your_login_endpoint', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username: username, password: password })
  })
  .then(response => response.json())
  .then(data => {
    // Assuming the server responds with a success message
    if (data.success) {
      // Redirect to another page upon successful login
      window.location.href = 'index.html'; // Replace 'dashboard.html' with the desired page URL
    } else {
      alert('Login failed. Please try again.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

function signup() {
  var username = document.getElementById('signupUsername').value;
  var password = document.getElementById('signupPassword').value;

  fetch('your_signup_endpoint', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username: username, password: password })
  })
  .then(response => response.json())
  .then(data => {
    // Assuming the server responds with a success message
    if (data.success) {
      // Redirect to another page upon successful signup
      window.location.href = 'index.html'; // Replace 'welcome.html' with the desired page URL
    } else {
      alert('Signup failed. Please try again.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
