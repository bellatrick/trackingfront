
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
      
      "At Rex logistics, we provide reliable air freight services for a wide range of goods. Our experienced team of freight experts handle the entire process of shipping, from the moment the goods enter our care to their delivery at their destination. We take great care to ensure that all shipments are handled in a timely and secure manner, with the utmost respect for customer privacy and security. Our air freight services are tailored to meet the needs of both individual customers and businesses, ensuring that goods are delivered to their destination on time and with the highest level of safety. We are committed to providing an exceptional level of service to our customers, and our air freight services are no exception.",
    imageUrl: img3,
  },
  {
    title: "LOGISTICS SOLUTIONS",
    details:
      "We are the top 5 services for your logistics solutions. We will always find room on our trucks for your cargo.  We always handle your single shipments and your frequent deliveries with equal amount of professionalism and commitment",
    imageUrl: img4,
  },
  {
    title: "HAULAGE",
    details:  "Our logistics company provides a comprehensive range of haulage services for businesses looking to safely and efficiently transport goods. Our reliable fleet of vehicles are equipped with GPS tracking technology and are operated by experienced, professional drivers, ensuring that goods are always delivered on time and in perfect condition. We provide a full range of services including container haulage, temperature-controlled goods transport, bulk goods delivery, and hazardous materials transportation. We also offer a range of additional services such as warehousing, customs clearance, and order fulfilment. With our wide range of vehicles and capabilities, we are confident that we can meet your haulage requirements.",
    imageUrl: img2,
  },
  {
    title: "GLOBAL MAIL",
    details:
      
      "Our logistics company offers a comprehensive global mail service. Whether you need to send a single letter or a large shipment of parcels, we can provide you with the best solutions for your needs. We offer a range of services that include express mail, international shipping, direct mail, and fulfillment services. Our experienced team of professionals can handle all of your mail needs and ensure your packages are delivered quickly and securely. We have established relationships with trusted carriers around the world and can provide you with competitive rates for a variety of destinations. With our global mail service, you can count on reliable delivery times, secure packaging, and exceptional customer service.",
    imageUrl: img3,
  },
  {
  title: "WAREHOUSING",
  details:
    " We also provide domestic warehousing services. We offer a variety of storage solutions, from large warehouses to smaller, more specialized units. Our warehousing services are designed to meet your unique needs, whether you’re seeking short-term storage or long-term storage. We also provide temperature-controlled and humidity-controlled facilities, ensuring that your items are stored safely and securely.",
  imageUrl: img4,
  },
  {
    title: "DOMESTIC COURIER",
    details:
      "We provide reliable and efficient domestic courier services. We offer a wide range of services, from express deliveries to overnight services, so you can find the delivery option that best meets your needs. Our team of experienced professionals ensures that your packages are handled with care and speed. We also use state-of-the-art tracking systems, so you can always keep an eye on your shipments. Our services are cost-effective and secure, making us the perfect partner for your domestic courier needs.",
    imageUrl: img5,
    },
];

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <Fade left>
              <h2 className="text-3xl font-extrabold text-purple-600 tracking-tight sm:text-4xl">
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
                      <div className=" text-purple-600 leading-6  space-y-1">
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
