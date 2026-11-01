"use client";

import {
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Loader2,
} from "lucide-react";

import { Button } from "@/components/ui/Button";
import { serviceLinks } from "@/lib/services";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: 1,
    label: "Client info",
    title: "Who are we speaking with?",
    description:
      "A few details so we know who to follow up with and how to reach you.",
  },
  {
    number: 2,
    label: "Project info",
    title: "Tell us about the project.",
    description:
      "Location, service and approximate scale help us route your enquiry to the right team.",
  },
  {
    number: 3,
    label: "Project details",
    title: "Anything else we should know?",
    description:
      "A short description of the site and your expectations will help us prepare a useful response.",
  },
] as const;

const provinces = [
  "Bulawayo",
  "Harare",
  "Manicaland",
  "Mashonaland Central",
  "Mashonaland East",
  "Mashonaland West",
  "Masvingo",
  "Matabeleland North",
  "Matabeleland South",
  "Midlands",
];

const serviceOptions = [
  ...serviceLinks.map((service) => service.title),
  "Equipment Hire",
  "Other / Not sure",
];

type FormState = {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  province: string;
  town: string;
  serviceRequired: string;
  projectSize: string;
  commencementDate: string;
  description: string;
  additionalRequirements: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  fullName: "",
  companyName: "",
  phone: "",
  email: "",
  province: "",
  town: "",
  serviceRequired: "",
  projectSize: "",
  commencementDate: "",
  description: "",
  additionalRequirements: "",
};

const inputClasses =
  "h-12 w-full border border-brand-line bg-white px-4 text-sm text-brand-navy outline-none transition-[border-color,box-shadow] placeholder:text-brand-slate/40 focus:border-brand-red focus:ring-2 focus:ring-brand-red/10";

const textareaClasses =
  "w-full resize-none border border-brand-line bg-white px-4 py-3 text-sm leading-6 text-brand-navy outline-none transition-[border-color,box-shadow] placeholder:text-brand-slate/40 focus:border-brand-red focus:ring-2 focus:ring-brand-red/10";

type FieldProps = {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  optional?: boolean;
  className?: string;
  children: ReactNode;
};

