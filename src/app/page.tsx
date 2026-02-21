import Clock from "@/components/Clock";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Clock",
  description: "Your Time on Smart Clock",
};

const page = () => {
  return (
    <section className="grid h-[90dvh] place-items-center">
      <Clock />
    </section>
  );
};

export default page;
