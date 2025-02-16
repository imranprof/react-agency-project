import { notFound } from "next/navigation";
import { getAllPages } from "@/lib/helper/contentConverter";
import { getMainPage } from "@/lib/helper/contentConverter";
import MDXContent from "@/components/tools/mdx-content";
import ServiceDetails from "@/components/service/branding/ServiceDetails";
import DetailsFaq from "@/components/service/branding/DetailsFaq";
import ClientArea from "@/components/service/branding/ClientArea";
import DetailsContact from "@/components/service/branding/DetailsContact";
import PricingArea from "@/components/service/branding/PricingArea";

type Props = {
  params: {
    title: string;
  };
};

export const generateStaticParams = () => {
  const services = getAllPages("/services/branding");
  const paths = services.map((program) => ({
    title: program.slug,
  }));

  return paths;
};

const service = ({ params }: Props) => {
  const services = getAllPages("/services/branding");
  const pricingData = getMainPage("/pricings/branding-pricing.mdx");
  const brands = getMainPage("/brands/_brands.mdx");
  const slugs = services.map((item) => item.slug);

  if (!(services && services.length)) {
    notFound();
  }
  const service = services.find((item) => item.slug === params.title);

  if (!(service && service.data)) {
    notFound();
  }

  return (
    <main className="">
      <ServiceDetails {...service} />
      <div className="service-details-inner">
        <MDXContent content={service.content} />
        <DetailsFaq
          faqs={service.data.faqs}
          faqTitle={service.data.faq_title}
        />
        {brands && <ClientArea brands={brands.data.brands} />}
        <DetailsContact
          contactTitle={service.data.contactTitle}
          btn_text={service.data.btn_text}
        />
        <PricingArea pricing={pricingData.data.pricing} />
      </div>
    </main>
  );
};

export default service;
