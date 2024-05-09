import { FaSquarePhone } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { MdAddLocationAlt } from "react-icons/md";
export default function Footer() {
  return (
    <footer className="bg-themeColor text-white">
      <div className="max-w-6xl px-3 py-10 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-2/5 md:w-1/2 w-full">
            <h1 className="font-bold text-xl">PIM FORGE</h1>
            <p className="mt-2 pr-10">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit quo
              accusamus nisi minus neque incidunt delectus, nam perspiciatis
              earum ipsum?
            </p>
            <div className="mt-5 flex justify-center md:justify-start">
              <div>
                <div className="flex items-center flex-col md:flex-row space-x-2">
                  <FaSquarePhone className="w-5 h-5" />
                  <p>+88 02584 696868</p>
                </div>
                <div className="flex items-center space-x-2 mt-3 flex-col md:flex-row">
                  <MdMarkEmailRead className="w-5 h-5" />
                  <p>pimforge@gmail.com</p>
                </div>
                <div className="flex items-center space-x-2 mt-3 flex-col md:flex-row">
                  <MdAddLocationAlt className="w-5 h-5" />
                  <p>932 Galvin St. Pompano Beach, FL 33060</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/5 md:w-1/2 w-full mt-5 md:mt-0 ">
            <h2 className="title-font text-white tracking-widest text-sm mb-3 font-semibold">
              USEFUL LINKS
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-white hover:text-gray-800">Home</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">About</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">Tourists Lists</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">Contact</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/5 md:w-1/2 w-full lg:mt-0 md:mt-5 mt-0">
            <h2 className="title-font text-white tracking-widest text-sm mb-3 font-semibold">
              SUPPORTS
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-white hover:text-gray-800">Ask a question</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">Delivery Terms</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">Careers</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/5 md:w-1/2 w-full lg:mt-0 md:mt-5 mt-0">
            <h2 className="title-font text-white tracking-widest text-sm mb-3 font-semibold">
              Company
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-white hover:text-gray-800">Help</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">
                  Privacy and Policy
                </a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">
                  Terms and conditions
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="">
        <div className="max-w-6xl px-3 py-6  mx-auto flex items-center sm:flex-row flex-col">
          <h1 className="font-semibold">PIM FORGE</h1>
          <p className="text-sm ml-1">
            © 2024 pimforge —
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className=" ml-1"
              target="_blank"
            >
              @pimforge
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="ml-3 ">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="ml-3 ">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a className="ml-3 ">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
