import SlickCarousel from "react-slick";

const Slider = SlickCarousel.default ?? SlickCarousel;

const slideButtonClass =
  "mt-2 w-fit cursor-pointer rounded-full bg-red-400 px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-red-500 hover:shadow-lg active:scale-[0.98]";

const HomeSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  return (
    <Slider {...settings}>
      <div className="relative">
        <img
          src="/Slider-1.jpg"
          alt="Shoes in Vogue"
          className="block h-[40vh] min-h-100 w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center gap-4 bg-black/40 px-8 md:px-16">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Clothes in Vogue
          </h2>
          <p className="max-w-xl text-sm text-white/90 md:text-base">
            Explore this season&apos;s most wanted clothing and accessories. Fresh
            drops, bold designs, and everyday comfort — all in one place.
          </p>
          <button type="button" className={slideButtonClass}>
            Discover
          </button>
        </div>
      </div>

      <div className="relative">
        <img
          src="/Slider-2.jpg"
          alt="Walk in comfort"
          className="block h-[40vh] min-h-100 w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center gap-4 bg-black/40 px-8 md:px-16">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Walk in Comfort
          </h2>
          <p className="max-w-xl text-sm text-white/90 md:text-base">
            From casual kicks to performance runners, find the perfect fit for
            every step. Quality materials built to last, priced for you.
          </p>
          <button type="button" className={slideButtonClass}>
            Shop Now
          </button>
        </div>
      </div>
    </Slider>
  );
};

export default HomeSlider;
