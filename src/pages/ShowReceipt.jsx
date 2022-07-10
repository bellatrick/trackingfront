import React, { useContext, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ReactToPrint from "react-to-print";
import { Store } from "../store";
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
  return (
    <>
      <div ref={componentRef}>
        <div className="px-2 sm:px-10 py-5 capitalize">
          <div className=" bg-gray-900  text-white text-center py-4 rounded-lg">
            <p className="text-white text-xl font-logo">Rex Logistics</p>
            <br />
            <p className="font-bold">Transaction receipt</p>
          </div>

          <div className="space-y-8 ml-4 mt-20  font-normal text-lg text-gray-700 flex justify-center flex-col">
            <p className="border-b pb-2 border-gray-400">
              <span className="font-bold">Customer name</span>:{" "}
              {product.client_name}
            </p>
            <p className="border-b pb-2 border-gray-400 lowercase">
              <span className="font-bold capitalize">Customer's email</span> :{" "}
              {product.shipping_details?.receiver_email}
            </p>
            <p className="border-b pb-2 border-gray-400">
              <span className="font-bold"> Shipment date</span>:{" "}
              {product?.date_shipped}
            </p>
            <p className="border-b pb-2 border-gray-400">
              <span className="font-bold">Delivery date</span> :{" "}
              {product?.delivery_date}
            </p>{" "}
            <p className="border-b pb-2 border-gray-400">
              <span className="font-bold"> Sender's name</span> :{" "}
              {product?.shipping_details?.sender_name}
            </p>
            <p className="border-b pb-2 border-gray-400">
              <span className="font-bold"> Package's origin</span> :{" "}
              {product?.origin}
            </p>
            <p className="border-b pb-2 border-gray-400">
              <span className="font-bold"> Package's destination</span> :{" "}
              {product?.destination}
            </p>
            <p className="border-b pb-2 border-gray-400">
              <span className="font-bold">Tracking code</span> 
              REX_{product?._id}
            </p>
            <p className="border-b pb-2 border-gray-400">
              <span className="font-bold">Status</span>: Successful
            </p>
            <p className="bg-pink-700 rounded-md cursor-pointer text-white px-6 py-3 w-72">
              Total Transaction price: {product?.shipping_details?.amount}
            </p>
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
