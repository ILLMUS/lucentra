import { BookOpen, Calculator, Globe, Microscope, Briefcase, TrendingUp, Download } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const departments = [
  { icon: Microscope, name: "Sciences", subjects: ["Biology", "Chemistry", "Physics", "Agriculture"] },
  { icon: Calculator, name: "Mathematics", subjects: ["Mathematics", "Additional Mathematics"] },
  { icon: Briefcase, name: "Commerce", subjects: ["Accounting", "Business Studies", "Economics"] },
  { icon: Globe, name: "Languages", subjects: ["English", "SiSwati", "French"] },
  { icon: BookOpen, name: "Humanities", subjects: ["History", "Geography", "Religious Education"] },
];

const highlights = [
  { value: "85%", label: "Average Pass Rate" },
  { value: "40+", label: "University Placements per Year" },
  { value: "12", label: "Subject Offerings" },
  { value: "1:25", label: "Teacher to Student Ratio" },
];

const Academics = () => (
  <main>
    <section className="bg-primary py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Academics</h1>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto">
          A structured curriculum designed to unlock every learner's full potential.
        </p>
      </div>
    </section>

    {/* Performance Highlights */}
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {highlights.map((h) => (
            <div key={h.label} className="bg-card rounded-xl p-6 text-center shadow-sm">
              <p className="text-3xl font-bold text-secondary mb-1">{h.value}</p>
              <p className="text-sm text-muted-foreground">{h.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Departments */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading title="Subjects Offered" subtitle="Our comprehensive curriculum spans five core departments." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {departments.map((d) => (
            <div key={d.name} className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <d.icon className="h-5 w-5 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground">{d.name}</h3>
              </div>
              <ul className="space-y-1">
                {d.subjects.map((s) => (
                  <li key={s} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Exam Prep */}
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <SectionHeading title="Examination Preparation" subtitle="We take exam readiness seriously at every level." light />
        <div className="max-w-2xl mx-auto text-primary-foreground/70 space-y-4">
          <p>Our learners sit for the Eswatini General Certificate of Secondary Education (EGCSE) examinations. We offer structured revision programs, mock examinations, and individual academic support to ensure each student is fully prepared.</p>
        </div>
        <div className="mt-10">
          <TrendingUp className="h-10 w-10 text-secondary mx-auto mb-3" />
          <p className="text-primary-foreground/60 text-sm">Consistent improvement in pass rates year on year</p>
        </div>
      </div>
    </section>

    {/* Prospectus */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <SectionHeading title="School Prospectus" subtitle="Download our comprehensive school prospectus for detailed information." />
        <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-secondary text-secondary-foreground font-semibold hover:bg-sky-light transition-colors shadow-md">
          <Download className="h-5 w-5" />
          Download Prospectus (PDF)
        </button>
      </div>
    </section>
  </main>
);

export default Academics;
