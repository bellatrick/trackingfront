
import img2 from "../assets/p2.jpg";
import img3 from "../assets/p5.jpg";
import img4 from "../assets/p4.jpg";
import img5 from "../assets/p10.jpg";
import Fade from "react-reveal/Fade";
const feats = [
  {
    title: "ROAD FREIGHT",
    details:
      " Delivery of full load, part load and group page shipments. We will always find room on our trucks for your cargo.  We always handle your single shipments and your frequent deliveries with equal amount of professionalism and commitment",
    imageUrl: img2,
  },
  {
    title: "OCEAN FREIGHT",
    details:
      "Our company’s sea services provide much more than the average logistics company. Sea is faster, safer. We always handle your single shipments and your frequent deliveries with equal amount of professionalism and commitment",
    imageUrl: img5,
  },
  {
    title: "AIR FREIGHT",
    details:
      " Delivery of full load, part load and group page shipments. We will always find room on our trucks for your cargo.  We always handle your single shipments and your frequent deliveries with equal amount of professionalism and commitment",
    imageUrl: img3,
  },
  {
    title: "LOGISTICS SOLUTIONS",
    details:
      " Delivery of full load, part load and group page shipments. We will always find room on our trucks for your cargo.  We always handle your single shipments and your frequent deliveries with equal amount of professionalism and commitment",
    imageUrl: img4,
  },
  {
    title: "HAULAGE",
    details:
      " Delivery of full load, part load and group page shipments. We will always find room on our trucks for your cargo.  We always handle your single shipments and your frequent deliveries with equal amount of professionalism and commitment",
    imageUrl: img4,
  },
  {
    title: "GLOBAL MAIL",
    details:
      " Delivery of full load, part load and group page shipments. We will always find room on our trucks for your cargo.  We always handle your single shipments and your frequent deliveries with equal amount of professionalism and commitment",
    imageUrl: img4,
  },
  {
  title: "WAREHOUSING",
  details:
    " Delivery of full load, part load and group page shipments. We will always find room on our trucks for your cargo.  We always handle your single shipments and your frequent deliveries with equal amount of professionalism and commitment",
  imageUrl: img4,
  },
  {
    title: "DOMESTIC COURIER",
    details:
      " Delivery of full load, part load and group page shipments. We will always find room on our trucks for your cargo.  We always handle your single shipments and your frequent deliveries with equal amount of professionalism and commitment",
    imageUrl: img4,
    },
];

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <Fade left>
              <h2 className="text-3xl font-extrabold text-pink-600 tracking-tight sm:text-4xl">
                Our Services
              </h2>
            </Fade>

            <Fade right>
              <p className="text-xl text-gray-500">
                With our extensive knowledge of logistics and transport systems
                as well as 30 years of experience, we will find the best
                solution for you. We make sure your cargo will get there: on
                time, safely, and on budget. Do not worry about the world
                becoming more and more complex and transportation requirements
                increasing every day. We will take care of it all, every step of
                the way.
              </p>
            </Fade>
          </div>
          <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8">
            {feats.map((person, i) => (
              <li key={i}>
                <Fade cascade opposite left>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <img
                        className="object-fit w-full h-72 shadow-lg rounded-lg"
                        src={person.imageUrl}
                        alt=""
                      />
                    </div>

                    <div className="space-y-2">
                      <div className=" text-pink-600 leading-6  space-y-1">
                        <h3 className="font-bold text-xl mb-4">
                          {person.title}
                        </h3>
                        <p className="text-gray-500">{person.details}</p>
                      </div>
                      <ul className="flex space-x-5">
                        <li>
                          <p></p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Fade>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
