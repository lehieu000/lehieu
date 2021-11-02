const signIn = (email, password) =>
  fetch('http://localhost/api/login.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({email, password}),
  }).then(res => res.json());

export default signIn;
