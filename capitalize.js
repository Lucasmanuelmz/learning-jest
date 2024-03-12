function capitalizeString(string) {
  const capitalString = string.toUpperCase().charAt(0) + string.substring(1)
  return capitalString;
}

export default capitalizeString;
