import { parse } from 'querystring';

export async function post(context) {
  const body = await context.request.text();
  const data = parse(body);

  const response = await fetch(`http://localhost:3000/users?username=${data.username}`);
  const users = await response.json();

  if (users.length > 0 && users[0].password === data.password) {
    return {
      status: 303,
      headers: {
        location: `/profile?username=${data.username}`
      }
    };
  } else {
    return {
      body: 'Invalid credentials',
      status: 401
    };
  }
}
