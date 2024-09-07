"use client";
import DetailPage from "@/components/DetailPage";
import { RecoilRoot } from "recoil";

export default function page(props) {
  const { params } = props;
  return (
    <RecoilRoot>
      <DetailPage id={params} />
    </RecoilRoot>
  );
}
