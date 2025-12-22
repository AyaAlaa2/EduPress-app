import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import InformationSide from "./InformationSide";
import MapSide from "./MapSide";
import CommentForm from "../comments/CommentForm";
import BreadCrumb from "../hooks/BreadCrumb";

const ContactUs = () => {
  const href = [{ title: "Homepage", href: "/" }, { title: "Contact Us" }];

  return (
    <Card className="w-full bg-white shadow-none border-0 py-0">
      <BreadCrumb href={href} />

      <CardContent className="p-6 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-5 md:px-15 lg:px-40">
          <InformationSide />
          <MapSide />
        </div>
      </CardContent>
      <CommentForm
        title="Leave a Comment"
        subtitle="Your email address will not be published. Required fields are marked *"
      />
    </Card>
  );
};

export default ContactUs;
