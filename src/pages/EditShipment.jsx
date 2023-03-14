import React, { useEffect, useState, useContext } from "react";
import TextArea from "../components/TextArea";
import DropDown from "../components/Dropdown";
import CustomInput from "../components/CustomInput";
import Button from "../components/Button";
import Layout from "../components/Layout";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { deleteShippment, getOneShippment, updateShippment } from "../Api";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { Store } from "../store";

const AddShipment = () => {
  const username = localStorage.getItem("username");
  const { dispatch } = useContext(Store);
  const queryClient = useQueryClient();
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useQuery(["product", id], () => getOneShippment(id));

  const { mutate, isLoading } = useMutation(updateShippment, {
    onSuccess: (data) => {
      toast.success("Shipment has been successfully edited");
      navigate("/dashboard");
    },
    onError: () => {
      toast.error("Sorry unable to post shipment");
    },
    onSettled: () => {
      queryClient.invalidateQueries("create");
    },
  });
  const { mutate: silentMutate } = useMutation(updateShippment, {
    onSuccess: (data) => {},
    onError: () => {
      toast.error("Sorry unable to post shipment");
    },
    onSettled: () => {
      queryClient.invalidateQueries("create");
    },
  });
  const { mutate: deleteMutate, isLoading: deleteLoading } = useMutation(
    deleteShippment,
    {
      onSuccess: (data) => {
        toast.success("Shipment has been successfully deleted");
        navigate("/dashboard");
      },
      onError: () => {
        toast.error("Sorry unable to delete shipment");
      },
      onSettled: () => {
        queryClient.invalidateQueries("delete");
      },
    }
  );
  const [selected, setSelected] = useState(data?.status || "");
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
    invoice_tax: "",
    invoice_origin: "",
    invoice_destination: "",
    phone: "",
    customs_duty: "",
    customs_duty_unit: "1",
    customs_broker: "",
    customs_broker_unit: "1",
    late_payment_fees: "",
    late_payment_days: "1",
    bank_name: "",
    account_name: "",
    routing: "",
    account_number: "",
    swift_code: "",
    bank_address: "",
    home_address: "",
    transaction_currency: "",
    invoice_number: "1",
    ref: "",
    company_address: "",
  });
  const {
    invoice_number,
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
    customs_broker,
    customs_broker_unit,
    customs_duty,
    customs_duty_unit,
    phone,
    invoice_origin,
    invoice_destination,
    invoice_tax,
    home_address,
    bank_address,
    bank_name,
    account_name,
    account_number,
    routing,
    late_payment_days,
    late_payment_fees,
    swift_code,
    transaction_currency,
    ref,
    company_address,
  } = shippingDetails;
  useEffect(() => {
    if (data) {
      dispatch({ type: "GET_PRODUCT", payload: data });
      setShippingDetails({
        client_name: data.client_name,
        origin: data.origin,
        destination: data.destination || "",
        shipping_details: data.shipping_details?.description || "",
        date_shipped: data.date_shipped || "",
        delivery_date: data.delivery_date || "",
        quantity: data.shipping_details?.quantity || "",
        weight: data.shipping_details?.weight || "",
        receiver_email: data.shipping_details?.receiver_email || "",
        sender_name: data.shipping_details?.sender_name || "",
        amount: data.shipping_details.amount || "",
        current_location: data.shipping_details.current_location || "",
        transaction_currency: data.shipping_details.transaction_currency || "",
        customs_broker: data.shipping_details.customs_broker || "",
        customs_broker_unit: data.shipping_details.customs_broker_unit || "1",
        customs_duty: data.shipping_details.customs_duty || "",
        customs_duty_unit: data.shipping_details.customs_duty_unit || "1",
        phone: data.shipping_details.phone || "",
        invoice_origin: data.shipping_details.invoice_origin || "",
        invoice_destination: data.shipping_details.invoice_destination || "",
        invoice_tax: data.shipping_details.invoice_tax || "1",
        home_address: data.shipping_details.home_address || "",
        bank_address: data.shipping_details.bank_address || "",
        bank_name: data.shipping_details.bank_name || "",
        account_name: data.shipping_details.account_name || "",
        account_number: data.shipping_details.account_number || "",
        routing: data.shipping_details.routing || "",
        late_payment_days: data.shipping_details.late_payment_days || "1",
        late_payment_fees: data.shipping_details.late_payment_fees || "",
        swift_code: data.shipping_details.swift_code || "",
        invoice_number: data.shipping_details.invoice_number || "1",
        ref: data.shipping_details.ref || "",
        company_address: data.shipping_details.company_address || "",
      });
      setSelected(data.status);
    }
  }, [data, dispatch]);
  const handleChange = (e) => {
    setShippingDetails({ ...shippingDetails, [e.target.name]: e.target.value });
  };

  const handleScrollInvoice = () => {
    const element = document.getElementById("invoice");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleSubmit = (e, silentChange) => {
    e.preventDefault();
    silentChange
      ? silentMutate({
          id: data._id,
          data: {
            ...shippingDetails,
            status: selected,
            username,
            shipping_details: {
              description: shipping_details,
              weight,
              quantity,
              receiver_email,
              sender_name,
              amount,
              current_location,
              transaction_currency,
              customs_broker,
              customs_broker_unit,
              customs_duty,
              customs_duty_unit,
              phone,
              invoice_origin,
              invoice_destination,
              invoice_tax,
              home_address,
              invoice_number,
              bank_address,
              bank_name,
              account_name,
              account_number,
              routing,
              late_payment_days,
              late_payment_fees,
              swift_code,
              tracking_code: data.shipping_details.tracking_code,
              ref,
              company_address,
            },
          },
        })
      : mutate({
          id: data._id,
          data: {
            ...shippingDetails,
            status: selected,
            username,
            shipping_details: {
              description: shipping_details,
              weight,
              quantity,
              receiver_email,
              sender_name,
              invoice_number,
              amount,
              current_location,
              transaction_currency,
              customs_broker,
              customs_broker_unit,
              customs_duty,
              customs_duty_unit,
              phone,
              invoice_origin,
              invoice_destination,
              invoice_tax,
              home_address,
              bank_address,
              bank_name,
              account_name,
              account_number,
              routing,
              late_payment_days,
              late_payment_fees,
              swift_code,
              tracking_code: data.shipping_details.tracking_code,
              ref: data.shipping_details.ref,
              company_address,
            },
          },
        });
  };
  const handleDelete = () => {
    deleteMutate({ id: data._id });
  };
  return (
    <Layout>
      <div className="mb-16">
        {" "}
        <p className="text-headerBlue text-2xl font-bold ml-8 mt-6">
          Edit Shipment
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
            <CustomInput
              venue={true}
              type="text"
              value={company_address}
              required
              onChange={handleChange}
              label={"Rex's Company address"}
              data_testid={"end_date"}
              name="company_address"
              className="block relative text-xs uppercase font-medium mb-4 text-gray-400 tracking-widest"
              placeholder="Company address"
            />
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
          </div>{" "}
          <div className="py-3 w-full">
            <CustomInput
              venue={true}
              type="text"
              value={ref}
              required
              onChange={handleChange}
              label={"Payment reference number"}
              data_testid={"end_date"}
              name="ref"
              className="block relative text-xs uppercase font-medium mb-4 text-gray-400 tracking-widest"
              placeholder="South Africa"
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
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-2  items-center">
            <div className="mx-auto uppercase  mt-4 sm:mt-10">
              <Button
                text={"Edit"}
                color={"bg-gray-900"}
                colorHover={"bg-purple-400"}
                spin={isLoading}
              />
            </div>
            <div
              onClick={() => handleScrollInvoice()}
              className="mx-auto uppercase  mt-4 sm:mt-10"
            >
              <Button
                text={"Create invoice"}
                color={"bg-gray-700"}
                colorHover={"bg-purple-400"}
                normal
              />
            </div>
            <div
              className="mx-auto uppercase  mt-4 sm:mt-10"
              onClick={() => navigate("/receipt")}
            >
              <Button
                text={"Print receipt"}
                color={"bg-gray-500"}
                colorHover={"bg-gray-800"}
                spin={false}
                normal
              />
            </div>
            <div
              className="mx-auto uppercase  mt-4 sm:mt-10"
              onClick={() => navigate("/transaction_receipt")}
            >
              <Button
                text={"Transact receipt"}
                color={"bg-gray-600"}
                colorHover={"bg-gray-800"}
                spin={false}
                normal
              />
            </div>
            <div
              className="mx-auto uppercase  mt-4 sm:mt-10"
              onClick={handleDelete}
            >
              <Button
                text={"Delete"}
                color={"bg-red-500"}
                colorHover={"bg-blue-400"}
                spin={deleteLoading}
                normal
              />
            </div>
          </div>
        </form>
        <div className="mt-32">
          <div className="mb-4 " id="invoice">
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
                    value={invoice_number}
                    onChange={handleChange}
                    label={"Invoice number"}
                    data_testid={"title"}
                    name="invoice_number"
                    className="block relative text-xs uppercase font-medium mb-4 text-gray-400 tracking-widest"
                    placeholder="1"
                    required={false}
                  />
                </div>
                <div className="py-3 w-full">
                  <CustomInput
                    type="text"
                    value={invoice_origin}
                    onChange={handleChange}
                    label={"Invoice Origin"}
                    data_testid={"title"}
                    name="invoice_origin"
                    className="block relative text-xs uppercase font-medium mb-4 text-gray-400 tracking-widest"
                    placeholder="Address"
                    required={false}
                  />
                </div>
                <div className="py-3 w-full">
                  <CustomInput
                    type="text"
                    value={invoice_destination}
                    required={false}
                    onChange={handleChange}
                    label={"Invoice Destination"}
                    data_testid={"title"}
                    name="invoice_destination"
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
                    value={transaction_currency}
                    onChange={handleChange}
                    label={"Transaction currency"}
                    data_testid={"title"}
                    name="transaction_currency"
                    className="block relative text-xs uppercase font-medium mb-4 text-gray-400 tracking-widest"
                    placeholder="$"
                  />
                </div>
                <div className="py-3 w-full">
                  <CustomInput
                    type="text"
                    pattern="[0-9*]"
                    value={invoice_tax}
                    onChange={handleChange}
                    label={"Tax amount"}
                    data_testid={"title"}
                    name="invoice_tax"
                    className="block relative text-xs uppercase font-medium mb-4 text-gray-400 tracking-widest"
                    placeholder="10"
                  />
                </div>
                <div className="py-3 w-full">
                  <CustomInput
                    type="tel"
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
                    type="number"
                    value={customs_broker}
                    onChange={handleChange}
                    label={"Customs broker price"}
                    data_testid={"title"}
                    name="customs_broker"
                    className="block relative text-xs uppercase font-medium mb-4 text-gray-400 tracking-widest"
                    placeholder="800"
                  />
                </div>
                <div className="py-3 w-full">
                  <CustomInput
                    type="number"
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
                    type="number"
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
                    placeholder="JP Morgan bank"
                  />
                </div>
                <div className="py-3 w-full">
                  <CustomInput
                    type="text"
                    value={bank_address}
                    onChange={handleChange}
                    label={"Shipment bank_address"}
                    data_testid={"title"}
                    name="bank_address"
                    className="block relative text-xs uppercase font-medium mb-4 text-gray-400 tracking-widest"
                    placeholder="bank address"
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
                    placeholder="Account name"
                  />
                </div>
                <div className="py-3 w-full">
                  <CustomInput
                    type="text"
                    value={account_number}
                    onChange={handleChange}
                    label={"Shipment account_number"}
                    data_testid={"title"}
                    name="account_number"
                    className="block relative text-xs uppercase font-medium mb-4 text-gray-400 tracking-widest"
                    placeholder="Account number"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="py-3 w-full">
                  <CustomInput
                    type="number"
                    value={late_payment_fees}
                    onChange={handleChange}
                    label={"Shipment late_payment_fees"}
                    data_testid={"title"}
                    name="late_payment_fees"
                    className="block relative text-xs uppercase font-medium mb-4 text-gray-400 tracking-widest"
                    placeholder="50"
                  />
                </div>
                <div className="py-3 w-full">
                  <CustomInput
                    type="text"
                    value={late_payment_days}
                    onChange={handleChange}
                    label={"Shipment late_payment_days"}
                    data_testid={"title"}
                    name="late_payment_days"
                    className="block relative text-xs uppercase font-medium mb-4 text-gray-400 tracking-widest"
                    placeholder="14"
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
                    placeholder="345978987"
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
                    placeholder="CHA57876"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 items-center">
                <div
                  onClick={handleSubmit}
                  className="mx-auto uppercase w-2/3 sm:w-1/2  mt-4 sm:mt-10"
                >
                  <Button
                    text={"Save"}
                    color={"bg-gray-500"}
                    colorHover={"bg-gray-800"}
                    spin={isLoading}
                  />
                </div>
                <div
                  onClick={(e) => {
                    navigate("/invoice_receipt");
                    dispatch({ type: "GET_INVOICE", payload: shippingDetails });
                    handleSubmit(e, true);
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
        </div>
      </div>
    </Layout>
  );
};

export default AddShipment;
