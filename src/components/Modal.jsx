/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Circle } from "@mui/icons-material";
import { useMutation } from "react-query";
import { getOneShippment, postLog } from "../Api";
import CustomInput from "./CustomInput";
import Button from "../components/Button";
import { toast } from "react-toastify";
export default function Modal({ showModal, setShowModal }) {
  const completeButonRef = useRef(null);
  const [id, setID] = useState("");
  const [data, setData] = useState(false);
  const { mutate: logMutate } = useMutation(postLog, {
    onSuccess: (data) => {},
    onError: (error) => {
      console.log(error);
    },
  });
  const { mutate, isLoading } = useMutation(() => getOneShippment(id), {
    onSuccess: (data) => {
      setData(data);
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
  });

  const handleSubmit = () => {
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
            <div className="inline-block align-bottom w-full bg-white rounded-lg px-10 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-7xl sm:w-full sm:p-6">
              <div className="py-3 w-3/2 flex gap-8">
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
                    color={"bg-white"}
                    colorHover={"bg-rose-100"}
                    spin={isLoading}
                    text_color={"text-gray-800"}
                    normal
                  />
                </div>
              </div>
              {data ? (
                <div className="max-w-2xl mx-auto text-xs  px-4 space-y-12 sm:px-6 lg:max-w-7xl lg:space-y-0 lg:px-8 lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-8">
                  <div className="relative bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
                    <p className="bg-rose-500 text-white w-full py-2 px-4">
                      Shipment Details
                    </p>
                    <ul className="mt-6 space-y-6 p-6">
                      <li className="flex">
                        <Circle
                          className="flex-shrink-0 w-6 h-6 text-rose-500"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-gray-500">Quantity :</span>{" "}
                        <span className="ml-3 text-gray-700">
                          {data.shipping_details?.quantity || 0}
                        </span>
                      </li>
                      <li className="flex">
                        <Circle
                          className="flex-shrink-0 w-6 h-6 text-rose-500"
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
                          className="flex-shrink-0 w-6 h-6 text-rose-500"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-gray-500">
                          Description :
                        </span>{" "}
                        <span className="ml-3 text-gray-700">Package</span>
                      </li>
                      <li className="flex">
                        <Circle
                          className="flex-shrink-0 w-6 h-6 text-rose-500"
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
                          className="flex-shrink-0 w-6 h-6 text-rose-500"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-gray-500">
                          Receiver's name :
                        </span>{" "}
                        <span className="ml-3 text-gray-700">
                          {data?.client_name || ""}
                        </span>
                      </li>
                      <li className="flex">
                        <Circle
                          className="flex-shrink-0 w-6 h-6 text-rose-500"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-gray-500">
                          Receiver's email :
                        </span>{" "}
                        <span className="ml-3 text-gray-700">
                          {" "}
                          {data.shipping_details?.receiver_email || ""}
                        </span>
                      </li>
                      <li className="flex">
                        <Circle
                          className="flex-shrink-0 w-6 h-6 text-rose-500"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-gray-500">
                          Receiver's address :
                        </span>{" "}
                        <span className="ml-3 text-gray-700">
                          {" "}
                          {data?.destination || ""}
                        </span>
                      </li>
                      <li className="flex">
                        <Circle
                          className="flex-shrink-0 w-6 h-6 text-rose-500"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-gray-500">
                          Delivery Date :
                        </span>{" "}
                        <span className="ml-3 text-gray-700">
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
                          className="flex-shrink-0 w-6 h-6 text-rose-500"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-gray-500">
                          Sender's name :
                        </span>{" "}
                        <span className="ml-3 text-gray-700">
                          {data.shipping_details?.sender_name || ""}
                        </span>
                      </li>
                      <li className="flex">
                        <Circle
                          className="flex-shrink-0 w-6 h-6 text-rose-500"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-gray-500">Location :</span>{" "}
                        <span className="ml-3 text-gray-700">
                          {" "}
                          {data?.origin || ""}
                        </span>
                      </li>
                      <li className="flex">
                        <Circle
                          className="flex-shrink-0 w-6 h-6 text-rose-500"
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
              ) : (
                <p className="text-center">Please enter a tracking id</p>
              )}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}