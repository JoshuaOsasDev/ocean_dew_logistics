import {
  ArrowBigDown,
  ArrowUp,
  CheckCheck,
  CircleX,
  CornerLeftUp,
  Eye,
  icons,
  Send,
} from "lucide-react";

const data = [
  {
    id: 1,
    sent: 267,
    icons: <Send className="h-4 w-4 text-[#01011B]" />,
    content: "Total Sent",
  },
  {
    id: 2,
    sent: 150,
    icons: <CheckCheck className="h-4 w-4 text-[#05A962]" />,
    content: "Delivered",
  },
  {
    id: 3,
    sent: 150,
    icons: <Eye className="h-4 w-4 text-[#03045E]" />,
    content: "Opened",
  },
  {
    id: 4,
    sent: 50,
    icons: <CornerLeftUp className="h-4 w-4 text-[#00A896]" />,
    content: "Clicked",
  },
  {
    id: 5,
    sent: 17,
    icons: <CircleX className="h-4 w-4 text-[#E02C2C]" />,
    content: "Failed",
  },
];
export default function Campaign() {
  return (
    <div>
      {data.map((item) => (
        <div
          key={item.id}
          className="border rounded-xl mb-4 text-[#3A3A3C] text-sm flex justify-between px-5 py-4 bg-[#F8FAFD] border-[#EEEEEE] "
        >
          <div className="flex space-x-2">
            {item.icons}
            <p>{item.content}</p>
          </div>

          <p>{item.sent}</p>
        </div>
      ))}
    </div>
  );
}
