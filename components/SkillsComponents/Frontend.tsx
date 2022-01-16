/* This example requires Tailwind CSS v2.0+ */
import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import { FunctionComponent } from "react";
import Reactjs from "../../public/logos/reactjs.svg";

const features = [
  { name: "ReactJs", src: "/../../public/logos/reactjs.svg" },
  { name: "ReactNative" },
  { name: "NodeJs" },
];

const FrontEnd = ({ allTools, allServices, allFrontend }) => {
  return (
    <div className="relative py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">
          Frontend
        </h2>
        <div className="mt-12 justify-around">
          <div className="inline-grid gap-24 sm:grid-cols-2 lg:grid-cols-8">
            {allFrontend}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontEnd;
