import { authenticationService } from "../_services";
export const fetchService = {
  fetchDataFromDB
};

function fetchDataFromDB(db, method, body) {
  const requestOptions = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + authenticationService.currentUser.token
    },
    body: JSON.stringify(body)
  };

  return fetch(
    `${process.env.REACT_APP_API_URL}/v1/${db}`,
    requestOptions
  ).then(response => {
    return response;
  });
}
