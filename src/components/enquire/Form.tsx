"use client";

import { useState } from "react";
import { site } from "@/data/site";

const services = [
  "Luxury bathrooms",
  "Plumbing services",
  "Heating services",
  "Not sure yet",
];

export function QuoteForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("_subject", "Stone Bathrooms — quote request");
    data.append("_captcha", "false");
    data.append("_template", "table");
    const file = data.get("attachment");
    if (file instanceof File && file.size === 0) data.delete("attachment");

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error("fail");
      setSent(true);
      form.reset();
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div className="border border-rule bg-paper px-6 py-12 md:px-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/45">Sent</p>
        <h2 className="font-display mt-4 text-5xl">Message received.</h2>
        <p className="mt-4 max-w-md text-ink/70">Fast, clear, and hassle free.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="border border-rule bg-paper px-5 py-8 md:px-10 md:py-10">
      <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink/45">
        Request a quote or book a call
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" required />
        <label className="block">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/45">Services required</span>
          <select
            name="service"
            required
            defaultValue=""
            className="mt-2 w-full border-b border-rule bg-transparent py-3 text-ink outline-none"
          >
            <option value="" disabled>Select</option>
            {services.map((s) => (
              <option key={s} value={s} className="bg-bg">{s}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="mt-6 block">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/45">Message</span>
        <textarea
          name="message"
          rows={5}
          required
          className="mt-2 w-full resize-y border-b border-rule bg-transparent py-3 text-ink outline-none placeholder:text-ink/30"
          placeholder="The room, the job, the timescale"
        />
      </label>
      <label className="mt-6 block">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/45">
          Upload plans or photographs
        </span>
        <input
          type="file"
          name="attachment"
          accept="image/*,.pdf"
          className="mt-3 block w-full text-sm text-ink/70 file:mr-4 file:border file:border-rule file:bg-transparent file:px-4 file:py-2 file:font-mono file:text-[10px] file:uppercase file:tracking-[0.18em] file:text-ink"
        />
      </label>
      <button type="submit" disabled={loading} className="btn btn-cream mt-8 disabled:opacity-60">
        <span>{loading ? "Sending" : "Submit"}</span>
      </button>
      {error && (
        <p className="mt-4 text-sm text-ink/70">
          Something went wrong. Email{" "}
          <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/45">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border-b border-rule bg-transparent py-3 text-ink outline-none"
      />
    </label>
  );
}
