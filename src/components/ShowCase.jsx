import imageOne from "../assets/PlayStation.png";
import imageTwo from "../assets/MacBook-mini.png";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
export default function ShowCase() {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 1, opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="mt-10"
    >
      <div className="max-w-6xl mx-auto px-3 grid grid-cols-12 items-center">
        <div className="lg:col-span-6 col-span-12 ">
          <div
            className="bg-no-repeat lg:p-10 p-5 bg-white dark:bg-[#020817] h-[270px]"
            style={{ backgroundImage: `url(${imageOne})` }}
          >
            <div className="text-end">
              <h1 className="text-2xl font-bold">PlayStation 5</h1>
              <p className="mt-1">
                Incredibly powerful CPUs, <br /> GPUs, and an SSD with <br />{" "}
                integrated I/O will redefine <br /> your PlayStation experience.
              </p>
              <Button className="mt-3 dark:bg-[#020817] dark:text-white dark:border dark:border-white">
                Any Alternate Product ?
              </Button>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 col-span-12 bg-gray-100 dark:bg-[#020817]">
          <div className="flex items-center">
            <div className="p-10">
              <h1 className="text-2xl font-bold">
                <span className="font-light">MacBook</span> Air
              </h1>
              <p className="mt-1">
                The new 15‑inch MacBook Air makes <br /> room for more of what
                you love with a spacious Liquid Retina display.
              </p>
              <Button className="mt-3 dark:bg-[#020817] dark:text-white dark:border dark:border-white">
                Recommend Now
              </Button>
            </div>
            <div className="flex justify-end">
              <img className="h-[270px]" src={imageTwo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
