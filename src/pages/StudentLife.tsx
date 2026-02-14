import { Trophy, Music, Users, Camera } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const sports = ["Soccer", "Netball", "Basketball", "Athletics", "Volleyball", "Cricket"];
const clubs = ["Debate Society", "Science Club", "Mathematics Club", "Environmental Club", "Drama Club", "Chess Club"];
const cultural = ["Traditional Dance", "Choir", "Poetry & Spoken Word", "Art Exhibition"];

const StudentLife = () => (
  <main>
    <section className="bg-primary py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Student Life</h1>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto">
          Beyond the classroom, our learners thrive in sports, culture, and leadership.
        </p>
      </div>
    </section>

    {/* Sports */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading title="Sports Programs" subtitle="Competitive and recreational sports that build character." />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {sports.map((s) => (
            <div key={s} className="bg-card rounded-xl p-4 text-center shadow-sm border border-border hover:shadow-md transition-shadow">
              <Trophy className="h-6 w-6 text-secondary mx-auto mb-2" />
              <p className="text-sm font-medium text-foreground">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Cultural */}
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <SectionHeading title="Cultural Activities" subtitle="Celebrating heritage and creativity." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {cultural.map((c) => (
            <div key={c} className="bg-card rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <Music className="h-6 w-6 text-secondary mx-auto mb-3" />
              <p className="font-medium text-foreground">{c}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Clubs */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading title="Clubs & Societies" subtitle="Join a club and develop your passions outside the classroom." />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {clubs.map((c) => (
            <div key={c} className="flex items-center gap-3 bg-card rounded-xl p-4 shadow-sm border border-border">
              <Users className="h-5 w-5 text-secondary shrink-0" />
              <span className="text-sm font-medium text-foreground">{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Gallery Placeholder */}
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <SectionHeading title="School Events Gallery" subtitle="A glimpse into life at Lubombo Central High." light />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-square rounded-xl bg-navy-light/50 flex items-center justify-center border border-primary-foreground/10">
              <Camera className="h-8 w-8 text-primary-foreground/30" />
            </div>
          ))}
        </div>
        <p className="text-primary-foreground/50 text-sm mt-6">Gallery photos coming soon</p>
      </div>
    </section>
  </main>
);

export default StudentLife;
