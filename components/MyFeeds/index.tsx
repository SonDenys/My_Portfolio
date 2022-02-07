import { CheckIcon, ThumbUpIcon, UserIcon } from "@heroicons/react/solid";
import { Transition } from "@headlessui/react";
import { useState } from "react";

const timeline = [
  {
    id: 1,
    content: "AeonX",
    target: "Développeur Frontend",
    description1:
      "Je travaille actuellement sur 2 projets d'applications web au sein de la société AeonX.",
    description2: "Le 1e est une application similaire à Slack et WeTransfer.",
    description3:
      "Le 2e s'agit d'une plateforme de cours en ligne à destination des formateurs et élèves",
    href: "#",
    date: "Depuis October 2021",
    datetime: "2021-10-01",
    icon: UserIcon,
    iconBackground: "bg-gray-400",
  },
  {
    id: 2,
    content: "Bootcamp - Le Réacteur",
    target: "Développeur FullStack",
    description:
      "10 semaines intensives pour apprendre le métier de Développeur Web et Mobile, auprès de formateurs expérimentés comme Xavier Colombel, Farid Safi et Brice Lesne",
    href: "#",
    date: "Jun - Sept 2021",
    datetime: "2021-07-01",
    icon: ThumbUpIcon,
    iconBackground: "bg-blue-500",
  },
  {
    id: 3,
    content: "Fnac",
    target: "Business Analyst MOA",
    href: "#",
    date: "2019 - 2021",
    datetime: "2019-05-01",
    icon: CheckIcon,
    iconBackground: "bg-green-500",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const MyFeeds = () => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {timeline.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== timeline.length - 1 ? (
                <span
                  className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={classNames(
                      event.iconBackground,
                      "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
                    )}
                  >
                    <event.icon
                      className="h-5 w-5 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className=" flex-1 pt-1.5 flex space-x-4">
                  <div>
                    <p key={event.id} className="text-sm text-gray-500">
                      {event.content}{" "}
                      <a
                        key={event.id}
                        onClick={() => setIsShowing((isShowing) => !isShowing)}
                        // href={event.href}
                        className="font-medium text-gray-900 cursor-pointer"
                      >
                        {event.target}
                      </a>
                      <Transition
                        key={event.id}
                        show={isShowing}
                        enter="transition-opacity duration-75"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-150"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        className="w-full"
                      >
                        <p>{event.description1}</p>
                        <p>{event.description2}</p>
                        <p>{event.description3}</p>
                      </Transition>
                    </p>
                  </div>
                  <div className="text-right text-sm whitespace-nowrap text-gray-500">
                    <time dateTime={event.datetime}>{event.date}</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyFeeds;
