# Boilerplate Dropdown

A template for a dropdown

## Get Started

Either clone this or copy and paste the contents of this repository.
```bash
 HTTPS $ git clone https://github.com/StatwaxDev/Dropdown-Boilerplate.git
 SSH $ git clone git@github.com:StatwaxDev/Dropdown-Boilerplate.git
```
## Usage

This is a dyanmic dropdown for a College location's and their program's. Where the location selected dynamically loads the programs of the selected location.
Please either import or copy and paste your needed json into the corresponding `locations` and `programs` constants. This will make for the least amount of modification.
```javascript
const locations = []; // add your location json
const programs = []; // add your program json
```
You will also need to add the `location` names to the switch statment. Please make sure each case matches the dropdowns text, this will allow the code to function as intended.
```javascript
  switch(userSelection) { //checks which case matched the user's selection and passes the corresponding locaiton id to the filter programs function
    case 'LOCATION_1': //ENTER YOUR LOCATIONS NAME
      filterPrograms('1');
      ...
```
### If Using a CMS
If you are using a content management system, you may need to enable `strict mode` and or wrap the script in a `explicit script tag`.
```javascript
<script type="text/javascript">
YOUR CODE HERE
</script>
```