import { BsArrowRight } from "react-icons/bs";
import { coding } from "../assets";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Pengapdian = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      data-aos="fade-left"
      className="card lg:card-side flex-col-reverse bg-base-100 pb-4  sm:my-4 sm:w-[90%]"
    >
      <div className="card-body sm:w-1/2">
        <h2 className="card-title sm:justify-end sm:mr-4 sm:text-3xl text-2xl">
          Pengabdian
        </h2>
        <p className="sm:justify-end sm:text-right py-2">
          Sebagai Sekolah Tinggi Manajemen Informatika dan Komputer, STMIK
          Kaputama memberikan perhatian khusus terhadap kegiatan-kegiatan
          penelitian serta mendorong dosen dan mahasiswa untuk melakukan dan
          mengembangkan berbagai penelitian yang berorientasi untuk memenuhi
          kebutuhan bangsa.
        </p>
        <div className="card-actions  sm:justify-end">
          <button className="btn btn-info">
            Selengkapnya <BsArrowRight />
          </button>
        </div>
      </div>
      <figure>
        <img src={coding} alt="Album" className="drop-shadow-lg" />
      </figure>
    </div>
  );
};

export default Pengapdian;
