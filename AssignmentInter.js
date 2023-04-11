function sumByDay(inputDict) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const outputDict = {};
  
    // Initialize the output dictionary with all days of the week as keys, and value 0
    for (const day of daysOfWeek) {
      outputDict[day] = 0;
    }
  
    // Iterate over the input dictionary, and add the value of each key to the corresponding day in the output dictionary
    for (const date in inputDict) {
      const dayOfWeek = new Date(date).toLocaleString('en-us', { weekday: 'long' });
      outputDict[dayOfWeek] += inputDict[date];
    }
  
    // Calculate the mean for missing days
    for (let i = 0; i < daysOfWeek.length; i++) {
      const currDay = daysOfWeek[i];
      const prevDay = daysOfWeek[i - 1];
      const nextDay = daysOfWeek[(i + 1) % daysOfWeek.length];
      
      if (outputDict[currDay] === 0) {
        outputDict[currDay] = Math.round((outputDict[prevDay] + outputDict[nextDay]) / 2);
      }
    }
  
    return outputDict;
  }

  const inputDict = {
    '2023-04-10': 5,
    '2023-04-11': 10,
    '2023-04-12': 15,
    '2023-04-13': 20,
    '2023-04-14': 25,
    '2023-04-15': 30,
  };
const outputDict = sumByDay(inputDict);
console.log(outputDict);