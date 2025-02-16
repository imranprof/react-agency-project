import ServicesHero from "@/components/service/branding/ServicesHero";
import { getMainPage } from "@/lib/helper/contentConverter";
import ClientArea from "@/components/service/branding/ClientArea";
import ClientSlider from "@/components/service/branding/ClientSlider";
import ServiceInnerArea from "@/components/service/branding/ServiceInnerArea";
import ServiceAbout from "@/components/service/branding/ServiceAbout";
import PricingArea from "@/components/service/branding/PricingArea";
import DetailsContact from "@/components/service/branding/DetailsContact";

const Services = () => {
  const hero = getMainPage("/services/branding/_index.mdx");
  const brands = getMainPage("/brands/_brands.mdx");
  const clients = getMainPage("/clients/_main.mdx");
  const ServiceAreaData = getMainPage("/services/branding/_service_area.mdx");
  const ServiceAboutData = getMainPage("/services/branding/_about_area.mdx");
  const pricingData = getMainPage("/pricings/branding-pricing.mdx");
  const contact = getMainPage("/services/branding/_contact.mdx");

  return (
    <main>
      <ServicesHero data={hero.data} />
      <ClientSlider clients={clients.data.clients} />
      <ServiceInnerArea data={ServiceAreaData.data} />
      <ServiceAbout data={ServiceAboutData.data} />
      <PricingArea pricing={pricingData.data.pricing} />
      <DetailsContact
        contactTitle={contact.data.contactTitle}
        btn_text={contact.data.btn_text}
      />
      <ClientArea brands={brands.data.brands} />
    </main>
  );
};

export default Services;
