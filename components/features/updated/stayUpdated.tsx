import SubscribeForm from "@/components/common/subscribeForm";

export default function StayUpdated() {
  return (
    <div className="bg-[#FF6B35] py-20 px-4 flex flex-col gap-2.5">
      <div>
        <h4 className="font-medium text-[16px] uppercase text-[#03045E]">
          STAY UPDATED
        </h4>
        <h3 className="font-semibold text-[20px] text-[#FFFFFF] my-2">
          Subscribe to our newsletter for updates, promotions, and logistics
          insights.
        </h3>
      </div>

      <SubscribeForm style="bg-[#03045E]" />
    </div>
  );
}
