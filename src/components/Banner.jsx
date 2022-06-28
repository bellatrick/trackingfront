import { SpeakerphoneIcon, XIcon } from "@heroicons/react/outline";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { useState } from "react";
export default function Banner() {
  const [hide, setHide] = useState(false);
  return (
    <div className={`bg-pink-700 hidden ${hide ? "sm:hidden" : "sm:block"}`}>
      <div className="max-w-7xl mx-auto py-1 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="flex p-2 rounded-lg bg-pink-800">
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
              href="mailto:busayosamuel2016@gmail.com"
              className="flex items-center justify-center cursor-pointer px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-pink-600 bg-white hover:bg-pink-50"
            >
              <MailOutlineOutlinedIcon />
              contact@fleetwoodscouriers.com
            </a>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              className="-mr-1 flex p-2 rounded-md hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            >
              <XIcon
                onClick={() => setHide(true)}
                className="h-6 w-6 text-white"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
