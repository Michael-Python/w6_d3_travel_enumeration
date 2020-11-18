const categories = ['General', 'Exotic', 'Extreme', 'Extreme', 'General' ,'Water', 'Extreme']
.filter((value, index, categoryArray) => categoryArray.indexOf(value) === index);

// This will return an array that has the unique category names
['General', 'Exotic', 'Extreme', 'Water']
