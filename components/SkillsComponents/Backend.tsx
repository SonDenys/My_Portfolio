/* This example requires Tailwind CSS v2.0+ */
import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
} from "@heroicons/react/outline";

const features = [
  { name: "Push to Deploy", icon: CloudUploadIcon },
  { name: "SSL Certificates", icon: LockClosedIcon },
  { name: "Simple Queues", icon: RefreshIcon },
  { name: "Advanced Security", icon: ShieldCheckIcon },
  { name: "Powerful API", icon: CogIcon },
  { name: "Database Backups", icon: ServerIcon },
];

const Backend = ({ allTools, allServices, allBackend }) => {
  return (
    <div className="relative">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">
          Backend
        </h2>
        <div className="mt-12">
          <div className="inline-grid gap-24 sm:grid-cols-2 lg:grid-cols-3 ">
            {allBackend}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
