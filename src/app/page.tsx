import Clock from "@/components/Clock";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Clock",
  description: "Your Time on Smart Clock",
};

const page = () => {
  return (
    <section className="grid min-h-dvh place-items-center">
      <Clock />
    </section>
  );
};

export default page;
