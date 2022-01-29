/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  DesktopComputerIcon,
  CollectionIcon,
  SupportIcon,
  MenuIcon,
  XIcon,
  AcademicCapIcon,
  BriefcaseIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon, IdentificationIcon } from "@heroicons/react/solid";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const navLinks = [
  {
    name: "A propos de moi",
    path: "about",
    icon: IdentificationIcon,
  },
  {
    name: "Mes services",
    path: "services",
    icon: SupportIcon,
  },
  {
    name: "Projets",
    path: "projects",
    icon: CollectionIcon,
  },
  {
    name: "Compétences",
    path: "skills",
    icon: DesktopComputerIcon,
  },

  {
    name: "Experiences",
    path: "experiences",
    icon: BriefcaseIcon,
  },
  {
    name: "Formation",
    path: "training",
    icon: AcademicCapIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <Popover className="z-50">
      <div className=" fixed w-full flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
        <div>
          <a href="#" className="flex">
            <span className="sr-only">Workflow</span>
            {/* <img
              className="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt=""
            /> */}
          </a>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <Popover.Button className=" rounded-md p-2 inline-flex items-center justify-center text-gray-800 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
          <Popover.Group as="nav" className="flex space-x-10">
            <Popover className="relative"></Popover>
          </Popover.Group>
          <div className="flex items-center md:ml-12 justify-between">
            {/* <a
              href="#"
              className=" ml-8 text-base font-medium text-gray-500 hover:text-gray-900"
            >
              About
            </a>
            <a
              href="#"
              className="ml-8 text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Projects
            </a>
            <a
              href="#"
              className="ml-8 text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Skills
            </a>
            <a
              href="#"
              className="ml-8 items-center text-base font-medium text-gray-500 hover:text-gray-900 "
            >
              Experience
            </a>
            <a
              href="#"
              className="ml-8 items-center text-base font-medium text-gray-500 hover:text-gray-900 "
            >
              Formation
            </a>
            <button
              type="button"
              className=" ml-8 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Contact me
            </button> */}
            <Popover.Button className=" rounded-md p-2 inline-flex items-center justify-center text-gray-800 hover:text-sky-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-800">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------- */}

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="fixed bg-black bg-opacity-70 h-screen top-0 right-0 p-2 transition transform origin-top-right"
        >
          <div className="">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between ">
                <div>
                  {/* <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  /> */}
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-800 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-900">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6 pr-20">
                <nav className="grid gap-6 hover:text-black">
                  {navLinks.map((item) => (
                    <Link
                      key={item.name}
                      spy={true}
                      smooth={true}
                      duration={500}
                      href={`/#${item.path}`}
                      to={`${item.path}`}
                      className="-m-3 p-3 flex items-center rounded-lg text-white hover:text-zinc-800 hover:bg-sky-100 cursor-pointer"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div className="ml-4 text-base font-medium">
                        {item.name}
                      </div>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="mt-6">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-600 hover:bg-gray-700"
                >
                  Contact me
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
