export const formatKeyNames = (key) => {
  return key
  .replace(/([a-z])([A-Z])/g, '$1 $2')  // Add space before uppercase letters
  .replace(/\b\w/g, (char) => char.toUpperCase());  //
  };