import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebaseConfig";
import { NETFLIX_LOGO_URL } from "../constants/constant";
import NETFLIXAI from "../asset/NETFLIX-AI.png";
import { CiUser } from "react-icons/ci";
import { PiSignOut } from "react-icons/pi";
import { MdHelpOutline } from "react-icons/md";
import { useState } from "react";
import { toggleGptSearchView } from "../redux/Slice/gptSlice";

const Header = ({
  add,
  showSignIn = true,
  showLanguage = true,
}) => {
  const [showToast, setShowToast] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const user = useSelector((state) => state.user.user);
  const gptSearchBtn = useSelector(
    (state) => state.gpt.gptSearchView,
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toasterNotification = () => {
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
        navigate("/error");
      });
  };

  const handleGptSearchView = () => {
    dispatch(toggleGptSearchView());
  };

  return (
    <>
      <header
        className={`
          flex
          w-full
          items-center
          justify-between
          px-4
          py-3
          sm:px-6
          sm:py-4
          md:px-10
          lg:px-16
          xl:px-24
          ${
            add === "border"
              ? "border-b border-zinc-700"
              : "bg-black/10"
          }
        `}
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex-shrink-0"
        >
          {gptSearchBtn ? (
            <img
              src={NETFLIXAI}
              alt="NetflixGPT Logo"
              className="
                h-8
                w-auto
                sm:h-10
                md:h-12
              "
            />
          ) : (
            <img
              src={NETFLIX_LOGO_URL}
              alt="Netflix Logo"
              className="
                h-7
                w-auto
                sm:h-9
                md:h-11
              "
            />
          )}
        </Link>

        {/* Right Side */}
        <div className="flex min-w-0 items-center gap-2 sm:gap-3 md:gap-5">

          {/* Language */}
          {showLanguage && (
            <select
              className="
                hidden
                cursor-pointer
                rounded-md
                border
                border-gray-500
                bg-transparent
                px-2
                py-1.5
                text-sm
                text-white
                outline-none
                sm:block
                sm:px-3
                sm:py-2
                md:px-4
                md:text-base
              "
            >
              <option className="text-black">
                English
              </option>

              <option className="text-black">
                हिन्दी
              </option>
            </select>
          )}

          {/* Sign In */}
          {showSignIn && (
            <Link to="/login">
              <button
                className="
                  rounded-md
                  bg-red-600
                  px-3
                  py-1.5
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  hover:bg-red-700
                  active:scale-95
                  sm:px-4
                  sm:py-2
                  sm:text-base
                "
              >
                Sign In
              </button>
            </Link>
          )}

          {/* User */}
          {user && (
            <div className="relative flex items-center gap-2 sm:gap-3">

              {/* GPT Search */}
              <button
                onClick={handleGptSearchView}
                className="
                  rounded-md
                  bg-gradient-to-b
                  from-blue-600
                  to-blue-400
                  px-2.5
                  py-1.5
                  text-xs
                  font-bold
                  text-white
                  transition
                  hover:from-blue-700
                  hover:to-blue-500
                  sm:px-3
                  sm:py-2
                  sm:text-sm
                  md:px-4
                  md:text-base
                "
              >
                {gptSearchBtn ? "Homepage" : "AI Search"}
              </button>

              {/* Profile */}
              <button
                className="
                  flex
                  cursor-pointer
                  select-none
                  items-center
                  gap-1.5
                  sm:gap-2
                "
                onClick={() => setShowMenu(!showMenu)}
              >
                <img
                  src={user.photoURL}
                  alt="User Avatar"
                  className="
                    h-8
                    w-8
                    rounded-md
                    border
                    border-zinc-600
                    object-cover
                    sm:h-9
                    sm:w-9
                    md:h-10
                    md:w-10
                  "
                />

                <span
                  className={`
                    text-[10px]
                    text-white
                    transition-transform
                    duration-200
                    sm:text-xs
                    ${showMenu ? "rotate-180" : ""}
                  `}
                >
                  ▼
                </span>
              </button>

              {/* Dropdown */}
              {showMenu && (
                <div
                  className="
                    absolute
                    right-0
                    top-12
                    z-[100]
                    w-44
                    rounded-lg
                    border
                    border-zinc-700
                    bg-zinc-800/95
                    p-3
                    text-white
                    shadow-2xl
                    backdrop-blur-md
                    sm:top-14
                    sm:w-48
                    sm:p-4
                  "
                >
                  {/* Account */}
                  <button
                    onClick={toasterNotification}
                    className="
                      flex
                      w-full
                      items-center
                      gap-3
                      rounded-md
                      px-3
                      py-2.5
                      text-sm
                      transition
                      hover:bg-zinc-700
                      sm:text-base
                    "
                  >
                    <CiUser className="text-xl" />
                    <span>Account</span>
                  </button>

                  {/* Help */}
                  <button
                    onClick={toasterNotification}
                    className="
                      flex
                      w-full
                      items-center
                      gap-3
                      rounded-md
                      px-3
                      py-2.5
                      text-sm
                      transition
                      hover:bg-zinc-700
                      sm:text-base
                    "
                  >
                    <MdHelpOutline className="text-xl" />
                    <span>Help Center</span>
                  </button>

                  <div className="my-2 border-t border-zinc-700" />

                  {/* Sign Out */}
                  <button
                    onClick={handleSignOut}
                    className="
                      flex
                      w-full
                      items-center
                      gap-3
                      rounded-md
                      px-3
                      py-2.5
                      text-sm
                      text-red-400
                      transition
                      hover:bg-red-600/20
                      hover:text-red-300
                      sm:text-base
                    "
                  >
                    <PiSignOut className="text-xl" />
                    <span>Sign Out</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </header>

      {/* Toast */}
      {showToast && (
        <div
          className="
            fixed
            bottom-4
            left-4
            right-4
            z-[200]
            rounded-lg
            border
            border-zinc-700
            bg-zinc-950/95
            p-4
            text-white
            shadow-2xl
            backdrop-blur-md
            sm:left-auto
            sm:right-5
            sm:w-auto
            sm:max-w-sm
          "
        >
          <div className="flex items-start gap-3">
            <div className="text-xl">✨</div>

            <div>
              <h1 className="text-base font-bold text-red-500 sm:text-lg">
                Coming Soon!
              </h1>

              <p className="mt-1 text-sm text-zinc-300">
                This feature is under development.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;