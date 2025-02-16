import { getMainPage } from "@/lib/helper/contentConverter"
import ContactHero from "@/components/contact/ContactHero"
import Image from "next/image"
import ContactArea from "@/components/contact/ContactArea"

const Contact = () => {
  const contact = getMainPage("/contact/_index.mdx")
  return (
    <main>
      <ContactHero {...contact.data.hero} />
      <div className=" overflow-hidden">
        <Image src={contact.data?.image} alt="image"
          width={1920}
          height={850}
          className="w-full"
        />
      </div>
      <ContactArea {...contact.data?.contact} />
    </main>
  )
}

export default Contact
