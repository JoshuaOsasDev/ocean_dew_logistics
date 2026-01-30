interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
}

export function ServiceCard({
  icon,
  title,
  subtitle,
  description,
}: ServiceCardProps) {
  return (
    <div className="rounded-xl h-full bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex  space-x-3">
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-[#03045E] text-white">
          {icon}
        </div>
        <div className="">
          <h3 className="text-base max-w-xs font-semibold text-[#03045E]">
            {title}
          </h3>

          <span className="text-xs font-medium text-[#FF6B35]">{subtitle}</span>
        </div>{" "}
      </div>
      <p className="mt-3 text-[16px] leading-relaxed text-[#575757]">
        {description}
      </p>
    </div>
  );
}
