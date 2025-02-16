import TopLineButton from "@/components/elements/button/TopLineButton";
import IntroSection from "@/components/elements/introSection/IntroSection";
import FaqSection from "@/components/faq/branding/FaqSection";
import { getMainPage } from "@/lib/helper/contentConverter";

const Faqs = () => {
  const faqsData = getMainPage("/faqs/branding/_index.mdx");

  const { btn_text, title, description, faqs } = faqsData.data;
  return (
    <main>
      <section className="">
        <div className="container">
          <div className=" section-spacing-bottom pt-[127px] lg:pt-[147px] xxl:pt-[217px]">
            <div className=" grid gap-y-[30px] gap-x-[60px] md:grid-cols-[300px_1fr] lg:grid-cols-[400px_1fr] xxl:grid-cols-[485px_960px]">
              <div className="">
                <TopLineButton btn_text={btn_text} />
              </div>
              <div className="">
                <IntroSection title={title} description={description} />
                <div className=" mt-[43px] lg:mt-[53px] xl:mt-[73px] xxl:mt-[93px]">
                  <FaqSection faqs={faqs} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Faqs;
