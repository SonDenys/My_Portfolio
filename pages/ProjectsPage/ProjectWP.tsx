import ScrollToFade01 from "../../components/Scrolling/ScrollToFade/01";

const posts = [
  {
    title: "Projet n°1",
    href: "#",
    category: { name: "Article", href: "#" },
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "6 min",
    author: {
      name: "Roel Aufderehar",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Projet n°2",
    href: "#",
    category: { name: "Video", href: "#" },
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "4 min",
    author: {
      name: "Brenna Goyette",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Projet n°3",
    href: "#",
    category: { name: "Case Study", href: "#" },
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "11 min",
    author: {
      name: "Daniela Metz",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export default function ProjectsWP() {
  return (
    <div className=" bg-gray-100 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className=" inset-0">
        <div className=" h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Mes projets Wordpress
          </h2>
        </div>
        <ScrollToFade01 threshold={1000}>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none ">
            {posts.map((post) => (
              <div
                key={post.title}
                className="bg-white flex flex-col rounded-lg shadow-lg overflow-hidden relative shadow-zinc-700 cursor-pointer "
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-full w-full object-cover transition duration-500 ease-in-out lg:hover:scale-125"
                    src={post.imageUrl}
                    alt="image"
                  />
                </div>
                <div className="flex-1 p-4 flex flex-col justify-between absolute bg-black bg-opacity-70 top-40">
                  <div className="">
                    <a href={post.href} className="block mt-2">
                      <p className="text-xl font-semibold text-white">
                        {post.title}
                      </p>
                      <p className="mt-3 text-base text-gray-300">
                        {post.description}
                      </p>
                    </a>
                  </div>
                </div>
                {/* <div className=" flex justify-around mt-11 max-w-lg lg:grid-cols-3 lg:max-w-none h-full bg-white">
                <p>Icons</p>
                <p>Icons</p>
                <p>Icons</p>
              </div> */}
              </div>
            ))}
          </div>
        </ScrollToFade01>
      </div>
    </div>
  );
}
