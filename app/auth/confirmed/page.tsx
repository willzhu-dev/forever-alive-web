import type { Metadata } from "next";
import ConfirmationResult from "./ConfirmationResult";

export const metadata: Metadata = {
  title: "Email Confirmed | Forever Alive",
  description: "Your Forever Alive email confirmation result.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function EmailConfirmedPage() {
  return <ConfirmationResult />;
}
