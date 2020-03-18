export const fetchService = {
  getAllBatch,
  addBatch
};

function getAllBatch() {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  };

  return fetch(
    `${process.env.REACT_APP_API_URL}/v1/batch/`,
    requestOptions
  ).then(batch => {
    return batch;
  });
}
function addBatch(body) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  };

  return fetch(
    `${process.env.REACT_APP_API_URL}/v1/batch/add`,
    requestOptions
  ).then(batch => {
    return batch;
  });
}
