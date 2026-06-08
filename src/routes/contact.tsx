import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { SITE, DIVISIONS } from "@/lib/site";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — DNS Business Group" },
      { name: "description", content: "Get in touch with DNS Business Group. Contact us for transportation, outdoor, manufacturing, or travel enquiries." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    division: "General Enquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create the email body
    const subject = encodeURIComponent(`Enquiry: ${formData.division}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nDivision: ${formData.division}\n\nMessage:\n${formData.message}`
    );

    // Open email client
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  };

  return (
    <PageShell>
      {/* Hero */}
      <section className="bg-[var(--brand-ink)] text-white py-20">
        <div className="container-prose text-center">
          <h1 className="font-display text-4xl font-bold sm:text-5xl">Get in Touch</h1>
          <p className="mt-4 max-w-2xl mx-auto text-white/80 text-lg">
            Have a question or need a quote? We're here to help across all our divisions.
          </p>
        </div>
      </section>

      <section className="container-prose py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="font-display text-2xl font-bold">Contact Information</h2>
            
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-[var(--brand-green)]/10 flex items-center justify-center text-[var(--brand-green)]">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <a href={SITE.phoneHref} className="text-muted-foreground hover:text-[var(--brand-green)]">
                    {SITE.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-[var(--brand-green)]/10 flex items-center justify-center text-[var(--brand-green)]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold">Email</h3>
                  <a href={SITE.emailHref} className="text-muted-foreground hover:text-[var(--brand-green)]">
                    {SITE.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-[var(--brand-green)]/10 flex items-center justify-center text-[var(--brand-green)]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold">Location</h3>
                  <p className="text-muted-foreground">{SITE.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-[var(--brand-green)]/10 flex items-center justify-center text-[var(--brand-green)]">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold">Hours</h3>
                  <p className="text-muted-foreground">{SITE.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
            <h2 className="font-display text-2xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="block text-sm font-medium mb-1">Division / Department</label>
                <select
                  value={formData.division}
                  onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="General Enquiry">General Enquiry</option>
                  {/* Map over divisions from site.ts - this ensures Eatery is removed if you update site.ts */}
                  {DIVISIONS.map((div) => (
                    <option key={div.slug} value={div.name}>
                      {div.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                </div>
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
                <label className="block text-sm font-medium mb-1">Message *</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand-green)] px-4 py-3 text-sm font-bold text-white hover:bg-[var(--brand-green-deep)] transition-colors"
              >
                <Send className="h-4 w-4" /> Send Enquiry
              </button>
            </form>
          </div>

        </div>
      </section>
    </PageShell>
  );
}