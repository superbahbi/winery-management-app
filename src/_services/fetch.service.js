import { BehaviorSubject } from "rxjs";

export const fetchService = {
  getAllBatch
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
