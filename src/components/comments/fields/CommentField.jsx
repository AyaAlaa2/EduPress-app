import React from "react";
import { Textarea } from "@/components/ui/textarea";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const CommentField = ({
  control,
  placeholder = "Comment",
  minHeightClass = "min-h-[140px]",
}) => {
  return (
    <FormField
      control={control}
      name="comment"
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Textarea
              placeholder={placeholder}
              className={`${minHeightClass} resize-none`}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CommentField;
