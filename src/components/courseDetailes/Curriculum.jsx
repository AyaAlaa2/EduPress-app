import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Check, Lock } from "lucide-react";
import lessonIcon from "./icons/lessonIcons.svg";
import { ChevronDown } from "lucide-react";

const Curriculum = ({ lessons }) => {
  return (
    <Accordion type="multiple" className="w-full space-y-3">
      {lessons.map((lesson, index) => (
        <AccordionItem
          value={index + 1}
          className="border rounded-lg px-4 py-2 bg-white"
        >
          <AccordionTrigger
            className="
            flex w-full items-start justify-between
            flex-col md:flex-row
            gap-2 [&>svg]:hidden
            no-underline hover:no-underline focus:no-underline
            data-[state=open]:text-primary
          "
          >
            <div className="flex items-center gap-2">
              <ChevronDown
                className="
                h-4 w-4 transition-transform
                duration-200
                data-[state=open]:rotate-90
              "
              />
              <span className="font-semibold text-[12px] md:text-[16px]">
                {lesson.lessonName}
              </span>
            </div>

            <div className="text-[12px] md:text-[16px] text-[#555555] flex gap-5">
              <span>{lesson.lessonsNumber} Lessons</span>
              <span>{lesson.lessonsDuration} Mins</span>
            </div>
          </AccordionTrigger>

          <AccordionContent className="border-t pt-4 space-y-3">
            {lesson.lessons.map((item, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row items-start justify-between ps-5 gap-3"
              >
                <div className="flex items-center gap-[8px]">
                  <img src={lessonIcon} alt="l" />
                  <span className="text-[12px] md:text-[16px]">
                    {item.title}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Button
                    variant="secondary"
                    size="xs"
                    className="text-[4px] md:text-[10px] px-2"
                  >
                    Preview
                  </Button>

                  <span className="text-[12px] md:text-[16px] text-[#555555]">
                    {item.duration}
                  </span>

                  {item.open ? (
                    <Check size={14} className="text-green-500" />
                  ) : (
                    <Lock size={14} className="text-gray-400" />
                  )}
                </div>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Curriculum;
