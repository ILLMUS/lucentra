import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="h-7 w-7 text-secondary" />
            <span className="text-lg font-bold">Lubombo Central High</span>
          </div>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Empowering future leaders through academic excellence, discipline, and community engagement in the heart of Lubombo Region.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 text-secondary">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            {[["About Us", "/about"], ["Academics", "/academics"], ["Admissions", "/admissions"], ["Student Life", "/student-life"], ["Contact", "/contact"]].map(([label, path]) => (
              <li key={path}>
                <Link to={path} className="hover:text-secondary transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4 text-secondary">Contact Us</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-secondary shrink-0" />
              Siteki, Lubombo Region, Eswatini
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-secondary shrink-0" />
              +268 2343 XXXX
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-secondary shrink-0" />
              info@lubombocentral.ac.sz
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-semibold mb-4 text-secondary">School Hours</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li>Monday – Friday: 7:30 AM – 4:00 PM</li>
            <li>Saturday: 8:00 AM – 12:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-light mt-10 pt-6 text-center text-sm text-primary-foreground/50">
        © {new Date().getFullYear()} Lubombo Central High School. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
