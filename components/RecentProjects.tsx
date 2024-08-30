"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  const openInNewtab=(link:any)=>{
    window.location.href=link;
  }
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title="vm2124"
              href="https://github.com/vm21242124"
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3 flex-col">
                <div className="flex items-center">
                  {item.skillused.map((i, index) => (
                    <div
                      key={index}
                      className="flex gap-4 items-center  "
                    >
                      <p  className="p-2 m-2">{i}</p>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 items-center">
                  {item.buttons?.map((i,key)=>(
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple capitalize" onClick={()=>openInNewtab(i.link)} key={key}>
                    {i.name}
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </p>
                  ))}
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
