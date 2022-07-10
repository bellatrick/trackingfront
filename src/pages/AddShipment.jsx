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
  } = shippingDetails;
  const handleChange = (e) => {
    setShippingDetails({ ...shippingDetails, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
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
                placeholder="350,000 in naira"
              />
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
                "In warehouse",
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
          <div className="flex flex-col sm:flex-row gap-2 items-center">
            <div className="mx-auto uppercase w-2/3 sm:w-1/2 mt-4 sm:mt-10">
              <Button
                text={"Add"}
                color={"bg-rose-500"}
                colorHover={"bg-rose-400"}
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
