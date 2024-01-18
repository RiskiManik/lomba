import { BsArrowRight } from "react-icons/bs";
import { human, kaputama } from "../assets/index";

const Hero = () => {
  return (
    <div
      className={`hero w-screen min-h-screen bg-black/30 relative bg-[url('https://header.kaputama.ac.id/img/bg_kaputama.jpg')] shadow-lg mt-8  mb-8 bg-cover pb-16 `}
    >
      <span className="absolute h-full w-full bg-black/30  "></span>
      <span className="absolute h-full w-[25%] sm:-left-[5.1rem] -left-[0.7rem]   scale-x-[200] sm:-top-80 -top-80  rotate-[135deg] bg-[#a7dbcc]  "></span>
      <figure className="hidden  sm:block absolute top-16 left-20 z-10  ">
        <img
          src={kaputama}
          alt="kaputama"
          className="w-[100px] drop-shadow-lg  "
        />
        <figcaption className="text-[#1e515e] text-xl font-semibold">
          STMIK Kaputama
        </figcaption>
      </figure>
      <div className="hero-content flex-col lg:flex-row-reverse  px-8  ">
        <img
          src={human}
          alt="orang  "
          className="w-[500px] bg-base-300/20  backdrop-blur rounded-2xl drop-shadow-lg "
        />
        <div>
          <h1 className="sm:text-8xl text-5xl font-bold text-base-100 text-gradient">
            Be Smart and Successful
          </h1>
          <p className="sm:py-6 py-4 text-base-200 sm:text-xl text-lg font-medium ">
            <span className=" sm:text-[#1e515e]">Pendidikan ting</span>gi mulai
            disini, bersama kami jadi lebih baik.
          </p>
          <div className="flex gap-2 items-center ">
            <a
              href="https://pmb.kaputama.ac.id/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary font-medium text-base-100"
            >
              Daftar Sekarang
            </a>
            <a
              href="https://drive.google.com/drive/folders/1dukYoH0X9ZQHK_XrSs_1Tifnzq5b3NMV?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="btn btn-link   flex items-center  font-medium text-base-100 "
            >
              Lihat Brosur
              <BsArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
