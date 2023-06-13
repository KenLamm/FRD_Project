import jwt_decode from "jwt-decode";

interface User {
  username: string;
  password: string;
}

export async function login(user: User) {
  console.log("check check", process.env.REACT_APP_API_URL);
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );
    const data = await response.json();
    const result = data.access_token;
    if (response.status === 200) {
      // set local storage
      let token = result;
      let decoded = jwt_decode(token);
      console.log("data result: ", decoded);

      return true;
    } else {
      console.log(data);
      return false;
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
