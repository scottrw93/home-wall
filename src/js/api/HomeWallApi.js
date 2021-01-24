const HOMEWALL_API =
  'https://europe-west3-homewall-301021.cloudfunctions.net/HomeWall';
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

export const deleteProblem = (uuid) => {
  return fetch(`${HOMEWALL_API}/problems/${uuid}`, {
    method: 'DELETE',
  }).then(
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

export const fetchWalls = () => {
  return fetch(`${HOMEWALL_API}/walls`)
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

export const createWall = (wall) => {
  return fetch(`${HOMEWALL_API}/walls`, {
    method: 'POST',
    body: JSON.stringify(wall),
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
