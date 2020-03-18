export const fetchService = {
  getAllData,
  addData
};

function getAllData(db) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" }
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
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  };

  return fetch(
    `${process.env.REACT_APP_API_URL}/v1/${db}/add`,
    requestOptions
  ).then(batch => {
    return batch;
  });
}
