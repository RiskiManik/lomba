import Biaya from "./components/Biaya";
import Hero from "./components/Hero";
import Penelitian from "./components/Penelitian";
import Pengapdian from "./components/Pengapdian";
import Rekrut from "./components/Rekrut";
import Section1 from "./components/Section1";

import styles from "./style";

function App() {
  return (
    <div className="bg-base-100 w-full overflow-hidden font-poppins ">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} `}>{/* <Navbar /> */}</div>
      </div>
      <div className={`bg-base-100 ${styles.flexStart}`}>
        <div className={``}>
          <Hero />
        </div>
      </div>
      <div className={`bg-base-100 ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Section1 />
          <Penelitian />
          <div className="px-6 flex gap-2  my-8 flex-wrap">
            <Biaya type={"🚀Jenjang Sarjana (S1)"} price={"3.100.000"} />
            <Biaya type={"✨Jenjang Diploma (D3)"} price={"3.000.000"} />
            <Biaya type={"🎉Jalur Beasiswa"} />
          </div>
          <Pengapdian />
        </div>
      </div>
      <div className="bg-[#1e515e]">
        <Rekrut />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#a7dbcc"
            fillOpacity="1"
            d="M0,192L0,160L49.7,160L49.7,128L99.3,128L99.3,160L149,160L149,224L198.6,224L198.6,160L248.3,160L248.3,256L297.9,256L297.9,96L347.6,96L347.6,224L397.2,224L397.2,224L446.9,224L446.9,192L496.6,192L496.6,128L546.2,128L546.2,96L595.9,96L595.9,224L645.5,224L645.5,192L695.2,192L695.2,64L744.8,64L744.8,192L794.5,192L794.5,128L844.1,128L844.1,192L893.8,192L893.8,288L943.4,288L943.4,192L993.1,192L993.1,96L1042.8,96L1042.8,64L1092.4,64L1092.4,128L1142.1,128L1142.1,192L1191.7,192L1191.7,64L1241.4,64L1241.4,32L1291,32L1291,256L1340.7,256L1340.7,320L1390.3,320L1390.3,32L1440,32L1440,320L1390.3,320L1390.3,320L1340.7,320L1340.7,320L1291,320L1291,320L1241.4,320L1241.4,320L1191.7,320L1191.7,320L1142.1,320L1142.1,320L1092.4,320L1092.4,320L1042.8,320L1042.8,320L993.1,320L993.1,320L943.4,320L943.4,320L893.8,320L893.8,320L844.1,320L844.1,320L794.5,320L794.5,320L744.8,320L744.8,320L695.2,320L695.2,320L645.5,320L645.5,320L595.9,320L595.9,320L546.2,320L546.2,320L496.6,320L496.6,320L446.9,320L446.9,320L397.2,320L397.2,320L347.6,320L347.6,320L297.9,320L297.9,320L248.3,320L248.3,320L198.6,320L198.6,320L149,320L149,320L99.3,320L99.3,320L49.7,320L49.7,320L0,320L0,320Z"
          ></path>
        </svg>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#a7dbcc"
          fillOpacity="1"
          d="M0,32L120,69.3C240,107,480,181,720,197.3C960,213,1200,171,1320,149.3L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default App;
