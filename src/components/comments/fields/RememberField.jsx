import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { FormControl, FormField, FormItem } from "@/components/ui/form";

const RememberField = ({
  control,
  label = "Save my name, email in this browser for the next time I comment",
}) => {
  return (
    <FormField
      control={control}
      name="remember"
      render={({ field }) => (
        <FormItem className="flex items-center gap-2 space-y-0">
          <FormControl>
            <Checkbox
              checked={field.value}
              onCheckedChange={(v) => field.onChange(Boolean(v))}
            />
          </FormControl>
          <span className="text-sm text-muted-foreground">{label}</span>
        </FormItem>
      )}
    />
  );
};
export default RememberField;
