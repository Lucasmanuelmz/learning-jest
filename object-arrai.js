const analyzeArray = (array) => {
    let sum = 0;
    let myMin = array[0];
    let myMax = array[0];

    for (const element of array) {
      sum += element;

      if (element < myMin) {
        myMin = element;
      }

      if (element > myMax) {
        myMax = element;
      }
    }

    const theAverage = sum / array.length;

    return {
      average: theAverage,
      min: myMin,
      max: myMax,
      length: array.length,
    };
  };

  export default analyzeArray;
