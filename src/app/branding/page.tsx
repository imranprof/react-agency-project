import React from "react";
import BrandingHero from "@/components/hero/branding/BrandingHero";
import BrandingWork from "@/components/work/branding/BrandingWork";
import { getMainPage } from "@/lib/helper/contentConverter";
import { getAllPages } from "@/lib/helper/contentConverter";
import BrandingFunFact from "@/components/funFact/branding/BrandingFunFact";
import BrandingService from "@/components/service/branding/BrandingService";
import BrandingProcess from "@/components/process/branding/BrandingProcess";
import BrandingImage from "@/components/image/BrandingImage";
import BrandingTestimonial from "@/components/testimonial/branding/BrandingTestimonial";
import BrandingTeam from "@/components/team/branding/BrandingTeam";
import BrandingBlog from "@/components/blog/branding/BrandingBlog";
import Cta1 from "@/components/cta/Cta1";

const Branding = () => {
  const hero = getMainPage("/heros/brandingHero.mdx");
  const works = getAllPages("/works/branding");
  const work = getMainPage("/works/branding/_main.mdx");
  const funFact = getMainPage("/funFact/brandingfunFact.mdx");
  const service = getMainPage("/services/branding/_main.mdx");
  const services = getAllPages("/services/branding");
  const process = getMainPage("/process/branding/_main.mdx");
  const image = getMainPage("/image/brandingImage.mdx");
  const testimonial = getMainPage("/testimonial/branding/_main.mdx");
  const team = getMainPage("/team/branding/_main.mdx");
  const teamMembers = getAllPages("/team/branding");
  const blogSection = getMainPage("/blogs/branding/_main.mdx");
  const blogs = getAllPages("/blogs/branding");
  const cta = getMainPage("/ctas/cta1.mdx");

  return (
    <main>
      <BrandingHero hero={hero} />
      <BrandingWork works={works} work={work.data} />
      <BrandingFunFact data={funFact.data} />
      <BrandingService service={service} services={services} />
      <BrandingProcess data={process.data} />
      <BrandingImage data={image.data} />
      <BrandingTestimonial data={testimonial.data} />
      <BrandingTeam team={team.data} teamMembers={teamMembers} />
      <BrandingBlog sectionData={blogSection.data} blogs={blogs} />
      <Cta1 {...cta.data} />
    </main>
  );
};

export default Branding;
