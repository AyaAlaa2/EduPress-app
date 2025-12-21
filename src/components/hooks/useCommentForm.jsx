import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { commentSchema } from "./commentSchema";

const useCommentForm = ({ onSubmit: onSubmitProp } = {}) => {
  const form = useForm({
    resolver: zodResolver(commentSchema),
    defaultValues: { name: "", email: "", comment: "", remember: false },
  });

  const onSubmit = async (values) => {
    if (onSubmitProp) return onSubmitProp(values);
    console.log(values);
  };

  return { form, onSubmit };
}

export default useCommentForm;