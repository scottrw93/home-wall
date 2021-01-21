export const fontGrades = {
  0: '5',
  1: '5+',
  2: '6A',
  3: '6A+',
  4: '6B',
  5: '6B+',
  6: '6C',
  7: '6C+',
  8: '7A',
  9: '7A+',
  10: '7B',
};

export const toFont = (grade) => fontGrades[grade] || grade;
