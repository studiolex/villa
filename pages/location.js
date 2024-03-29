import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Contact from "../components/contact";
import Footer from "../components/footer";
import UpperCircle from "../public/images/upper_circle.svg";
import DownCircle from "../public/images/down_circle.svg";
import Cultural from "../public/images/cultural.svg";
import Dining from "../public/images/dining.svg";
import Church from "../public/images/church.svg";
import Shopping from "../public/images/shopping.svg";
import Airport from "../public/images/airport.svg";

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
          <h1 className="font-sans text-5xl uppercase font-black text-brown tracking-widest sm:text-4xl xs:text-3xl ss:text-2xl">
            <span className="font-light">Heilige geeststraat 7,</span> Antwerpen
          </h1>
          <div>
            <div className="border-b-2 border-gold pb-10 my-16 w-[70%] xl:w-[75%] md:w-full md:pb-20 md:mb-6 ">
              <p className="pb-12">
                Villa Y&L, which is located{" "}
                <span className="italic font-medium">less than 50 meters</span>{" "}
                from ‘Vrijdagmarkt’, provides a wonderful location where you can
                enjoy the{" "}
                <span className="italic font-medium">
                  local market every Friday
                </span>
                .
                <br /> <br />
                In the surrounding area you can have many fun activities
                including <span className="italic font-medium">cycling</span>.
                Bikes can be rented at the accommodation.
              </p>
              <ul className="list-none mt-8 font-medium  italic grid grid-cols-2 text-brown lg:flex lg:flex-col  ">
                <div className="flex items-center space-x-2 my-2">
                  <Church />
                  <li className="">200 meters from the Our Lady Cathedral </li>
                </div>
                <div className="flex items-center space-x-2 my-2">
                  <Shopping />
                  <li className="">800 meters from the Meir</li>
                </div>
                <div className="flex items-center space-x-2 my-2">
                  <Airport />
                  <li className="">
                    The Antwerp International Airport is 5km away{" "}
                  </li>
                </div>
                <div className="flex items-center space-x-2 my-2">
                  <Airport />
                  <li className="">
                    Brussels International Airport is only 37km away{" "}
                  </li>
                </div>
              </ul>
            </div>
            <div className="relative">
              <div className="relative ">
                <Image
                  src="/images/location.png"
                  alt="Picture of 'de Vrijdagsmarkt'"
                  width={3060}
                  height={984}
                />
              </div>
              <div className="absolute right-[10%] -top-24 mb-24 xl:right-[4%] md:right-0">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.google.com/maps/place/Vrijdagmarkt,+2000+Antwerpen/@51.2184599,4.3986174,17z/data=!3m1!4b1!4m5!3m4!1s0x47c3f6f6bf5d9d87:0x1ff78967db0fcf94!8m2!3d51.2184599!4d4.3986174"
                  className="bg-brown text-cream rounded-full w-52 h-52 flex flex-col items-center justify-center	relative font-serif text-center font-bold xl:w-40 xl:h-40 sm:text-sm sm:w-34 sm:h-34"
                >
                  Vrijdagmarkt,
                  <span className="font-mono">Antwerpen</span>
                </a>
              </div>
            </div>
          </div>
        </article>
        <article className="mt-36 md:mt-28 ">
          <div className="w-[100rem] mx-auto mb-16 2xl:w-full 2xl:px-12 md:px-6 sm:px-4 xs:px-2">
            <h2 className="text-brown text-5xl pb-16  font-black leading-tight flex flex-wrap sm:text-4xl  sm:text-center xs:text-3xl ss:text-2xl md:pb-10">
              The{" "}
              <span className="relative mx-2 mb-8">
                <UpperCircle className="absolute -mt-6 sm:scale-[80%] sm:-left-1 xs:scale-[45%] xs:-left-5" />{" "}
                area{" "}
                <DownCircle className="absolute sm:scale-[80%] sm:-left-1 xs:scale-[45%] xs:-left-5" />
              </span>
              around
              <span className="italic font-light "> Y&L Villa.</span>
            </h2>
            <p>
              Location In the Heart of Historical Centre of Antwerp next to
              shops, restaurants and bars, all what you need.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12 items-center  mb-20 w-[100rem] mx-auto 2xl:w-full 2xl:px-12 md:px-6 md:flex md:flex-col md:items-start sm:px-4 xs:px-2">
            <div className="w-full">
              <div className="flex items-center border-b-2 border-gold pb-4 my-6">
                <Cultural />
                <p className="ml-2">Cultural</p>
              </div>
              <div>
                <ul className="list-disc ml-4 leading-loose">
                  <li>
                    Visit Antwerpen –
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.visitantwerpen.be/nl"
                      className="text-brown font-serif hover:opacity-50 transition ease-in-out duration-300 ml-1"
                    >
                      www.visitantwerpen.be
                    </a>
                  </li>{" "}
                  <li>
                    Bikerental Cyclant –
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.cyclant.com/en/"
                      className="text-brown font-serif hover:opacity-50 transition ease-in-out duration-300 ml-1"
                    >
                      www.cyclant.com
                    </a>
                  </li>
                  <li>Museum Plantin-Moretus “next to the house”</li>
                  <li>Cathedral of our Lady,</li>
                  <li>Townhall, Grand Place, Guild Houses</li>
                  <li>Folk Museum</li>
                  <li>Ethnography Museum</li>
                  <li>St Paul’s Church</li>
                  <li>Butcher’s Hall</li>
                  <li>Port Tour</li>
                  <li>St James’s Church</li>
                  <li>Antwerp Zoo</li>
                  <li>Diamond Museum</li>
                  <li>Rubens House</li>
                </ul>
              </div>
            </div>
            <div className="md:mx-auto">
              <Image
                src="/images/cultural.png"
                alt="Cultural locations in Antwerp"
                width={650}
                height={699}
              />
            </div>
          </div>
          <div className="bg-darkcream">
            <div className="w-[100rem] mx-auto grid grid-cols-2 gap-12 items-center  py-20  2xl:w-full 2xl:px-12 md:px-6 md:flex md:flex-col-reverse md:items-start md:pt-10">
              <div className="md:mx-auto">
                <Image
                  src="/images/dining.png"
                  alt="Images of dining places in Antwerp"
                  width={650}
                  height={735}
                />
              </div>
              <div className="w-full">
                <div className="flex items-center border-b-2 border-gold pb-4 my-6">
                  <Dining />
                  <p className="ml-2">Dining</p>
                </div>
                <div>
                  <ul className="list-disc ml-4 leading-loose">
                    <li>
                      Restaurant Invincible –
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.invincible.be"
                        className="text-gold font-serif hover:opacity-50 transition ease-in-out duration-300 ml-1"
                      >
                        www.invincible.be
                      </a>
                    </li>
                    <li>
                      Restaurant DIM –
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.dimdining.be"
                        className="text-gold font-serif hover:opacity-50 transition ease-in-out duration-300 ml-1"
                      >
                        www.dimdining.be
                      </a>
                    </li>
                    <li>Restaurant ’ T Fornuis * Michelin</li>
                    <li>
                      Restaurant Bistrot du Nord –
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.bistrotdunord.be"
                        className="text-gold font-serif hover:opacity-50 transition ease-in-out duration-300 ml-1"
                      >
                        www.bistrotdunord.be
                      </a>
                    </li>
                    <li>
                      Restaurant ’t Zilte –
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.zilte.be/"
                        className="text-gold font-serif hover:opacity-50 transition ease-in-out duration-300 ml-1"
                      >
                        www.tzilte.be
                      </a>
                    </li>
                    <li>
                      Restaurant the Jane * Michelin –
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.thejaneantwerp.com"
                        className="text-gold font-serif hover:opacity-50 transition ease-in-out duration-300 ml-1"
                      >
                        www.thejaneantwerp.com
                      </a>
                    </li>
                    <li>
                      Restaurant Het Gebaar –
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.hetgebaar.be"
                        className="text-gold font-serif hover:opacity-50 transition ease-in-out duration-300 ml-1"
                      >
                        www.hetgebaar.be
                      </a>
                    </li>
                    <li>
                      Restaurant Roji Sushi –
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.roji.be"
                        className="text-gold font-serif hover:opacity-50 transition ease-in-out duration-300 ml-1"
                      >
                        www.roji.be
                      </a>
                    </li>
                    <li>
                      Tamo Restaurant –
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.tamorestaurant.com/"
                        className="text-gold font-serif hover:opacity-50 transition ease-in-out duration-300 ml-1"
                      >
                        www.tamorestaurant.com
                      </a>
                    </li>{" "}
                    <li>
                      Restaurant Marcel –
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.restaurantmarcel.be/"
                        className="text-gold font-serif hover:opacity-50 transition ease-in-out duration-300 ml-1"
                      >
                        www.restaurantmarcel.be
                      </a>
                    </li>
                    <li>
                      Restaurant RAS –{" "}
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.ras.today"
                        className="text-gold font-serif hover:opacity-50 transition ease-in-out duration-300 ml-1"
                      >
                        {" "}
                        www.ras.today
                      </a>
                    </li>
                    <li>
                      Restaurant Pazzo –
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.pazzo.be"
                        className="text-gold font-serif hover:opacity-50 transition ease-in-out duration-300 ml-1"
                      >
                        {" "}
                        www.pazzo.be
                      </a>
                    </li>
                    <li>
                      Restaurant Plateau Royal –
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.plateauroyal.be"
                        className="text-gold font-serif hover:opacity-50 transition ease-in-out duration-300 ml-1"
                      >
                        www.plateauroyal.be
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </article>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
