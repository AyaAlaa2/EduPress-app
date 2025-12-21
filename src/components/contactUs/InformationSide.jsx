import React from "react";
import { Phone, Mail } from "lucide-react";

const InformationSide = () => {
  return (
    <div className="flex flex-col items-start gap-[24px]">
      <h1 className="text-[30px] md:text-[36px] font-semibold text-black font-[Exo]">
        Need A Direct Line?
      </h1>
      <div className="flex flex-col items-sart gap-[16px]">
        <p className="text-[#555555] text-[14px] md:text-[18px] leading-[150%]">
          Cura mauris et avara fusce ten, Vitae pretium marescher vivamusque
          fusce dui penat.
        </p>

        <div className="flex flex-col items-start gap-[16px]">
          <div className="flex items-center gap-3">
            <div className="w-[56px] h-[56px] rounded-md bg-[#F5F5F5] grid place-items-center">
              <Phone className="text-orange-500" size={24} />
            </div>
            <div className="flex flex-col items-start">
              <p className="text-[18px] text-[#555555]">Phone</p>
              <p className="text-[16px] font-[Exo] font-semibold">
                (311) 440 1080
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-[56px] h-[56px] rounded-md bg-[#F5F5F5] grid place-items-center">
              <Mail className="text-orange-500" size={24} />
            </div>

            <div className="flex flex-col items-start">
              <p className="text-[18px] text-[#555555]">Email</p>
              <p className="text-[16px] font-[Exo] font-semibold">
                contact@company.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationSide;
