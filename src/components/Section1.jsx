import Card from "./Card";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Section1 = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="bg-base-100 py-4 flex flex-wrap ">
      <div data-aos="fade-left" data-aos-duration="500">
        <Card title={" Sistem Informasi (S1)"}>
          Menjadi program studi teknik informatika yang unggul dan berkompeten,
          berkarakter dan berjiwa entrepreneur dalam bidang ICT dan riset secara
          global dalam Pengembangan Teknologi Informatika Berbasis Aplikasi
          Cerdas dan Internet Of Things (IOT) di Sumatera Utara (Tahun 2027),
          serta Indonesia (Tahun 2037).
        </Card>
      </div>
      <div data-aos="fade-left" data-aos-duration="600">
        <Card title={"Teknik Informatika (S1)"}>
          Menjadi program studi yang unggul, berkompeten, berkarakter dan
          berjiwa entrepreneur secara global dalam bidang sistem informasi serta
          penerapannya terutama dalam bidang bisnis cerdas di Sumatera Utara
          (Tahun 2027), serta Indonesia (Tahun 2037).
        </Card>
      </div>
      <div data-aos="fade-left" data-aos-duration="700">
        <Card title={"Manajemen Informatika (D3)"}>
          Menjadi program studi Manajemen Informatika yang unggul profesional,
          berkarakter, dan berjiwa entrepreneur dalam bidang pengembangan sistem
          informasi dan multimedia di Sumatera Utara (Tahun 2027), serta
          Indonesia (Tahun 2037).
        </Card>
      </div>
      <div data-aos="fade-left" data-aos-duration="600">
        <Card title={"Komputerisasi Akuntansi (D3)"}>
          Menjadi program studi Komputerisasi Akuntansi yang unggul profesional,
          berkarakter, dan berjiwa entrepreneur dalam bidang Akuntansi dan
          Perpajakan di Sumatera Utara (Tahun 2022), serta Indonesia (Tahun
          2032).
        </Card>
      </div>
    </div>
  );
};

export default Section1;
