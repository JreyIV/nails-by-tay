import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import EmailConfirm from "../components/EmailConfirm";
import { instagram } from "../assets/icons";

const Contact = () => {
  const form = useRef();

  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_52uiup9", "template_3kfy0if", form.current, {
        publicKey: "aHRH4K0wAmk64rRUX",
      })
      .then(
        () => {
          form.current.reset();
          setIsSuccess(true);
          setTimeout(() => {
            setIsSuccess(false);
          }, 7000);
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section id="Contact" className="bg-brand-beige-dark flex max-lg:flex-col">
      <div className=" lg:w-1/2 lg:p-20 p-10">
        <h1 className="font-wedding text-4xl text-brand-lavender">
          Get in Touch
        </h1>
        <p className="font-noto text-brand-brown pt-2">
          Have a question or want to book an appointment?
        </p>
        <p className="font-wix text-slate-gray pt-5 ">
          You can book in three different ways:
        </p>
        <ul className="font-wix text-slate-gray p-2 space-y-2 list-disc list-inside">
          <li>
            (Preferred) Through one of the &quot;Book Appointment&quot; buttons
          </li>
          <li>DM me on Instagram</li>
          <li>Contact form</li>
        </ul>
        <p className="font-wix italic text-slate-gray pt-5">
          *The appointment will take place in my apartment located near the
          Lincoln Park area. More details when you contact me!
        </p>
        <a href="https://www.instagram.com/_nails.by.tay_/" target="_blank">
          <motion.img
            src={instagram}
            alt="instagram"
            width={25}
            height={25}
            className="pt-5"
            whileHover={{ scale: 1.2 }}
          />
        </a>
      </div>
      <div className=" lg:w-1/2 lg:p-20 p-10">
        {isSuccess && <EmailConfirm />}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="grid grid-cols-2 gap-x-5 gap-y-5 items-center justify-between p-4 text-brand-brown"
        >
          <label className="relative block w-full">
            <input
              name="first_name"
              className="w-full rounded border border-neutral-500 p-2 text-sm focus:border-brand-lavender focus:outline-none bg-transparent peer"
              required
            />
            <span className="absolute left-2 top-0 -translate-y-1/2 scale-100 bg-brand-beige-dark px-0.5 text-xs font-medium font-wix transition-transform peer-focus:scale-0">
              First Name
            </span>
          </label>
          <label className="relative block w-full">
            <input
              name="last_name"
              className="w-full rounded border border-neutral-500 p-2 text-sm focus:border-brand-lavender focus:outline-none bg-transparent peer"
              required
            />
            <span className="absolute left-2 top-0 -translate-y-1/2 scale-100 bg-brand-beige-dark px-0.5 text-xs font-medium font-wix transition-transform peer-focus:scale-0">
              Last Name
            </span>
          </label>
          <label className="relative block w-full col-span-2">
            <input
              name="email"
              className="w-full rounded border border-neutral-500 p-2 text-sm focus:border-brand-lavender focus:outline-none bg-transparent peer"
              required
            />
            <span className="absolute left-2 top-0 -translate-y-1/2 scale-100 bg-brand-beige-dark px-0.5 text-xs font-medium font-wix transition-transform peer-focus:scale-0">
              Email
            </span>
          </label>
          <label className="relative block w-full col-span-2">
            <input
              name="subject"
              className="w-full rounded border border-neutral-500 p-2 text-sm focus:border-brand-lavender focus:outline-none bg-transparent peer"
              required
            />
            <span className="absolute left-2 top-0 -translate-y-1/2 scale-100 bg-brand-beige-dark px-0.5 text-xs font-medium font-wix transition-transform peer-focus:scale-0">
              Subject
            </span>
          </label>
          <label className="relative block w-full col-span-2">
            <textarea
              name="message"
              className="w-full h-32 rounded border border-neutral-500 p-2 text-sm focus:border-brand-lavender focus:outline-none bg-transparent peer"
              required
            />
            <span className="absolute left-2 top-0 -translate-y-1/2 scale-100 bg-brand-beige-dark px-0.5 text-xs font-medium font-wix transition-transform peer-focus:scale-0">
              Message
            </span>
          </label>

          <div>
            <label className="relative block w-full col-span-2 font-wix">
              How did you hear about me?
            </label>
            <div className="pt-3">
              <div className="">
                <input
                  type="radio"
                  name="referral"
                  value="Social Media"
                  id="Social Media"
                  required
                />
                <label htmlFor="Social Media" className="ml-2 font-wix">
                  Social Media
                </label>
              </div>
              <div className="">
                <input
                  type="radio"
                  name="referral"
                  value="A friend"
                  id="A friend"
                />
                <label htmlFor="A friend" className="ml-2 font-wix">
                  A friend
                </label>
              </div>
              <div className="">
                <input
                  type="radio"
                  name="referral"
                  value="Google"
                  id="Google"
                />
                <label htmlFor="Google" className="ml-2 font-wix">
                  Google
                </label>
              </div>
              <div className="">
                <input type="radio" name="referral" value="Other" id="Other" />
                <label htmlFor="Other" className="ml-2 font-wix">
                  Other
                </label>
              </div>
            </div>
          </div>

          <label className="relative block w-full col-span-2">
            <input
              name="referred_by"
              className="w-full rounded border border-neutral-500 p-2 text-sm focus:border-brand-lavender focus:outline-none bg-transparent peer"
            />
            <span className="absolute left-2 top-0 -translate-y-1/2 scale-100 bg-brand-beige-dark px-0.5 text-xs font-medium font-wix transition-transform peer-focus:scale-0 italic">
              If a friend referred you, who can I thank?
            </span>
          </label>

          <div className="col-span-2 flex justify-start">
            <motion.input
              type="submit"
              value="Send"
              className="font-wix px-6 py-4 text-sm focus:border-brand-lavender focus:outline-none bg-brand-lavender text-white"
              style={{ width: "auto", minWidth: "fit-content" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
