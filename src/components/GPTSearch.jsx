import { useSelector } from "react-redux";
import Background from "./Background";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearch = () => {
  const { movieResult, isLoading } = useSelector(
    (store) => store.gpt
  );

  const hasSearched = isLoading || !!movieResult?.length;

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-black">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <Background />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen w-full flex-col pt-20 sm:pt-24 md:pt-28">
        <GPTSearchBar hasSearched={hasSearched} />

        <GPTMovieSuggestion />
      </div>
    </div>
  );
};

export default GPTSearch;