"use client";

import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";

import { Button } from "@/components/ui/Button";

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const fields: Array<{
  name: keyof FormState;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
}> = [
  {
    name: "name",
    label: "Full name",
    type: "text",
    placeholder: "Your name",
    required: true,
  },
  {
    name: "email",
    label: "Email address",
    type: "email",
    placeholder: "you@example.com",
    required: true,
  },
  {
    name: "phone",
    label: "Phone number",
    type: "tel",
    placeholder: "+263 ...",
    required: true,
  },
  {
    name: "subject",
    label: "Subject",
    type: "text",
    placeholder: "e.g. Land survey enquiry",
    required: true,
  },
];

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const subject = new URLSearchParams(window.location.search).get("subject");
    if (subject) {
      setForm((current) => ({ ...current, subject }));
    }
  }, []);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setSubmitted(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = [
      "New project enquiry",
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Subject: ${form.subject}`,
      "",
      form.message,
    ].join("\n");

    window.open(
      `https://wa.me/263774769799?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8">
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field.name} className={field.name === "subject" ? "sm:col-span-2" : undefined}>
            <label
              htmlFor={`contact-${field.name}`}
              className="mb-2 block text-[0.58rem] font-bold uppercase tracking-[0.16em] text-brand-navy"
            >
              {field.label}
            </label>
            <input
              id={`contact-${field.name}`}
              name={field.name}
              type={field.type}
              required={field.required}
              value={form[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              className="h-12 w-full border border-brand-line bg-white px-4 text-sm text-brand-navy outline-none transition-[border-color,box-shadow] placeholder:text-brand-slate/40 focus:border-brand-red focus:ring-2 focus:ring-brand-red/10"
            />
          </div>
        ))}

        <div className="sm:col-span-2">
          <label
            htmlFor="contact-message"
            className="mb-2 block text-[0.58rem] font-bold uppercase tracking-[0.16em] text-brand-navy"
          >
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={6}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about the site, scope and timing of your project."
            className="w-full resize-none border border-brand-line bg-white px-4 py-3 text-sm leading-6 text-brand-navy outline-none transition-[border-color,box-shadow] placeholder:text-brand-slate/40 focus:border-brand-red focus:ring-2 focus:ring-brand-red/10"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xs text-[0.62rem] leading-5 text-brand-slate">
          Submitting opens WhatsApp with your details so our team can respond
          directly.
        </p>
        <Button type="submit" withArrow className="w-full justify-center sm:w-auto">
          Send enquiry
        </Button>
      </div>

      {submitted ? (
        <div
          role="status"
          aria-live="polite"
          className="mt-6 border-l-2 border-brand-red bg-brand-light px-5 py-4 text-sm leading-6 text-brand-navy"
        >
          WhatsApp has opened in a new tab with your enquiry. If it did not open,
          call us on{" "}
          <a
            href="tel:+263774769799"
            className="font-semibold text-brand-red underline underline-offset-2"
          >
            +263 774 769 799
          </a>
          .
        </div>
      ) : null}
    </form>
  );
}
