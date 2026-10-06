import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "motion/react";
import { useRouterState } from "@tanstack/react-router";
import { ActionButton } from "./Action";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(7, "Please enter a contactable phone number."),
  date: z.string().optional(),
  message: z.string().min(10, "Tell us a little about what you are looking for."),
  botcheck: z.string().optional(),
});

type Values = z.infer<typeof schema>;

const inputClass =
  "h-12 w-full border border-border bg-background px-4 text-sm outline-none transition-colors focus:border-foreground";

export function InquiryForm({ context, compact = false }: { context?: string; compact?: boolean }) {
  const [sent, setSent] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: {
      message: context ? `I would like more information about ${context}.` : "",
    },
  });

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="border border-border bg-card p-8 text-center"
      >
        <p className="eyebrow">Enquiry received</p>
        <h3 className="display-card mt-4">Thank you, we’ll be in touch.</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Our property specialist will contact you shortly — usually within the same working day.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(async (values) => {
        setSubmitError(null);

        try {
          const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
          if (!accessKey) {
            throw new Error("VITE_WEB3FORMS_KEY is not configured.");
          }

          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              access_key: accessKey,
              subject: "New enquiry from rifarealestate.com",
              from_name: "RIFA Property Consultant",
              name: values.name,
              email: values.email,
              phone: values.phone,
              message: values.message,
              preferred_viewing_date: values.date || "",
              property_or_page: context ? `${context} (${pathname})` : pathname,
              botcheck: values.botcheck || "",
            }),
          });
          const result: { success?: boolean; message?: string } = await response.json();

          if (!response.ok || !result.success) {
            throw new Error(result.message || `Web3Forms request failed (${response.status}).`);
          }

          setSent(true);
        } catch (error) {
          console.error("Unable to send enquiry:", error);
          setSubmitError(
            "Sorry, we couldn’t send your enquiry just now. Please try again in a moment.",
          );
        }
      })}
      className="space-y-4"
    >
      <div className="hidden" aria-hidden="true">
        <label htmlFor="inquiry-website">Leave this field empty</label>
        <input
          id="inquiry-website"
          type="text"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          {...register("botcheck")}
        />
      </div>

      <div className={cn("grid gap-4", !compact && "sm:grid-cols-2")}>
        <Field label="Name" error={errors.name?.message}>
          <input className={inputClass} placeholder="Full name" {...register("name")} />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input
            type="email"
            className={inputClass}
            placeholder="you@email.com"
            {...register("email")}
          />
        </Field>
        <Field label="Phone" error={errors.phone?.message}>
          <input className={inputClass} placeholder="+974 …" {...register("phone")} />
        </Field>
        <Field label="Preferred viewing date" error={errors.date?.message}>
          <input type="date" className={inputClass} {...register("date")} />
        </Field>
      </div>

      <Field label="Message" error={errors.message?.message}>
        <textarea
          rows={4}
          className="w-full border border-border bg-background p-4 text-sm outline-none transition-colors focus:border-foreground"
          placeholder="Tell us what you are looking for"
          {...register("message")}
        />
      </Field>

      {submitError && (
        <p role="alert" className="text-sm text-destructive">
          {submitError}
        </p>
      )}

      <ActionButton type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Sending…" : "Submit enquiry"}
      </ActionButton>
      <p className="text-xs leading-relaxed text-muted-foreground">
        We reply the same working day, Sunday to Thursday.
      </p>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="meta-label">{label}</span>
      <span className="mt-2 block">{children}</span>
      {error && <span className="mt-1.5 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
