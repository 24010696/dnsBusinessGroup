import { useState } from "react";
import { SITE } from "@/lib/site";
import { Phone, Send } from "lucide-react";

interface QuoteFormProps {
  division: string;
}

export function QuoteForm({ division }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build WhatsApp message
    const text = `Hi DNS ${division},

I'd like to request a quote.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}

Thank you!`;

    // Encode and redirect to WhatsApp
    const encoded = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/27695371288?text=${encoded}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");

    // Optional: clear form after sending
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
      <h3 className="font-display text-xl font-bold mb-2">Request a Quote</h3>
      <p className="text-sm text-muted-foreground mb-6">
        Fill out the form and we'll respond instantly on WhatsApp.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Full Name *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Phone Number *</label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Message *</label>
          <textarea
            required
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand-green)] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[var(--brand-green-deep)] transition-colors"
        >
          <Phone className="h-4 w-4" /> Send via WhatsApp
        </button>

        <p className="text-xs text-muted-foreground text-center">
          You'll be redirected to WhatsApp to complete the message.
        </p>
      </form>
    </div>
  );
}
