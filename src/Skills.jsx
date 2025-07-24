import { motion } from "motion/react"; // Correct import for motion
import { img } from "motion/react-client";
import { useEffect, useState } from "react";

const Skills = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/image", {
          method: "GET",
        });
        const data = await res.json();
        setImages(data); // Set the fetched images in state
      } catch (error) {
        console.error("error fetching image", error);
      }
    };

    fetchData();
  }, []);

  const usingImages = images.filter((img) => img.category === "using");
  const usingImg = images.filter((img) => img.category === "learning");
  const otherImg = images.filter((img) => img.category === "other skills");

  return (
    <>
      <h3
        className="text-black font-bold border-2 p-2 tracking-[5px] font-[Montserrat]
          text-2xl mt-14"
      >
        SKILLS
      </h3>
      <h3 className=" text-black font-bold font-[Montserrat] ">USING NOW:</h3>
      <div>
        <div className="flex justify-center flex-wrap mx-5    gap-10  ">
          {usingImages.map((img, index) => (
            <motion.div
              key={img._id || index}
              className=" flex-col items-center justify-center  "
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
            >
              <img className="w-20 aspect-square" src={img.url} alt="" />
              <p className="text-center">
                {img.name.split(".")[0].toUpperCase()}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <h3 className=" text-black font-bold font-[Montserrat] mt-5">
        LEARNING:
      </h3>
      <div className="flex justify-center flex-wrap mx-5  gap-10   ">
        {usingImg.map((img, index) => (
          <motion.div
            key={img._id || index}
            className=" flex-col items-center  "
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: index * 0.1,
            }}
          >
            <img className=" aspect-square w-20 " src={img.url} alt="" />
            <p className="text-center">
              {img.name.split(".")[0].toUpperCase()}
            </p>
          </motion.div>
        ))}
      </div>
      <h3 className=" text-black font-bold font-[Montserrat] mt-5">
        OTHER SKILLS:
      </h3>
      <div className="flex justify-center flex-wrap mx-5  gap-10  ">
        {otherImg.map((img, index) => (
          <motion.div
            key={img._id || index}
            className=" flex-col items-center  "
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: index * 0.1,
            }}
          >
            <img className="aspect-square w-20 " src={img.url} alt="" />
            <p className="text-center">
              {img.name.split(".")[0].toUpperCase()}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Skills;
