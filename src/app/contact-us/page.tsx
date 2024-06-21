import ContactForm from "@/components/contact-us/ContactForm";
import { ContactInfo } from "@/components/contact-us/ContactInfo";

export default function ContactUs() {
  return (
    <div className="bg-background flex flex-col justify-center items-center">
      <h1 className="text-center font-bold text-4xl mt-36 mb-10 text-text">
        Get in Touch with Us
      </h1>

      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="mb-5 lg:mb-0 mx-5">
          <ContactInfo />
        </div>

        <div className="w-[90%] lg:w-auto">
          <ContactForm />
        </div>
      </div>

      <div className="bg-secondary-card p-8 my-10 text-text w-[90%] lg:max-w-3xl mx-auto text-base rounded-xl border">
        KANI Packaging, Bhiwandi Based - Corrugated Box Manufacturers in
        Bhiwandi, Thane. One Stop Solutions for all types of Corrugated Boxes,
        Shipping Boxes, Cardboard Boxes, Carton Boxes, etc. Contact us for
        Corrugated Cardboard Boxes Manufacturers in Bhiwandi. Serving Bhiwandi,
        Thane, Nashik & Mumbai Suburb area.
      </div>
    </div>
  );
}
