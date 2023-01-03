import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";
import { SpeakerphoneIcon } from "@heroicons/react/outline";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

export default function NavBar({ showModal, setShowModal }) {
  const navigate = useNavigate();
  return (
    <Disclosure as="nav" className="bg-gray-800" id="home">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="relative flex items-center justify-between h-20">
              <div className="flex justify-between w-full items-center px-2 lg:px-0">
                <div className="">
                  <img src="./whitelogo.png" alt="" className='h-[90px] object-contain'/>
                  {/* <p className="text-white text-[26px] font-cursive">Rex Logistics</p> */}
                </div>
                <div className="hidden lg:block lg:ml-6">
                  <div className="flex space-x-4">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <a
                      href="#home"
                      className="bg-gray-900 cursor-pointer text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Home
                    </a>
                    <a
                      href="#about"
                      className="text-gray-300 cursor-pointer hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      About
                    </a>
                    <p
                      className="text-gray-300 cursor-pointer hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      onClick={() => setShowModal(!showModal)}
                    >
                      Track & Trace
                    </p>
                    <p
                      onClick={() => navigate("/login")}
                      className="text-gray-300 cursor-pointer hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Sign in
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end"></div>
              <div className="flex lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden cursor-pointer">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <Disclosure.Button
                as="a"
                href="#home"
                className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#about"
                className="text-gray-300 cursor-pointer hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </Disclosure.Button>
              <Disclosure.Button
                as="p"
                onClick={() => setShowModal(!showModal)}
                className="text-gray-300 hover:bg-gray-700 cursor-pointer hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Track & Trace
              </Disclosure.Button>
              <Disclosure.Button
                as="p"
                onClick={() => navigate("/login")}
                className="text-gray-300 hover:bg-gray-700 cursor-pointer hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Sign in
              </Disclosure.Button>
            </div>
            <div className="bg-gray-700 sm:hidden">
              <div className="max-w-7xl mx-auto py-1 px-3 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between flex-wrap">
                  <div className="w-0 flex-1 flex items-center">
                    <span className="flex p-2 rounded-lg bg-gray-800">
                      <SpeakerphoneIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                    <p className="ml-3 font-medium text-white truncate">
                      <span className="md:hidden">Track Online</span>
                      <span className="hidden md:inline">
                        Track Your Parcels Online
                      </span>
                    </p>
                  </div>
                  <p className="text-white mr-8">
                    {" "}
                    <PhoneIphoneIcon />
                    Call +1 (678) 561‑2614
                  </p>
                  <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                    <a
                      href="mailto:contact@rexslogistics.com"
                      className="flex items-center cursor-pointer justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-600 bg-white hover:bg-gray-50"
                    >
                      <MailOutlineOutlinedIcon />
                      contact@rexslogistics.com
                    </a>
                  </div>
                  <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                    <button
                      type="button"
                      className="-mr-1 flex p-2 rounded-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                    ></button>
                  </div>
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
