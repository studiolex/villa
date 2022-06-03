import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import MenuOpen from "../public/images/menu_open.svg";
import MenuClosed from "../public/images/menu_close.svg";
import Logo from "../public/images/logo.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import Scrollspy from "react-scrollspy";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  const router = useRouter();
  const path = router.pathname;

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Gallery", href: "/#gallery" },
    { name: "Prices", href: "/#prices" },
    { name: "Practical", href: "/#practical" },
    {
      name: "Location",
      href: "location",
      current: path === "/location" ? true : false,
    },
    {
      name: "Contact",
      href: "contact",
      current: path === "/contact" ? true : false,
    },
  ];

  return (
    <Disclosure
      as="nav"
      className="bg-cream py-2 px-10 fixed z-10  w-full 2xl:w-full 2xl:px-12 md:px-6 md:py-4 sm:px-4 xs:px-2 md:shadow-lg

      "
    >
      {({ open }) => (
        <>
          <div className="relative flex items-center justify-between md:flex-row-reverse md:relative">
            {/* Mobile menu button*/}
            <div className=" inset-y-0 left-0 hidden items-center md:flex">
              <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 h focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <div className="flex items-center space-x-2">
                    <p className="font-black text-gold uppercase ">Close</p>
                    <MenuClosed />
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <p className="font-black text-gold uppercase ">Menu</p>
                    <MenuOpen />
                  </div>
                )}
              </Disclosure.Button>
            </div>
            {/* Logo */}
            <div className="flex items-center justify-center md:items-stretch md:absolute md:left-[47.5%] md:-top-1 ">
              <Link href="/" to="home">
                <div className="cursor-pointer ">
                  <Logo />
                </div>
              </Link>
            </div>
            {/* Menu Desktop */}
            <div className="block md:hidden">
              <div className="ml-32">
                {path == "/" && (
                  <Scrollspy
                    items={["home", "about", "gallery", "prices", "practical"]}
                    currentClassName="active"
                    className="flex space-x-4 "
                  >
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        smooth
                        href={item.href}
                        className={classNames(
                          item.current ? " text-brown " : "text-gold ",
                          "text-xs font-black uppercase hover:opacity-50 transition ease-in-out duration-300"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </Scrollspy>
                )}
                {path != "/" && (
                  <div className="flex space-x-4  ">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        smooth
                        href={item.href}
                        className={classNames(
                          item.current ? " text-brown " : "text-gold ",
                          "text-xs font-black uppercase hover:opacity-50 transition ease-in-out duration-300"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
            {/* Whatsapp*/}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/+32494924558"
              className="flex items-center border-2 border-whatsapp rounded-full min-w-max cursor-pointer md:hidden hover:opacity-75 transition ease-in-out duration-500"
            >
              <div className="bg-whatsapp rounded-full  p-2">
                <svg
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.2242 2.77467C15.3492 1.89156 14.3072 1.19143 13.1589 0.71507C12.0106 0.238711 10.779 -0.00434714 9.53578 5.88448e-05C4.32653 5.88448e-05 0.081115 4.24428 0.0763435 9.45473C0.0763435 11.1235 0.512933 12.747 1.3372 14.1844L0 19.0859L5.01482 17.7714C6.40213 18.5264 7.95634 18.9221 9.53578 18.9225H9.54056C14.751 18.9225 18.9952 14.6783 19 9.46308C19.0012 8.22016 18.7564 6.98929 18.2798 5.84139C17.8032 4.69348 17.1042 3.65123 16.223 2.77467H16.2242ZM9.53578 17.3217C8.127 17.3222 6.74412 16.9431 5.53252 16.2243L5.24623 16.0525L2.27122 16.8326L3.06567 13.9304L2.87958 13.631C2.09206 12.3788 1.67556 10.9291 1.67836 9.44996C1.67836 5.12462 5.20567 1.59612 9.54056 1.59612C10.5733 1.59426 11.5961 1.79684 12.5502 2.19218C13.5042 2.58752 14.3706 3.16779 15.0993 3.89954C15.8306 4.62844 16.4103 5.49491 16.805 6.44898C17.1998 7.40304 17.4017 8.42581 17.3992 9.45831C17.3944 13.7992 13.8671 17.3217 9.53578 17.3217ZM13.848 11.4361C13.613 11.318 12.4523 10.7466 12.234 10.6655C12.0169 10.588 11.8583 10.5474 11.7032 10.7836C11.5446 11.0186 11.0913 11.5542 10.9553 11.7081C10.8193 11.8667 10.6786 11.8846 10.4424 11.7677C10.2074 11.6484 9.44513 11.4003 8.54332 10.5927C7.83953 9.96647 7.36834 9.1911 7.22758 8.95611C7.0916 8.71992 7.21446 8.59348 7.33256 8.47538C7.43634 8.37041 7.56755 8.19864 7.68565 8.06265C7.80493 7.92666 7.8443 7.82646 7.92183 7.669C7.99937 7.50916 7.96239 7.37317 7.90394 7.25508C7.8443 7.13699 7.37311 5.97155 7.17391 5.50156C6.98305 5.03754 6.78861 5.10195 6.64308 5.09599C6.50709 5.08764 6.34844 5.08764 6.18979 5.08764C6.06998 5.09062 5.95208 5.11833 5.84349 5.16903C5.7349 5.21973 5.63796 5.29233 5.55876 5.38228C5.34166 5.61847 4.73449 6.18985 4.73449 7.35528C4.73449 8.52071 5.58143 9.64082 5.70071 9.79947C5.81762 9.95812 7.36357 12.3427 9.73619 13.3685C10.2968 13.6131 10.7382 13.7574 11.0829 13.8671C11.6495 14.0485 12.1613 14.021 12.5692 13.9626C13.0225 13.8934 13.9661 13.39 14.1653 12.8377C14.3609 12.2842 14.3609 11.8118 14.3013 11.7128C14.2428 11.6126 14.0842 11.5542 13.848 11.4361Z"
                    fill="#FFFBEF"
                  />
                </svg>
              </div>
              <li className="text-whatsapp font-black text-xs px-4 list-none">
                +32 3 237 17 40
              </li>
            </a>
          </div>
          {/* Menu Mobile */}
          <Disclosure.Panel className="hidden md:flex justify-center items-center w-full">
            <div className=" py-10 space-y-1 text-center border-gold border-b-2 w-[75%]  mt-6">
              <Scrollspy
                items={["home", "about", "gallery", "prices", "practical"]}
                currentClassName="active"
                className=" "
              >
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? "text-brown" : "text-gold ",
                      "block py-4 rounded-md text-base font-black uppercase hover:opacity-50 transition ease-in-out duration-300"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </Scrollspy>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
