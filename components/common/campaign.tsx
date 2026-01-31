import { ArrowBigDown, icons } from "lucide-react";

const data = [
  { id: 1, sent: 267, icons: ArrowBigDown, content: "Total Sent" },
  {
    id: 2,
    sent: 150,
    icons: ArrowBigDown,
    content: "Delivered",
  },

  {
    id: 4,
    sent: 50,
    icons: ArrowBigDown,
    content: "Clicked",
  },
  { id: 5, sent: 17, icons: ArrowBigDown, content: "Failed" },
];
export default function Campaign() {
  return (
    <div>
      {data.map((item) => (
        <div
          key={item.id}
          className="border rounded-xl mt-4 text-[#3A3A3C] text-sm flex justify-between px-5 py-4 bg-[#F8FAFD] border-[#EEEEEE] "
        >
          <div className="flex space-x-2">
            <ArrowBigDown />
            <p>{item.content}</p>
          </div>

          <p>{item.sent}</p>
        </div>
      ))}
    </div>
  );
}
