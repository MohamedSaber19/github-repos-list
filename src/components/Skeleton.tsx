const Skeleton = () => {
  return (
    <div className="animate-pulse rounded-lg card opacity-80 flex flex-col gap-4 bg-gray-100 p-4">
      <div className="w-6/12 h-5 bg-gray-300"></div>
      <div className="w-full h-5 bg-gray-300"></div>
      <div className="w-full h-10 bg-gray-300"></div>
    </div>
  );
};

export default Skeleton;
