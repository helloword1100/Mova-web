'use client';
import Layout from "../../../components/layout/layout";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Recieverdetail from "../../../components/receiver-details/page";

export default function SendMoney() {
  const [receiver, setReceiver] = useState(false);
  const [formData, setFormData] = useState({
    amount: "",
    accountNumber: "",
    bankName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
  };

  return (
    <Layout>
      <div className="px-11">
      
        <h1 className="text-2xl font-semibold mb-4">Send Money</h1>
        <p className="text-gray-600 mb-6 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          bibendum laoreet massa quis viverra.
        </p>
       
        <div>
          {receiver ? (
            <Recieverdetail />
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-80 mx-auto">
              <div>
                <h2 className="text-lg font-semibold mb-5">Enter Receiver Details</h2>
                <textarea
                  cols="50"
                  rows="4"
                  placeholder="Enter Amount"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  className="w-full border rounded resize-none focus:outline-none focus:ring-0 text-center mx-auto pt-14"
                ></textarea>
              </div>
              <div>
                <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">
                  Account Number
                </label>
                <Input
                  type="text"
                  placeholder="Enter Account Number"
                  name="accountNumber"
                  value={formData.accountNumber}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-0 mt-2"
                />
              </div>
              <div>
                <label htmlFor="bankName" className="block text-sm font-medium text-gray-700">
                  Bank Name
                </label>
                <Input
                  type="text"
                  placeholder="Enter Bank Name"
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md mt-2"
                />
              </div>  

             
              <Button
                type="submit"
                className="button-background text-white font-semibold border rounded-lg w-full no-hover"
                onClick={() => setReceiver(!receiver)}
              >
                NEXT
              </Button>
            </form>
          )}
        </div>
      </div>
    </Layout>
  );
}
