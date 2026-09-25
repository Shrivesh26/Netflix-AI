import { checkValidData } from "../utils/validate";
import Header from "./Header";
import { useRef, useState } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/Slice/userSlice";
import { PROFILE_IMAGE_URL } from "../constants/constant";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    if (isSignInForm) {
      const message = checkValidData(
        "",
        emailValue,
        passwordValue,
        isSignInForm,
      );

      setErrorMessage(message);

      if (message) return;

      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User signed in:", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          console.error("Error signing in:", errorCode, errorMessage);
          setErrorMessage("Invalid email or password. Please try again.");
        });
    } else {
      const nameValue = name.current.value;

      const message = checkValidData(
        nameValue,
        emailValue,
        passwordValue,
        isSignInForm,
      );

      setErrorMessage(message);

      if (message) return;

      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: nameValue,
            photoURL: PROFILE_IMAGE_URL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;

              dispatch(
                addUser({
                  uid,
                  email,
                  displayName,
                  photoURL,
                }),
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          if (errorCode === "auth/email-already-in-use") {
            setErrorMessage("Email is already in use. Please sign in.");
          }

          console.error("Error signing up:", errorCode, errorMessage);
        });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#5b0d0d] via-[#240404] to-black text-white">
      <Header add="border" showLanguage={false} showSignIn={false} />

      <main className="mx-auto w-full max-w-xl px-5 py-8 sm:px-8 sm:py-12 md:py-16 lg:max-w-lg">
        {/* Heading */}
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
          Enter your info to {isSignInForm ? "Sign in" : "Sign up"}
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          {/* Full Name */}
          {!isSignInForm && (
            <div className="relative">
              <input
                ref={name}
                id="full-name"
                type="text"
                placeholder=" "
                className="peer h-14 w-full rounded border border-gray-600 bg-[#221818] px-4 pt-5 pb-1 text-base text-white outline-none transition focus:border-white sm:h-16 sm:text-lg"
              />

              <label
                htmlFor="full-name"
                className="
                  absolute left-4 top-4
                  origin-left
                  text-base text-gray-400
                  transition-all duration-200
                  peer-placeholder-shown:top-4
                  peer-placeholder-shown:text-base
                  peer-focus:top-2
                  peer-focus:text-xs
                  peer-[:not(:placeholder-shown)]:top-2
                  peer-[:not(:placeholder-shown)]:text-xs
                  sm:text-lg
                  sm:peer-placeholder-shown:text-lg
                  sm:peer-focus:text-sm
                  sm:peer-[:not(:placeholder-shown)]:text-sm
                "
              >
                Full Name
              </label>
            </div>
          )}

          {/* Email */}
          <div className="relative">
            <input
              ref={email}
              id="email"
              type="email"
              placeholder=" "
              className="peer h-14 w-full rounded border border-gray-600 bg-[#221818] px-4 pt-5 pb-1 text-base text-white outline-none transition focus:border-white sm:h-16 sm:text-lg"
            />

            <label
              htmlFor="email"
              className="
                absolute left-4 top-4
                origin-left
                text-base text-gray-400
                transition-all duration-200
                peer-placeholder-shown:top-4
                peer-placeholder-shown:text-base
                peer-focus:top-2
                peer-focus:text-xs
                peer-[:not(:placeholder-shown)]:top-2
                peer-[:not(:placeholder-shown)]:text-xs
                sm:text-lg
                sm:peer-placeholder-shown:text-lg
                sm:peer-focus:text-sm
                sm:peer-[:not(:placeholder-shown)]:text-sm
              "
            >
              Email or mobile number
            </label>
          </div>

          {/* Password */}
          <div className="relative">
            <input
              ref={password}
              id="password"
              type="password"
              placeholder=" "
              className="peer h-14 w-full rounded border border-gray-600 bg-[#221818] px-4 pt-5 pb-1 text-base text-white outline-none transition focus:border-white sm:h-16 sm:text-lg"
            />

            <label
              htmlFor="password"
              className="
                absolute left-4 top-4
                origin-left
                text-base text-gray-400
                transition-all duration-200
                peer-placeholder-shown:top-4
                peer-placeholder-shown:text-base
                peer-focus:top-2
                peer-focus:text-xs
                peer-[:not(:placeholder-shown)]:top-2
                peer-[:not(:placeholder-shown)]:text-xs
                sm:text-lg
                sm:peer-placeholder-shown:text-lg
                sm:peer-focus:text-sm
                sm:peer-[:not(:placeholder-shown)]:text-sm
              "
            >
              Password
            </label>
          </div>

          {/* Error */}
          {errorMessage && (
            <p className="py-1 text-sm font-medium text-red-500 sm:text-base">
              {errorMessage}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="h-12 w-full rounded bg-[#E50914] text-lg font-semibold transition hover:bg-[#C11119] sm:h-14 sm:text-xl"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
        </form>

        {/* Help */}
        {isSignInForm && (
          <details className="mt-8 sm:mt-12">
            <summary className="cursor-pointer text-base marker:hidden sm:text-lg">
              Get Help
            </summary>

            <div className="mt-2 space-y-2 text-sm leading-6 sm:text-base">
              <p>
                <a
                  href="https://www.netflix.com/in/loginhelp"
                  className="underline"
                >
                  Forgot email or mobile number?
                </a>
              </p>

              <p>
                <a
                  href="https://help.netflix.com/en/node/311830241325668"
                  className="underline"
                >
                  Learn more about sign-in
                </a>
              </p>
            </div>
          </details>
        )}

        {/* Toggle */}
        <p
          className="mt-8 cursor-pointer text-sm text-gray-400 sm:mt-12 sm:text-base"
          onClick={toggleForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already have an account? Sign in."}
        </p>
      </main>
    </div>
  );
};

export default Login;