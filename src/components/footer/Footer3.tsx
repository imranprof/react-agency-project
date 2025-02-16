import EmailInput from "@/components/elements/input/EmailInput";
import siteConfig from "@/config/siteConfig.json";
import Logo from "@/components/elements/logo/Logo";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";

type Props = {
  footerNav: {
    id: number;
    title: string;
    children?: {
      name: string;
      path: string;
    }[];
  }[];
};

const Footer3 = ({ footerNav }: Props) => {
  return (
    <div className="inner-container large">
      <footer className="footer_area bg-black px-[15px] md:px-[45px] pb-[60px]">
        <div className="inner-container">
          <div className="footer_area_inner grid gap-y-[50px] gap-x-[60px] lg:gap-y-20 lg:gap-x-[50px] justify-between overflow-hidden grid-cols-[auto] xs:grid-cols-[auto_auto] sm:grid-cols-[auto_auto_auto]  lg:grid-cols-[225px_160px_160px_305px] xl:grid-cols-[265px_190px_190px_385px] xxl:grid-cols-[365px_190px_190px_385px] py-[60px] lg:py-20 xl:py-[100px] xxl:py-[130px]">
            <div className="footer_widget_wrapper min-w-[130px]">
              <div className="footer_logo">
                <Logo
                  light={true}
                  url={siteConfig.site_info.logo_light_2}
                  customWidth={125}
                  customHeight={54}
                  className="max-h-[34px] !w-auto"
                />
              </div>
              <p className="info_text max-w-[270px] mt-[26px] text-white-2">
                {siteConfig.site_info.info}
              </p>
              <ul className="social_links flex gap-5 mt-9 lg:mt-14 ">
                <li className="leading-none text-white-2">
                  <a
                    href="#"
                    className="hover:text-white transition-all duration-300"
                  >
                    <FaFacebookF className="hover:text-white" />
                  </a>
                </li>
                <li className="leading-none text-white-2">
                  <a
                    href="#"
                    className="hover:text-white transition-all duration-300"
                  >
                    <FaTwitter />
                  </a>
                </li>
                <li className="leading-none text-white-2">
                  <a
                    href="#"
                    className="hover:text-white transition-all duration-300"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li className="leading-none text-white-2">
                  <a
                    href="#"
                    className="hover:text-white transition-all duration-300"
                  >
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>

            {footerNav.map((item) => (
              <div key={item.id} className="footer_widget_wrapper in-w-[130px]">
                <h2 className="title text-white text-[22px] lg:text-[24px] leading-[.73] font-medium font-spacegrotesk">
                  {item.title}
                </h2>
                <ul className="footer_nav_list mt-[27px]">
                  {item.children?.map((childItem, index) => (
                    <li
                      key={index}
                      className="text-[18px] leading-[30px] text-white-2 "
                    >
                      <Link
                        href={childItem.path}
                        className="hover:text-white transition-all duration-300"
                      >
                        {childItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="footer_widget_wrapper footer3-newsletter min-w-[130px] xs:col-span-2 lg:col-span-1">
              <h2 className="title text-[22px] lg:text-[24px] leading-[.73] font-medium font-spacegrotesk text-white">
                Newsletter
              </h2>
              <div className="newsletter_text mt-[29px]">
                <p className="text text-white-2">
                  Feel free to reach out if you want to collaborate with us, or
                  simply have a chat.
                </p>
              </div>
              <EmailInput className="rounded-[5px]" />
            </div>
          </div>
        </div>
        <div className="copyright_area">
          <div className="inner-container">
            <div className="copyright_area_inner border-t border-[#FFFFFF14] py-[22px] xl:py-[32px] relative">
              <div className="copyright-text">
                <p className="text text-center font-medium text-white-2">
                  {siteConfig.footer_info.copyright.label}{" "}
                  <Link
                    href={siteConfig.footer_info.copyright.link}
                    target="_blank"
                  >
                    <span className="text-white">
                      {siteConfig.footer_info.copyright.company}
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer3;
