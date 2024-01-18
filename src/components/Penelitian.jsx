import { presentasi } from "../assets/index";
import { BsArrowRight } from "react-icons/bs";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Penelitian = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      data-aos="fade-right"
      className="card lg:card-side bg-base-100 pb-4 my-4 w-[90%]"
    >
      <figure>
        <img src={presentasi} alt="Album" className="drop-shadow-lg" />
      </figure>
      <div className="card-body sm:w-1/2">
        <h2 className="card-title sm:text-4xl text-3xl ">Penelitian</h2>
        <p className="py-2">
          Sebagai Sekolah Tinggi Manajemen Informatika dan Komputer, STMIK
          Kaputama memberikan perhatian khusus terhadap kegiatan-kegiatan
          penelitian serta mendorong dosen dan mahasiswa untuk melakukan dan
          mengembangkan berbagai penelitian yang berorientasi untuk memenuhi
          kebutuhan bangsa.
        </p>
        <div className="card-actions ">
          <button className="btn btn-info">
            Selengkapnya <BsArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Penelitian;
