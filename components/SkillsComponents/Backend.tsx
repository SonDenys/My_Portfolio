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

const Backend = () => {
  return (
    <div className="relative py-16 sm:py-24 lg:py-32 -z-10 border-l-2 border-gray-200 ">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">
          Backend
        </h2>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg shadow-zinc-700">
                        <feature.icon
                          className="h-6 w-6 text-white "
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {feature.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
