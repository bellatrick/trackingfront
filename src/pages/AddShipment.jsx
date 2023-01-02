import React, { useState } from "react";
import TextArea from "../components/TextArea";
import DropDown from "../components/Dropdown";
import CustomInput from "../components/CustomInput";
import Button from "../components/Button";
import Layout from "../components/Layout";
import { useMutation, useQueryClient } from "react-query";
import { postShippment } from "../Api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddShipment = () => {
  const queryClient = useQueryClient();
  function makeid(length) {
    var result = "";
    var characters =
      "ABCDEFGHI0123456789JKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result.toLocaleUpperCase();
  }

  const username = localStorage.getItem("username");
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation(postShippment, {
    onSuccess: (data) => {
      toast.success("Shipment has been successfully added");
      navigate("/dashboard");
    },
    onError: () => {
      toast.error("Sorry unable to post shipment");
    },
    onSettled: () => {
      queryClient.invalidateQueries("create");
    },
  });
  const [selected, setSelected] = useState("");
  const [shippingDetails, setShippingDetails] = useState({
    client_name: "",
    receiver_email: "",
    sender_name: "",
    origin: "",
    destination: "",
    shipping_details: "",
    date_shipped: "",
    delivery_date: "",
    weight: "",
    quantity: "",
    amount: "",
    current_location: "",
    ref:""
  });
  const {
    client_name,
    receiver_email,
    origin,
    destination,
    date_shipped,
    shipping_details,
    delivery_date,
    sender_name,
    weight,
    quantity,
    amount,
    current_location,
    ref
  } = shippingDetails;
  const handleChange = (e) => {
    setShippingDetails({ ...shippingDetails, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {

    e.preventDefault();
    if (amount.split("").find((item) => item === ",")) {
      toast.warn("Amount cannot not contain comma");
      return;
    }
    if (!username) {
      toast.warn("Your session has expired. Please log in again.");
      navigate("/login");
      return;
    }
    if (!selected) {
      toast.warn("Please select package status");
      return;
    }
    mutate({
      ...shippingDetails,
      status: selected,

      shipping_details: {
        description: shipping_details,
        weight,
        quantity,
        receiver_email,
        sender_name,
        amount,
        current_location,
        tracking_code: makeid(10),
        ref
      },
      username,
    });
  };
  return (
    <Layout>
      <div className="mb-16">
        {" "}
        <p className="text-headerBlue text-2xl font-bold ml-8 mt-6">
          Add Shipment
        </p>
        <form
          data-testid="form"
          onSubmit={handleSubmit}
          className="w-full p-6 mt-6 bg-white shadow-md rounded-lg sm:w-2/3 md:px-20  mx-auto pb-6"
        >
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="py-3 w-full">
              <CustomInput
                type="text"
                required
                value={client_name}
                onChange={handleChange}
                label={"Receiver's Full name"}
                data_testid={"title"}
                name="client_name"
                className="block relative text-xs uppercase font-medium mb-4 text-gray-400 tracking-widest"
                placeholder="Firstname Lastname"
              />
            </div>
            <div className="py-3 w-full">
              <CustomInput
                type="text"
                required
                value={sender_name}
                onChange={handleChange}
                label={"Sender's Full name"}
                data_testid={"title"}
                name="sender_name"
                className="block relative text-xs uppercase font-medium mb-4 text-gray-400 tracking-widest"
                placeholder="Firstname Lastname"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="py-3 w-full">
              <CustomInput
                type="email"
                required
                value={receiver_email}
                onChange={handleChange}
                label={"Receiver's Email address"}
                data_testid={"title"}
                name="receiver_email"
                className="block relative text-xs uppercase font-medium mb-4 text-gray-400 tracking-widest"
                placeholder="Receiver@gmail.com"
              />
            </div>
            <div className="py-3 w-full">
            
              <CustomInput
                type="text"
                required
                value={amount}
                onChange={handleChange}
                label={"Amount paid"}
                data_testid={"title"}
                name="amount"
                className="block relative text-xs uppercase font-medium mb-4 text-gray-400 tracking-widest"
                placeholder="$5000"
              />
                <p className="text-gray-500 text-[12px] mt-2">Please ensure that you include the currency sign in front of the amount</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="py-3 w-full">
              <CustomInput
                type="number"
                required
                value={quantity}
                onChange={handleChange}
                label={"Package quantity"}
                data_testid={"title"}
                name="quantity"
                className="block relative text-xs uppercase font-medium mb-4 text-gray-400 tracking-widest"
                placeholder="0"
              />
            </div>
            <div className="py-3 w-full">
              <CustomInput
                type="text"
                required
                value={weight}
                onChange={handleChange}
                label={"Package weight"}
                data_testid={"title"}
                name="weight"
                className="block relative text-xs uppercase font-medium mb-4 text-gray-400 tracking-widest"
                placeholder="50kg"
              />
            </div>
          </div>
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
                placeholder="Address of the shipment"
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
                placeholder="Destination of the shipment"
              />
            </div>
          </div>
          <div className="">
            <TextArea
              label="Description"
              value={shipping_details}
              handleChange={handleChange}
              placeholder="Package details"
              type="text"
              required={true}
              data_testid={"description"}
              id="description"
              rows={5}
              name="shipping_details"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="py-3  w-full">
              <CustomInput
                venue={true}
                value={date_shipped}
                required
                onChange={handleChange}
                type="date"
                label={"Date Shipped"}
                data_testid={"start_date"}
                name="date_shipped"
                className="block relative text-xs uppercase font-medium mb-4 text-gray-400 tracking-widest"
                placeholder="Date Shipped"
              />
            </div>
            <div className="py-3 w-full">
              <CustomInput
                venue={true}
                type="date"
                value={delivery_date}
                required
                onChange={handleChange}
                label={"Date to be delivered"}
                data_testid={"end_date"}
                name="delivery_date"
                className="block relative text-xs uppercase font-medium mb-4 text-gray-400 tracking-widest"
                placeholder="Delivery Date"
              />
            </div>
          </div>
          <div className="mt-3">
            <DropDown
              placeholder="Status"
              item={selected}
              setList={setSelected}
              label="Shipping Status"
              List={[
                "On Hold",
                "In Progress",
                "Processing",
                "Out For Delivery",
                "In Warehouse",
                "Packaging",
                "Shipped",
                "Arrived at your Location",
              ]}
            />
          </div>
          <div className="py-3 w-full">
            <CustomInput
              venue={true}
              type="text"
              value={current_location}
              required
              onChange={handleChange}
              label={"Package's current location"}
              data_testid={"end_date"}
              name="current_location"
              className="block relative text-xs uppercase font-medium mb-4 text-gray-400 tracking-widest"
              placeholder="South Africa"
            />
          </div>
          <div className="py-3 w-full">
            <CustomInput
              venue={true}
              type="text"
              value={ref}
              required
              onChange={handleChange}
              label={"Payment's reference number"}
              data_testid={"end_date"}
              name="ref"
              className="block relative text-xs uppercase font-medium mb-4 text-gray-400 tracking-widest"
              placeholder="45678987654"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-2 items-center">
            <div className="mx-auto uppercase w-2/3 sm:w-1/2 mt-4 sm:mt-10">
              <Button
                text={"Add"}
                color={"bg-purple-500"}
                colorHover={"bg-purple-400"}
                spin={isLoading}
              />
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default AddShipment;
