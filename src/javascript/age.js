export function calculateAge(birthDateString) {
  // Convert the provided birthDateString into a Date object.
  const birthDate = new Date(birthDateString);

  // Check if the birthDate is a valid date.
  if (isNaN(birthDate)) {
    throw new Error("Invalid birth date");
  }

  // Get the current date.
  const today = new Date();

  // Calculate the initial age based on the difference in years between today and the birth year.
  let age = today.getFullYear() - birthDate.getFullYear();

  // Check if the birth date has not yet occurred this year, and adjust the age if necessary.
  const isBeforeBirthdayThisYear =
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() < birthDate.getDate());

  // Subtract one from the age if today's date is before the birth date in the current year.
  if (isBeforeBirthdayThisYear) {
    age--;
  }

  // Return the final calculated age.
  return age;
}
