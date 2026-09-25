import { NETFLIX_BANNER_URL } from "../constants/constant";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <img
        src={NETFLIX_BANNER_URL}
        alt=""
        aria-hidden="true"
        className="h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/75" />
    </div>
  );
};

export default Background;