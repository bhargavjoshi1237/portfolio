export default function StatItem({ label, value }) {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <p className="text-xs fonc text-[#e7e7e750]">{label}</p>
      <p className="text-sm fonc text-[#e7e7e750]">{value}</p>
    </div>
  );
}
