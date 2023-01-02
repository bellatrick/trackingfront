import React, { useContext, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ReactToPrint from "react-to-print";
import { Store } from "../store";
import barcode from "../assets/barc1.png";
const ShowReceipt = () => {
  const { state } = useContext(Store);
  const { product } = state;
  const navigate = useNavigate();
  const componentRef = useRef();
  useEffect(() => {
    if (!product) {
      toast.info("Please select a product to print out a receipt");
    }
  }, [product, navigate]);
  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }
  function formatDate(date) {
    return [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join("-");
  }

  return (
    <>
      <div ref={componentRef}>
        <div className="w-[600px] h-[800px] mx-auto pt-10">
          <div className="w-full flex justify-center">
            <div>
              {" "}
              <img src={barcode} alt="barcode" className="h-[110px] " />
              {product.shipping_details?.tracking_code ? (
                <p className="uppercase text-center text-[18px]">
                  *{product.shipping_details?.tracking_code}*
                </p>
              ) : (
                <p className="capitalize text-center text-[18px]">
                  *REX_{product?._id}*
                </p>
              )}
            </div>
          </div>
          {product.shipping_details?.tracking_code ? (
            <p className="uppercase mt-[40px] text-gray-700 mb-6 text-center text-[25px] font-semibold">
              {product.shipping_details?.tracking_code}
            </p>
          ) : (
            <p className="capitalize mt-[40px] text-gray-700 mb-6 text-center text-[25px] font-semibold">
              REX_{product?._id}
            </p>
          )}
          <hr />
          <div className="flex gap-8 justify-between">
            <div>
              <p className="capitalize font-bold text-[18px] mb-2">sender</p>
              <p>Location: {product.origin}</p>
              <p>Name: {product.shipping_details.sender_name}</p>
            </div>
            <div className="my-4 w-[2px] bg-gray-600" />
            <div>
              <p className="capitalize font-bold text-[18px] mb-2">Receiver</p>
              <p>Location: {product.destination}</p>
              <p>Name: {product.client_name}</p>
            </div>
          </div>
          <hr />
          <div className="flex gap-8 justify-between mt-4">
            <div>
              <p className="capitalize font-bold text-[18px] mb-2">origin</p>
              <p>{product.origin}</p>
            </div>
            <div className="my-4 w-[2px] bg-gray-600" />
            <div>
              <p className="capitalize font-bold text-[18px] mb-2">
                destination
              </p>
              <p> {product.destination}</p>
            </div>
          </div>
          <hr />
          <div className="border-2 rounded-md mt-4 border-gray-700 py-4 px-6">
            <div className="grid mb-3 grid-cols-3 gap-8 justify-between mt-2">
              <div>
                <p className="capitalize font-bold text-[18px]">
                  Weight volume
                </p>
                <p>{product.shipping_details.weight}</p>
              </div>
              <div className="my-4 w-[2px] bg-gray-600" />
              <div>
                <p className="capitalize font-bold text-[18px]">Term</p>
                <p>Express delivery service</p>
              </div>
            </div>
            <div className="bg-gray-700 h-[1px] text-gray-700" />
            <div className="grid grid-cols-3 gap-8 justify-between mt-2">
              <div>
                <p className="capitalize font-bold text-[18px]">
                  Physical weight
                </p>
                <p>Express delivery service</p>
              </div>
              <div className="my-4 w-[2px] bg-gray-600" />
              <div>
                <p className="capitalize font-bold text-[18px]"># of pieces</p>
                <p>1</p>
              </div>
            </div>
          </div>
          <div className="w-full flex-col items-center flex justify-center text-[18px] font-medium mt-4">
            {" "}
            <p className="capitalize ">issue date</p>
            <p>{formatDate(new Date())}</p>
          </div>
        </div>
      </div>
      {product && (
        <ReactToPrint
          trigger={() => {
            return (
              <button className="bg-gray-900 mb-7 cursor-pointer text-white px-6 py-2 rounded-2xl flex justify-self-center ml-2 sm:ml-14 mt-10">
                Print this out!
              </button>
            );
          }}
          content={() => componentRef.current}
        />
      )}
    </>
  );
};

export default ShowReceipt;
