const Rekrut = () => {
  return (
    <div className="hero min-h-[40vh] sm:pt-20 bg-[#1e515e] relative overflow-hidden">
      {/* <span className="absolute h-full w-[25%] sm:-left-[5.1rem] left-[2rem]   scale-x-[200] sm:-top-80 -top-80  rotate-[135deg] bg-[#a7dbcc]  "></span> */}
      <div className="hero-content text-center">
        <div className="max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-bold py-6 mb-4 text-[#b5f3e1] ">
            ✨Tertarik Bergabung?
          </h1>

          <a
            href="https://pmb.kaputama.ac.id/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-info sm:btn-lg "
          >
            Daftar Sekarang
          </a>
        </div>
      </div>
    </div>
  );
};

export default Rekrut;
