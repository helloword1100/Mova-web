import Layout from "../../components/layout/layout";
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
import Dcard from "../../assets/card.png";
import Link from "next/link";
export default function Dashboard() {
  const transactions = [
    {
      id: 1,
      name: "Josh Kryston",
      date: "25-07-2024",
      type: "Sent",
      amount: "$500",
    },
    {
      id: 2,
      name: "Sadie Traves",
      date: "25-07-2024",
      type: "Receive",
      amount: "$500",
    },
    {
      id: 3,
      name: "Josh Kryston",
      date: "25-07-2024",
      type: "Sent",
      amount: "$500",
    },
    {
      id: 4,
      name: "Sadie Traves",
      date: "25-07-2024",
      type: "Receive",
      amount: "$500",
    },
    {
      id: 5,
      name: "Josh Kryston",
      date: "25-07-2024",
      type: "Sent",
      amount: "$500",
    },
    {
      id: 6,
      name: "Sadie Traves",
      date: "25-07-2024",
      type: "Receive",
      amount: "$500",
    },
    {
      id: 7,
      name: "Josh Kryston",
      date: "25-07-2024",
      type: "Sent",
      amount: "$500",
    },
  ];

  return (
    <Layout>
     
      <div className="px-4 sm:px-6 md:px-10">
        
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between w-full sm:w-[38%] gap-2 sm:gap-0">
              <h1 className="text-2xl font-semibold">Card</h1>
              <h1 className="btn-txt-color font-semibold">Add New Card</h1>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link href="/dashboard/send-money">
                {" "}
                <Button className="button-border btn-txt-color bg-white hover:bg-white border">
                  Send Payment
                </Button>
              </Link>{" "}
              <Link href="/dashboard/request-money">
                <Button className="button-border btn-txt-color bg-white hover:bg-white border">
                  Request Payment
                </Button>
              </Link> <Link href="/dashboard/bill-payment">
              <Button className="button-border btn-txt-color bg-white hover:bg-white border">
                Bill Payment
              </Button> </Link>
            </div>
          </div>

          <div
            className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0"
            style={{ margin: 0 }}
          >
            <div className="w-full lg:w-auto">
              <Image src={Dcard} alt="" className="" />
            </div>

            <Card className="mt-4 w-full lg:w-1/2 border-0 shadow-none">
              <CardHeader>
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
                  Spending Result of Last 30 Days
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex justify-around items-center">
                  <div className="flex gap-3 items-center">
                    <p className="text-2xl font-bold text-gray-700">$500</p>
                    <p className="text-sm text-gray-700">Spending</p>
                  </div>
                  <div className="flex justify-between items-center gap-3">
                    <p className="text-2xl font-bold">$50k</p>
                    <p className="text-sm text-muted-foreground">Remaining</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col lg:flex-row gap-7">
            <Card className="w-full lg:w-3/5 border-none shadow-none">
              <CardHeader className="p-0">
                <CardTitle className="btn-txt-color font-semibold text-lg">
                  Recent Employee Transactions
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-12 overflow-x-auto">
                <Table className="p-0">
                  <TableHeader className="p-6 tb-col">
                    <TableRow>
                      <TableHead></TableHead>
                      <TableHead className="font-semibold text-black">
                        Name
                      </TableHead>
                      <TableHead className="font-semibold text-black">
                        Date
                      </TableHead>
                      <TableHead className="font-semibold text-black">
                        Type
                      </TableHead>
                      <TableHead className="font-semibold text-black">
                        Amount
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {transactions.map((transaction) => (
                      <TableRow
                        key={transaction.id}
                        className="text-muted-foreground"
                      >
                        <TableCell>{transaction.id}</TableCell>
                        <TableCell>{transaction.name}</TableCell>
                        <TableCell>{transaction.date}</TableCell>
                        <TableCell>{transaction.type}</TableCell>
                        <TableCell>{transaction.amount}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card className="w-full lg:w-2/5 border-0">
              <CardHeader>
                <CardTitle className="btn-txt-color font-semibold text-lg">
                  New Payment Request
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-6 h-80 overflow-y-auto">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <p className="text-sm text-black">
                          Receiver: Kiraa Buri
                        </p>
                        <p className="text-sm text-black flex gap-2">
                          Amount: <span className="font-bold">$500</span>
                        </p>
                      </div>
                      <p className="text-sm text-black">Sender: Kiraa Buri</p>
                      <div className="flex gap-4">
                        <Button className="button-border btn-txt-color bg-white hover:bg-white border rounded-lg w-full sm:w-32">
                          Decline
                        </Button>
                        <Button className="button-border bg-white button-background text-white border rounded-lg w-full sm:w-32">
                          Accept
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
