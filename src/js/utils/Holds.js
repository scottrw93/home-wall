export const samePoint = (a, b) => a.x === b.x && a.y === b.y;

export const sameHold = (a, b) => {
  if (a.points.length !== b.points.length) {
    return false;
  }

  for (let i = 0; i < a.points.length; i++) {
    if (!samePoint(a.points[i], b.points[i])) {
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
