const HOMEWALL_API = 'https://homewall-301021.ew.r.appspot.com';
//const HOMEWALL_API = 'http://localhost:8080';

export const fetchProblems = () => {
  return fetch(`${HOMEWALL_API}/problems`, {
    headers: {
      'Content-Type': 'application/json',
    },
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

export const deleteProblem = (uuid) => {
  return fetch(`${HOMEWALL_API}/problems/${uuid}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
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
    headers: {
      'Content-Type': 'application/json',
    },
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
  return fetch(`${HOMEWALL_API}/walls`, {
    headers: {
      'Content-Type': 'application/json',
    },
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

export const createWall = (wall) => {
  return fetch(`${HOMEWALL_API}/walls`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
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

export const uploadWallImage = (file) => {
  const form = new FormData();
  form.append('file', file);

  return fetch(`${HOMEWALL_API}/images/upload`, {
    method: 'POST',
    body: form,
  })
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => console.log({ error }));
};
