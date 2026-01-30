import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "../ui/scroll-area";

function ReusableModal({
  isOpen,
  onClose,
  title,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className=" max-h-[min(600px,80vh)] w-[90%] p-0 rounded-[30px] max-h-[90vh] overflow-hidden">
        <ScrollArea className="flex max-h-full flex-col overflow-hidden">
          {/* Header */}

          <DialogHeader className="sticky top-0 bg-[#03045E] rounded-t-[30px] p-6 text-center z-[1000]">
            <DialogTitle className="text-white text-xl font-semibold">
              {title}
            </DialogTitle>
          </DialogHeader>

          {/* Content */}
          <div className="py-2 px-3 overflow-y-auto">
            {children}

            {/* Action Buttons */}
            {/* {!hideActions && (
              <div className="flex justify-end gap-2 mt-6">
                <Button
                  onClick={onClose}
                  variant="outline"
                  className="border-[#03045E] text-[#03045E] hover:bg-[#0db2b2]/5 hover:border-[#03045E] rounded-lg"
                >
                  {cancelLabel}
                </Button>

                <Button
                  onClick={onSubmit}
                  disabled={loading}
                  className="bg-[#03045E] hover:bg-[#03045E] text-white rounded-lg"
                >
                  {loading ? "Processing..." : submitLabel}
                </Button>
              </div>
            )} */}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

export default ReusableModal;
