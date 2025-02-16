import SeoAbout from "@/components/about/seo/SeoAbout";
import SeoBlog from "@/components/blog/seo/SeoBlog";
import SeoClients from "@/components/clients/seo/SeoClients";
import Cta2 from "@/components/cta/Cta2";
import SeoFeatures from "@/components/features/seo/SeoFeatures";
import SeoFunFact from "@/components/funFact/seo/SeoFunFact";
import SeoHero from "@/components/hero/seo/SeoHero";
import SeoImage from "@/components/image/SeoImage";
import SeoPricing from "@/components/pricing/seo/SeoPricing";
import SeoReport from "@/components/report/seo/SeoReport";
import SeoService from "@/components/service/seo/SeoService";
import SeoSlider from "@/components/slider/seo/SeoSlider";
import SeoTeam from "@/components/team/seo/SeoTeam";
import SeoTestimonial from "@/components/testimonial/seo/SeoTestimonial";
import SeoWork from "@/components/work/seo/SeoWork";
import { getAllPages, getMainPage } from "@/lib/helper/contentConverter";
import { SeoHeroProps } from "@/types";

const Seo = () => {
  const hero: SeoHeroProps = getMainPage("/heros/seoHero.mdx");
  const clients = getMainPage("/brands/brands1.mdx");
  const features = getMainPage("/features/seo/_main.mdx");
  const about = getMainPage("/about/seo/_main.mdx");
  const service = getMainPage("/services/seo/_main.mdx");
  const services = getAllPages("/services/seo");
  const report = getMainPage("/report/seo/_main.mdx");
  const work = getMainPage("/works/seo/_main.mdx");
  const works = getAllPages("/works/seo");
  const pricingSection = getMainPage("/pricings/seo/_main.mdx");
  const pricingPlans = getMainPage("/pricings/seo-pricing.mdx");
  const image = getMainPage("/image/seo-image.mdx");
  const funFact = getMainPage("/funFact/seoFunFact.mdx");
  const clientFeedback = getMainPage("/testimonial/seo/_main.mdx");
  const testimonials = getMainPage("/testimonial/seo-testimonial.mdx");
  const slider = getMainPage("/slider/seo/text-slider.mdx");
  const cta2Content = getMainPage("/ctas/cta2.mdx");
  const blog = getMainPage("/blogs/seo/_main.mdx");
  const blogs = getAllPages("/blogs/seo");
  const teamSection = getMainPage("/team/seo/_main.mdx");
  const team = getMainPage("/team/_team.mdx");

  return (
    <main>
      <SeoHero data={hero.data} />
      <SeoClients brands={clients.data.brands} />
      <SeoFeatures featuresData={features.data} />
      <SeoAbout aboutData={about.data} />
      <SeoService service={service} services={services} />
      <SeoReport reportData={report.data} />
      <SeoWork work={work.data} works={works} />
      <SeoPricing
        pricingSection={pricingSection.data}
        pricing={pricingPlans.data.pricing}
      />
      <SeoImage image={image.data.image} />
      <SeoFunFact funFact={funFact.data} />
      <SeoTestimonial
        clientFeedbackSection={clientFeedback.data}
        testimonials={testimonials.data.testimonials}
      />
      <SeoTeam teamSection={teamSection.data} teamMember={team.data.member} />
      <SeoBlog sectionData={blog.data} blogs={blogs} />
      <SeoSlider sliderText={slider.data.text} />
      <Cta2 ctaContent={cta2Content.data} />
    </main>
  );
};

export default Seo;
