import React, { useContext, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ReactToPrint from "react-to-print";
import { Store } from "../store";
const InvoiceReceipt = () => {
  const { state } = useContext(Store);
  const { invoice } = state;
  const navigate = useNavigate();
  const componentRef = useRef();
  useEffect(() => {
    //   if(!invoice?.invoice_tax) navigate('/edit')
    if (!invoice) {
      toast.info("Please select a product to print out a invoice");
    }
  }, [invoice, navigate]);
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
  const sumTotalPrice = (invoice) => {
    return (
      invoice.customs_duty * invoice.customs_duty_unit +
      invoice.customs_broker * invoice.customs_broker_unit +
      invoice.late_payment_fees * invoice.late_payment_days
    );
  };
  return (
    <>
      <div ref={componentRef}>
        <div className="w-[600px] font-crimson h-[1100px] mx-auto pt-10">
          <div className="w-full flex justify-end">
            <div>
              <p>Invoice No {invoice.invoice_number}</p>
              <p>{formatDate(new Date())}</p>
            </div>
          </div>
          <p className="font-cursive font-semibold text-[30px]">
            Rex logistics
          </p>
          <div className="flex bg-gray-100  p-6 rounded-md justify-between">
            <div>
              <p className="font-bold text-[18px] mb-2">Sent From</p>
              <p>{invoice.origin}</p>
            </div>{" "}
            <div>
              <p className="font-bold text-[18px] mb-2">Sent To</p>
              <p>{invoice.destination}</p>
              <p>{invoice.phone}</p>
            </div>{" "}
            <div>
              <p className="font-bold text-[18px] mb-2">
                INV{invoice.invoice_number}
              </p>
              <p>
                {" "}
                <span className="capitalize mr-[3px]">
                  {invoice.transaction_currency}
                </span>
                {sumTotalPrice(invoice) + +invoice.invoice_tax}
              </p>
            </div>
          </div>

          <div className="mt-8 divide-x divide-y">
            <div className="grid grid-cols-4  divide-x divide-y border">
              <p className="p-1 ">Description</p> <p>Price</p> <p>Unit</p>{" "}
              <p>Total</p>
              <p className="p-1">Customs duty</p>{" "}
              <p className="p-1">
                {" "}
                <span className="capitalize mr-[3px]">
                  {invoice.transaction_currency}
                </span>
                {invoice.customs_duty}
              </p>{" "}
              <p className="p-1">{invoice.customs_duty_unit}</p>{" "}
              <p className="p-1">
                {" "}
                <span className="capitalize mr-[3px]">
                  {invoice.transaction_currency}
                </span>
                {+invoice.customs_duty * +invoice.customs_duty_unit}
              </p>
              <p className="p-1">Customs broker</p>{" "}
              <p className="p-1">
                {" "}
                <span className="capitalize mr-[3px]">
                  {invoice.transaction_currency}
                </span>
                {invoice.customs_broker}
              </p>{" "}
              <p className="p-1">{invoice.customs_broker_unit}</p>{" "}
              <p className="p-1">
                {" "}
                <span className="capitalize mr-[3px]">
                  {invoice.transaction_currency}
                </span>
                {+invoice.customs_broker * +invoice.customs_broker_unit}
              </p>
              <p className="p-1">Late payment fees</p>{" "}
              <p className="p-1">
                {" "}
                <span className="capitalize mr-[3px]">
                  {invoice.transaction_currency}
                </span>
                {invoice.late_payment_fees}
              </p>{" "}
              <p className="p-1">{invoice.late_payment_days}</p>{" "}
              <p className="p-1">
                {" "}
                <span className="capitalize mr-[3px]">
                  {invoice.transaction_currency}
                </span>
                {+invoice.late_payment_fees * +invoice.late_payment_days}
              </p>
            </div>
          </div>
          <div className="mt-8 divide-x divide-y w-1/2 ml-auto font-semibold">
            <div className="grid grid-cols-2  divide-x divide-y border">
              <p className="p-1 ">SubTotal</p>{" "}
              <p className="p-1 ">
                {" "}
                <span className="capitalize mr-[3px]">
                  {invoice.transaction_currency}
                </span>
                {sumTotalPrice(invoice)}
              </p>
              <p className="p-1">Tax</p>{" "}
              <p className="p-1 ">
                {" "}
                <span className="capitalize mr-[3px]">
                  {invoice.transaction_currency}
                </span>
                {invoice.invoice_tax}
              </p>{" "}
            </div>
          </div>
          <div className="mt-8 divide-x divide-y w-1/2 ml-auto font-semibold">
            <div className="grid grid-cols-2  divide-x divide-y border">
              <p className="p-1 ">Total</p>{" "}
              <p className="p-1 ">
                <span className="capitalize mr-[3px]">
                  {invoice.transaction_currency}
                </span>
                {invoice.invoice_tax
                  ? sumTotalPrice(invoice) + +invoice.invoice_tax
                  : sumTotalPrice(invoice)}
              </p>
            </div>
          </div>
          <p className="text-[20px] font-body font-medium mt-6">
            Payment details
          </p>
          <p className="font-medium text-[18px] mt-6 mb-[2px]">
            {" "}
            Bank transfer
          </p>
          <div className="flex flex-col gap-4 text-[18px] text-gray-700">
            <p>
              {`>`} Bank name: {invoice.bank_name}
            </p>
            <p>
              {`>`} Account name: {invoice.account_name}
            </p>
            <p>
              {`>`} Routing number: {invoice.routing}
            </p>
            <p>
              {`>`} Account number: {invoice.account_number}
            </p>
            <p>
              {`>`} Swift code: {invoice.swift_code}
            </p>
            <p>
              {`>`} Bank address: {invoice.bank_address}
            </p>
            <p>
              {`>`} Home address: {invoice.home_address}
            </p>
          </div>
        </div>
      </div>
      {invoice && (
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

export default InvoiceReceipt;
