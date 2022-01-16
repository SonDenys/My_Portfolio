const Tools = ({ allServices, allTools }) => {
  return (
    <div className="relative py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">
          Mes outils et services
        </h2>
        <div className="mt-12 ">
          <div className="inline-grid gap-24 sm:grid-cols-2 lg:grid-cols-4">
            {allTools}
            {allServices}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
