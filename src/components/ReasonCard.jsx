const ReasonCard = ({ title, description, svg }) => {
  return (
    <div className="relative flex min-h-[260px] flex-1 flex-col overflow-hidden rounded-xl bg-gradient-to-br from-[#192044] to-[#210e17] p-5 text-white sm:min-h-[280px] sm:p-6 md:min-h-[300px]">
      <h2 className="mb-3 pr-16 text-xl font-semibold sm:mb-4 sm:text-2xl">
        {title}
      </h2>

      <p className="max-w-xl pr-2 text-sm leading-relaxed text-gray-300 sm:text-base">
        {description}
      </p>

      <div
        className="absolute bottom-4 right-4 scale-90 sm:bottom-5 sm:right-5 sm:scale-100"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    </div>
  );
};

export default ReasonCard;