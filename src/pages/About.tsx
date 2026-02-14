import { Target, Eye, Heart, Shield, Star, UserCheck } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const values = [
  { icon: Shield, label: "Integrity", desc: "Upholding honesty and moral principles in every action." },
  { icon: Target, label: "Discipline", desc: "Cultivating self-control and dedication to personal growth." },
  { icon: Star, label: "Excellence", desc: "Striving for the highest standards in academics and character." },
  { icon: UserCheck, label: "Leadership", desc: "Developing confident leaders who serve their communities." },
];

const staff = [
  { name: "Mr. S. Dlamini", role: "Principal" },
  { name: "Mrs. T. Nkambule", role: "Deputy Principal" },
  { name: "Mr. B. Maseko", role: "Head of Sciences" },
  { name: "Mrs. N. Simelane", role: "Head of Commerce" },
  { name: "Mr. L. Mamba", role: "Head of Languages" },
  { name: "Mrs. P. Zwane", role: "Head of Humanities" },
];

const About = () => (
  <main>
    {/* Header */}
    <section className="bg-primary py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">About Our School</h1>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto">
          Discover the story, mission, and people behind Lubombo Central High School.
        </p>
      </div>
    </section>

    {/* History */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <SectionHeading title="Our History" subtitle="A legacy of excellence in the heart of Lubombo." />
        <div className="prose prose-lg text-muted-foreground mx-auto space-y-4">
          <p>
            Lubombo Central High School was established to serve the growing educational needs of the Siteki community and surrounding areas. Over the years, the school has earned a reputation for academic rigour, structured discipline, and the production of well-rounded graduates.
          </p>
          <p>
            From humble beginnings, we have grown into one of the most respected institutions in the Lubombo Region, consistently producing learners who excel in national examinations and go on to tertiary education both locally and internationally.
          </p>
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 max-w-4xl">
        <div className="bg-card rounded-xl p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Target className="h-6 w-6 text-secondary" />
            <h3 className="text-xl font-bold text-foreground">Our Mission</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            To provide quality, inclusive education that develops the intellectual capacity, moral character, and leadership skills of every learner, preparing them for meaningful contributions to society.
          </p>
        </div>
        <div className="bg-card rounded-xl p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Eye className="h-6 w-6 text-secondary" />
            <h3 className="text-xl font-bold text-foreground">Our Vision</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            To be the leading centre of academic and moral excellence in Eswatini, recognised for producing disciplined, innovative, and globally competitive graduates.
          </p>
        </div>
      </div>
    </section>

    {/* Principal's Message */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <SectionHeading title="Principal's Message" />
        <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
              <Heart className="h-7 w-7 text-secondary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Mr. S. Dlamini</h3>
              <p className="text-sm text-muted-foreground">Principal</p>
            </div>
          </div>
          <blockquote className="text-muted-foreground leading-relaxed italic border-l-4 border-secondary pl-4">
            "At Lubombo Central High School, we believe that every learner has the potential to achieve greatness. Our dedicated team of educators works tirelessly to create an environment where academic achievement, personal growth, and community service are equally valued. We invite you to join our school family and experience the difference that a commitment to excellence can make."
          </blockquote>
        </div>
      </div>
    </section>

    {/* Core Values */}
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <SectionHeading title="Core Values" subtitle="The principles that guide everything we do." light />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {values.map((v) => (
            <div key={v.label} className="bg-navy-light/50 backdrop-blur rounded-xl p-6 text-center border border-primary-foreground/10">
              <v.icon className="h-8 w-8 text-secondary mx-auto mb-3" />
              <h3 className="font-semibold text-primary-foreground mb-2">{v.label}</h3>
              <p className="text-sm text-primary-foreground/60">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Staff */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading title="Our Leadership Team" subtitle="Dedicated professionals committed to learner success." />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {staff.map((s) => (
            <div key={s.name} className="text-center">
              <div className="w-20 h-20 rounded-full bg-accent mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl font-bold text-secondary">{s.name.split(" ").pop()?.[0]}</span>
              </div>
              <h4 className="font-medium text-sm text-foreground">{s.name}</h4>
              <p className="text-xs text-muted-foreground">{s.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default About;
