var obj = {
    name: "John Doe",
    age: 30,
    email: "johndoe@example.com"
  };
  
  var searchText = "o";
  
  var isTextFound = false;
  
  // Iterate over the object's properties
  for (var key in obj) {
    // Check if the property value contains the search text
    if (obj.hasOwnProperty(key) && typeof obj[key] === "string" && obj[key].includes(searchText)) {
      isTextFound = true;
      break;
    }
  }
  
  if (isTextFound) {
    console.log("Text found in the object.");
  } else {
    console.log("Text not found in the object.");
  }
  