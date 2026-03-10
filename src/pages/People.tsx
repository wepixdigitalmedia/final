import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { motion } from "framer-motion";

const team = [
  { name: "Abdul Navas", role: "Co-Founder & CEO" },
  { name: "Santhosh", role: "Co-Founder & COO" },
  { name: "Priya Sharma", role: "Head of Content" },
  { name: "Karthik R.", role: "Performance Marketing Lead" },
  { name: "Meera Nair", role: "Creative Director" },
  { name: "Arjun Patel", role: "AI & Automation Lead" },
  { name: "Divya Krishnan", role: "Fashion Strategy Lead" },
  { name: "Rahul Menon", role: "Video Production Head" },
  { name: "Sneha Reddy", role: "Community Manager" },
  { name: "Vikram S.", role: "Full-Stack Developer" },
  { name: "Ananya Iyer", role: "Graphic Designer" },
  { name: "Farhan Ahmed", role: "Meta Ads Specialist" },
  { name: "Lakshmi V.", role: "Client Success Manager" },
  { name: "Rohan Das", role: "SEO & Analytics Lead" },
  { name: "Tanya Gupta", role: "Brand Partnerships" },
];

export default function People() {
  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            tag="The Team"
            title="The people behind WePix"
            description="We're a crew of marketers, designers, developers, and strategists who genuinely love what we do. No corporate robots here — just passionate humans building cool stuff."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                className="text-center"
              >
                <ImagePlaceholder
                  label={member.name}
                  aspectRatio="square"
                  className="rounded-xl mb-3"
                />
                <h3 className="font-display text-sm font-semibold leading-tight">{member.name}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
