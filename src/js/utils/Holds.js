export const samePoint = (a, b) => a.x === b.x && a.y === b.y;

export const sameHold = (a, b) => {
  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (!samePoint(a[i], b[i])) {
      return false;
    }
  }
  return true;
};

export const containsHolds = (set, subSet) => {
  if (subSet.length > set.length) {
    return false;
  }

  for (let i = 0; i < subSet.length; i++) {
    if (!sameHold(set[i], subSet[i])) {
      return false;
    }
  }
  return true;
};
