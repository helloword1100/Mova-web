import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

export default function completed({ details ,isOpen, closeModal}) {
  const { senderName, receiverName, receiverAccountType, amountSent, serviceFee } = details


  return (
    <Modal
    isOpen={isOpen}
    closeModal={closeModal}
    className="bg-transparent"
    ariaHideApp={false}
  >
    <Card className="w-full max-w-sm mx-auto">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 bg-blue-500 text-white rounded-full p-3 inline-block">
          <CheckCircle size={32} />
        </div>
        <CardTitle className="text-2xl font-bold">${amountSent.toLocaleString()} Sent</CardTitle>
        <p className="text-sm text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Sender Name</span>
            <span className="font-medium">{senderName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Receiver Name</span>
            <span className="font-medium">{receiverName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Receiver Account Type</span>
            <span className="font-medium">{receiverAccountType}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Amount Sent</span>
            <span className="font-medium">${amountSent.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Service Fee</span>
            <span className="font-medium">${serviceFee.toLocaleString()}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Download Slip</Button>
      </CardFooter>
    </Card>
    </Modal>
  )


}