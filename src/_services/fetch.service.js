import { authenticationService } from "../_services";
export const fetchService = {
  getAllData,
  addData,
  editData,
  deleteData
};

function getAllData(db) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + authenticationService.currentUser.token
    }
  };

  return fetch(
    `${process.env.REACT_APP_API_URL}/v1/${db}`,
    requestOptions
  ).then(response => {
    return response;
  });
}
function addData(db, body) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + authenticationService.currentUser.token
    },
    body: JSON.stringify(body)
  };

  return fetch(
    `${process.env.REACT_APP_API_URL}/v1/${db}/add`,
    requestOptions
  ).then(batch => {
    return batch;
  });
}
function editData(db, body) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + authenticationService.currentUser.token
    },
    body: JSON.stringify(body)
  };

  return fetch(
    `${process.env.REACT_APP_API_URL}/v1/${db}/edit`,
    requestOptions
  ).then(batch => {
    return batch;
  });
}
function deleteData(db, body) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + authenticationService.currentUser.token
    },
    body: JSON.stringify(body)
  };

  return fetch(
    `${process.env.REACT_APP_API_URL}/v1/${db}/delete`,
    requestOptions
  ).then(batch => {
    return batch;
  });
}
