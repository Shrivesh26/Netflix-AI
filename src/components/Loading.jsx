const Loading = () => {
  return (
    <div className="flex flex-col items-center gap-3 text-center text-white">
      <div className="h-9 w-9 animate-spin rounded-full border-4 border-white/20 border-t-red-600 sm:h-10 sm:w-10 " />

      <span className="text-sm sm:text-base md:text-lg">
        Finding movies for you...
      </span>
    </div>
  );
};

export default Loading;