'use client';

import GeneralSupport from "./components/GeneralSupport";
import PressInquiries from "./components/PressInquiries";
import VendorInquiries from "./components/VendorInquiries";
import useTrackPage from "../hooks/TrackPage";


export default function ContactPage() {
  useTrackPage({ page: "contact" });
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
