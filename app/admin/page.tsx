import Navbar from "@/components/common/navbar";
import { poppins } from "../layout";
import {
  ChartBar,
  Contact,
  Contact2,
  Download,
  UsersRound,
} from "lucide-react";
import DataTable from "@/components/common/dataTable";
import Campaign from "@/components/common/campaign";

export default function page() {
  return (
    <div className="bg-[#F8FAFD] min-h-screen scrollbar-hide px-14">
      <Navbar poppings={poppins} />
      <div className="pt-25">
        <h1 className="text-[#666666] text-[12px]">Welcome Admin</h1>
        <h2 className="font-semibold text-[16px] text-[#01011B]">
          Albert Joe Nathan
        </h2>

        <div className=" w-full">
          <div className="flex space-x-2.5 w-full justify-between">
            <div className="mt-6 w-full bg-white rounded-lg p-6 shadow-md">
              <div className="flex justify-between items-center">
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
                      <Download className="text-white h-5 w-5" />
                    </span>
                    <span className="text-white">Export CSV</span>
                  </button>
                </div>
              </div>
              <div className="">
                <DataTable />
              </div>
            </div>

            <div className="mt-6 w-[317px] flex flex-col gap-6 bg-white rounded-lg p-6 shadow-md">
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
          <div className="mt-6 col-span-3 bg-green-500 rounded-lg p-6 shadow-md"></div>
        </div>
      </div>
    </div>
  );
}
