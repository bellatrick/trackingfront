import React, { useContext, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ReactToPrint from "react-to-print";
import { Store } from "../store";
const TransactionReceipt = () => {
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
  let numToWords = (n) => {
    const arr = (x) => Array.from(x);
    const num = (x) => Number(x) || 0;
    const isEmpty = (xs) => xs.length === 0;
    const take = (n) => (xs) => xs.slice(0, n);
    const drop = (n) => (xs) => xs.slice(n);
    const reverse = (xs) => xs.slice(0).reverse();
    const comp = (f) => (g) => (x) => f(g(x));
    const not = (x) => !x;
    const chunk = (n) => (xs) =>
      isEmpty(xs) ? [] : [take(n)(xs), ...chunk(n)(drop(n)(xs))];
    let a = [
      "",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
    ];
    let b = [
      "",
      "",
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
    ];
    let g = [
      "",
      "thousand",
      "million",
      "billion",
      "trillion",
      "quadrillion",
      "quintillion",
      "sextillion",
      "septillion",
      "octillion",
      "nonillion",
    ];
    // this part is really nasty still
    // it might edit this again later to show how Monoids could fix this up
    let makeGroup = ([ones, tens, huns]) => {
      return [
        num(huns) === 0 ? "" : a[huns] + " hundred ",
        num(ones) === 0 ? b[tens] : (b[tens] && b[tens] + "-") || "",
        a[tens + ones] || a[ones],
      ].join("");
    };
    // "thousands" constructor; no real good names for this, i guess
    let thousand = (group, i) => (group === "" ? group : `${group} ${g[i]}`);
    // execute !
    if (typeof n === "number") return numToWords(String(n));
    if (n === "0") return "zero";
    return comp(chunk(3))(reverse)(arr(n))
      .map(makeGroup)
      .map(thousand)
      .filter(comp(not)(isEmpty))
      .reverse()
      .join(" ");
  };
  const handleRemoveSign = (amount) => {
    return +amount.slice(1, amount.length);
  };
  return (
    <>
      <div ref={componentRef}>
        <div className="w-[700px] h-[800px]  mx-auto pt-10">
          <div className="flex justify-between items-center mb-10">
            <p className="font-cursive text-[18px]">Rex Logistics</p>
            <div className="text-center">
              {" "}
              <h3 className="font-body text-center text-gray-600 font-bold text-[20px]">
                Rex Logistics Courier Service
              </h3>
              <p>3 Adeleke Lane, Ikeja Lagos</p>
              <p className="uppercase">
                Regn No: {product.shipping_details.tracking_code}
              </p>
            </div>
            <div>
              <p className="bg-purple-600 text-white px-4 py-2 rounded-md">
                Receipt
              </p>
            </div>
          </div>
          <hr />
          <div className="flex justify-between py-2 font-body text-[14px]">
            {" "}
            <p>Phone: +234 8108932677</p>
            <p>Email: RexLogistics@gmail.com</p>
          </div>
          <hr />
          <div className="flex text-gray-600 justify-between mt-4">
            <p>
              <span className="font-medium mr-1">Receipt No:</span>{" "}
              <span>{Math.floor(Math.random() * 50)}</span>
            </p>
            <p>
              <span className="font-medium mr-1"> Date: </span>
              <span>{formatDate(new Date())}</span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-body leading-8">
              Received with thanks from{" "}
              <span className="underline font-semibold text-purple-600">
                {product.shipping_details.sender_name}
              </span>{" "}
              the sum of{" "}
              <span className="underline capitalize font-semibold text-purple-600">
                USD {numToWords(product.shipping_details.amount)}
              </span>{" "}
              by{" "}
              <span className="underline font-semibold text-purple-600">
                wire transfer
              </span>{" "}
              with payment reference no{" "}
              <span className="underline font-semibold text-purple-600">
                #{product.shipping_details.ref || "----"}
              </span>{" "}
              for the{" "}
              <span className="underline font-semibold text-purple-600">
                Shipping fee
              </span>
            </p>
          </div>
          <div className="flex justify-between mt-6">
            <div>
              <div className="flex font-bold text-[20px] items-center gap-2 border border-purple-400 rounded-sm">
                <p className="bg-purple-600 px-2 py-1 text-white">
                  {product.shipping_details.amount.slice(0, 1)}
                </p>
                <p className="text-gray-600">
                  {handleRemoveSign(
                    product.shipping_details.amount
                  ).toLocaleString("en-US", { minimumFractionDigits: 2 })}
                </p>
              </div>
              <p className="text-gray-500 mt-2 text-[14px]">
                Thanks for your payment
              </p>
            </div>

            <div>
              <p>Received by</p>
              <p>
                For:{" "}
                <span className="font-semibold">
                  Rex Logistics Courier service
                </span>
              </p>
              <img
                src="./sign.png"
                alt="signature"
                className="h-[30px] my-4 object-contain"
              />
              <p className="font-semibold">Rex Matthews</p>
              <p>Agent</p>
            </div>
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

export default TransactionReceipt;