function Field({
  label,
  htmlFor,
  required,
  error,
  optional,
  className,
  children,
}: FieldProps) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="mb-2 flex items-center gap-1.5 text-[0.58rem] font-bold uppercase tracking-[0.16em] text-brand-navy"
      >
        {label}
        {required ? (
          <span aria-hidden="true" className="text-brand-red">
            *
          </span>
        ) : null}
        {optional ? (
          <span className="font-normal normal-case tracking-normal text-brand-slate/60">
            (optional)
          </span>
        ) : null}
      </label>
      {children}
      {error ? (
        <p
          id={`${htmlFor}-error`}
          role="alert"
          className="mt-1.5 text-[0.65rem] leading-5 text-brand-red"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}

function validateStep(step: number, form: FormState): FormErrors {
  const errors: FormErrors = {};

  if (step === 1) {
    if (form.fullName.trim().length < 2) {
      errors.fullName = "Please provide your full name.";
    }
    if (form.phone.trim().length < 7) {
      errors.phone = "Please provide a valid phone number.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errors.email = "Please provide a valid email address.";
    }
  }

  if (step === 2) {
    if (!form.province) errors.province = "Please select a province.";
    if (!form.town.trim()) errors.town = "Please provide a town or location.";
    if (!form.serviceRequired) {
      errors.serviceRequired = "Please select a service.";
    }
    if (!form.projectSize.trim()) {
      errors.projectSize = "Please provide an approximate project size.";
    }
    if (!form.commencementDate) {
      errors.commencementDate = "Please provide a commencement date.";
    }
  }

  if (step === 3 && form.description.trim().length < 10) {
    errors.description = "Please describe your project in a little more detail.";
  }

  return errors;
}

export function QuoteWizard() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{ reference: string } | null>(null);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      if (!current[name as keyof FormState]) return current;
      const next = { ...current };
      delete next[name as keyof FormState];
      return next;
    });
    setSubmitError("");
  };

  const handleNext = () => {
    const nextErrors = validateStep(step, form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setStep((current) => Math.min(current + 1, 3));
    }
  };

  const handleBack = () => {
    setErrors({});
    setSubmitError("");
    setStep((current) => Math.max(current - 1, 1));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (step < 3) {
      handleNext();
      return;
    }

    const allErrors = {
      ...validateStep(1, form),
      ...validateStep(2, form),
      ...validateStep(3, form),
    };

    if (Object.keys(allErrors).length > 0) {
      setErrors(allErrors);
      if (Object.keys(validateStep(1, form)).length > 0) setStep(1);
      else if (Object.keys(validateStep(2, form)).length > 0) setStep(2);
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const payload = (await response.json()) as {
        reference?: string;
        error?: string;
        fieldErrors?: FormErrors;
      };

      if (!response.ok) {
        setSubmitError(
          payload.error ??
            "We could not submit your enquiry. Please try again.",
        );
        if (payload.fieldErrors) setErrors(payload.fieldErrors);
        return;
      }

      if (!payload.reference) {
        throw new Error("No reference number returned.");
      }

      setResult({ reference: payload.reference });
    } catch {
      setSubmitError(
        "We could not submit your enquiry. Please check your connection and try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setForm(initialState);
    setErrors({});
    setSubmitError("");
    setStep(1);
    setResult(null);
  };

  if (result) {
    const firstName = form.fullName.trim().split(/\s+/)[0] || "there";

    return (
      <div
        id="quote-wizard"
        role="status"
        aria-live="polite"
        className="overflow-hidden border border-brand-line bg-white shadow-card"
      >
        <div className="h-[3px] bg-brand-red" />
        <div className="p-7 text-center sm:p-10 lg:p-12">
          <span className="mx-auto grid size-16 place-items-center rounded-full bg-brand-red/10 text-brand-red">
            <CheckCircle2
              aria-hidden="true"
              className="size-8"
              strokeWidth={1.5}
            />
          </span>
          <p className="mt-6 text-[0.58rem] font-bold uppercase tracking-[0.18em] text-brand-red">
            Enquiry received
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-[-0.04em] text-brand-navy sm:text-4xl">
            Thank you, {firstName}.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-brand-slate">
            Your quotation request has been logged. Keep the reference number
            below — our team will use it when reviewing your project.
          </p>

          <div className="mx-auto mt-8 max-w-md border border-brand-line bg-brand-light p-6">
            <p className="text-[0.56rem] font-bold uppercase tracking-[0.16em] text-brand-slate">
              Your reference number
            </p>
            <p className="mt-3 font-display text-3xl font-extrabold tracking-[-0.03em] text-brand-navy sm:text-4xl">
              {result.reference}
            </p>
          </div>

          <p className="mx-auto mt-6 max-w-md text-sm leading-6 text-brand-slate">
            We will review the details and contact you on{" "}
            <span className="font-semibold text-brand-navy">{form.phone}</span>{" "}
            or{" "}
            <span className="font-semibold text-brand-navy">{form.email}</span>.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/" withArrow>
              Return to Home
            </Button>
            <button
              type="button"
              onClick={resetForm}
              className="inline-flex h-12 items-center justify-center border border-brand-line px-6 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-brand-navy transition-colors hover:border-brand-navy"
            >
              Submit another enquiry
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentStep = steps[step - 1];

  return (
    <div
      id="quote-wizard"
      className="overflow-hidden border border-brand-line bg-white shadow-card"
    >
      <div className="border-b border-brand-line p-6 sm:p-8">
        <div className="flex items-center justify-between gap-4">
          <p className="text-[0.58rem] font-bold uppercase tracking-[0.18em] text-brand-slate">
            Smart quotation
          </p>
          <p className="text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-brand-slate">
            Step {step} of 3
          </p>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-4">
          {steps.map((item) => {
            const complete = step > item.number;
            const current = step === item.number;

            return (
              <div key={item.number}>
                <span
                  className={cn(
                    "block h-[3px] w-full transition-colors duration-300",
                    step >= item.number ? "bg-brand-red" : "bg-brand-line",
                  )}
                />
                <div className="mt-3 flex items-center gap-2">
                  <span
                    className={cn(
                      "grid size-6 shrink-0 place-items-center rounded-full border text-[0.55rem] font-bold transition-colors",
                      complete &&
                        "border-brand-red bg-brand-red text-white",
                      current &&
                        "border-brand-red bg-white text-brand-red",
                      !complete &&
                        !current &&
                        "border-brand-line bg-white text-brand-slate/50",
                    )}
                  >
                    {complete ? (
                      <Check
                        aria-hidden="true"
                        className="size-3"
                        strokeWidth={2.5}
                      />
                    ) : (
                      item.number
                    )}
                  </span>
                  <span
                    className={cn(
                      "hidden text-[0.55rem] font-bold uppercase tracking-[0.1em] sm:block",
                      current ? "text-brand-navy" : "text-brand-slate/55",
                    )}
                  >
                    {item.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className="p-6 sm:p-8">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <div>
                <p className="text-[0.58rem] font-bold uppercase tracking-[0.16em] text-brand-red">
                  Step {String(step).padStart(2, "0")}
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold tracking-[-0.035em] text-brand-navy sm:text-3xl">
                  {currentStep.title}
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-6 text-brand-slate">
                  {currentStep.description}
                </p>
              </div>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {step === 1 ? (
                  <>
                    <Field
                      label="Full name"
                      htmlFor="quote-fullName"
                      required
                      error={errors.fullName}
                    >
                      <input
                        id="quote-fullName"
                        name="fullName"
                        type="text"
                        autoComplete="name"
                        required
                        value={form.fullName}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.fullName)}
                        aria-describedby={
                          errors.fullName ? "quote-fullName-error" : undefined
                        }
                        placeholder="Your full name"
                        className={cn(
                          inputClasses,
                          errors.fullName && "border-brand-red",
                        )}
                      />
                    </Field>

                    <Field
                      label="Company name"
                      htmlFor="quote-companyName"
                      optional
                    >
                      <input
                        id="quote-companyName"
                        name="companyName"
                        type="text"
                        autoComplete="organization"
                        value={form.companyName}
                        onChange={handleChange}
                        placeholder="Company or organisation"
                        className={inputClasses}
                      />
                    </Field>

                    <Field
                      label="Phone number"
                      htmlFor="quote-phone"
                      required
                      error={errors.phone}
                    >
                      <input
                        id="quote-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={
                          errors.phone ? "quote-phone-error" : undefined
                        }
                        placeholder="+263 ..."
                        className={cn(
                          inputClasses,
                          errors.phone && "border-brand-red",
                        )}
                      />
                    </Field>

                    <Field
                      label="Email address"
                      htmlFor="quote-email"
                      required
                      error={errors.email}
                    >
                      <input
                        id="quote-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={
                          errors.email ? "quote-email-error" : undefined
                        }
                        placeholder="you@example.com"
                        className={cn(
                          inputClasses,
                          errors.email && "border-brand-red",
                        )}
                      />
                    </Field>
                  </>
                ) : null}

                {step === 2 ? (
                  <>
                    <Field
                      label="Province"
                      htmlFor="quote-province"
                      required
                      error={errors.province}
                    >
                      <select
                        id="quote-province"
                        name="province"
                        required
                        value={form.province}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.province)}
                        aria-describedby={
                          errors.province ? "quote-province-error" : undefined
                        }
                        className={cn(
                          inputClasses,
                          !form.province && "text-brand-slate/60",
                          errors.province && "border-brand-red",
                        )}
                      >
                        <option value="">Select province</option>
                        {provinces.map((province) => (
                          <option key={province} value={province}>
                            {province}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <Field
                      label="Town / location"
                      htmlFor="quote-town"
                      required
                      error={errors.town}
                    >
                      <input
                        id="quote-town"
                        name="town"
                        type="text"
                        autoComplete="address-level2"
                        required
                        value={form.town}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.town)}
                        aria-describedby={
                          errors.town ? "quote-town-error" : undefined
                        }
                        placeholder="Town, suburb or site name"
                        className={cn(
                          inputClasses,
                          errors.town && "border-brand-red",
                        )}
                      />
                    </Field>

                    <Field
                      label="Service required"
                      htmlFor="quote-serviceRequired"
                      required
                      error={errors.serviceRequired}
                      className="sm:col-span-2"
                    >
                      <select
                        id="quote-serviceRequired"
                        name="serviceRequired"
                        required
                        value={form.serviceRequired}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.serviceRequired)}
                        aria-describedby={
                          errors.serviceRequired
                            ? "quote-serviceRequired-error"
                            : undefined
                        }
                        className={cn(
                          inputClasses,
                          !form.serviceRequired && "text-brand-slate/60",
                          errors.serviceRequired && "border-brand-red",
                        )}
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <Field
                      label="Project size"
                      htmlFor="quote-projectSize"
                      required
                      error={errors.projectSize}
                    >
                      <input
                        id="quote-projectSize"
                        name="projectSize"
                        type="text"
                        required
                        value={form.projectSize}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.projectSize)}
                        aria-describedby={
                          errors.projectSize
                            ? "quote-projectSize-error"
                            : undefined
                        }
                        placeholder="e.g. 25 ha, 200 stands or 40 km"
                        className={cn(
                          inputClasses,
                          errors.projectSize && "border-brand-red",
                        )}
                      />
                    </Field>

                    <Field
                      label="Expected commencement date"
                      htmlFor="quote-commencementDate"
                      required
                      error={errors.commencementDate}
                    >
                      <input
                        id="quote-commencementDate"
                        name="commencementDate"
                        type="date"
                        required
                        value={form.commencementDate}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.commencementDate)}
                        aria-describedby={
                          errors.commencementDate
                            ? "quote-commencementDate-error"
                            : undefined
                        }
                        className={cn(
                          inputClasses,
                          errors.commencementDate && "border-brand-red",
                        )}
                      />
                    </Field>
                  </>
                ) : null}

                {step === 3 ? (
                  <>
                    <Field
                      label="Project description"
                      htmlFor="quote-description"
                      required
                      error={errors.description}
                      className="sm:col-span-2"
                    >
                      <textarea
                        id="quote-description"
                        name="description"
                        required
                        rows={6}
                        value={form.description}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.description)}
                        aria-describedby={
                          errors.description
                            ? "quote-description-error"
                            : undefined
                        }
                        placeholder="What are you planning? Include the site, intended use and any known constraints."
                        className={cn(
                          textareaClasses,
                          errors.description && "border-brand-red",
                        )}
                      />
                    </Field>

                    <Field
                      label="Additional requirements"
                      htmlFor="quote-additionalRequirements"
                      optional
                      className="sm:col-span-2"
                    >
                      <textarea
                        id="quote-additionalRequirements"
                        name="additionalRequirements"
                        rows={4}
                        value={form.additionalRequirements}
                        onChange={handleChange}
                        placeholder="Deadlines, drawings, approvals or anything else we should know."
                        className={textareaClasses}
                      />
                    </Field>

                    <div className="border-t border-brand-line pt-5 sm:col-span-2">
                      <p className="text-xs leading-6 text-brand-slate">
                        By submitting this enquiry, you agree that Rodger
                        Surveying may contact you about your project. Your
                        details are kept confidential.
                      </p>
                    </div>
                  </>
                ) : null}
              </div>
            </motion.div>
          </AnimatePresence>

          {submitError ? (
            <div
              role="alert"
              className="mt-6 border-l-2 border-brand-red bg-brand-light px-5 py-4 text-sm leading-6 text-brand-red"
            >
              {submitError}
            </div>
          ) : null}
        </div>

        <div className="flex flex-col-reverse gap-3 border-t border-brand-line bg-brand-light p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          {step > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex h-10 items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-brand-slate transition-colors hover:text-brand-navy"
            >
              <ArrowLeft
                aria-hidden="true"
                className="size-3.5"
                strokeWidth={2}
              />
              Back
            </button>
          ) : (
            <p className="text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-brand-slate/60">
              Your details are kept confidential
            </p>
          )}

          {step < 3 ? (
            <Button
              type="button"
              onClick={handleNext}
              className="w-full justify-center sm:w-auto"
            >
              Continue
              <ArrowRight
                aria-hidden="true"
                className="size-4"
                strokeWidth={1.75}
              />
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full justify-center sm:w-auto"
            >
              {isSubmitting ? (
                <>
                  <Loader2
                    aria-hidden="true"
                    className="size-4 animate-spin"
                    strokeWidth={1.75}
                  />
                  Submitting
                </>
              ) : (
                <>
                  Submit enquiry
                  <ArrowRight
                    aria-hidden="true"
                    className="size-4"
                    strokeWidth={1.75}
                  />
                </>
              )}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
