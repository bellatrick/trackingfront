/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { Circle } from "@mui/icons-material";
import { useMutation } from "react-query";
import { getOneShippment, postLog } from "../Api";
import CustomInput from "./CustomInput";
import Button from "../components/Button";
import { toast } from "react-toastify";
import { Store } from "../store";
import { useNavigate } from "react-router-dom";

export const getTime = (myDate) => {
  let result = myDate.match(/\d\d:\d\d/) || "";
  return result[0];
};
const date = new Date();
export const convertDate = (dateStr) => {
  const date = new Date(dateStr).toLocaleDateString("en-EN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return date;
};
export default function Modal({ showModal, setShowModal }) {
  const navigate = useNavigate();
  const completeButonRef = useRef(null);
  const { dispatch } = useContext(Store);
  const [id, setID] = useState("");
  const [data, setData] = useState(false);
  const { mutate: logMutate } = useMutation(postLog, {
    onSuccess: (data) => {},
    onError: (error) => {
      console.log(error);
    },
  });
  const { mutate, isLoading } = useMutation(
    () => getOneShippment(id.split("_")[1]),
    {
      onSuccess: (data) => {
        setData(data);
        dispatch({ type: "GET_PRODUCT", payload: data });
        data &&
          logMutate({
            tracking_id: id,
            date: new Date(),
            username: data.username,
            name: data.client_name,
          });
      },
      onError: (error) => {
        console.log(error);
        if (error.response.status === 500) {
          toast.error("Tracking id not found");
        } else toast.error("Something went wrong");
      },
    }
  );

  const handleSubmit = () => {
    if (!id.split("_")[1]) {
      toast.info(
        "oops! looks like you entered the wrong ID. Please check again"
      );
      return;
    }
    if (id === "") {
      toast.info("Please enter a tracking number");
      return;
    }
    mutate();
  };
  return (
    <Transition.Root show={showModal} as={Fragment}>
      <Dialog
        as="div"
        data-testid="team-modal"
        initialFocus={completeButonRef}
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={setShowModal}
      >
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 ">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom w-full bg-white rounded-lg px-10 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full sm:p-6">
              <div className="flex justify-end">
                <button
                  type="button"
                  className="-mr-1 flex p-2 rounded-md hover:bg-pink-200 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                >
                  <XIcon
                    onClick={() => setShowModal(false)}
                    className="h-6 w-6 text-pink-600"
                    aria-hidden="true"
                  />
                </button>
              </div>
              <div className="py-3 w-3/2 flex flex-col sm:flex-row gap-8">
                <CustomInput
                  type="text"
                  required
                  value={id}
                  onChange={(e) => setID(e.target.value)}
                  label={"Tracking Number"}
                  data_testid={"title"}
                  name="weight"
                  className="block relative text-xs uppercase font-medium mb-4 text-gray-400 tracking-widest"
                  placeholder="Enter your tracking Number"
                />
                <div
                  className="mx-auto uppercase w-2/3 sm:w-1/2 mt-4 sm:mt-10"
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  <Button
                    text={"Track"}
                    color={"bg-gray-800"}
                    colorHover={"bg-gray-500"}
                    spin_color={"bg-pink-800"}
                    spin={isLoading}
                    text_color={"text-white"}
                    normal
                  />
                </div>
              </div>
              {data ? (
                <div>
                  <div className="max-w-2xl mx-auto text-xs font-bold  px-2 space-y-12 sm:px-6 lg:max-w-7xl lg:space-y-0 lg:px-8 lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-8">
                    <div className="relative bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
                      <p className="bg-rose-500 text-white w-full py-2 px-4">
                        Shipment Details
                      </p>
                      <ul className="mt-6 space-y-6 p-6">
                        <li className="flex">
                          <Circle
                            className="flex-shrink-0 w-4 h-4 text-rose-500"
                            aria-hidden="true"
                          />
                          <span className="ml-3 text-gray-500">Quantity :</span>{" "}
                          <span className="ml-3 text-gray-700">
                            {data.shipping_details?.quantity || 0}
                          </span>
                        </li>
                        <li className="flex">
                          <Circle
                            className="flex-shrink-0 w-4 h-4 text-rose-500"
                            aria-hidden="true"
                          />
                          <span className="ml-3 text-gray-500">Weight :</span>{" "}
                          <span className="ml-3 text-gray-700">
                            {" "}
                            {data.shipping_details?.weight || 0}
                          </span>
                        </li>
                        <li className="flex">
                          <Circle
                            className="flex-shrink-0 w-4 h-4 text-rose-500"
                            aria-hidden="true"
                          />
                          <span className="ml-3 capitalize text-gray-500">
                            Description :
                          </span>{" "}
                          <span className="ml-3 text-gray-700">Package</span>
                        </li>
                        <li className="flex">
                          <Circle
                            className="flex-shrink-0 w-4 h-4 text-rose-500"
                            aria-hidden="true"
                          />
                          <span className="ml-3 text-gray-500">Status :</span>{" "}
                          <span className="ml-3 text-gray-700">
                            {" "}
                            {data?.status || ""}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="relative bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
                      <p className="bg-rose-500 text-white w-full py-2 px-4">
                        Destination
                      </p>
                      <ul className="mt-6 space-y-6 p-6">
                        <li className="flex">
                          <Circle
                            className="flex-shrink-0 w-4 h-4 text-rose-500"
                            aria-hidden="true"
                          />
                          <span className="ml-3 text-gray-500">
                            Receiver's name :
                          </span>{" "}
                          <span className="ml-3 text-gray-700 capitalize">
                            {data?.client_name || ""}
                          </span>
                        </li>
                        <li className="flex">
                          <Circle
                            className="flex-shrink-0 text-xs text-rose-500"
                            aria-hidden="true"
                          />
                          <div>
                            <span className="ml-3  text-gray-500 w-full">
                              Receiver's email :
                            </span>
                            <div className="ml-3 mt-2 capitalize text-gray-700 flex-1 w-full text-ellipsis">
                              {data.shipping_details?.receiver_email || ""}
                            </div>
                          </div>
                        </li>
                        <li className="flex">
                          <Circle
                            className="flex-shrink-0 w-4 h-4 text-rose-500"
                            aria-hidden="true"
                          />
                          <span className="ml-3 text-gray-500">
                            Destination :
                          </span>{" "}
                          <span className="ml-3 text-gray-700 capitalize">
                            {" "}
                            {data?.destination || ""}
                          </span>
                        </li>
                        <li className="flex">
                          <Circle
                            className="flex-shrink-0 w-4 h-4 text-rose-500"
                            aria-hidden="true"
                          />
                          <span className="ml-3 text-gray-500">
                            Delivery Date :
                          </span>{" "}
                          <span className="ml-3 text-gray-700 capitalize">
                            {" "}
                            {data?.delivery_date || ""}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="relative bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
                      <p className="bg-rose-500 text-white w-full py-2 px-4">
                        Origin
                      </p>
                      <ul className="mt-6 space-y-6 p-6">
                        <li className="flex">
                          <Circle
                            className="flex-shrink-0 w-4 h-4 text-rose-500"
                            aria-hidden="true"
                          />
                          <span className="ml-3 text-gray-500">
                            Sender's name :
                          </span>{" "}
                          <span className="ml-3 text-gray-700 capitalize">
                            {data.shipping_details?.sender_name || ""}
                          </span>
                        </li>
                        <li className="flex">
                          <Circle
                            className="flex-shrink-0 w-4 h-4 text-rose-500"
                            aria-hidden="true"
                          />
                          <span className="ml-3 text-gray-500">Location:</span>
                          <span className="ml-3 text-gray-700 capitalize">
                            {data?.origin || ""}
                          </span>
                        </li>
                        <li className="flex">
                          <Circle
                            className="flex-shrink-0 w-4 h-4 text-rose-500"
                            aria-hidden="true"
                          />
                          <span className="ml-3 text-gray-500">
                            Shipment Date:
                          </span>{" "}
                          <span className="ml-3 text-gray-700">
                            {" "}
                            {data?.date_shipped || ""}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <div className=" w-full sm:max-w-2xl font-bold sm:mx-8 my-6 text-xs lg:text-sm">
                    <p className="font-bold text-gray-500 mb-2 text-lg">
                      Tracking Progress
                    </p>
                    <div className="grid grid-cols-4 gap-4 ">
                      <p className="text-pink-600 font-bold">Date</p>
                      <p className="text-pink-600 font-bold">Time</p>
                      <p className="text-pink-600 font-bold">Description</p>
                      <p className="text-pink-600 font-bold">Location</p>
                      <p className="text-gray-700">{convertDate(new Date())}</p>
                      <p className="text-gray-700">
                        {date.toLocaleTimeString()}
                      </p>{" "}
                      <p className="text-gray-700">{data?.status || ""}</p>
                      <p className="text-gray-700">
                        {data?.shipping_details?.current_location || ""}
                      </p>
                    </div>
                  </div>
                  <div className=" ml-6">
                    <button
                      onClick={() => navigate("/receipt")}
                      className="text-center font-bold flex text-sm justify-center rounded-lg border-2 border-gray-700 mt-4 hover:border-pink-700 bg-gray-100 text-gray-900 px-4 py-2"
                    >
                      Print receipt
                    </button>
                  </div>
                </div>
              ) : (
                <p className="text-center font-bold text-lg text-pink-700">
                  {id.trim().length <= 0 && "Please enter a tracking id"}
                </p>
              )}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
