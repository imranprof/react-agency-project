import AboutAward from "@/components/about/branding/AboutAward"
import AboutFaqs from "@/components/about/branding/AboutFaqs"
import AboutHero from "@/components/about/branding/AboutHero"
import AboutTestimonial from "@/components/about/branding/AboutTestimonial"
import AboutTeam from "@/components/about/branding/AboutTeam"
import ServiceAbout from "@/components/service/branding/ServiceAbout"
import TeamCounterArea from "@/components/team/branding/TeamCounterArea"
import PricingArea from "@/components/service/branding/PricingArea"
import DetailsContact from "@/components/service/branding/DetailsContact"
import ClientArea from "@/components/service/branding/ClientArea"
import { getMainPage } from "@/lib/helper/contentConverter"
import { TAboutType } from "@/types"
import { TAboutFaqs } from "@/types"


const About = () => {
  const about: TAboutType = getMainPage("/about/branding/_index.mdx")
  const AboutData = getMainPage("/services/branding/_about_area.mdx")
  const Testimonial = getMainPage("/testimonial/about_testimonial.mdx")
  const aboutFaqs: TAboutFaqs = getMainPage("/faqs/about-faqs.mdx")
  const team = getMainPage("/team/_team.mdx")
  const pricingData = getMainPage("/pricings/branding-pricing.mdx")
  const contact = getMainPage("/services/branding/_contact.mdx")
  const brands = getMainPage("/brands/_brands.mdx")

  return (
    <main>
      <AboutHero hero={about.data.hero} />
      <TeamCounterArea counterData={about.data.counter_area} />
      <AboutAward data={about.data.award_area} />
      <ServiceAbout data={AboutData.data} />
      <AboutTestimonial testimonials={Testimonial.data.testimonials} icons={Testimonial.data.icon} />
      <AboutFaqs data={aboutFaqs.data} />
      <AboutTeam team_area={about.data.team_area} member={team.data.member} />
      <PricingArea pricing={pricingData.data.pricing} />
      <DetailsContact contactTitle={contact.data.contactTitle} btn_text={contact.data.btn_text} />
      <ClientArea brands={brands.data.brands} />
    </main>
  )
}

export default About