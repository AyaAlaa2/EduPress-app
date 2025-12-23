import { Form } from "@/components/ui/form";
import useCommentForm from "../hooks/useCommentForm";
import NameField from "./fields/NameField";
import EmailField from "./fields/EmailField";
import CommentField from "./fields/CommentField";
import RememberField from "./fields/RememberField";
import SubmitButton from "./fields/SubmitButton";
export default function CommentForm({
  title,
  subtitle,
  buttonText = "Posts Comment",
  showRemember = true,
  onSubmit,
  className = "",
}) {
  const { form, onSubmit: handleSubmit } = useCommentForm({ onSubmit });
  return (
    <section className={`w-full ${className}`}>
      <div className="mx-auto max-w-6xl py-10 ">
        {(title || subtitle) && (
          <div className="mb-6 space-y-2 ">
            {title && <h2 className="text-2xl font-semibold">{title}</h2>}
            {subtitle && (
              <p className="text-sm text-muted-foreground">{subtitle}</p>
            )}
          </div>
        )}

        <div className="rounded-2xl border bg-background p-6 shadow-sm">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <NameField control={form.control} />
                <EmailField control={form.control} />
              </div>

              <CommentField control={form.control} />

              {showRemember && <RememberField control={form.control} />}

              <SubmitButton text={buttonText} />
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
