import { useSelector } from "react-redux";
import GPTSearch from "./GPTSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const showGptSearch = useSelector(
    (state) => state.gpt.gptSearchView,
  );

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-black">
      {/* Header */}
      <header className="absolute top-0 z-50 w-full">
        <Header
          add="background"
          showSignIn={false}
          showLanguage={false}
        />
      </header>

      {/* Page Content */}
      {showGptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;