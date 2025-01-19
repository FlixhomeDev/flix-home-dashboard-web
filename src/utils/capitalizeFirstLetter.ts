function capitalizeFirstLetter(string: string) {
  if (!string) return ""; // Verifica se a string não está vazia ou nula
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export { capitalizeFirstLetter };
