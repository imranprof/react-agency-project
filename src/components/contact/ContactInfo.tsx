import { convertWithBr } from "@/lib/helper/converter"


type Props = {
  title: string;
  contact_list: {
    phone: string;
    email: string;
    address: string;
  };
};

const ContactInfo = ({ title, contact_list }: Props) => {
  const { phone, email, address } = contact_list
  return (
    <div className="info-box has_fade_anim">
      <div className="text-wrapper">
        <p className="text text-[26px] leading-[1.25] font-medium max-w-[360px] text-black">{title}</p>
      </div>
      <ul className="contact-list mt-[26px] text-[18px] text-black-2">
        <li className="mt-0 leading-[24px] "><a href={`tel:${phone}`} className="underline underline-offset-2">+{phone}</a></li>
        <li className="mt-[15px]"><a className="underline underline-offset-2" href="#">{email}</a></li>
        <li className="mt-[15px]" dangerouslySetInnerHTML={convertWithBr(address)} />
      </ul>
    </div>
  )
}

export default ContactInfo