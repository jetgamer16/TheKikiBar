import { parse } from 'querystring';

export async function post(context) {
  const body = await context.request.text();
  const data = parse(body);

  const response = await fetch(`http://localhost:3000/users?username=${data.username}`);
  const users = await response.json();

  if (users.length > 0) {
    return {
      body: 'User already exists',
      status: 400
    };
  } else {
    const newUser = { username: data.username, email: data.email, password: data.password, favorites: [] };
    const newUserResponse = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser)
    });

    const createdUser = await newUserResponse.json();

    return {
      status: 303,
      headers: {
        location: `/profile?username=${createdUser.username}`
      }
    };
  }
}
