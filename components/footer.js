import Link from "next/link";
import WhatsappGold from "../public/images/whatsapp_gold.svg";
import FacebookGold from "../public/images/facebook_gold.svg";
import InstagramGold from "../public/images/instagram_gold.svg";
import { useRouter } from "next/router";

function Footer() {
  const router = useRouter();
  const path = router.pathname;
  return (
    <>
      <footer className="">
        <div className="grid grid-cols-2  2xl:w-full lg:flex lg:flex-col md:gap-0">
          <div className="bg-darkcream p-12 py-20 2xl:px-12 md:py-10 md:space-y-6 lg:py-20 md:px-6 sm:px-2">
            <div className="w-[calc(50rem-3rem)] ml-auto  2xl:w-full">
              <div className="flex justify-between items-center mb-36 md:mb-0 md:pb-6 md:border-b-2 md:border-gold ">
                <div className="">
                  <Link className="" href="/">
                    <svg
                      width="53"
                      height="74"
                      viewBox="0 0 53 74"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.4296 47.3377L37.5064 18.0529H33.1794L22.6868 37.251L24.5318 29.0003H18.7532L12.9871 54.9971L12.4033 56.0652H11.8195L9.97755 44.8516H14.7759L17.6917 26.734C17.7573 26.3315 17.9196 25.9507 18.1663 25.6257L37.01 0.703125H32.8579L17.1173 23.0993H16.6334L8.21681 0.703125H1.98552L13.1275 26.4925C13.2836 26.8548 13.3211 27.2541 13.2368 27.638L9.73717 43.3965L5.57257 18.0529H0L8.10442 62.0064H11.4324L8.84431 73.6689H32.2678V69.8856C31.4187 70.5172 15.2036 70.7277 15.2036 70.7277L20.4328 47.3408L20.4296 47.3377Z"
                        fill="#B19C61"
                      />
                      <path
                        d="M26.3233 55H24.7031L23.0859 61.9133H24.7031L26.3233 55Z"
                        fill="#B19C61"
                      />
                      <path
                        d="M31.7143 61.4241L33.219 55H31.5988L29.9785 61.9133H31.5988H34.3897L34.5427 61.4241H31.7143Z"
                        fill="#B19C61"
                      />
                      <path
                        d="M40.0444 61.4241L41.5491 55H39.9289L38.3086 61.9133H39.9289H42.7198L42.8728 61.4241H40.0444Z"
                        fill="#B19C61"
                      />
                      <path
                        d="M51.4264 55H50.5523L46.5625 61.9133H47.5802L48.4856 60.0062H51.0768L51.3203 61.9133H52.9998L51.4264 55ZM48.8758 59.3096L50.0777 57.1455H50.5148L50.8613 59.3096H48.8789H48.8758Z"
                        fill="#B19C61"
                      />
                    </svg>
                  </Link>
                </div>
                <div className="flex items-center space-x-6 py-6 font-mono ">
                  <FacebookGold />
                  <InstagramGold />
                  <a href="https://wa.me/+32494924558">
                    <WhatsappGold />
                  </a>
                </div>
              </div>
              <ul className="font-mono md:mt-10 ">
                <div className="flex items-center justify-between md:flex-col md:space-y-6 lg:border-b-2 lg:border-gold lg:pb-10 ">
                  <li className="">
                    <Link className="" href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="">
                    <Link className="" href="/#about">
                      <a>About</a>
                    </Link>
                  </li>
                  <li className="">
                    <Link className="" href="/#gallery">
                      <a>Gallery</a>
                    </Link>
                  </li>
                  <li className="">
                    <Link className="" href="/#prices">
                      <a>Prices</a>
                    </Link>
                  </li>
                  <li className="">
                    <Link className="" href="/#practical">
                      <a>Practical info</a>
                    </Link>
                  </li>
                  <li className="">
                    <Link className="" href="/location">
                      <a>Location</a>
                    </Link>
                  </li>
                  <li className="">
                    <Link className="" href="/contact">
                      <a>Contact</a>
                    </Link>
                  </li>
                </div>
              </ul>
            </div>
          </div>
          <div className="w-[calc(50rem-3rem)] p-12 mr-auto grid grid-cols-2 gap-6 py-20 2xl:w-full md:flex md:px-6 md:justify-around md:py-10 sm:px-2">
            <div className="flex flex-col justify-between">
              <p className="text-gold py-6 font-serif">Contact</p>
              <p className="font-mono">
                Heilige Geeststraat 7, <br></br> 2000 Antwerp
              </p>
            </div>
            <div className="flex flex-col justify-between">
              <p className="text-gold py-6 font-serif">Linda Vogelenzang</p>
              <a className="font-mono">
                linda@ylvilla.be <br></br>
                +32 4 94 92 45 58
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
