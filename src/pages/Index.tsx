import { Link } from "react-router-dom";
import { BookOpen, FlaskConical, Trophy, Users, CalendarDays, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-school.jpg";
import SectionHeading from "@/components/SectionHeading";

const features = [
  { icon: BookOpen, title: "Academic Excellence", desc: "Rigorous curriculum preparing learners for university and beyond." },
  { icon: FlaskConical, title: "Science & Technology", desc: "Hands-on learning in modern science labs and computer facilities." },
  { icon: Trophy, title: "Sports & Activities", desc: "Competitive sports programs fostering teamwork and discipline." },
  { icon: Users, title: "Community Engagement", desc: "Building responsible citizens through service and leadership." },
];

const news = [
  { date: "Jan 2026", title: "Term 1 Opening Date", desc: "School opens on 20th January 2026 for all forms." },
  { date: "Feb 2026", title: "Parent Meeting", desc: "Annual parent-teacher meeting scheduled for 15th February." },
  { date: "Mar 2026", title: "Mid-Year Examinations", desc: "Examination timetable to be released in early March." },
];

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Lubombo Central High School campus" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-primary/85 to-primary/60" />
        </div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-2xl animate-fade-in">
            <p className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4">Lubombo Central High School · Siteki, Eswatini</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
              Empowering Future Leaders
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              A centre of academic excellence in the Lubombo Region, building disciplined and innovative learners ready for tertiary education and beyond.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-secondary text-secondary-foreground font-semibold hover:bg-sky-light transition-colors shadow-lg"
              >
                Apply Now <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors"
              >
                Contact School
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading title="About Our School" subtitle="Serving the Lubombo community with pride and dedication for over two decades." />
            <p className="text-muted-foreground leading-relaxed mb-6">
              Lubombo Central High School is a co-educational institution committed to nurturing the intellectual, moral, and social development of every learner. Located in the vibrant town of Siteki, our school combines rigorous academics with character-building programs to produce well-rounded graduates.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-secondary font-semibold hover:underline">
              Learn More About Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <SectionHeading title="Why Choose Us" subtitle="We provide a holistic educational experience that equips learners for success." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="bg-card rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <f.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading title="Latest News" subtitle="Stay up to date with announcements and events." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {news.map((n) => (
              <div key={n.title} className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 text-secondary text-sm font-medium mb-3">
                  <CalendarDays className="h-4 w-4" />
                  {n.date}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{n.title}</h3>
                <p className="text-sm text-muted-foreground">{n.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Give Your Child the Best Start
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
            Join a community of dedicated learners, passionate educators, and supportive parents at Lubombo Central High School.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/admissions"
              className="px-7 py-3.5 rounded-lg bg-secondary text-secondary-foreground font-semibold hover:bg-sky-light transition-colors shadow-lg"
            >
              Start Application
            </Link>
            <Link
              to="/contact"
              className="px-7 py-3.5 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
