import jwt_decode from "jwt-decode";

interface User {
  username: string;
  password: string;
}

export async function login(user: User) {
  console.log("check check", process.env.REACT_APP_API_URL);
  try {
    const response = await fetch(
      `http://localhost:8080/auth/login`,
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

      let decoded: any = jwt_decode(result);
      console.log("id", decoded);
      console.log(
        "data result: ",
        decoded.userId,
        decoded.username,
        decoded.isAdmin,
        result
      );

      localStorage.setItem("id", decoded.userId);
      localStorage.setItem("username", decoded.username);
      localStorage.setItem("isAdmin", decoded.isAdmin);
      localStorage.setItem("token", result);

      return true;
    } else {
      console.log(data);
      return false;
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
