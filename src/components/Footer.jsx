import styles from "../style";
import { kaputama } from "../assets/index";

const Footer = () => {
  return (
    <footer
      className={`footer p-10 bg-base-200 text-base-content font-poppins ${styles.paddingX}`}
    >
      <div>
        <img src={kaputama} alt="kampus" className="w-[100px] drop-shadow-md" />
        <p>
          <span className="text-lg font-medium"> STMIK Kaputama</span>
          <br />
          Diselenggarakan oleh Yayasan Pendidikan Teknologi Informasi Mutiara
          <br />
          Jln. Veteran No.4A - 9A, Binjai, 20714, Sumatera Utara, Indonesia,
        </p>
      </div>
      <div>
        <span className="footer-title">Profile</span>
        <a className="link link-hover">Sejarah</a>
        <a className="link link-hover">Visi dan Misi</a>
        <a className="link link-hover">Lambang dan Logo</a>
        <a className="link link-hover">Mars STMIK Kaputama</a>
        <a className="link link-hover">Struktur Organisasi</a>
      </div>
      <div>
        <span className="footer-title">Layanan Digital</span>
        <a className="link link-hover">Sistem Informasi Akademik</a>
        <a className="link link-hover">E-Learning</a>
        <a className="link link-hover">Repository</a>
        <a className="link link-hover">E-Library</a>
        <a className="link link-hover">Penelitian</a>
      </div>
      <div>
        <span className="footer-title">Program Strudi</span>
        <a className="link link-hover flex items-center gap-2">
          Sistem Informasi{" "}
          <span className="badge badge-outline badge-sm"> S1</span>{" "}
        </a>
        <a className="link link-hover  flex items-center gap-2">
          Teknik Informatika{" "}
          <span className="badge badge-outline badge-sm"> S1</span>{" "}
        </a>
        <a className="link link-hover  flex items-center gap-2">
          Manajemen Informatika{" "}
          <span className="badge badge-outline badge-sm"> D3</span>{" "}
        </a>
        <a className="link link-hover  flex items-center gap-2">
          Komputerisasi Akuntansi{" "}
          <span className="badge badge-outline badge-sm  "> D3</span>{" "}
        </a>
      </div>
      <div>
        <span className="footer-title">Contact</span>
        <a className="link link-hover flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-message-circle"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>{" "}
          +62 823-6630-4242
        </a>
        <a className="link link-hover flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-mail"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          info@kaputama.ac.id
        </a>
      </div>
    </footer>
  );
};

export default Footer;
