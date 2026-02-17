import { Url } from "@/helpers/constant";
import {
  GithubIconFill,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  WhatsappIcon,
  ArrowRight,
} from "./icons";
import { motion, Variants } from "framer-motion";
export default function Contact() {
  return (
    <>
      <section id="contact" className="relative w-full py-14">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover object-center opacity-30"
          >
            <source
              src="/Video_Generation_For_Contact_Form.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto px-4 gap-6 py-6 mb-12">
          {/* The <a> tag goes here */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-lg font-bold text-white transition-colors hover:bg-blue-700"
            style={{ width: "100%" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
            <span className="width:50% height:50%">Contact Me</span>
          </a>


        </div>
        <div className="mx-auto max-w-7xl px-4">


          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              delayChildren: 0.15,
              staggerChildren: 0.1,
            }}
            className="mx-auto grid max-w-max grid-cols-3 gap-6 text-lg"
          >

            <LinkBox href={Url.Email} icon={<MailIcon className="h-8 w-8" />} />
            <LinkBox
              href={Url.Whatsapp}
              icon={<WhatsappIcon className="h-8 w-8" />}
            />
            <LinkBox
              href={Url.GitHub}
              icon={<GithubIconFill className="h-8 w-8" />}
            />
            <LinkBox
              href={Url.Instagram}
              icon={<InstagramIcon className="h-8 w-8" />}
            />


            {/* <a
            
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-6 rounded-2xl border p-6 transition-colors hover:border-orange-500"
          >
            
            Email
          </a>
          <a
            href="https://wa.me/919182704402"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-6 rounded-2xl border p-6 transition-colors hover:border-emerald-500"
          >
            <WhatsappIcon className="h-8 w-8" />
            Whatsapp
          </a>
          <a
            href="tel:9182704402"
            className="flex items-center gap-6 rounded-2xl border p-6 transition-colors hover:border-slate-500"
          >
            <PhoneIcon className="h-8 w-8" />
            Call
          </a> */}
          </motion.div>
        </div>
      </section>
    </>
  );
}
const cardVariants: Variants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.8,
    },
  },
};
function LinkBox({ href, icon }: { href: string; icon: React.ReactElement }) {
  return (
    <>
      <motion.a
        href={href}
        target="_blank"
        // initial={{
        //   scale: 1,
        // }}
        // whileHover={{
        //   scale: 1.2,
        // }}
        variants={cardVariants}
        rel="noopener noreferrer"
        className="hv-allowed flex size-20 flex-row items-center justify-center gap-2 overflow-hidden rounded-2xl border border-gray-50/[.1] bg-gray-50/[.10] text-lg font-medium transition-colors hover:bg-gray-50/[.15]"
      >
        {icon}
      </motion.a>
    </>
  );
}
