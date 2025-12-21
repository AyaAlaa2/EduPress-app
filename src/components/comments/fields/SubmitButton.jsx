import React from "react";
import { Button } from "@/components/ui/button";

const SubmitButton = ({ text = "Posts Comment" }) => {
  return (
    <Button type="submit" className="rounded-full px-6">
      {text}
    </Button>
  );
};
export default SubmitButton;
