const { expect } = require('chai');

const {
  Grades,
  forwardBackward,
  MonthlyTemps,
  flatten,
  arrayAverage
} = require('../ch01');

describe('flatten', () => {
  const multiArray = [[1, 2, 3], 4, 5, [6, [7, 8], 9]];
  it(`should take an multidimensional array and transform it into a one dimensional array`, () => {
    expect(flatten(multiArray)).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});

describe('arrayAverage', () => {
  const testArray = [6, 8, 12, 1];

  it('should create an average of the values in the array', () => {
    expect(arrayAverage(testArray)).to.equal('6.8');
  });
});

describe(`1. Create a grades object that stores a set of student grades in an object. 
Provide a function for adding a grade and a function for displaying the student’s grade average.`, () => {
  const testGrades = {
    Sam: [78, 98.5, 22, 54],
    Mary: [99, 98, 78.5],
    Larry: [88, 96, 78.6, 99],
    Barrington: [44, 88, 43.8]
  };

  it('Should provide a constructor accepting optional grades object', () => {
    const grades = new Grades();
    expect(grades.get()).to.eql({});

    const prePopulatedGrades = new Grades({
      Lucy: [1, 2, 3],
      Marcus: [6, 7, 8]
    });
    expect(prePopulatedGrades.get('Marcus')).to.eql([6, 7, 8]);
  });

  it('Should provide a function to add a grade to existing student', () => {
    const grades = new Grades(testGrades);
    grades.add('Larry', 78);
    expect(grades.get('Larry')).to.eql([88, 96, 78.6, 99, 78]);
  });

  it('Should provide a function to add a grade to a new student', () => {
    const grades = new Grades(testGrades);
    grades.add('Bennifer', 21);
    grades.add('Bennifer', 88.6);
    expect(grades.get('Bennifer')).to.eql([21, 88.6]);
  });

  it(`Should provide a function for displayig the student's grade average`, () => {
    const grades = new Grades(testGrades);
    expect(grades.average('Sam')).to.equal('63.13');
  });
});

describe(`2. Store a set of words in an array and display the contents both forward and backward.`, () => {
  it('should return the contents of the array forward and backward', () => {
    const wordList = ['peanut', 'butter', 'gelly', 'time'];
    const fb = forwardBackward(wordList);

    expect(fb).to.equal(
      'Forward: peanut,butter,gelly,time | Backward: time,gelly,butter,peanut'
    );
  });
});

describe(`3. Modify the weeklyTemps object in the chapter so that it stores a month’s worth of data using a two-dimensional array. Create functions to display the monthly average, a specific week’s average, and all the weeks’ averages.`, () => {
  const sampleTemps = [
    [26, 28.5, 24, 29, 22, 26, 25],
    [23, 24.5, 24, 27, 29, 30, 31.4],
    [30, 29.8, 28, 27.6, 26, 26, 25.2],
    [25, 24.6, 24, 23, 21.9, 22, 23]
  ];

  const w = new MonthlyTemps(sampleTemps);

  it('should have a function that returns the monthly average', () => {
    expect(w.monthlyAverage()).to.equal('25.9');
  });

  it(`should have a function that returns a specific week's average`, () => {
    expect(w.weekAverage(0)).to.equal('25.8');
  });

  it(`should have a function that returns all the weeks' average`, () => {
    expect(w.allWeeksAverage()).to.equal(
      'Week 1 average is 25.8 | Week 2 average is 27.0 | Week 3 average is 27.5 | Week 4 average is 23.4'
    );
  });
});
