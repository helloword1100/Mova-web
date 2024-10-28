"use client";
import Layout from "../../../components/layout/layout";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function billpayment() {
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
        <h1 className="text-2xl font-semibold mb-4">Bill Payment</h1>
        <p className="text-gray-600 mb-6 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          bibendum laoreet massa quis viverra.
        </p>
        <div>
          <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-80 mx-auto">
            <div>
              <h2 className="text-lg font-semibold mb-5">Enter Bill Details</h2>
              
            </div>
            <div>
              <label
                htmlFor="accountNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Bill Number
              </label>
              <Input
                type="text"
                placeholder="Enter Account Number"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-0 focus:border-0 mt-2"
              />
            </div>
            <p className="text-sm w-72 text-gray-600 pb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque elit sit </p>
            <Button
              type="submit"
              className="button-background text-white font-semibold border rounded-lg w-full "
            >
              NEXT
            </Button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
