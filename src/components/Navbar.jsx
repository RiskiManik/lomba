import { kaputama } from "../assets/index";
import styles from "../style";
const Navbar = () => {
  return (
    <div
      className={`navbar bg-base-100  ${styles.paddingX} font-poppins shadow-xl sticky top-0 z-50`}
    >
      <div className="navbar-start ">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu  max-h-screen overflow-auto menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Profil</a>
              <ul className="p-2">
                <li>
                  <a>Sejarah</a>
                </li>
                <li>
                  <a>Visi dan Misi</a>
                </li>
                <li>
                  <a>Nilai dan Etika</a>
                </li>
                <li>
                  <a>Lambang dan Logo</a>
                </li>
                <li>
                  <a>Struktur dan Organisasi</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Layanan Digital</a>
              <ul className="p-2">
                <li>
                  <a>Sistem Informasi Akademik</a>
                </li>
                <li>
                  <a>E-Learning</a>
                </li>
                <li>
                  <a>Repository</a>
                </li>
                <li>
                  <a>E-Library</a>
                </li>
                <li>
                  <a>Penelitian</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Program Studi</a>
              <ul className="p-2">
                <li>
                  <a>Sistem informasi (S1)</a>
                </li>
                <li>
                  <a>Teknik Informatika (S1)</a>
                </li>
                <li>
                  <a>Manajemen Informatika (D3)</a>
                </li>
                <li>
                  <a>Komputerisasi Akuntansi (D3)</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <img
            src={kaputama}
            alt="kaputama"
            className="sm:w-[100px] w-[50px] drop-shadow-lg "
          />

          <a
            href="/"
            className="btn btn-ghost normal-case text-lg sm:text-2xl font-bold"
          >
            STMIK KAPUTAMA
          </a>
        </div>
      </div>
      <div className="navbar-center hidden  lg:flex">
        <ul className="menu menu-horizontal gap-2 px-1">
          <li tabIndex={1}>
            <details>
              <summary>Profil</summary>
              <ul className="p-2">
                <li>
                  <a>Sejarah</a>
                </li>
                <li>
                  <a>Visi dan Misi</a>
                </li>
                <li>
                  <a>Nilai dan Etika</a>
                </li>
                <li>
                  <a>Lambang dan Logo</a>
                </li>
                <li>
                  <a>Struktur dan Organisasi</a>
                </li>
              </ul>
            </details>
          </li>
          <li tabIndex={2}>
            <details>
              <summary>Layanan Digital</summary>
              <ul className="p-2">
                <li>
                  <a>Sistem Informasi Akademik</a>
                </li>
                <li>
                  <a>E-Learning</a>
                </li>
                <li>
                  <a>Repository</a>
                </li>
                <li>
                  <a>E-Library</a>
                </li>
                <li>
                  <a>Penelitian</a>
                </li>
              </ul>
            </details>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Program Studi</summary>
              <ul className="p-2">
                <li>
                  <a>Sistem informasi (S1)</a>
                </li>
                <li>
                  <a>Teknik Informatika (S1)</a>
                </li>
                <li>
                  <a>Manajemen Informatika (D3)</a>
                </li>
                <li>
                  <a>Komputerisasi Akuntansi (D3)</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end sm:mt-4 ">
        <a
          href="https://pmb.kaputama.ac.id/"
          target="_blank"
          rel="noreferrer"
          className="btn btn-link text-secondary normal-case text-xl sm:block hidden"
        >
          Daftar
        </a>
      </div>
    </div>
  );
};

export default Navbar;
