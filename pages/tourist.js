import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Footer from "../components/footer";
import Weddings from "../public/images/wedding.svg";
import Vip from "../public/images/vip.svg";
import Bus from "../public/images/bus.svg";
import Tours from "../public/images/tours.svg";
import Sightseeing from "../public/images/sightseeing.svg";
import Shuttle from "../public/images/shuttle.svg";

export default function Location() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Y&L Vila - Location</title>
        <meta
          name="description"
          content="Get to know more about the area around Y&L Villa."
        />
      </Head>
      <Navbar />

      <main>
        <article className="pt-36 w-[100rem] mx-auto 2xl:w-full 2xl:px-12 md:px-6 sm:px-4 xs:px-2">
          <h1 className="font-sans text-center text-5xl uppercase font-black text-brown tracking-widest sm:text-4xl xs:text-3xl ss:text-2xl md:text-left">
            <span className="font-light">E - </span> Touristram
          </h1>
          <h2 className="font-sans text-2xl text-brown italic text-center  mt-4 leading-tight sm:text-xl xs:text-md ss:text-sm md:text-left">
            Unique transport and experience.{" "}
          </h2>
          <div className="  my-24 grid grid-cols-2 gap-24 md:flex md:flex-col items-center md:gap-0 md:mb-0 md:mt-14">
            <div className="relative">
              <div className="w-full min-h-[60%] h-full   ">
                <Image
                  width={1444}
                  height={738}
                  src="/images/tourist.png"
                  alt="Electric Touristram"
                />
              </div>
              <div className="absolute right-[6%] -top-16 mb-24 md:right-2">
                <a className="bg-brown text-cream rounded-full w-36 h-36 flex flex-col items-center justify-center	relative font-serif text-center font-bold leading-relaxed md:w-28 md:h-28 md:text-sm">
                  100% Electric{" "}
                </a>
              </div>
            </div>
            <div className=" pb-10 my-16 w-[70%] xl:w-[75%] md:w-full md:pb-20 md:mb-6 ">
              <div className="flex items-center border-b-2 border-gold pb-4 my-6">
                <Bus />
                <p className="ml-2 font-serif text-gold">
                  FOR RENT <span className="text-brown"> (with driver)</span>
                </p>
              </div>
              <ul className="list-none mt-8 font-medium  italic text-brown lg:flex lg:flex-col  md:grid md:grid-cols-2">
                <div className="flex items-center space-x-4 my-2">
                  <Vip />
                  <li className="">VIP-Tours</li>
                </div>
                <div className="flex items-center space-x-4 my-2">
                  <Shuttle />
                  <li className="">Shuttle Services</li>
                </div>
                <div className="flex items-center space-x-4 my-2">
                  <Sightseeing />
                  <li className="">Sightseeing </li>
                </div>
                <div className="flex items-center space-x-4 my-2">
                  <Weddings />
                  <li className="">Weddings</li>
                </div>{" "}
                <div className="flex items-center space-x-4 my-2">
                  <Tours />
                  <li className="">Tailormade Tours</li>
                </div>
              </ul>
              <a
                className="inline-block min-w-max cursor-pointer md:mx-auto w-full"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.eventplanner.net/directory/7132_etouristram.html?_gl=1*1w6p21c*_ga*MjAwNDgzOTk3LjE2NTk1OTgxMTc.*_ga_HN3PFEH097*MTY1OTU5ODExNy4xLjAuMTY1OTU5ODExNy4w"
              >
                <div className=" mt-12 w-24 book flex bg-gold rounded-full items-center justify-end   transition ease-in-out duration-500  hover:bg-brown relative  h-[2.5rem]  min-w-[13rem] md:mx-auto">
                  <div className="bg-gold rounded-full p-2 border-2 border-cream absolute left-0 transition ease-in-out duration-300">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.4 2.80078H4.6C2.61177 2.80078 1 4.41256 1 6.40078V15.4008C1 17.389 2.61177 19.0008 4.6 19.0008H15.4C17.3882 19.0008 19 17.389 19 15.4008V6.40078C19 4.41256 17.3882 2.80078 15.4 2.80078Z"
                        stroke="#FFFCF5"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1 8.2H19M6.4 1V4.6V1ZM13.6 1V4.6V1Z"
                        stroke="#FFFCF5"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className=" old uppercase  px-4 pr-6 font-serif text-m hover text-cream ">
                    Go to website!
                  </p>
                  <p className="new uppercase  px-4 pr-6 font-serif text-m  text-cream   hidden absolute   ">
                    Go to website!
                  </p>
                </div>
              </a>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
