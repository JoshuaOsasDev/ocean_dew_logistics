import {
  Package,
  Plane,
  FileText,
  Layers,
  Truck,
  Warehouse,
} from "lucide-react";
import { ServiceCard } from "./serviceCard";
import ScrollReveal from "./scrollReveal";
import HeadingType from "./headingType";

export default function ServicesSection() {
  return (
    <section id="services" className=" bg-[#F8FAFD] py-16 mt-2">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col md:flex-row md:justify-between py-5">
          <HeadingType h3=" What We Offer" h4=" Our Services" />

          <p className="text-[#3A3A3C] md:max-w-[553px] lg:max-w-[700px] text-[16px] leading-[150%] ">
            Comprehensive logistics solutions tailored to meet your
            international trade and cargo transportation needs.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ScrollReveal>
            <ServiceCard
              icon={<Package size={22} />}
              title="Customs Clearing"
              subtitle="Air & Sea"
              description="Import and export documentation and clearance services ensuring smooth passage through customs."
            />
          </ScrollReveal>

          <ServiceCard
            icon={<Plane size={22} />}
            title="International Freight Forwarding"
            subtitle="Worldwide"
            description="Comprehensive shipping solutions via air, sea, and land to any destination globally."
          />
          <ScrollReveal>
            {" "}
            <ServiceCard
              icon={<FileText size={22} />}
              title="Import & Export Documentation"
              subtitle="Full Service"
              description="Complete handling of all shipping paperwork, permits, and regulatory compliance."
            />
          </ScrollReveal>

          <ScrollReveal>
            <ServiceCard
              icon={<Layers size={22} />}
              title="Cargo Handling & Consolidation"
              subtitle="Secure"
              description="Professional cargo grouping and secure handling for cost-effective shipping solutions."
            />
          </ScrollReveal>
          <ScrollReveal>
            <ServiceCard
              icon={<Truck size={22} />}
              title="Oil & Gas Equipment Logistics"
              subtitle="Specialized"
              description="Heavy machinery, industrial equipment, and specialized project cargo transport."
            />
          </ScrollReveal>

          <ScrollReveal>
            <ServiceCard
              icon={<Warehouse size={22} />}
              title="Warehousing & Door-to-Door"
              subtitle="Complete"
              description="Secure storage facilities and comprehensive haulage with door-to-door delivery."
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
