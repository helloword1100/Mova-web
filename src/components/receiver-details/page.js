import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Pin from '../../pop-ups/pin'

export default function receiverdetails() {
  const details = [
    { label: "Sender Name", value: "Jahanzaib" },
    { label: "Receiver Name", value: "Miran butt" },
    { label: "Receiver Account Type", value: "Mowa" },
    { label: "Amount sent", value: "$500" },
    { label: "Service Fee", value: "$0" },
  ]

  return (
    <Card className="w-full max-w-sm mx-auto border-0 shadow-none ">
     
      <CardHeader >
        <CardTitle className="text-xl font-semibold text-center">Receiver Details</CardTitle>
        <p className="text-sm text-center text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida mi id purus
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {details.map((detail, index) => (
            <div key={index} className="flex justify-between">
              <span className="text-sm ">{detail.label}</span>
              <span className="text-sm font-medium ">{detail.value}</span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Pin value="Confirm" style="button-background text-white font-semibold border rounded-lg w-full mt-12  no-hover "/>
      </CardFooter>
    </Card>
  )
}