function Stat({ label, value }: { label: string; value: number }) {
  return (
    <p className="text-xs">
      <span>{label}:</span>{" "}
      <span className="text-sm font-semibold">{value}</span>
    </p>
  );
}
export default Stat;
