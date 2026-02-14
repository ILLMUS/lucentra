import { useState } from "react";
import { CheckCircle, FileText, ClipboardList, CreditCard, Send } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const steps = [
  { icon: ClipboardList, title: "Step 1: Enquire", desc: "Contact the school or fill out the online enquiry form below." },
  { icon: FileText, title: "Step 2: Submit Documents", desc: "Provide certified copies of all required documents." },
  { icon: CheckCircle, title: "Step 3: Assessment", desc: "Learner undergoes an entrance assessment and interview." },
  { icon: CreditCard, title: "Step 4: Enrolment", desc: "Pay registration fee and receive admission confirmation." },
];

const requirements = [
  "Certified copy of birth certificate",
  "Latest school report (Form 3 or equivalent)",
  "Transfer letter from previous school",
  "Two passport-size photographs",
  "Parent/Guardian ID copy",
  "Medical report (if applicable)",
];

const Admissions = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your enquiry. We will get back to you soon!");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <main>
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Admissions</h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Begin your journey at Lubombo Central High School. We welcome applications from dedicated learners.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading title="Application Process" subtitle="Four simple steps to join our school community." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {steps.map((s, i) => (
              <div key={s.title} className="relative bg-card rounded-xl p-6 shadow-sm border border-border text-center">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <s.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements & Fees */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 max-w-4xl">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Required Documents</h3>
            <ul className="space-y-3">
              {requirements.map((r) => (
                <li key={r} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">Fee Overview</h3>
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex justify-between py-2 border-b border-border">
                  <span>Registration Fee</span><span className="font-medium text-foreground">E 500.00</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span>Tuition (per term)</span><span className="font-medium text-foreground">Contact School</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span>Examination Levy</span><span className="font-medium text-foreground">Contact School</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Development Fund</span><span className="font-medium text-foreground">Contact School</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4">* Fees are subject to annual review.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-xl">
          <SectionHeading title="Online Enquiry" subtitle="Have questions? Fill out this form and we'll respond promptly." />
          <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 shadow-sm border border-border space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Full Name</label>
              <input
                type="text"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:ring-2 focus:ring-ring focus:outline-none"
                placeholder="Parent/Guardian name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Email</label>
              <input
                type="email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:ring-2 focus:ring-ring focus:outline-none"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Phone</label>
              <input
                type="tel"
                maxLength={20}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:ring-2 focus:ring-ring focus:outline-none"
                placeholder="+268 7X XXX XXX"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Message</label>
              <textarea
                required
                maxLength={1000}
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:ring-2 focus:ring-ring focus:outline-none resize-none"
                placeholder="Your enquiry..."
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold hover:bg-sky-light transition-colors"
            >
              <Send className="h-4 w-4" /> Submit Enquiry
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Admissions;
