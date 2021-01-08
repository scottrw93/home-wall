const HOMEWALL_API = 'https://europe-west3-homewall-301021.cloudfunctions.net/HomeWall';
//const HOMEWALL_API = 'http://localhost:8080';

export const fetchProblems = () => {
  return fetch(`${HOMEWALL_API}/problems`)
    .then((res) => res.json())
    .then(
      (result) => {
        return result;
      },
      (error) => {
        console.error({ error });
      },
    );
};

export const fetchHolds = () => {
  return fetch(`${HOMEWALL_API}/holds`)
    .then((res) => res.json())
    .then(
      (result) => {
        return result;
      },
      (error) => {
        console.error({ error });
      },
    );
};

export const upsertHolds = (holds) => {
  return fetch(`${HOMEWALL_API}/holds`, {
    method: 'PUT',
    body: JSON.stringify(holds),
  })
    .then((res) => res.json())
    .then(
      (result) => {
        return result;
      },
      (error) => {
        console.error({ error });
      },
    );
};

export const createProblem = (problem) => {
  return fetch(`${HOMEWALL_API}/problems`, {
    method: 'POST',
    body: JSON.stringify(problem),
  })
    .then((res) => res.json())
    .then(
      (result) => {
        return result;
      },
      (error) => {
        console.error({ error });
      },
    );
};
