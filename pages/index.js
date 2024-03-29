import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from "next/link";
import Contact from "../components/contact";
import Gallery from "../components/gallery";
import Wave from "../public/images/wave.svg";
import Eye from "../public/images/eye.svg";
import MiniGallery from "../components/minigallery";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Y&L Villa</title>
        <meta
          name="description"
          content="Y&L Villa is an ancient traditional townhouse located in the centre Antwerp. Book your stay at Y&L Villa and experience Antwerp in style."
        />
      </Head>

      <Navbar />

      <main className="">
        <div className="hidden md:block relative md:pt-16">
          <MiniGallery />
        </div>
        <header
          id="home"
          className="grid grid-cols-2 gap-12 w-[100rem] mx-auto py-16 h-screen md:flex md:flex-col 2xl:w-full 2xl:px-12 2xl:md:flex md:px-6 md:h-auto sm:px-4 xs:px-2 sm:pb-0"
        >
          <div className="flex flex-col justify-between">
            <div className="h-full w-full">
              <div className="w-full h-[50%] relative md:h-unset md:hidden">
                <Image
                  layout="fill"
                  className="w-full h-auto object-cover "
                  src="/images/header_1.png"
                  alt="Y&L Villa Welcome Gift"
                />
              </div>
              <div className="relative mb-12 hidden md:flex md:flex-row-reverse md:justify-between  -mt-32 ">
                <div className="relative">
                  <Link className="" href="/contact">
                    <a className="bg-brown text-cream rounded-full flex items-center justify-center	relative font-serif uppercase font-bold w-44 h-44 sm:text-sm sm:w-32 sm:h-32 xs:w-30 xs:h-30 ">
                      Get in touch
                    </a>
                  </Link>
                </div>
                <div className=" ">
                  <div className=" flex items-center border-2 border-brown rounded-full px-1 py-2 pr-6 bg-cream z-0 sm:py-1">
                    <div className="mx-4 sm:mx-3 sm:mr-2">
                      <svg
                        width="6"
                        height="24"
                        viewBox="0 0 6 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="md:scale-[70%] sm:scale-[45%]"
                      >
                        <path
                          d="M4.42047 17.39C4.12047 17.45 3.73047 17.48 3.25047 17.48C2.79047 17.48 2.23047 17.43 1.57047 17.33L0.850469 1.34C1.43047 1.28 2.06047 1.25 2.74047 1.25C3.44047 1.25 4.14047 1.33 4.84047 1.49L4.42047 17.39ZM1.00047 19.28C1.78047 19.22 2.44047 19.19 2.98047 19.19C3.54047 19.19 4.22047 19.28 5.02047 19.46C5.10047 20.04 5.14047 20.57 5.14047 21.05C5.14047 21.51 5.05047 22.19 4.87047 23.09C4.09047 23.15 3.42047 23.18 2.86047 23.18C2.32047 23.18 1.65047 23.09 0.850469 22.91C0.770469 22.33 0.730469 21.81 0.730469 21.35C0.730469 20.87 0.820469 20.18 1.00047 19.28Z"
                          fill="#B19C61"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.37152 1.79635L2.05127 16.8923C2.51796 16.9515 2.91689 16.98 3.25047 16.98C3.51185 16.98 3.73831 16.9707 3.93183 16.9534L4.32959 1.89527C3.79896 1.7983 3.26937 1.75 2.74047 1.75C2.25622 1.75 1.79999 1.76555 1.37152 1.79635ZM0.79902 0.842653C1.39864 0.780624 2.04603 0.75 2.74047 0.75C3.47892 0.75 4.21628 0.834433 4.95188 1.00257L5.35111 1.09382L4.90976 17.802L4.51853 17.8803C4.17343 17.9493 3.74708 17.98 3.25047 17.98C2.75698 17.98 2.17035 17.9266 1.49557 17.8244L1.08945 17.7628L0.329753 0.891197L0.79902 0.842653ZM1.41918 19.751C1.29042 20.4537 1.23047 20.9828 1.23047 21.35C1.23047 21.6911 1.25394 22.0725 1.30205 22.4951C1.92706 22.6207 2.44471 22.68 2.86047 22.68C3.31226 22.68 3.84233 22.6598 4.45189 22.6189C4.58076 21.918 4.64047 21.3994 4.64047 21.05C4.64047 20.6922 4.61688 20.3008 4.56875 19.875C3.942 19.7496 3.41411 19.69 2.98047 19.69C2.5458 19.69 2.02586 19.7101 1.41918 19.751ZM0.96212 18.7815C1.74977 18.7209 2.42341 18.69 2.98047 18.69C3.59011 18.69 4.30919 18.7875 5.13023 18.9722L5.46842 19.0483L5.51578 19.3917C5.59825 19.9896 5.64047 20.5428 5.64047 21.05C5.64047 21.5613 5.54218 22.281 5.36076 23.1881L5.28648 23.5595L4.90882 23.5885C4.12064 23.6492 3.43716 23.68 2.86047 23.68C2.26978 23.68 1.56023 23.5822 0.740713 23.3978L0.402523 23.3217L0.355158 22.9783C0.272833 22.3815 0.230469 21.838 0.230469 21.35C0.230469 20.8196 0.328432 20.0907 0.510178 19.1819L0.584462 18.8105L0.96212 18.7815Z"
                          fill="#B19C61"
                        />
                      </svg>
                    </div>
                    <p className="text-gold font-serif text-s sm:text-xs xs:text-[9px]">
                      Book directly and receive a bottle of champagne.
                    </p>
                  </div>
                </div>
              </div>
              <h1 className="text-brown text-right uppercase font-sans font-black text-8xl mt-6 leading-tight tracking-widest sm:text-6xl md:flex md:justify-center md:mt-0 xs:text-5xl">
                Y&L <br /> <span className="font-light">Villa</span>
              </h1>
            </div>
            <div className="relative mb-6 md:hidden">
              <div className="relative">
                <Link className="" href="/contact">
                  <a className="bg-brown text-cream rounded-full w-52 h-52 flex items-center justify-center	relative font-serif uppercase font-bold border-2 border-cream xl:w-44 xl:h-44 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-300 hover:text-gold hover:bg-cream hover hover:border-4 hover:border-brown">
                    Get in touch
                  </a>
                </Link>
              </div>
              <div className="absolute -bottom-8 left-16 flex items-center ml-8  ">
                <div className="z-2 lg:hidden">
                  {" "}
                  <Image
                    src="/images/champagne.png"
                    alt="Champagne bottle"
                    width={100}
                    height={100}
                  />
                </div>

                <div className="flex items-center border-2 border-brown rounded-full py-2 px-4 pr-6 bg-cream -ml-8 z-0 ">
                  <div className="mx-4">
                    <svg
                      width="6"
                      height="24"
                      viewBox="0 0 6 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.42047 17.39C4.12047 17.45 3.73047 17.48 3.25047 17.48C2.79047 17.48 2.23047 17.43 1.57047 17.33L0.850469 1.34C1.43047 1.28 2.06047 1.25 2.74047 1.25C3.44047 1.25 4.14047 1.33 4.84047 1.49L4.42047 17.39ZM1.00047 19.28C1.78047 19.22 2.44047 19.19 2.98047 19.19C3.54047 19.19 4.22047 19.28 5.02047 19.46C5.10047 20.04 5.14047 20.57 5.14047 21.05C5.14047 21.51 5.05047 22.19 4.87047 23.09C4.09047 23.15 3.42047 23.18 2.86047 23.18C2.32047 23.18 1.65047 23.09 0.850469 22.91C0.770469 22.33 0.730469 21.81 0.730469 21.35C0.730469 20.87 0.820469 20.18 1.00047 19.28Z"
                        fill="#B19C61"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.37152 1.79635L2.05127 16.8923C2.51796 16.9515 2.91689 16.98 3.25047 16.98C3.51185 16.98 3.73831 16.9707 3.93183 16.9534L4.32959 1.89527C3.79896 1.7983 3.26937 1.75 2.74047 1.75C2.25622 1.75 1.79999 1.76555 1.37152 1.79635ZM0.79902 0.842653C1.39864 0.780624 2.04603 0.75 2.74047 0.75C3.47892 0.75 4.21628 0.834433 4.95188 1.00257L5.35111 1.09382L4.90976 17.802L4.51853 17.8803C4.17343 17.9493 3.74708 17.98 3.25047 17.98C2.75698 17.98 2.17035 17.9266 1.49557 17.8244L1.08945 17.7628L0.329753 0.891197L0.79902 0.842653ZM1.41918 19.751C1.29042 20.4537 1.23047 20.9828 1.23047 21.35C1.23047 21.6911 1.25394 22.0725 1.30205 22.4951C1.92706 22.6207 2.44471 22.68 2.86047 22.68C3.31226 22.68 3.84233 22.6598 4.45189 22.6189C4.58076 21.918 4.64047 21.3994 4.64047 21.05C4.64047 20.6922 4.61688 20.3008 4.56875 19.875C3.942 19.7496 3.41411 19.69 2.98047 19.69C2.5458 19.69 2.02586 19.7101 1.41918 19.751ZM0.96212 18.7815C1.74977 18.7209 2.42341 18.69 2.98047 18.69C3.59011 18.69 4.30919 18.7875 5.13023 18.9722L5.46842 19.0483L5.51578 19.3917C5.59825 19.9896 5.64047 20.5428 5.64047 21.05C5.64047 21.5613 5.54218 22.281 5.36076 23.1881L5.28648 23.5595L4.90882 23.5885C4.12064 23.6492 3.43716 23.68 2.86047 23.68C2.26978 23.68 1.56023 23.5822 0.740713 23.3978L0.402523 23.3217L0.355158 22.9783C0.272833 22.3815 0.230469 21.838 0.230469 21.35C0.230469 20.8196 0.328432 20.0907 0.510178 19.1819L0.584462 18.8105L0.96212 18.7815Z"
                        fill="#B19C61"
                      />
                    </svg>
                  </div>
                  <p className="text-gold font-serif text-s">
                    Book directly and receive a bottle of champagne.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full h-full flex flex-col  ">
            <div className="w-full min-h-[60%] h-full relative md:h-unset ">
              <Image
                layout="fill"
                className="w-full h-auto object-cover  "
                src="/images/header_2.png"
                alt="Entrance of Y&L Villa"
              />
            </div>
            <p className="border-brown border-b-2  pb-4 my-6 md:pb-20">
              An ancient <span className="italic font-medium">traditional</span>{" "}
              townhouse,{" "}
              <span className="italic font-medium">completely renovated</span>{" "}
              with a lot of style and elegancy. <br /> <br /> Located in
              Antwerp, this holiday home is situated 100 metres from
              Plantin-Moretus Museum. The holiday home is 200 metres from
              Groenplaats Antwerp. Wi-Fi is available in all rooms. This service
              is free.
            </p>
            <div className="flex items-center mb-4 ">
              <Link className="" href="/#about">
                <a className="text-brown uppercase pr-2 font-serif hover:text-gold transition ease-in-out duration-300 ">
                  Read more
                </a>
              </Link>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 2V11H2M1 1L11 11L1 1Z"
                  stroke="#704E2E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </header>
        <article
          id="about"
          className="w-[100rem] mx-auto py-20 2xl:px-12 2xl:w-full h-auto md:px-6 sm:px-4 xs:px-2 mt-10 "
        >
          <div className="w-full h-auto ">
            <Image
              className="w-full h-full "
              src="/images/beautiful_house.png"
              alt="Master bedroom of Y&L Villa"
              width={3060}
              height={984}
            />
          </div>
          <div className="w-[100rem] mx-auto 2xl:w-full ">
            <h2 className="text-brown text-5xl pb-20 mt-24 italic leading-tight sm:text-4xl  sm:text-center xs:text-3xl ss:text-2xl sm:mt-16 sm:pb-16">
              <span className="font-black not-italic">
                A{" "}
                <span className="relative">
                  <Wave className="absolute -mt-2 top-0 left-10 sm:scale-[80%] sm:left-5 xs:scale-[45%] xs:left-1" />
                  Beautiful
                </span>{" "}
                House in the heart of{" "}
              </span>{" "}
              <br className="sm:hidden"></br>the Historical Centre of Antwerp
            </h2>
            <div className="grid grid-cols-2 gap-12 lg:flex lg:flex-col ">
              <p>
                You will find a{" "}
                <span className="italic font-medium">dining area</span>, living
                room and a <span className="italic font-medium">kitchen</span>.
                Towels and bed linen are provided at this self-catering property
                (
                <span className="italic font-medium">
                  Fresh sandwiches available on request every morning
                </span>
                ).
                <br /> <br />
                <span className="italic font-medium">
                  The master bedroom has its own bathroom with bath.
                </span>{" "}
                The 2 other rooms have a desk and a shared bathroom. Its perfect
                for a family, friends or business stay for a short or long term
                in Antwerp.
              </p>
              <div className="flex items-center justify-center space-x-10 sm:mt-10 lg:space-x-24 md:space-x-0 md:justify-around">
                <div>
                  <p className="text-gold text-6xl sm:text-5xl font-sans font-black">
                    180<span className="text-xs">m2</span>{" "}
                  </p>
                  <p className="font-mono font-light">Surface</p>
                </div>
                <div>
                  <p className="text-gold text-6xl sm:text-5xl font-sans font-black">
                    3
                  </p>
                  <p className="font-mono font-light">Bedrooms</p>
                </div>
                <div>
                  <p className="text-gold text-6xl sm:text-5xl font-sans font-black">
                    2
                  </p>
                  <p className="font-mono font-light">Toilets</p>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article
          id="gallery"
          className="pt-28 pb-20 bg-darkcream relative sm:py-10 sm:pt-24 my-2"
        >
          <h2 className="text-brown text-5xl italic  leading-tight text-center sm:text-4xl xs:text-3xl ss:text-2xl ">
            <span className="font-black not-italic flex justify-center">
              Take a l
              <span className="relative">
                <Eye className="absolute sm:scale-[75%] sm:-left-1 xs:scale-[45%] xs:-left-1.5" />
                o
              </span>
              <span className="relative">
                {" "}
                <Eye className="absolute sm:scale-[75%] sm:-left-1 xs:scale-[45%] xs:-left-1.5" />
                o
              </span>
              k
            </span>
            You&apos;re always welcome
          </h2>
          <div className="my-20 md:px-6 sm:px-4 xs:px-2 sm:my-10">
            <Gallery />{" "}
          </div>
        </article>
        <article id="prices" className="bg-brown  ">
          <div className="py-36 text-cream w-[100rem] mx-auto 2xl:w-full   2xl:px-12 md:px-6 md:py-24 md:pb-10 sm:px-4 xs:px-2">
            <div className="pb-20">
              <h2 className="text-5xl font-black sm:text-4xl sm:text-center xs:text-3xl ss:text-2xl">
                Price
                <span className="relative">
                  {/* <Line className="absolute left-[50%] top-[50%] -mt-5 " /> */}
                  <span className="">s</span>
                  {/* <Line className="absolute left-[50%] top-[50%] mt-3 " /> */}
                </span>
                <span className="font-light italic"> &</span> Amenities
              </h2>
              <p className="font-s font-sans italic font-light text-gold sm:text-center">
                (max 6 persons)
              </p>
            </div>
            <div className="grid grid-cols-2 gap-12 md:flex lg:flex lg:flex-col">
              <div className="flex flex-col justify-between">
                <div>
                  <div className="grid grid-cols-2 border-t-2 border-gold py-4 md:flex md:justify-between">
                    <div>
                      <p className="font-mono text-lg">Friday-Sunday</p>
                      <p className="text-gold text-xs italic font-normal">
                        (min. 2 nights)
                      </p>
                    </div>
                    <p className="text-6xl font-sans font-black md:text-4xl">
                      €249
                      <span className="text-gold text-sm font-light">
                        / night
                      </span>
                    </p>
                  </div>
                  <div className="grid grid-cols-2 border-t-2 border-gold py-4 md:flex md:justify-between">
                    <div>
                      <p className="font-mono text-lg">Monday-Thursday</p>
                    </div>
                    <p className="text-6xl font-sans font-black md:text-4xl">
                      €229
                      <span className="text-gold text-sm font-light">
                        / night
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center py-12 md:flex-col ">
                  <Link href="/contact">
                    <div className="inline-block min-w-max cursor-pointer ">
                      <div className="book flex bg-cream rounded-full items-center justify-end    transition ease-in-out duration-500  hover:bg-gold relative  h-[2.5rem]  min-w-[14rem]">
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
                        <p className=" old uppercase  px-4 pr-6 font-serif text-m hover text-brown ">
                          Book your stay!
                        </p>
                        <p className="new uppercase  px-4 pr-6 font-serif text-m  text-cream   hidden absolute   ">
                          Book your stay!
                        </p>
                      </div>
                    </div>
                  </Link>
                  <ul className="list-disc md:list-none">
                    <li className="pl-4 ml-8 text-xs font-bold italic md:text-center md:mt-6 md:pl-0 md:ml-0">
                      Book directly via this website for the best conditions.
                      Prices for events, workshops or business meetings are on
                      request.
                    </li>
                  </ul>
                </div>
                <p className="text-center text-xs font-thin italic md:text-left">
                  Price excludes €500,00 Caution which you get back at check-out
                  & cleaning €50 per stay. <br /> During Legal Holidays or
                  events prices are possible to change.
                </p>
              </div>
              <div>
                <div className="mb-8">
                  <Image
                    src="/images/kitchen.png"
                    alt="Kitchen of Y&L Villa"
                    width={3060}
                    height={984}
                  />
                </div>
                <div>
                  <p className="pb-6 font-mono text-lg">
                    Included in the price:
                  </p>
                  <ul className="flex auto-cols-max  items-center  w-full flex-wrap  justify-between font-sans font-light text-sm md:grid md:grid-cols-2">
                    <li className="flex flex-col items-center space-y-2 mb-6 md:flex-row md:space-x-4 md:space-y-0">
                      <div className="bg-gold  w-10 h-10  flex justify-center items-center rounded-full">
                        <svg
                          width="23"
                          height="18"
                          viewBox="0 0 23 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.8632 4.15151H9.29047V9.8892H8.27088V7.93888C8.2697 6.83387 7.84448 5.77447 7.08852 4.9931C6.33257 4.21173 5.3076 3.77221 4.2385 3.77096H1.92683V0.726562H0.454102V17.0902H1.92683V14.8191L21.0723 14.9774V17.0902H22.545V7.95701C22.5439 6.94808 22.1556 5.9808 21.4654 5.26738C20.7752 4.55396 19.8393 4.15266 18.8632 4.15151ZM1.92683 5.29316H4.2385C4.91713 5.29395 5.56774 5.57294 6.0476 6.06892C6.52746 6.5649 6.79738 7.23737 6.79815 7.93879V9.8891H1.92683V5.29316ZM21.0723 13.4552L1.92683 13.2969V11.4114H21.0723V13.4552ZM21.0723 9.8892H10.7632V5.67371H18.8632C19.4489 5.6744 20.0104 5.91518 20.4245 6.34324C20.8387 6.77129 21.0716 7.35165 21.0723 7.95701V9.8892Z"
                            fill="#FFFCF5"
                          />
                        </svg>
                      </div>
                      <p>Bedsheets</p>
                    </li>

                    <li className="flex flex-col items-center space-y-2 mb-6 md:flex-row md:space-x-4 md:space-y-0">
                      <div className="bg-gold  w-10 h-10  flex justify-center items-center rounded-full">
                        <svg
                          width="21"
                          height="21"
                          viewBox="0 0 21 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.3092 8.20898H1.90918V11.809H16.3092V8.20898Z"
                            stroke="#FFFCF5"
                            strokeWidth="2"
                            strokeMiterlimit="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.3092 5.5082V14.9582C16.3092 15.3162 16.1669 15.6596 15.9138 15.9128C15.6606 16.166 15.3172 16.3082 14.9592 16.3082H3.25918C2.90114 16.3082 2.55776 16.166 2.30459 15.9128C2.05141 15.6596 1.90918 15.3162 1.90918 14.9582V3.2582C1.90918 2.90016 2.05141 2.55678 2.30459 2.30361C2.55776 2.05043 2.90114 1.9082 3.25918 1.9082H18.5592C18.9172 1.9082 19.2606 2.05043 19.5138 2.30361C19.7669 2.55678 19.9092 2.90016 19.9092 3.2582V18.5582C19.9092 18.9162 19.7669 19.2596 19.5138 19.5128C19.2606 19.766 18.9172 19.9082 18.5592 19.9082H6.85918C6.50114 19.9082 6.15776 19.766 5.90459 19.5128C5.65141 19.2596 5.50918 18.9162 5.50918 18.5582V16.7582"
                            stroke="#FFFCF5"
                            strokeWidth="2"
                            strokeMiterlimit="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p>Towels</p>
                    </li>

                    <li className="flex flex-col items-center space-y-2 mb-6 md:flex-row md:space-x-4 md:space-y-0">
                      <div className="bg-gold  w-10 h-10  flex justify-center items-center rounded-full">
                        <svg
                          width="29"
                          height="23"
                          viewBox="0 0 29 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M23.7028 21.5645L23.3335 22.111C22.8425 21.7756 22.3784 21.4383 21.8913 21.1376C21.7131 21.0279 21.507 20.9718 21.2977 20.9761C20.3171 21.0323 19.4333 20.8114 18.6135 20.2446C15.8194 18.3115 13.009 16.4013 10.2084 14.478C9.99979 14.3405 9.80878 14.1781 9.63966 13.9942C9.09052 13.3725 8.87348 12.3481 10.0561 11.6845C9.65862 11.3126 9.3847 10.8798 9.43046 10.3182C9.47622 9.75668 9.79917 9.38078 10.2751 9.11994C9.71353 8.24001 9.67692 7.63203 10.1443 7.11623C10.6464 6.56513 11.4113 6.49192 12.2781 6.91619C12.2951 6.89266 12.3259 6.86978 12.3285 6.84363C12.4494 5.70743 13.7196 5.22759 14.6774 5.88133C15.5686 6.48887 16.4581 7.09902 17.3459 7.71179C18.1709 8.27792 18.9966 8.84341 19.8634 9.437C19.8584 9.37443 19.8497 9.31222 19.8373 9.25068C19.6412 8.58518 19.7889 8.03081 20.2544 7.65426C20.7198 7.27771 21.4108 7.2411 21.975 7.56601C22.1174 7.64568 22.2468 7.74665 22.3588 7.86542C23.0903 8.67278 23.8218 9.47949 24.5364 10.3012C25.4156 11.3132 25.8687 12.5154 26.0105 13.8314C26.0537 14.2348 26.1982 14.5041 26.5551 14.7107C26.9853 14.9591 27.3814 15.267 27.8181 15.5671L27.4409 16.1071C26.8094 15.6756 26.1988 15.2638 25.5948 14.8362C25.5137 14.778 25.4679 14.6401 25.4483 14.5322C25.3829 14.157 25.3391 13.7778 25.2757 13.4019C25.0888 12.2977 24.5958 11.342 23.8512 10.5117C23.2119 9.79786 22.571 9.08529 21.9286 8.37402C21.841 8.27708 21.7386 8.19456 21.6253 8.12953C21.2611 7.92295 20.8172 7.9857 20.5793 8.2642C20.3413 8.54269 20.3433 8.90813 20.6009 9.25722C21.2271 10.1071 21.8645 10.9504 22.4967 11.7963C22.5893 11.9098 22.6622 12.038 22.7124 12.1755C22.6078 12.1101 22.5019 12.0448 22.3999 11.9794L14.4459 6.52656C14.3663 6.4695 14.2836 6.4169 14.1982 6.36901C13.7981 6.1559 13.3352 6.24219 13.1136 6.56513C12.892 6.88808 12.9698 7.36662 13.3241 7.64772C13.6307 7.89091 13.9622 8.10534 14.2851 8.32499C15.4801 9.14521 16.6754 9.965 17.8709 10.7844C17.933 10.8268 17.9911 10.8746 18.0859 10.9458L17.7251 11.4754C17.5015 11.327 17.2943 11.1936 17.0903 11.0537C15.401 9.89527 13.7113 8.73772 12.0212 7.58104C11.839 7.44726 11.6304 7.35367 11.4093 7.30647C10.9981 7.2411 10.6307 7.45749 10.5235 7.76409C10.4039 8.10534 10.547 8.47405 10.9059 8.7205C11.6061 9.201 12.3108 9.67561 13.0116 10.1587C14.3583 11.0822 15.7042 12.0073 17.0491 12.9338C17.0888 12.967 17.1263 13.0026 17.1616 13.0404L16.7883 13.5568C16.2986 13.2221 15.824 12.9031 15.35 12.5762C14.0862 11.7046 12.8212 10.8329 11.5551 9.9613C11.4897 9.91815 11.4302 9.87369 11.3649 9.83512C10.9197 9.56905 10.4621 9.64619 10.213 10.0273C9.97176 10.396 10.0822 10.8654 10.5085 11.1648C11.221 11.6662 11.9428 12.1533 12.6619 12.6455C13.6922 13.3516 14.7238 14.057 15.79 14.7865L15.4207 15.333C14.848 14.9408 14.2923 14.5669 13.7405 14.187C12.9698 13.6569 12.2082 13.1136 11.4276 12.5991C11.2047 12.4665 10.9619 12.3705 10.7085 12.3147C10.5757 12.2762 10.4342 12.2808 10.3041 12.3277C10.1741 12.3747 10.0623 12.4617 9.98483 12.5762C9.79459 12.8292 9.80767 13.1254 9.99529 13.3339C10.2813 13.6569 10.6045 13.9448 10.9582 14.1916C13.6569 16.0515 16.3679 17.8931 19.0698 19.7484C19.4086 19.988 19.7917 20.1577 20.1968 20.2475C20.6019 20.3373 21.0209 20.3454 21.4291 20.2714C21.534 20.25 21.6421 20.2515 21.7463 20.2759C21.8505 20.3003 21.9481 20.3469 22.0325 20.4126C22.5712 20.797 23.1223 21.1663 23.7028 21.5645Z"
                            fill="#FFFCF5"
                            stroke="#FFFCF5"
                            strokeWidth="0.6"
                          />
                          <path
                            d="M4.16016 5.1208L4.58705 4.93644L4.43276 3.94734L21.7496 0.455078C22.0634 2.23586 22.3713 3.97937 22.6857 5.76211L22.0379 5.89286C21.7633 4.34546 21.4927 2.81834 21.2148 1.23956L5.18979 4.47164C6.10175 9.64531 7.00914 14.7941 7.92372 19.9796L14.4813 18.6603C14.5258 18.8931 14.5618 19.0813 14.6049 19.3088L7.39484 20.7654C7.31574 20.3378 7.24187 19.9345 7.168 19.5324C6.85878 19.4572 6.85878 19.4572 6.78099 18.995C6.87447 18.8355 7.01045 18.7133 6.99476 18.6159C6.76203 17.1992 6.50903 15.7865 6.25734 14.3516L5.91152 14.3797C5.86641 14.2613 5.82261 14.1404 5.77489 14.0214C5.71474 13.8737 5.73632 13.7599 5.91021 13.7279C6.0841 13.6959 6.13379 13.5971 6.10241 13.4226C5.8468 12.021 5.59838 10.6187 5.34211 9.18704L4.89561 9.28052C4.82305 9.0929 4.7544 8.91377 4.67138 8.69804L5.22117 8.48558C5.05512 7.54485 4.89038 6.60608 4.72041 5.64052L4.39354 5.70001C4.32098 5.51827 4.2458 5.33195 4.16016 5.1208Z"
                            fill="#FFFCF5"
                            stroke="#FFFCF5"
                            strokeWidth="0.6"
                          />
                          <path
                            d="M1.97204 11.2819L2.03629 11.3613L2.11427 11.2954L2.57254 10.9084L2.65249 10.8409L2.58141 10.7641L2.15125 10.2993L2.08323 10.2258L2.00983 10.2939L1.59994 10.6744L1.53143 10.738L1.59026 10.8106L1.97204 11.2819Z"
                            fill="#FFFCF5"
                            stroke="#FFFCF5"
                            strokeWidth="0.2"
                          />
                          <path
                            d="M1.26948 11.1507L1.18958 11.0821L1.12521 11.1654L0.748008 11.6538L0.686005 11.734L0.767148 11.7949L1.29014 12.1871L1.36793 12.2455L1.42842 12.1694L1.78536 11.7202L1.84528 11.6449L1.77221 11.5821L1.26948 11.1507Z"
                            fill="#FFFCF5"
                            stroke="#FFFCF5"
                            strokeWidth="0.2"
                          />
                          <path
                            d="M2.15447 16.0185L2.09062 15.9558L2.02123 16.0123L1.6048 16.3516L1.52636 16.4155L1.59119 16.4932L1.95729 16.9319L2.01654 17.0029L2.09195 16.9493L2.58094 16.6022L2.67837 16.533L2.59313 16.4493L2.15447 16.0185Z"
                            fill="#FFFCF5"
                            stroke="#FFFCF5"
                            strokeWidth="0.2"
                          />
                          <path
                            d="M3.66958 5.31166L3.62427 5.2187L3.53288 5.2671C3.5212 5.27328 3.50966 5.2794 3.49823 5.28545C3.31538 5.38228 3.16377 5.46257 2.99531 5.55389L2.90656 5.60201L2.95551 5.6903C3.06868 5.89439 3.16679 6.07034 3.27337 6.26126L3.32044 6.34559L3.40636 6.30148L3.91562 6.03998L4.00274 5.99525L3.95984 5.90721L3.66958 5.31166Z"
                            fill="#FFFCF5"
                            stroke="#FFFCF5"
                            strokeWidth="0.2"
                          />
                          <path
                            d="M2.46335 9.85315L2.37755 9.91603L2.4456 9.99778L2.87053 10.5084L2.93213 10.5824L3.00842 10.5236L3.45558 10.1791L3.53061 10.1213L3.47695 10.0432L3.1089 9.5078L3.05051 9.42287L2.96738 9.48379L2.46335 9.85315Z"
                            fill="#FFFCF5"
                            stroke="#FFFCF5"
                            strokeWidth="0.2"
                          />
                          <path
                            d="M3.43984 14.7989L3.35471 14.8539L3.41092 14.9383L3.77505 15.4848L3.82927 15.5662L3.91183 15.5138L4.39625 15.2066L4.47828 15.1546L4.42865 15.071C4.40507 15.0314 4.38228 14.993 4.36006 14.9557C4.26579 14.7971 4.18172 14.6557 4.0908 14.5019L4.03783 14.4122L3.95041 14.4688L3.43984 14.7989Z"
                            fill="#FFFCF5"
                            stroke="#FFFCF5"
                            strokeWidth="0.2"
                          />
                          <path
                            d="M1.26883 16.8429L1.19067 16.7741L1.12509 16.855L0.740692 17.3289L0.676871 17.4076L0.756392 17.4704L1.26892 17.8751L1.34644 17.9363L1.4086 17.8595C1.53673 17.7013 1.64839 17.5635 1.77114 17.4134L1.83216 17.3387L1.75978 17.275L1.26883 16.8429Z"
                            fill="#FFFCF5"
                            stroke="#FFFCF5"
                            strokeWidth="0.2"
                          />
                          <path
                            d="M6.2303 19.0142L6.19546 18.9134L6.09707 18.9547L5.53355 19.1913L5.44272 19.2295L5.4795 19.3209C5.52717 19.4393 5.56962 19.5453 5.61139 19.6496C5.64653 19.7374 5.6812 19.8239 5.71809 19.9157L5.75455 20.0064L5.84604 19.972L6.38734 19.7687L6.47832 19.7346L6.44675 19.6426C6.37286 19.4275 6.31074 19.247 6.2303 19.0142Z"
                            fill="#FFFCF5"
                            stroke="#FFFCF5"
                            strokeWidth="0.2"
                          />
                          <path
                            d="M3.35298 20.381L3.26769 20.4404L3.33039 20.5233L3.72983 21.0515L3.78887 21.1296L3.8682 21.0723L4.33366 20.7356L4.41269 20.6784L4.35751 20.598L3.9888 20.0606L3.93181 19.9775L3.84916 20.0351L3.35298 20.381Z"
                            fill="#FFFCF5"
                            stroke="#FFFCF5"
                            strokeWidth="0.2"
                          />
                          <path
                            d="M1.58458 22.1621L1.51885 22.2454L1.6059 22.3061L2.15177 22.6865L2.23041 22.7413L2.2885 22.6651L2.62518 22.2232L2.68232 22.1482L2.61079 22.0867L2.11461 21.6605L2.03582 21.5928L1.97118 21.6741C1.83905 21.8402 1.72653 21.9822 1.58458 22.1621Z"
                            fill="#FFFCF5"
                            stroke="#FFFCF5"
                            strokeWidth="0.2"
                          />
                          <path
                            d="M2.91604 6.59313L2.99996 6.53824L2.94484 6.45447L2.58136 5.90206L2.52565 5.81739L2.44173 5.87425L1.94293 6.21223L1.85783 6.26989L1.91781 6.35336L2.29829 6.88289L2.35413 6.96061L2.43423 6.90823L2.91604 6.59313Z"
                            fill="#FFFCF5"
                            stroke="#FFFCF5"
                            strokeWidth="0.2"
                          />
                          <path
                            d="M4.77106 14.8962L4.81639 14.9828L4.90401 14.9395L5.41524 14.6865L5.50131 14.6439L5.46223 14.5562C5.39492 14.4051 5.333 14.2629 5.26543 14.1078C5.24461 14.06 5.22326 14.0109 5.20104 13.96L5.15989 13.8657L5.06681 13.9095L4.51113 14.171L4.41745 14.2151L4.46476 14.3072C4.57054 14.5131 4.66119 14.6863 4.75921 14.8736L4.77106 14.8962Z"
                            fill="#FFFCF5"
                            stroke="#FFFCF5"
                            strokeWidth="0.2"
                          />
                          <path
                            d="M2.44449 15.5492L2.36588 15.6135L2.43141 15.6911L2.85046 16.1873L2.91317 16.2615L2.98918 16.201L3.44287 15.8395L3.52045 15.7776L3.45926 15.6996L3.05394 15.1825L2.99094 15.1021L2.91191 15.1667L2.44449 15.5492Z"
                            fill="#FFFCF5"
                            stroke="#FFFCF5"
                            strokeWidth="0.2"
                          />
                          <path
                            d="M4.68392 20.4256L4.73156 20.512L4.81858 20.4655L5.32915 20.1929L5.41386 20.1477L5.37209 20.0612L5.08379 19.4643L5.03766 19.3688L4.94503 19.4205L4.40831 19.7199L4.3214 19.7684L4.36947 19.8555L4.68392 20.4256Z"
                            fill="#FFFCF5"
                            stroke="#FFFCF5"
                            strokeWidth="0.2"
                          />
                          <path
                            d="M1.98227 7.25216L2.05946 7.18797L1.99497 7.11104L1.56808 6.60177L1.50261 6.52368L1.42577 6.5906L0.975344 6.98284L0.899444 7.04894L0.966026 7.12441L1.39684 7.61275L1.46109 7.68559L1.53577 7.62349L1.98227 7.25216Z"
                            fill="#FFFCF5"
                            stroke="#FFFCF5"
                            strokeWidth="0.2"
                          />
                          <path
                            d="M4.17668 8.88185L4.12908 8.78451L4.03586 8.83976L3.4998 9.15747L3.41274 9.20907L3.46537 9.2955L3.79812 9.84202L3.84782 9.92365L3.93161 9.8777L4.42518 9.60706L4.50886 9.56117L4.46694 9.47544L4.17668 8.88185Z"
                            fill="#FFFCF5"
                            stroke="#FFFCF5"
                            strokeWidth="0.2"
                          />
                          <path
                            d="M3.42964 21.4218L3.5025 21.3542L3.43544 21.2809L2.97194 20.7743L2.90058 20.6963L2.82666 20.7719L2.42069 21.187L2.35271 21.2565L2.4203 21.3264L2.87791 21.7997L2.94597 21.8701L3.01779 21.8036L3.42964 21.4218Z"
                            fill="#FFFCF5"
                            stroke="#FFFCF5"
                            strokeWidth="0.2"
                          />
                        </svg>
                      </div>
                      <p>Dishcloths</p>
                    </li>

                    <li className="flex flex-col items-center space-y-2 mb-6 md:flex-row md:space-x-4 md:space-y-0">
                      <div className="bg-gold  w-10 h-10  flex justify-center items-center rounded-full">
                        <svg
                          width="17"
                          height="21"
                          viewBox="0 0 17 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.50044 19.09C6.65598 19.09 4.88707 18.3659 3.58284 17.077C2.27861 15.7882 1.5459 14.0401 1.5459 12.2173C1.5459 9.20876 3.90175 6.80244 5.97334 4.59716L8.50044 1.9082L11.0276 4.59716C13.0991 6.8033 15.455 9.20962 15.455 12.2173C15.455 14.0401 14.7223 15.7882 13.4181 17.077C12.1138 18.3659 10.3449 19.09 8.50044 19.09V19.09Z"
                            stroke="#FFFCF5"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p>Water</p>
                    </li>

                    <li className="flex flex-col items-center space-y-2 mb-6 md:flex-row md:space-x-4 md:space-y-0">
                      <div className="bg-gold  w-10 h-10  flex justify-center items-center rounded-full">
                        <svg
                          width="13"
                          height="19"
                          viewBox="0 0 13 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.016 0.910156L5.27237 6.59437L12.636 8.96279L4.92874 15.9259L7.43237 17.2523L0.363281 18.9102L1.68874 11.8996L3.11237 14.3154L7.72692 9.91016L0.363281 7.54174L6.7451 0.910156H11.016Z"
                            fill="#FFFCF5"
                          />
                        </svg>
                      </div>
                      <p>Electricity</p>
                    </li>

                    <li className="flex flex-col items-center space-y-2 mb-6 md:flex-row md:space-x-4 md:space-y-0">
                      <div className="bg-gold  w-10 h-10  flex justify-center items-center rounded-full">
                        <svg
                          width="17"
                          height="20"
                          viewBox="0 0 17 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.7242 6.05853L12.7044 6.06842C12.9317 6.33523 13.1294 6.65145 13.2776 6.97755L13.3665 7.16531C14.0682 8.83536 13.5741 10.7623 12.2795 11.9679C11.1036 13.0451 9.46317 13.3316 7.94135 13.134C6.49859 12.9561 5.17441 12.047 4.4135 10.792C4.18622 10.4066 3.98858 9.97178 3.88976 9.52709C3.76129 9.16146 3.72177 8.80571 3.69212 8.44008C3.60318 6.85897 4.23563 5.17904 5.43134 4.19085C4.88783 5.38656 5.0163 6.87873 5.81674 7.91634L5.92544 8.0448C6.06378 8.16339 6.23178 8.20291 6.38989 8.13374C6.53812 8.07445 6.6567 7.92622 6.6567 7.74834L6.58753 7.53094C5.71792 5.23833 6.44918 2.56033 8.2971 1.04839C8.80108 0.63335 9.42364 0.257837 10.0759 0.0898438C9.40388 1.43379 9.62128 3.19277 10.6984 4.25014C11.153 4.71459 11.6965 5.02093 12.1708 5.45574L12.7242 6.05853ZM10.4711 10.6438L10.4612 10.6339C10.9059 10.2485 11.153 9.58638 11.1332 8.99347L11.1036 8.67725C10.9059 7.68905 10.0462 7.36295 9.49282 6.64157C9.32482 6.42417 9.17659 6.14747 9.06789 5.87078C8.85049 6.36487 8.83073 6.82932 8.91966 7.36295C9.01848 7.92622 9.24577 8.41043 9.12718 8.99347C8.96907 9.63579 8.46509 10.2781 7.5856 10.4856C8.0797 10.9699 8.88014 11.3553 9.68057 11.0786C9.9375 11.0094 10.2636 10.8216 10.4711 10.6438ZM7.64489 15.1598V16.148C7.64489 16.6915 8.08958 17.1362 8.63309 17.1362C9.17659 17.1362 9.62128 16.6915 9.62128 16.148V15.1598H11.5977V16.148C11.5977 16.6915 12.0424 17.1362 12.5859 17.1362C13.1294 17.1362 13.5741 16.6915 13.5741 16.148V15.1598C14.6709 15.1598 16.5386 16.0492 16.5386 17.1362V19.1126H0.727539V17.1362C0.727539 16.0492 2.60511 15.1598 3.69212 15.1598V16.148C3.69212 16.6915 4.13681 17.1362 4.68031 17.1362C5.22382 17.1362 5.66851 16.6915 5.66851 16.148V15.1598H7.64489Z"
                            fill="#FFFCF5"
                          />
                        </svg>
                      </div>
                      <p>Gas</p>
                    </li>

                    <li className="flex flex-col items-center space-y-2 mb-6 md:flex-row md:space-x-4 md:space-y-0">
                      <div className="bg-gold  w-10 h-10  flex justify-center items-center rounded-full">
                        <svg
                          width="20"
                          height="14"
                          viewBox="0 0 20 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.72754 5.27275C6.63663 -0.182064 13.1821 -0.182064 18.0912 5.27275M5.00027 8.54548C7.94572 5.27275 11.873 5.27275 14.8184 8.54548"
                            stroke="#FFFCF5"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9.90998 12.6364C10.3618 12.6364 10.7282 12.2701 10.7282 11.8182C10.7282 11.3663 10.3618 11 9.90998 11C9.45811 11 9.0918 11.3663 9.0918 11.8182C9.0918 12.2701 9.45811 12.6364 9.90998 12.6364Z"
                            stroke="#FFFCF5"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p>WiFi</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article
          id="practical"
          className="w-[100rem] mx-auto 2xl:w-full 2xl:px-12 py-36 md:px-6 md:py-24 my-2 sm:px-2"
        >
          <div>
            <h2 className="text-brown text-5xl pb-20 font-light italic leading-tight text-center sm:text-4xl xs:text-3xl ss:text-2xl ">
              <span className="font-black cursor-not-italic relative">
                Practical{" "}
                <Wave className="absolute left-[35%] sm:scale-[70%] xs:scale-[45%] " />
              </span>{" "}
              information
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-12 md:flex md:flex-col-reverse py-20 lg:py-8 md:py-0 ">
            <div>
              <div>
                <p>
                  Public Parking space available around the corner (5 min walk
                  distance from the house) at{" "}
                  <span className="italic font-medium">
                    Parking Brabo Kammenstraat Antwerp/ Grote markt/
                    Scheldenkaaien.{" "}
                  </span>
                  <br />
                  <br />
                  Payment is to be made cash or by credit card on arrival, or by
                  bank transfer prior to arrival. For a stay longer then 7
                  nights, we request a deposit of 25% of the total amount.
                </p>
                <br />
                <ul className="list-disc ml-8 font-medium text-sm italic ">
                  <li className="">
                    Please note that the city tax is € 2,97 per person per
                    night.
                  </li>
                  <li className="">
                    Please note that the entire house is a non smoking area.
                  </li>
                </ul>
                <br />
                <p>
                  A deposit of € 500 is required on arrival. This deposit is
                  fully refundable upon check-out, after inspection of the
                  accommodation
                </p>
              </div>
            </div>
            <div className="my-auto flex flex-col space-y-6 mx-auto md:grid grid-cols-2  md:space-y-0 md:gap-6 md:mx-0 md:mt-6">
              <div className="grid grid-cols-3  md:mx-auto md:grid-cols-2">
                <svg
                  width="53"
                  height="54"
                  viewBox="0 0 53 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 22L24.9695 3.57643C25.5786 2.16847 27.2464 1.58649 28.5842 2.31511L43 10.1663"
                    stroke="#704E2E"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M30 34.8966V10H51V48H30V42.7586"
                    stroke="#704E2E"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 52C13.7 52 14.6998 45.0475 18.0292 44.5625C21.9585 43.9901 25.9612 43.6958 29.4343 42.8462C33.8461 41.7669 37.4035 40.3774 38.871 39.7663C39.3478 39.5676 39.7446 39.2219 39.9831 38.7614C40.7154 37.3473 42.0274 34.2286 39.5971 33.8354C36.4409 33.3246 26.6748 37.0705 21.6659 36.3894C16.657 35.7084 18.4181 32.3029 19.9963 31.2813C24.2821 28.5067 29.3 29.7692 29.3 29.7692V18C29.3 18 10.2335 22.9038 3.3 31.2813"
                    stroke="#704E2E"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M38 22H51"
                    stroke="#704E2E"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div>
                  <p className="font-sans font-black text-6xl text-gold sm:text-5xl">
                    15<span className="text-xs uppercase">pm</span>
                  </p>
                  <p>Check-in</p>
                </div>
              </div>
              <div className="grid grid-cols-3 md:mx-auto md:grid-cols-2">
                <svg
                  width="48"
                  height="50"
                  viewBox="0 0 48 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.04 12C22.4296 12 22.8032 12.1547 23.0786 12.4302C23.354 12.7056 23.5088 13.0792 23.5088 13.4687V28.7731L33.0498 34.2251C33.3781 34.4232 33.616 34.7419 33.7125 35.113C33.8091 35.4842 33.7566 35.8784 33.5663 36.2114C33.376 36.5444 33.0631 36.7897 32.6943 36.895C32.3255 37.0003 31.9302 36.9572 31.5928 36.7748L21.3115 30.8998C21.0867 30.7714 20.8999 30.5859 20.7699 30.362C20.6399 30.1381 20.5714 29.8838 20.5713 29.625V13.4687C20.5713 13.0792 20.726 12.7056 21.0015 12.4302C21.2769 12.1547 21.6505 12 22.04 12Z"
                    fill="#704E2E"
                  />
                  <circle
                    cx="23.5"
                    cy="26.5"
                    r="22"
                    stroke="#704E2E"
                    strokeWidth="3"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M45.5 27.5C45.5 14.5213 34.9787 4 22 4"
                    stroke="#FFFCF5"
                    strokeWidth="4"
                  />
                  <path
                    d="M45.5 27.5C45.5 14.5213 37.9787 4 25 4"
                    stroke="#704E2E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="0.2 5"
                  />
                  <path
                    d="M21 8V1L27 3.8L21 8Z"
                    fill="#704E2E"
                    stroke="#704E2E"
                  />
                </svg>

                <div>
                  <p className="font-sans font-black text-6xl text-gold sm:text-5xl">
                    12<span className="text-xs uppercase">pm</span>
                  </p>
                  <p>Check-out</p>
                </div>
              </div>
              <div className="md:col-span-2 md:text-center ">
                <div className="inline-block min-w-max  md:text-center md:mt-8">
                  <div className="flex border-2 border-gold rounded-full p-2 py-2 px-4 pr-6 items-center">
                    <div className="mx-4">
                      <svg
                        width="6"
                        height="24"
                        viewBox="0 0 6 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.42047 17.39C4.12047 17.45 3.73047 17.48 3.25047 17.48C2.79047 17.48 2.23047 17.43 1.57047 17.33L0.850469 1.34C1.43047 1.28 2.06047 1.25 2.74047 1.25C3.44047 1.25 4.14047 1.33 4.84047 1.49L4.42047 17.39ZM1.00047 19.28C1.78047 19.22 2.44047 19.19 2.98047 19.19C3.54047 19.19 4.22047 19.28 5.02047 19.46C5.10047 20.04 5.14047 20.57 5.14047 21.05C5.14047 21.51 5.05047 22.19 4.87047 23.09C4.09047 23.15 3.42047 23.18 2.86047 23.18C2.32047 23.18 1.65047 23.09 0.850469 22.91C0.770469 22.33 0.730469 21.81 0.730469 21.35C0.730469 20.87 0.820469 20.18 1.00047 19.28Z"
                          fill="#B19C61"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.37152 1.79635L2.05127 16.8923C2.51796 16.9515 2.91689 16.98 3.25047 16.98C3.51185 16.98 3.73831 16.9707 3.93183 16.9534L4.32959 1.89527C3.79896 1.7983 3.26937 1.75 2.74047 1.75C2.25622 1.75 1.79999 1.76555 1.37152 1.79635ZM0.79902 0.842653C1.39864 0.780624 2.04603 0.75 2.74047 0.75C3.47892 0.75 4.21628 0.834433 4.95188 1.00257L5.35111 1.09382L4.90976 17.802L4.51853 17.8803C4.17343 17.9493 3.74708 17.98 3.25047 17.98C2.75698 17.98 2.17035 17.9266 1.49557 17.8244L1.08945 17.7628L0.329753 0.891197L0.79902 0.842653ZM1.41918 19.751C1.29042 20.4537 1.23047 20.9828 1.23047 21.35C1.23047 21.6911 1.25394 22.0725 1.30205 22.4951C1.92706 22.6207 2.44471 22.68 2.86047 22.68C3.31226 22.68 3.84233 22.6598 4.45189 22.6189C4.58076 21.918 4.64047 21.3994 4.64047 21.05C4.64047 20.6922 4.61688 20.3008 4.56875 19.875C3.942 19.7496 3.41411 19.69 2.98047 19.69C2.5458 19.69 2.02586 19.7101 1.41918 19.751ZM0.96212 18.7815C1.74977 18.7209 2.42341 18.69 2.98047 18.69C3.59011 18.69 4.30919 18.7875 5.13023 18.9722L5.46842 19.0483L5.51578 19.3917C5.59825 19.9896 5.64047 20.5428 5.64047 21.05C5.64047 21.5613 5.54218 22.281 5.36076 23.1881L5.28648 23.5595L4.90882 23.5885C4.12064 23.6492 3.43716 23.68 2.86047 23.68C2.26978 23.68 1.56023 23.5822 0.740713 23.3978L0.402523 23.3217L0.355158 22.9783C0.272833 22.3815 0.230469 21.838 0.230469 21.35C0.230469 20.8196 0.328432 20.0907 0.510178 19.1819L0.584462 18.8105L0.96212 18.7815Z"
                          fill="#B19C61"
                        />
                      </svg>
                    </div>
                    <p className="text-gold text-sm">
                      Check-in is by appointment only.
                    </p>
                  </div>
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
