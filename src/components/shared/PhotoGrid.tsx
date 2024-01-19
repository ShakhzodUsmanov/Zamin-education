const PhotoGrid = () => {
  return (
    <div className="grid">
      <div className="grid grid-cols-3 grid-rows-5 gap-4 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] xl:h-[800px]">
        <div className="row-span-2">
          <img src="/assets/photo-grid/1.png" alt="img" className="w-full h-full aspect-square"/>
        </div>
        <div className="row-span-3 col-start-1 row-start-3">
          <img src="/assets/photo-grid/2.png" alt="img" className="w-full h-full"/>
        </div>
        <div className="row-span-3 col-start-2 row-start-1">
          <img src="/assets/photo-grid/3.png" alt="img" className="w-full h-full"/>
        </div>
        <div className="row-span-2 col-start-2 row-start-4">
          <img src="/assets/photo-grid/4.png" alt="img" className="w-full h-full"/>
        </div>
        <div className="row-span-2 col-start-3 row-start-1">
          <img src="/assets/photo-grid/5.png" alt="img" className="w-full h-full"/>
        </div>
        <div className="row-span-3 col-start-3 row-start-3 ">
          <img src="/assets/photo-grid/6.png" alt="img" className="w-full h-full"/>
        </div>
      </div>
    </div>
  );
};

export default PhotoGrid;
