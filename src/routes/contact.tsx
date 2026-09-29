import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

import { PageHero } from "@/components/common/PageHero";
import { InquiryForm } from "@/components/common/InquiryForm";
import { site } from "@/data/site";
import { fadeUp, revealProps, staggerContainer } from "@/utils/motion";
import { img } from "@/data/images";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Rifa Real Estate WLL | Lusail, Qatar" },
      {
        name: "description",
        content:
          "Contact Rifa Real Estate WLL in Lusail, Qatar, for luxury residential and commercial property sales, leasing and advisory.",
      },
      { property: "og:title", content: "Contact Rifa Real Estate WLL | Lusail, Qatar" },
      {
        property: "og:description",
        content: "Arrange a viewing or ask for advice on buying, renting or investing in Qatar.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const details = [
    { icon: Phone, label: "Telephone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: site.whatsapp,
      href: `https://wa.me/${site.whatsapp.replace(/[^0-9]/g, "")}`,
    },
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: MapPin, label: "Office", value: site.address },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to a specialist"
        intro="Tell us what you are looking for and we will match you with the consultant who covers that community."
        image={img.heroDoha}
        imageAlt="The West Bay skyline in Doha"
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <section className="section-y">
        <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <motion.div variants={staggerContainer} {...revealProps}>
            <motion.h2 variants={fadeUp} className="display-card">
              {site.fullName}
            </motion.h2>
            <motion.dl variants={staggerContainer} className="mt-10 space-y-8">
              {details.map((d) => (
                <motion.div key={d.label} variants={fadeUp} className="border-t border-border pt-5">
                  <dt className="meta-label flex items-center gap-2.5">
                    <d.icon className="size-3.5 text-accent" />
                    {d.label}
                  </dt>
                  <dd className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {d.href ? (
                      <a href={d.href} className="transition-colors hover:text-foreground">
                        {d.value}
                      </a>
                    ) : (
                      d.value
                    )}
                  </dd>
                </motion.div>
              ))}
            </motion.dl>
            <motion.p variants={fadeUp} className="mt-12 text-xs leading-relaxed text-muted-foreground">
              {site.licence}
            </motion.p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            {...revealProps}
            className="border border-border bg-card p-7 md:p-10"
          >
            <p className="meta-label">Enquiry</p>
            <h2 className="mt-3 font-display text-3xl">Send us a note</h2>
            <div className="mt-8">
              <InquiryForm />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
