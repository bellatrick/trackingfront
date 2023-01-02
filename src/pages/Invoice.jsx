import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import CustomInput from "../components/CustomInput";
import Layout from "../components/Layout";
import { Store } from "../store";

const Invoice = () => {
  const [invoiceDetails, setInvoiceDetails] = useState({
    amount: "$29,000",
    origin: "Fleetwood",
    destination: "Jody Melligner",
    phone: "+13306",
    customs_duty: "$27,000",
    customs_duty_unit: "1",
    customs_broker: "$800",
    customs_broker_unit: "2",
    late_payment_fees: "$100",
    late_payment_days: "14",
    bank_name: "JP Morgan chase",
    account_name: "Simon Sanchez",
    routing: "267890000",
    account_number: "5888299499",
    swift_code: "CHASAU5",
    bank_address: "JP Morgan chase bank",
    home_address: "145 SE 27th Terr Cape Coral",
  });
  const {
    customs_broker,
    customs_broker_unit,
    customs_duty,
    customs_duty_unit,
    phone,
    origin,
    destination,
    amount,
    home_address,
    bank_address,
    bank_name,
    account_name,
    account_number,
    routing,
    late_payment_days,
    late_payment_fees,
    swift_code,
  } = invoiceDetails;
  const {  dispatch } = useContext(Store);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setInvoiceDetails({ ...invoiceDetails, [e.target.name]: e.target.value });
  };
  return (
    <Layout>
      <div className="mb-4">
        {" "}
        <p className="text-headerBlue text-2xl font-bold ml-8 mt-6">
          Create invoice
        </p>
        <form
          action=""
          className="w-full p-6 mt-6 bg-white shadow-md rounded-lg sm:w-2/3 md:px-20  mx-auto pb-6"
        >
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="py-3 w-full">
              <CustomInput
                type="text"
                value={origin}
                onChange={handleChange}
                label={"Shipment Origin"}
                data_testid={"title"}
                name="origin"
                className="block relative text-xs uppercase font-medium mb-4 text-gray-400 tracking-widest"
                placeholder="Address"
              />
            </div>
            <div className="py-3 w-full">
              <CustomInput
                type="text"
                value={destination}
                required
                onChange={handleChange}
                label={"Shipment Destination"}
                data_testid={"title"}
                name="destination"
                className="block relative text-xs uppercase font-medium mb-4 text-gray-400 tracking-widest"
                placeholder="Destination address"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="py-3 w-full">
              <CustomInput
                type="text"
                value={home_address}
                onChange={handleChange}
                label={"Home address"}
                data_testid={"title"}
                name="home_address"
                className="block relative text-xs uppercase font-medium mb-4 text-gray-400 tracking-widest"
                placeholder="Address invoice sent from"
              />
            </div>
            <div className="py-3 w-full">
              <CustomInput
                type="text"
                value={bank_address}
                required
                onChange={handleChange}
                label={"Sent to"}
                data_testid={"title"}
                name="bank_address"
                className="block relative text-xs uppercase font-medium mb-4 text-gray-400 tracking-widest"
                placeholder="Address invoice sent to"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="py-3 w-full">
              <CustomInput
                type="text"
                required
                value={amount}
                onChange={handleChange}
                label={"Total amount"}
                data_testid={"title"}
                name="amount"
                className="block relative text-xs uppercase font-medium mb-4 text-gray-400 tracking-widest"
                placeholder="$10,000"
              />
            </div>
            <div className="py-3 w-full">
              <CustomInput
                type="text"
                required
                value={phone}
                onChange={handleChange}
                label={"Receiver's phone number"}
                data_testid={"title"}
                name="phone"
                className="block relative text-xs uppercase font-medium mb-4 text-gray-400 tracking-widest"
                placeholder="+1 234 567 97"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="py-3 w-full">
              <CustomInput
                type=""
                required
                value={customs_broker}
                onChange={handleChange}
                label={"Customs broker price"}
                data_testid={"title"}
                name="customs_broker"
                className="block relative text-xs uppercase font-medium mb-4 text-gray-400 tracking-widest"
                placeholder="$800"
              />
            </div>
            <div className="py-3 w-full">
              <CustomInput
                type="number"
                required
                value={customs_broker_unit}
                onChange={handleChange}
                label={"Customs broker unit"}
                data_testid={"title"}
                name="customs_broker_unit"
                className="block relative text-xs uppercase font-medium mb-4 text-gray-400 tracking-widest"
                placeholder="1"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="py-3 w-full">
              <CustomInput
                type="text"
                required
                value={customs_duty}
                onChange={handleChange}
                label={"Customs Duty"}
                data_testid={"title"}
                name="customs_duty"
                className="block relative text-xs uppercase font-medium mb-4 text-gray-400 tracking-widest"
                placeholder="50kg"
              />
            </div>
            <div className="py-3 w-full">
              <CustomInput
                type="number"
                required
                value={customs_duty_unit}
                onChange={handleChange}
                label={"Customs Duty Unit"}
                data_testid={"title"}
                name="customs_duty_unit"
                className="block relative text-xs uppercase font-medium mb-4 text-gray-400 tracking-widest"
                placeholder="1"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="py-3 w-full">
              <CustomInput
                type="text"
                value={bank_name}
                onChange={handleChange}
                label={"Shipment bank_name"}
                data_testid={"title"}
                name="bank_name"
                className="block relative text-xs uppercase font-medium mb-4 text-gray-400 tracking-widest"
                placeholder="Address of the shipment"
              />
            </div>
            <div className="py-3 w-full">
              <CustomInput
                type="text"
                value={bank_address}
                required
                onChange={handleChange}
                label={"Shipment bank_address"}
                data_testid={"title"}
                name="bank_address"
                className="block relative text-xs uppercase font-medium mb-4 text-gray-400 tracking-widest"
                placeholder="bank_address of the shipment"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="py-3 w-full">
              <CustomInput
                type="text"
                value={account_name}
                onChange={handleChange}
                label={"Shipment account_name"}
                data_testid={"title"}
                name="account_name"
                className="block relative text-xs uppercase font-medium mb-4 text-gray-400 tracking-widest"
                placeholder="Address of the shipment"
              />
            </div>
            <div className="py-3 w-full">
              <CustomInput
                type="text"
                value={account_number}
                required
                onChange={handleChange}
                label={"Shipment account_number"}
                data_testid={"title"}
                name="account_number"
                className="block relative text-xs uppercase font-medium mb-4 text-gray-400 tracking-widest"
                placeholder="Destination of the shipment"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="py-3 w-full">
              <CustomInput
                type="text"
                value={late_payment_fees}
                onChange={handleChange}
                label={"Shipment late_payment_fees"}
                data_testid={"title"}
                name="late_payment_fees"
                className="block relative text-xs uppercase font-medium mb-4 text-gray-400 tracking-widest"
                placeholder="Address of the shipment"
              />
            </div>
            <div className="py-3 w-full">
              <CustomInput
                type="text"
                value={late_payment_days}
                required
                onChange={handleChange}
                label={"Shipment late_payment_days"}
                data_testid={"title"}
                name="late_payment_days"
                className="block relative text-xs uppercase font-medium mb-4 text-gray-400 tracking-widest"
                placeholder="late_payment_days of the shipment"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="py-3 w-full">
              <CustomInput
                type="text"
                value={routing}
                onChange={handleChange}
                label={"Routing number"}
                data_testid={"title"}
                name="routing"
                className="block relative text-xs uppercase font-medium mb-4 text-gray-400 tracking-widest"
                placeholder="Address of the shipment"
              />
            </div>
            <div className="py-3 w-full">
              <CustomInput
                type="text"
                value={swift_code}
                onChange={handleChange}
                label={"swift_code number"}
                data_testid={"title"}
                name="swift_code"
                className="block relative text-xs uppercase font-medium mb-4 text-gray-400 tracking-widest"
                placeholder="Address of the shipment"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 items-center">
            <div className="mx-auto uppercase w-2/3 sm:w-1/2 mt-4 sm:mt-10">
              <Button
                text={"Save"}
                color={"bg-gray-500"}
                colorHover={"bg-gray-800"}
                spin={false}
              />
            </div>
            <div
              onClick={() => {
                navigate("/invoice_receipt");
                dispatch({ type: "GET_INVOICE", payload: invoiceDetails });
              }}
              className="mx-auto uppercase w-2/3 sm:w-1/2 mt-4 sm:mt-10"
            >
              <Button
                text={"Generate receipt"}
                color={"bg-gray-800"}
                colorHover={"bg-blue-400"}
                normal
              />
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Invoice;
