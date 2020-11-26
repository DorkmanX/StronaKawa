function getInputPlaceholder(name) {
  switch (name) {
    case "username":
      return "johndoe1";
    case "password":
      return "Must contain 8 or above characters with 1 big char and 1 number";
    case "email":
      return "johndoe1@gmail.com";
    case "telephone":
      return "+48111222333";
    case "firstName":
      return "John";
    case "lastName":
      return "Doe";
    case "houseNumber":
      return "10";
    case "road":
      return "Main St";
    case "zipcode":
      return "85795";
    case "place":
      return "Any town";
    default:
      return " ";
  }
}
export default getInputPlaceholder;
