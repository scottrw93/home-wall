const CREATE_WALL = 'CREATE_WALL';
//const DELETE_WALL = 'DELETE_WALL';

const CREATE_PROBLEM = 'CREATE_PROBLEM';
const DELETE_PROBLEM = 'DELETE_PROBLEM';

const SUPER_ADMIN = 'SUPER_ADMIN';

export const defaultScopes = (email = null) => {
  if (email) {
    return email === 'scott.rw93@gmail.com' ||
      email === 'jules.nikolova@gmail.com' ||
      email === 'dbw16d@gmail.com'
      ? [SUPER_ADMIN]
      : [CREATE_PROBLEM, DELETE_PROBLEM];
  }
  return [];
};

const isSuperAdmin = (user) => user.scopes.indexOf(SUPER_ADMIN) > -1;

export const canCreateWall = (user) => {
  if (isSuperAdmin(user)) {
    return true;
  }
  return user.scopes.indexOf(CREATE_WALL) > -1;
};

export const canDeleteWall = (user, author) => {
  if (isSuperAdmin(user)) {
    return true;
  }
  return user.scopes.indexOf(DELETE_PROBLEM) > -1 && user.name === author;
};

export const canDeleteProblem = (user, author) => {
  if (isSuperAdmin(user)) {
    return true;
  }
  return user.scopes.indexOf(DELETE_PROBLEM) > -1 && user.name === author;
};

export const canCreateProblem = (user) => {
  if (isSuperAdmin(user)) {
    return true;
  }
  return user.scopes.indexOf(CREATE_PROBLEM) > -1;
};
