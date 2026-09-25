export const checkValidData = (name, email, password, isSignUp) => {
  // Name validation only for Sign Up
  if (!isSignUp) {
    if (!name.trim()) return "Name is required";

    const isNameValid = /^[a-zA-Z0-9_-]{3,16}$/.test(name);

    if (!isNameValid) {
      return "Name must be 3-16 characters";
    }
  }

  // Email validation
  if (!email.trim()) return "Email is required";

  const isEmailValid =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  if (!isEmailValid) return "Email is not valid";

  // Password validation
  if (!password.trim()) return "Password is required";

  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  if (!isPasswordValid) {
    return "Password must be at least 8 characters with uppercase, lowercase, number and special character";
  }

  return null;
};