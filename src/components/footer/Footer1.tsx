
import Logo from "@/components/elements/logo/Logo"
import FooterNav from "@/components/footer/FooterNav"
import siteConfig from "@/config/siteConfig.json";
import EmailInput from "@/components/elements/input/EmailInput"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



type Props = {
  footerNav: {
    id: number;
    title: string;
    children?: {
      name: string;
      path: string;
      isLocation?: boolean;
    }[];
  }[];
};

const Footer1 = ({ footerNav }: Props) => {

  const { label, company } = siteConfig.footer_info.copyright
  const [firstWord, ...remainingWords] = company.split(" ");
  return (
    <footer className=" main-section-style !pb-0 bg-[#121212]">
      <div className="container">
        <div className=" section-spacing-top pb-[54px] lg:pb-[74px]  xl:pb-[94px] overflow-hidden grid gap-y-[50px] gap-x-[60px] lg:gap-y-20 lg:gap-x-[60px] justify-between grid-cols-[auto] xs:grid-cols-[auto,auto] sm:grid-cols-[auto,auto,auto] lg:grid-cols-[225px,190px,190px,315px] xl:grid-cols-[305px,190px,190px,385px] xxl:grid-cols-[655px,190px,190px,385px]">
          <div className=" relative lg:row-span-2">
            <Logo light={true} url={siteConfig.site_info.logo_light_2} customWidth={200} customHeight={54} className="max-h-[34px] lg:max-h-[54px] !w-auto" />
            <div className="absolute w-[1px] h-[calc(100%+400px)] bg-[#202020] end-0 top-[-200px] hidden lg:block"></div>
          </div>
          {footerNav.map((item) => (
            <FooterNav key={item.id} {...item} />
          ))}
          <div className=" xs:col-span-2 lg:col-auto md:row-start-2 lg:row-start-1 lg:col-start-4 order-1 xs:order-0">
            <h2 className="title text-white text-[22px] lg:text-[24px] xl:text-[30px] leading-[.73]">Newsletter</h2>
            <div className="newstaller_text mt-[29px] text-white">
              <p className="text-white-2">Feel free to reach out if you want to collaborate with us, or simply have a chat.</p>
            </div>
            <EmailInput />
          </div>

          <div className="">
            <h2 className="title text-white text-[22px] lg:text-[24px] xl:text-[30px] leading-[.73]">Follow Us</h2>
            <ul className="flex gap-5 mt-9 ">
              <li><a href="#" className="text-white-2 hover:text-white">
                <FaFacebookF /></a></li>
              <li><a href="#" className="text-white-2 hover:text-white">
                <FaTwitter /></a></li>
              <li><a href="#" className="text-white-2 hover:text-white">
                <FaInstagram /></a></li>
              <li><a href="#" className="text-white-2 hover:text-white">
                <FaLinkedin /></a></li>
            </ul>
          </div>

        </div>
      </div>
      <div className=" border-t border-[#202020]">
        <div className="container">
          <div className=" py-[22px] xl:py-8 relative">
            <div className="">
              <p className=" text-center font-medium">{label}
                <span className="text-white">{firstWord}</span> {remainingWords.join(" ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer1