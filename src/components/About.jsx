import { motion } from "framer-motion";
import { Button } from "./ui/button";
export default function About() {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 1, opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="bg-gray-50 py-10 dark:bg-[#020817]"
    >
      <div className="max-w-6xl mx-auto px-3 grid grid-cols-12 my-10 items-center">
        <div className="lg:col-span-6 col-span-12">
          <div className="space-y-3 pr-10">
            <h1>About Us</h1>
            <h1 className="text-xl font-bold">
              PIM Forge Alternate Product System.
            </h1>
            <p>
              PIM Forge basically a alternative product system platform that
              serves as an alternative or recommendation to traditional Product
              Information Management (PIM) systems for managing product data and
              related processes.
            </p>
            <Button className="dark:bg-[#020817] dark:text-white dark:border dark:border-white">
              KNOW MORE
            </Button>
          </div>
        </div>
        <div className="lg:col-span-6 col-span-12 mt-6 lg:mt-0">
          <div>
            <img
              src="https://images.pexels.com/photos/1367276/pexels-photo-1367276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
