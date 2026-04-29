'use client';

import GeneralSupport from "./components/GeneralSupport";
import PressInquiries from "./components/PressInquiries";
import VendorInquiries from "./components/VendorInquiries";


export default function ContactPage() {
  return (
    <div className="flex flex-col items-center">
        <div className="pt-28">
            <VendorInquiries/>
        </div>
        <div className="p-10">
            <PressInquiries/>
        </div>
        <div>
            <GeneralSupport/>
        </div>
    </div>
  )
}
