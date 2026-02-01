import Navbar from "@/components/common/navbar";
import { poppins } from "../layout";
import {
  ChartBar,
  Contact,
  Contact2,
  Download,
  Mail,
  Plus,
  Trash2,
  UsersRound,
} from "lucide-react";
import DataTable from "@/components/common/dataTable";
import Campaign from "@/components/common/campaign";
import Stat from "@/components/common/stat";

const campaigns = [
  {
    id: 1,
    title: "Welcome to Oceandew Logistics!",
    message: "Thank you for subscribing to our newsletter...",
    sentAt: "1/18/2024, 1:00:00 PM",
    stats: {
      sent: 150,
      opened: 89,
      clicked: 34,
    },
  },
  {
    id: 2,
    title: "January Shipping Update",
    message: "Here’s what’s new with our logistics services...",
    sentAt: "1/25/2024, 9:30:00 AM",
    stats: {
      sent: 200,
      opened: 140,
      clicked: 60,
    },
  },
];

export default function page() {
  return (
    <div className="bg-[#F8FAFD] min-h-screen scrollbar-hide px-5 md:px-14">
      <Navbar poppings={poppins} />
      <div className="pt-25">
        <h1 className="text-[#666666] text-[12px]">Welcome Admin</h1>
        <h2 className="font-semibold text-[16px] text-[#01011B]">
          Albert Joe Nathan
        </h2>

        <div className=" w-full">
          <div className="flex flex-col md:flex-row space-x-2.5 w-full justify-between">
            <div className="mt-6 w-full bg-white rounded-lg p-6 shadow-md">
              <div className="flex flex-col md:flex-row justify-between space-y-5 md:items-center">
                <div className="flex space-x-3">
                  <div className="bg-[#03045E] rounded-xl h-10 w-10 flex items-center justify-center">
                    <UsersRound className="text-white" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-[16px] text-[#01011B]">
                      Subscriber Management
                    </h3>
                    <p className="text-[12px] text-[#666666]">
                      323 total subscribers
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className=" text-[12px] flex cursor-pointer  items-center space-x-1.5 border-[#03045E] border  hover:opacity-90 p-2.5 rounded-xl text-sm font-semibold text-white transition">
                    <span>
                      <Download className="text-[#03045E] h-5 w-5" />
                    </span>
                    <span className="text-[#03045E]">Export CSV</span>
                  </button>

                  <button className=" text-[12px] flex cursor-pointer  items-center space-x-1.5 border-[#03045E] bg-[#03045E] border  hover:opacity-90 p-2.5 rounded-xl text-sm font-semibold text-white transition">
                    <span>
                      <Plus className="text-white h-5 w-5" />
                    </span>
                    <span className="text-white">Add New</span>
                  </button>
                </div>
              </div>
              <div className="">
                <DataTable />
              </div>
            </div>

            <div className="mt-6 w-full md:w-[317px] flex flex-col gap-6 bg-white rounded-lg p-6 shadow-md">
              <div className="flex space-x-3">
                <div className="bg-[#FF6B35] rounded-xl h-10 w-10 flex items-center justify-center">
                  <ChartBar className="text-white" />
                </div>

                <div>
                  <h3 className="font-semibold text-[16px] text-[#01011B]">
                    Campaign Analytics
                  </h3>
                  <p className="text-[12px] text-[#666666]">
                    Overall performance
                  </p>
                </div>
              </div>

              <Campaign />
            </div>
          </div>
          `
          <div className="mt-6 flex flex-col gap-3 col-span-3 bg-white rounded-lg p-6 shadow-md">
            <div className="flex justify-between flex-col md:flex-row space-y-3 md:items-center">
              <div className="flex space-x-3">
                <div className="bg-[#03045E] rounded-xl h-10 w-10 flex items-center justify-center">
                  <Mail className="text-white" />
                </div>

                <div>
                  <h3 className="font-semibold text-[16px] text-[#01011B]">
                    Email Campaigns
                  </h3>
                  <p className="text-[12px] text-[#666666]">
                    323 total subscribers
                  </p>
                </div>
              </div>
              <div className="mb-3 md:mb-0 ">
                <button className=" text-[12px] flex cursor-pointer  items-center space-x-1.5 border-[#03045E] bg-[#03045E] border  hover:opacity-90 p-2.5 rounded-xl text-sm font-semibold text-white transition">
                  <span>
                    <Plus className="text-white h-5 w-5" />
                  </span>
                  <span className="text-white">Create New Campaign</span>
                </button>
              </div>
            </div>

            {campaigns.map((item) => (
              <div
                key={item.id}
                className="border rounded-xl p-5 border-[#EEEEEE]"
              >
                {/* Header */}
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-[16px] text-[#01011B]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#3A3A3C]">{item.message}</p>
                    <p className="text-[#858589] text-xs">
                      Sent on {item.sentAt}
                    </p>
                  </div>

                  <button
                    //onClick={() => console.log("delete", item.id)}
                    className="text-orange-500 cursor-pointer hover:text-orange-600  transition hover:text-orange-600"
                    aria-label="Delete"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>

                <hr className="my-4 border-[#EEEEEE]" />

                {/* Stats */}
                <div className="flex space-x-6">
                  <Stat label="Sent" value={item.stats.sent} />
                  <Stat label="Opened" value={item.stats.opened} />
                  <Stat label="Clicked" value={item.stats.clicked} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
