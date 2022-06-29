import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { sliderItems } from "../data";
export default function HeroSection({ showModal, setShowModal }) {
  return (
    <div className="bg-gray-800 overflow-hidden max-h-screen pb-8 sm:pb-12 lg:pb-12">
      <Carousel
        autoPlay={true}
        showThumbs={false}
        swipeable={false}
        stopAutoPlayOnHover={true}
        interval={3000}
        animation={"fade"}
        showIndicators={false}
        infiniteLoop={true}
        showStatus={false}
        stopOnHover={true}
      >
        {sliderItems.map((slider, i) => (
          <div
            key={i}
            className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48"
          >
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
              <div>
                <div className="mt-4 flex justify-center">
                  <div className="mt-6 sm:max-w-xl">
                    <h1 className="text-4xl text-center font-extrabold text-gray-200 tracking-tight sm:text-5xl">
                      {slider.title}
                    </h1>
                    <p className="mt-6 text-xl text-center font-bold text-white">
                      {slider.desc}
                    </p>
                  </div>
                </div>
                <div className="mt-10">
                  <div className="mt-3 w-full rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button
                      type="button"
                      onClick={() => setShowModal(!showModal)}
                      className="w-full bg-gray-700 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-pink-500"
                    >
                      Track
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:mx-auto sm:max-w-5xl sm:px-6">
              <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <div className="hidden sm:block">
                  <div className="absolute inset-y-0 left-1/2 w-screen bg-gray-800 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full" />
                  <svg
                    className="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
                    width={404}
                    height={392}
                    fill="none"
                    viewBox="0 0 404 392"
                  >
                    <defs>
                      <pattern
                        id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                      >
                        <rect
                          x={0}
                          y={0}
                          width={4}
                          height={4}
                          className="text-pink-700"
                          fill="currentColor"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width={404}
                      height={392}
                      fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                    />
                  </svg>
                </div>
                <div className="relative pl-4  -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:w-full  lg:pl-12">
                  <img
                    className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 object-fit lg:w-auto lg:max-w-none"
                    src={slider.img}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
