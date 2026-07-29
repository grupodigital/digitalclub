import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import FormExperience from "@/components/form/FormExperience";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aplicação",
  description:
    "Envie sua aplicação para o Digital Club — comunidade exclusiva para CEOs, donos e fundadores que movem o Norte do Brasil. Ingresso por curadoria.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function FormPage() {
  return (
    <div className={`dc-form ${dmSans.variable} ${instrumentSerif.variable}`}>
      <FormExperience />
    </div>
  );
}
