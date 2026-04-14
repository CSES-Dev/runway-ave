'use client';
import ContactScrollSection from "@/app/contact/components/ContactScrollSection";
import useTrackPage from "../hooks/TrackPage";

export default function ContactPage() {
  useTrackPage({ page: "contact" });

  return (
    <ContactScrollSection/>
  )
}
