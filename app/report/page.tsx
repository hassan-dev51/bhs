import React from "react";
import dynamic from "next/dynamic";

const Report = dynamic(() => import("@/components/Report"), {
  loading: () => <p>loading</p>,
  ssr: false,
});

const Page = () => {
  return <Report />;
};

export default Page;
