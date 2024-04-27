

const Banner = () => {
  return (
    <div className='craftsContainer min-h-screen'>
      <div className="carousel w-full pt-10 pb-10">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="../../public/photo-1502005229762-cf1b2da7c5d6.avif" className="w-full rounded-2xl" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="../../public/photo-1513519245088-0e12902e5a38.avif" className="w-full rounded-2xl" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="../../public/photo-1524758631624-e2822e304c36.avif" className="w-full rounded-2xl" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="../../public/photo-1600607686527-6fb886090705.avif" className="w-full rounded-2xl" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    </div>
  );
};

export default Banner;