interface HeadingType {
  h3: string;
  h4: string;
}
export default function HeadingType({ h3, h4 }: HeadingType) {
  return (
    <div>
      <h4 className="font-medium text-sm uppercase text-[#FF6B35]">{h3}</h4>
      <h3 className="font-semibold text-lg text-[#01011B] my-2">{h4}</h3>
    </div>
  );
}
