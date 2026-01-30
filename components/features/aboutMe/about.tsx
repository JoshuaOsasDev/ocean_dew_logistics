import HeadingType from "@/components/common/headingType";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="px-5 md:scroll-mt-24 gap-3 md:space-x-5 flex h-full flex-col md:flex-row md:items-center "
    >
      <div className="relative md:w-[542px] md:h-[485px] h-[273.41px] w-full">
        {" "}
        <Image
          src={"/Images/ship3.png"}
          fill
          alt="about me"
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-3 mt-4">
        <HeadingType h3="Who We Are" h4=" About Oceandew Logistics Limited" />

        <p className="text-[16px]  flex flex-col gap-3 md:max-w-2xl leading-[150%] tracking-normal text-[#3A3A3C] ">
          <span>
            {" "}
            Oceandew Logistics Limited is a professionally registered clearing,
            forwarding, and logistics company providing reliable import, export,
            and freight forwarding services. Our operations cover all countries
            of the world, supporting international and domestic trade through
            air, sea, and land transportation. We handle general cargo as well
            as oil and gas company equipment, including industrial machinery and
            specialized project cargo.{" "}
          </span>{" "}
          <span>
            {" "}
            We operate at Apapa Port, Tin Can Island Port, PTML port, Lekki Deep
            Sea Port, Onne Port, (FOT, FLT & OMT). Port Harcourt Port, Calabar
            Port, Ibeto port and terminal, Warri Port, and Ibom Deep Sea Port.
          </span>
        </p>
      </div>
    </section>
  );
}
