"use client";

import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div
      id="form"
      className="w-full max-w-4xl mt-24 mb-16 py-16 px-6 rounded-2xl border border-[#ffffff15] bg-[#150a1f]/60 backdrop-blur-md shadow-[0_0_50px_rgba(156,85,255,0.2)]"
    >
      <h2 className="text-4xl md:text-6xl font-title mb-10">
        Scopri il Futuro della SEO:
        <br />
        Entra subito!
      </h2>

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setIsLoading(true);
          const formData = new FormData(e.target as HTMLFormElement);
          const email = formData.get("email") as string;

          try {
            const response = await fetch("/api/send", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ email }),
            });

            if (!response.ok) {
              throw new Error("Failed to send email");
            }

            // Clear the form
            (e.target as HTMLFormElement).reset();
            // Show success toast
            toast.success("Grazie per esserti iscritto! Ti invieremo presto una email di conferma.");
          } catch (error) {
            console.error("Error:", error);
            toast.error("Si è verificato un errore. Riprova più tardi.");
          } finally {
            setIsLoading(false);
          }
        }}
        className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
      >
        <input
          type="email"
          name="email"
          placeholder="La tua mail"
          required
          disabled={isLoading}
          className="flex-1 bg-[#2a193c]/70 border border-[#ffffff20] rounded-lg px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#9c55ff]/50 disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-white text-[#2a193c] px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors font-title disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[120px]"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Invio...
            </>
          ) : (
            "Prova ora"
          )}
        </button>
      </form>

      <p className="text-white/60 mt-6 text-sm">
        Niente spam, solo aggiornamenti esclusivi.
      </p>
    </div>
  );
};

export default ContactSection;
