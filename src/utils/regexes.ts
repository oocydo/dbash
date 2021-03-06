const yearShortRegEx = '([0-9]{2})';
const yearFullRegEx = '([0-9]{4})';
const monthRegEx = '((1[0-2])|(0[0-9]))';
const dayRegEx = '(([0-2][0-9])|(3[0-1]))';
const hmsRegEx = '([0-5][0-9])';

export const dateShortRegEx = new RegExp('^' + yearShortRegEx + '-' + monthRegEx + '-' + dayRegEx + '$');
export const dateFullRegEx = new RegExp('^' + yearFullRegEx + '-' + monthRegEx + '-' + dayRegEx + '$');

export const dateTimeShortRegEx = new RegExp(
  '^' + yearShortRegEx + '-' + monthRegEx + '-' + dayRegEx + ' ' + hmsRegEx + ':' + hmsRegEx + ':' + hmsRegEx + '$'
);
export const dateTimeFullRegEx = new RegExp(
  '^' + yearFullRegEx + '-' + monthRegEx + '-' + dayRegEx + ' ' + hmsRegEx + ':' + hmsRegEx + ':' + hmsRegEx + '$'
);
