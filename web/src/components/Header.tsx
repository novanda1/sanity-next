const Header: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-8 sm:items-start sm:space-y-0 sm:flex-row sm:space-x-8">
      <a className="flex-shrink-0" href="/">
        <span className="sr-only">Home</span>
        <div className="relative h-28 w-28 sm:h-36 sm:w-36 rounded-lg object-cover border border-slate-100 bg-lime-600"></div>
      </a>
      <div className="text-center sm:text-left">
        <h1 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
          <a href="/">Sanity</a>
        </h1>
        <div className="mt-2">
          <p className="text-xl leading-7 text-gray-500">
            Sanity.io is the unified content platform that powers better digital
            experiences
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
