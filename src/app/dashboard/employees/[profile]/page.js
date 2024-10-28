import Layout from "../../../../components/layout/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import Dcard from "../../../../assets/card.png";
import Link from "next/link";
import { Switch } from "@/components/ui/switch";

export default function profile() {
  const employees = [
    {
      id: 1,
      name: "Dummy name",
      accountNumber: "0817239419528913",
      day: "23-07-2024",
      time: "10:30 AM",
      type: "Credit",
      amount: "$500",
      action: "View",
    },
    {
      id: 2,
      name: "Dummy name",
      accountNumber: "0817239419528913",
      day: "23-07-2024",
      time: "2:15 PM",
      type: "Debit",
      amount: "$200",
      action: "View",
    },
    {
      id: 3,
      name: "Dummy name",
      accountNumber: "0817239419528913",
      day: "23-07-2024",
      time: "9:00 AM",
      type: "Credit",
      amount: "$750",
      action: "View",
    },
    {
      id: 4,
      name: "Dummy name",
      accountNumber: "0817239419528913",
      day: "23-07-2024",
      time: "3:45 PM",
      type: "Debit",
      amount: "$100",
      action: "View",
    },
    {
      id: 5,
      name: "Dummy name",
      accountNumber: "0817239419528913",
      day: "23-07-2024",
      time: "11:30 AM",
      type: "Credit",
      amount: "$300",
      action: "View",
    },
  ];

  return (
    <Layout>
      <div className="px-4 sm:px-6 md:px-10">
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
            <div className="flex items-center flex-col sm:flex-row sm:justify-between w-full sm:w-[38%] gap-2 sm:gap-0">
              <h1 className="text-2xl font-semibold">Employee Profile </h1>
            </div>
            <div className="flex flex-wrap gap-4">
              <span className="flex text-sm items-center gap-2">
                <p className="btn-txt-color font-medium">Payment Request</p>
                <p className="custom-p-color">NO</p>
                <Switch className="" />
              </span>
              <span className="flex text-sm items-center gap-2">
                <p className="btn-txt-color font-medium">Status:</p>
                <p className="custom-p-color">Active:</p>
                <Switch className="" />
              </span>
              <Link href="#">
                {" "}
                <Button className="button-border btn-txt-color bg-white hover:bg-white border px-7">
                  Add Balance
                </Button>
              </Link>{" "}
              <Link href="#">
                <Button className="button-border btn-txt-color bg-white hover:bg-white border ">
                  Delete Employee
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0">
            <div className="w-full lg:w-auto">
              <span>
                <h1 className="btn-txt-color font-semibold text-xl mb-4">
                  Employee Details
                </h1>
                <span className="flex gap-2">
                  <p className=" text-muted-foreground">Name: </p>
                  <p className="text-gray-800">Jahanzaib Shoaib</p>
                </span>
                <span className="flex gap-2">
                  <p className=" text-muted-foreground">Contact Number: </p>
                  <p className="text-gray-600">+12345678345</p>
                </span>
                <span className="flex gap-2">
                  <p className=" text-muted-foreground">Mail: </p>
                  <p className="text-gray-600">abc@gmail.com</p>
                </span>
                <span className="flex gap-2">
                  <p className=" text-muted-foreground">DoB: </p>
                  <p className="text-gray-600">12-01-1990</p>
                </span>
                <span className="flex gap-2">
                  <p className=" text-muted-foreground">Address: </p>
                  <p className="text-gray-600"> House #134 Topaz Block</p>
                </span>
              </span>
            </div>

            <Card className=" sm:w-full lg:w-1/2 border-0 shadow-none w-80  ">
              <CardHeader className="p-0">
                <CardTitle className="flex justify-between items-center">
                  <p className="btn-txt-color font-semibold text-lg">Stats</p>
                  <select
                    className="border p-2 rounded-full font-medium btn-txt-color"
                    style={{ background: "#cfccff69" }}
                  >
                    <option value="weekly">Weekly</option>
                  </select>
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Showing Result of Jul 19-25
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 justify-around items-center mt-8">
                  <div className="flex gap-1 items-center flex-col">
                    <p className="text-2xl font-bold text-gray-600">$500</p>
                    <p className="text-sm text-gray-500">Balance</p>
                  </div>
                  <div className="flex gap-1 justify-between items-center  flex-col">
                    <p className="text-2xl font-bold text-gray-600">$50k</p>
                    <p className="text-sm text-muted-foreground text-gray-500">
                      Spendings
                    </p>
                  </div>
                  <div className="flex gap-1 justify-between items-center  flex-col">
                    <p className="text-2xl font-bold text-gray-600">$50k</p>
                    <p className="text-sm text-muted-foreground text-gray-500">
                      Receiving
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col lg:flex-row gap-7 ">
            <Card className="border-none shadow-none p-0 mt-5 mb-5 w-full">
              <h1 className="btn-txt-color font-semibold text-xl mb-6">
                Transection History
              </h1>
              <CardContent className="p-0 overflow-x-auto w-80 sm:w-full">
                <Table className="p-0">
                  <TableHeader className="tb-col">
                    <TableRow>
                      <TableHead className=" sm:table-cell"></TableHead>
                      <TableHead className="font-semibold text-black">
                        Name
                      </TableHead>
                      <TableHead className=" sm:table-cell font-semibold text-black">
                        Account Number
                      </TableHead>
                      <TableHead className=" sm:table-cell font-semibold text-black">
                        Day
                      </TableHead>
                      <TableHead className="font-semibold text-black">
                        Time
                      </TableHead>
                      <TableHead className=" sm:table-cell font-semibold text-black">
                        Type
                      </TableHead>
                      <TableHead className=" sm:table-cell font-semibold text-black">
                        Amount
                      </TableHead>
                      <TableHead className="font-semibold text-black">
                        Action
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {employees.map((employee) => (
                      <TableRow
                        key={employee.id}
                        className="text-muted-foreground border-0"
                      >
                        <TableCell className=" sm:table-cell">
                          {employee.id}
                        </TableCell>
                        <TableCell>{employee.name}</TableCell>
                        <TableCell className=" sm:table-cell">
                          {employee.accountNumber}
                        </TableCell>
                        <TableCell className=" sm:table-cell">
                          {employee.day}
                        </TableCell>
                        <TableCell className=" sm:table-cell">
                          {employee.time}
                        </TableCell>
                        <TableCell className=" sm:table-cell">
                          {employee.type}
                        </TableCell>
                        <TableCell className=" sm:table-cell">
                          {employee.amount}
                        </TableCell>

                        <TableCell>
                          <div className="flex flex-col sm:flex-row ">
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-blue-500 font-semibold  border-none text-left hover:text-blue-500"
                            >
                              View
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
