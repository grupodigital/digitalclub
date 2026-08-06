import type { Metadata } from "next";
import { Inter } from "next/font/google";
import FormMaster from "./FormMaster";
import "./form-master.css";

const inter = Inter({
  variable: "--font-fm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Formulário Master",
  description:
    "Formulário master do Digital Club — a base do acompanhamento de cada membro: perfil, empresa, objetivos, networking e expectativas.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function FormMasterPage() {
  return (
    <div className={`dc-form-master ${inter.variable}`}>
      <FormMaster />
    </div>
  );
}
