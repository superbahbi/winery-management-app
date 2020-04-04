import jwt from "jsonwebtoken";
import moment from "moment";
import { BehaviorSubject } from "rxjs";
import { handleResponse } from "../_helpers";

const currentUserSubject = new BehaviorSubject(
  JSON.parse(localStorage.getItem("currentUser"))
);

export const authenticationService = {
  login,
  register,
  logout,
  checkTokenExpire,
  currentUser: currentUserSubject.asObservable(),
  get currentUserValue() {
    return currentUserSubject.value;
  }
};

function login(username, password) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  };

  return fetch(`${process.env.REACT_APP_API_URL}/v1/auth/login`, requestOptions)
    .then(handleResponse)
    .then(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem("currentUser", JSON.stringify(user));
      currentUserSubject.next(user);
      return user;
    });
}
function register(formData) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      companyCode: formData.companyCode,
      fullname: formData.fullname,
      email: formData.email,
      username: formData.username,
      repeatPassword: formData.repeatPassword,
      password: formData.password
    })
  };

  return fetch(
    `${process.env.REACT_APP_API_URL}/v1/auth/register`,
    requestOptions
  )
    .then(handleResponse)
    .then(user => {
      console.log(user);
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem("currentUser", JSON.stringify(user));
      currentUserSubject.next(user);
      return user;
    });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("currentUser");
  currentUserSubject.next(null);
}

function checkTokenExpire() {
  if (currentUserSubject.value) {
    const token = currentUserSubject.value.token;
    var decodedToken = jwt.decode(token, { complete: true });

    const tokenExpiration = decodedToken.payload.exp;
    const tokenExpirationTimeInSeconds =
      tokenExpiration - moment(Math.floor(Date.now() / 1000));
    if (tokenExpiration && tokenExpirationTimeInSeconds < 20) {
      localStorage.removeItem("currentUser");
      currentUserSubject.next(null);
    }
  }
}
