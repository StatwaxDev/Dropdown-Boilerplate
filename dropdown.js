const locations = []; // add your location json
const programs = []; // add your program json

const locationSelection = document.getElementsByTagName('select')[0]; // grabs the first dropdown on the page and sets it for the list of locations
const programsSelection = document.getElementsByTagName('select')[1]; // grabs the second dropdown on the page and sets it for the list of programs

locationSelection.addEventListener('change', (() => { // listens for any change on the location dropdown
  programsSelection.innerHTML = `<option></option>`; // removes the previous location's programs from the program dropdown everytime a new location is selected
  const userSelection = locationSelection.value; // gets value of the location selected

  function filterPrograms(locationID) { // takes in a location id for each case set by the switch statement below
    const locationPrograms = programs 
      .filter(program => program.location_id === locationID) // gets only the programs with the same locaiton id as the school
      .map(program => program.program); // creates a new array of the filterd programs names
    for (j = 1; j <= locationPrograms.length - 1; j++) { // loops through each of the program names and appends them to the programs dropdown
      const programOption = locationPrograms[j];
      let option = document.createElement('option'); // creates a new option element
      option.text = programOption; // sets that option element's text to be the current program's name
      programsSelection.appendChild(option); // appends the current option to the programs dropdown
    };
  };

  switch(userSelection) { //checks which case matched the user's selection and passes the corresponding locaiton id to the filter programs function
    case 'LOCATION_1': //ENTER YOUR LOCATIONS NAME
      filterPrograms('1');
      break;
    case 'LOCATION_2'://ENTER YOUR LOCATIONS NAME
      filterPrograms('2');
      break;
    case 'LOCATION_3'://ENTER YOUR LOCATIONS NAME
      filterPrograms('3');
      break;
    case 'LOCATION_4'://ENTER YOUR LOCATIONS NAME
      filterPrograms('4');
      break;
    case 'LOCATION_5'://ENTER YOUR LOCATIONS NAME
      filterPrograms('5');
      break;
    case 'LOCATION_6'://ENTER YOUR LOCATIONS NAME
      filterPrograms('6');
      break;
  };

}));
