import { BsArrowRight } from "react-icons/bs";
import { blob, coding, mahasiswa } from "../assets/index";

const Card = ({ children, title }) => {
  return (
    <div className="card card-side sm:flex-row flex-col bg-base-100 ring-1 ring-base-300 mb-4 sm:w-[90%]">
      <figure className="relative w-full">
        <img
          src={mahasiswa}
          alt="mahasiswa "
          className="z-10 drop-shadow sm:w-full w-[300px] "
        />
        <img
          src={blob}
          alt="Movie"
          className="absolute w-[200px] z-0 bottom-0 sm:top-20 top-5 blur-sm drop-shadow-lg "
        />
        <span className="absolute w-[40px] h-[40px] blue__gradient z-[2]"></span>
        <span className="absolute w-[40px] h-[40px] pink__gradient z-[1] "></span>
        <span className="absolute w-[40px] h-[40px] white__gradient z-[3]"></span>
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{title}</h2>
        <p className="sm:py-2 py-1 ">{children}</p>
        <div className="card-actions ">
          <button className="btn btn-info">
            Selengkapnya <BsArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

export const CardBOdy = ({ children, title }) => {
  return (
    <div className="card lg:card-side bg-base-100 ">
      <figure>
        <img src={coding} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{children}</p>
        <div className="card-actions ">
          <button className="btn btn-secondary">
            Selengkapnya <BsArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};
