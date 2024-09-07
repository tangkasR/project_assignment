"use client";
import LocationPage from "@/components/LocationPage";
import { RecoilRoot } from "recoil";
export default function page() {
  return (
    <RecoilRoot>
      <LocationPage />
    </RecoilRoot>
  );
}
