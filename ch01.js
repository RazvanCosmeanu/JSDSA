const flatten = ([first, ...rest]) => {
  if (first === undefined) {
    return [];
  } else if (!Array.isArray(first)) {
    return [first, ...flatten(rest)];
  } else {
    return [...flatten(first), ...flatten(rest)];
  }
};

const sum = (curr, acc) => {
  return curr + acc;
};

const arrayAverage = (array, precision = 1) => {
  return (array.reduce(sum, 0) / array.length).toFixed(precision);
};

/*
1. Create a grades object that stores a set of student grades in an object. 
Provide a function for adding a grade and a function for displaying the student’s grade average.
*/

class Grades {
  constructor(initialRecord = {}) {
    this._grades = Object.assign({}, initialRecord);
  }

  add(student, grade) {
    this._grades[student]
      ? this._grades[student].push(grade)
      : (this._grades[student] = [grade]);
  }

  average(student) {
    const studentGrades = this._grades[student];
    return arrayAverage(studentGrades, 2);
  }

  get(student) {
    return student ? this._grades[student] : this._grades;
  }
}

/*
2. Store a set of words in an array and display the contents both forward and backward.
*/
const forwardBackward = arr => {
  return `Forward: ${arr} | Backward: ${arr.reverse()}`;
};

/* 
3. Modify the weeklyTemps object in the chapter so that it stores a month’s worth of data using a two-dimensional array. Create functions to display the monthly average, a specific week’s average, and all the weeks’ averages.
*/

class MonthlyTemps {
  constructor(temps = []) {
    this._temps = temps.slice(0);
  }

  monthlyAverage() {
    const flat = flatten(this._temps);
    return arrayAverage(flat, 1);
  }

  weekAverage(week) {
    return arrayAverage(this._temps[week], 1);
  }

  allWeeksAverage() {
    let total = 0;
    let res = [];
    for (let week = 0; week < this._temps.length; week++) {
      for (let day = 0; day < this._temps[week].length; day++) {
        total += this._temps[week][day];
      }
      const average = (total / this._temps[week].length).toFixed(1);
      res.push(`Week ${week + 1} average is ${average}`);
      total = 0;
    }
    return res.join(' | ');
  }
}

/* 
4. Create an object that stores individual letters in an array and has a function for displaying the letters as a single word. 
*/

class WordLetters {
  constructor(letters = []) {
    this._letters = letters.splice(0);
  }

  add(letter) {
    return this._letters.push(letter);
  }

  toWord() {
    return this._letters.join('');
  }

  get letters() {
    return this._letters;
  }
}

module.exports = {
  Grades,
  forwardBackward,
  MonthlyTemps,
  WordLetters,
  flatten,
  arrayAverage
};
