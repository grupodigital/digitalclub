"use client";

import { useMemo, useState } from "react";
import Header from "./Header";
import ApplicationForm from "./ApplicationForm";
import SuccessScreen from "./SuccessScreen";
import Footer from "./Footer";
import { FIELDS, INITIAL_VALUES, type FormValues } from "@/lib/form/config";

const REQUIRED = FIELDS.filter((f) => f.required);

export default function FormExperience() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [submitted, setSubmitted] = useState<FormValues | null>(null);

  const progress = useMemo(() => {
    if (submitted) return 1;
    const done = REQUIRED.filter(
      (f) => (values[f.name] ?? "").trim().length > 0
    ).length;
    return REQUIRED.length ? done / REQUIRED.length : 0;
  }, [values, submitted]);

  const handleSuccess = (data: FormValues) => {
    setSubmitted(data);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex min-h-dvh flex-col bg-dc-bg">
      <Header progress={progress} />

      <main className="flex-1">
        {submitted ? (
          <SuccessScreen name={submitted.fullName} />
        ) : (
          <ApplicationForm
            values={values}
            setValues={setValues}
            onSuccess={handleSuccess}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}
