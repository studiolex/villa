import Link from "next/link";
import Image from "next/image";
import Wave from "../public/images/wave.svg";
import Whatsapp from "../public/images/whatsapp.svg";
import Mail from "../public/images/mail.svg";

function Contact() {
  return (
    <article className="bg-brown ">
      <div className="w-[100rem] py-12 mx-auto 2xl:w-full 2xl:px-12 md:px-6 md:py-16 sm:px-4 xs:px-2 ">
        <div className="grid grid-cols-2 gap-6 lg:flex lg:flex-col">
          <div className="flex flex-col justify-between py-4 sm:pb-10 ">
            <div className="leading-tight sm:flex sm:flex-col sm:items-center">
              <Wave className="md:mb-4 sm:scale-[70%] xs:scale-[45%]" />
              <h2 className="text-5xl italic text-cream  pb-16  leading-tight sm:text-4xl sm:pb-6 sm:text-center xs:text-3xl ss:text-2xl">
                <span className="font-black not-italic">
                  Are you interested?
                </span>{" "}
                <br /> get in touch
              </h2>
            </div>
            <p className="text-cream sm:text-center">
              You can both contact us directly by email or Whatsapp!
            </p>
          </div>
          <div className="flex xs:flex-col md:items-center ">
            <div className=" sm:hidden">
              <Image
                src="/images/linda.png"
                alt="Image of Linda Vogelzang"
                width={217}
                height={343}
              />
            </div>
            <div className="flex flex-col justify-between p-8 sm:py-0 sm:p-0 sm:w-full">
              <div className="mb-6 flex sm:items-center sm:space-x-[2%] ">
                <div className="hidden  sm:block ">
                  <Image
                    src="/images/linda_square.png"
                    alt="Image of Linda Vogelzang"
                    width={120}
                    height={120}
                    className="rounded-full"
                  />
                </div>

                <div>
                  <p className="text-cream font-serif text-xl  ">
                    Linda Vogelzang
                  </p>
                  <p className="text-gold text-xs sm:text-sm font-serif">
                    Owner
                  </p>
                </div>
              </div>

              <div className="md:mb-10">
                <p className="text-cream text-xs ">Spoken languages:</p>
                <p className="text-cream font-normal italic">
                  German, English, French, Dutch
                </p>
              </div>

              <div className=" font-bold text-sm sm:py-6 sm:flex sm:flex-wrap sm:justify-around">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://wa.me/+32494924558"
                  className="flex items-center border-2 border-cream rounded-full my-4 sm:m-4 hover:opacity-75 transition ease-in-out duration-500  text-cream"
                >
                  <div className="bg-cream p-2 border-2 border-cream inline-block rounded-full ">
                    <Whatsapp />
                  </div>
                  <p className=" font-black mx-auto text-[.85rem] sm:text-[1rem] sm:mx-6 xs:mx-3 ">
                    +32 4 94 92 45 58
                  </p>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:linda@ylvilla.be"
                  className="flex items-center border-2 border-cream rounded-full my-4 sm:m-4  hover:opacity-75 transition ease-in-out duration-500 text-cream"
                >
                  <div className="bg-cream p-2 border-2 border-cream inline-block rounded-full">
                    <Mail />
                  </div>
                  <p className=" font-black mx-auto text-[.9rem] sm:text-[1.05rem] sm:mx-6 xs:mx-3 ">
                    linda@ylvilla.be
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Contact;
