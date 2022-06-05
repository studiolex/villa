import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Footer from "../components/footer";
import Whatsapp from "../public/images/whatsapp_white.svg";
import Mail from "../public/images/mail_white.svg";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Y&L Vila - Contact</title>
        <meta
          name="description"
          content="Get in touvh with Linda Vogelzang for more information/availibility/reservations for Y&L Villa"
        />
      </Head>
      <Navbar />

      <main>
        <article className="pw-[100rem] mx-auto pt-36  pb-20 leading-relaxed 2xl:w-full 2xl:px-12 md:px-6 md:pb-10 sm:px-4 xs:px-2">
          <h1 className="font-sans font-black text-center text-5xl uppercase text-brown tracking-widest leading-tight sm:text-4xl">
            Contact
          </h1>
          <h2 className="font-sans text-5xl text-brown italic text-center -ml-2 leading-tight sm:text-4xl xs:text-3xl ss:text-2xl">
            Get in touch
          </h2>

          <div className="flex mx-auto w-full justify-center items-center space-x-36 py-28 2xl:justify-between 2xl:space-x-3 md:grid md:grid-cols-2 md:gap-y-10 sm:flex sm:flex-wrap sm:justify-start md:border-b-2 md:border-brown md:py-24 md:pt-16 ">
            <div className=" sm:hidden">
              <Image
                src="/images/linda.png"
                alt="Picture of Coil Slitting"
                width={217}
                height={343}
              />
            </div>
            <div className="hidden  sm:block ">
              <Image
                src="/images/linda_small.png"
                alt="Image of Linda Vogelzang"
                width={136}
                height={213}
              />
            </div>
            <div>
              <div className="mb-12">
                <p className="text-brown font-serif text-xl  ">
                  Linda Vogelzang
                </p>
                <p className="text-gold text-xs sm:text-sm font-serif">Owner</p>
              </div>

              <div>
                <p className="text-brown text-xs ">Spoken languages:</p>
                <p className="text-brown font-normal italic">
                  German, English, French, Dutch
                </p>
              </div>
            </div>

            <div className=" font-bold text-sm md:py-6  md:flex md:flex-wrap md:justify-center md:col-span-2 ">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://wa.me/+32494924558"
                className="relative contact flex  justify-end  h-[2.5rem] min-w-[14rem] items-center border-2 border-brown rounded-full my-4 md:m-4 hover:bg-brown transition ease-in-out duration-500 sm:w-[15rem]"
              >
                <div className="absolute bg-brown p-2 border-2 border-brown inline-block rounded-full left-0 transition ease-in-out duration-300">
                  <Whatsapp />
                </div>
                <p className="old text-brown text-[.9rem] font-black px-6  sm:text-[1.05rem] ">
                  +32 4 94 92 45 58
                </p>
                <p className="new hidden absolute text-cream text-[.9rem] font-black px-6  sm:text-[1.05rem]">
                  +32 4 94 92 45 58
                </p>
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:linda@ylvilla.be"
                className="relative contact flex  justify-end  h-[2.5rem] min-w-[14rem] items-center border-2 border-brown rounded-full my-4 md:m-4 hover:bg-brown transition ease-in-out duration-500 sm:w-[15rem]"
              >
                <div className="absolute bg-brown p-2 border-2 border-brown inline-block rounded-full left-0 transition ease-in-out duration-300">
                  <Mail />
                </div>
                <p className="old text-brown text-[.9rem] font-black px-6  sm:text-[1.05rem] mr-2 ">
                  linda@ylvilla.be
                </p>
                <p className="new hidden absolute text-cream text-[.9rem] font-black px-6  sm:text-[1.05rem] mr-2">
                  linda@ylvilla.be
                </p>
              </a>
            </div>
          </div>
        </article>
        <div className="w-[100rem] mx-auto  2xl:w-full relative">
          <div className="w-full min-h-[60%] h-full   ">
            {" "}
            <Image
              src="/images/contact.png"
              alt="Bathroom of Y&L Villa"
              width={1920}
              height={372}
              className="w-full h-auto object-cover  "
            />
          </div>
          <div className="absolute right-[10%] -top-32 mb-24 md:right-2">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.be/maps/place/HH+Geeststraat+7,+2000+Antwerpen/@51.218846,4.3957787,17z/data=!3m1!4b1!4m5!3m4!1s0x47c3f6f69face41b:0x79551ef9613ddce8!8m2!3d51.2188427!4d4.3979674"
              className="bg-brown text-cream rounded-full w-52 h-52 flex flex-col items-center justify-center	relative font-serif text-center font-bold leading-relaxed md:w-44 md:h-44 md:text-sm"
            >
              Heilige geeststraat 7,
              <span className="font-mono">
                2000 Antwerpen <br /> Belgium
              </span>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
