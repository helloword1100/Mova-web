'use client'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import Paymentsent from '../pop-ups/completed';

  import { Button } from "@/components/ui/button"
import { useState } from "react";
  const details = {
    senderName: "John Doe",
    receiverName: "Jane Smith",
    receiverAccountType: "Savings",
    amountSent: 500,
    serviceFee: 15,
  };
  
  export default function pin({value,style}) {
    const toggleexpertise = () => setshowexpertise(!showexpertise);
    const [showexpertise, setshowexpertise] = useState(false);

    return (
      <AlertDialog>
      <Paymentsent isOpen={showexpertise} closeModal={toggleexpertise} details={details} />

        <AlertDialogTrigger asChild>
          <Button variant="outline" className={style}>{value}</Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="w-28">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center font-semibold">Pin Required </AlertDialogTitle>
            <AlertDialogDescription style={{width:'257px'}} className=" text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </AlertDialogDescription>
            <div className="flex gap-3" style={{marginTop:'25px'}}>
                <span  ><input type="text" className="opt focus:outline-none" maxLength={1}/></span>
                <span ><input type="text" className="opt focus:outline-none" maxLength={1}/></span>
                <span ><input type="text" className="opt focus:outline-none" maxLength={1}/></span>
                <span  ><input type="text" className="opt focus:outline-none" maxLength={1}/></span>
                <span ><input type="text" className="opt focus:outline-none" maxLength={1}/></span>
                <span ><input type="text" className="opt focus:outline-none" maxLength={1}/></span>

                
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter>
            
            <AlertDialogAction   onClick={toggleexpertise} className="button-background text-white font-semibold border rounded-lg w-40  mt-4 mx-auto no-hover" style={{width:'130px'}} >Confirm</AlertDialogAction>


          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    
    )
  }
  