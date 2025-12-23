import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BreadCrumb = ({ href }) => {
  return (
    <Breadcrumb className="ps-6 sm:ps-10 md:ps-29 py-[18px] bg-[#F5F5F5]">
      <BreadcrumbList>
        {href.map((link, index) => (
          <React.Fragment key={link.title}>
            <BreadcrumbItem>
              {link.href ? (
                <BreadcrumbLink href={link.href}>
                  <span className="text-[#555555] text-[16px]">
                    {link.title}
                  </span>
                </BreadcrumbLink>
              ) : (
                <span className="text-[#9D9D9D] text-[16px]">{link.title}</span>
              )}
            </BreadcrumbItem>
            {index < href.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumb;
