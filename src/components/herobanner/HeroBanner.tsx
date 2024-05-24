export const HeroBanner = () => {
  return (
    <div className="relative flex flex-col justify-center items-center h-screen w-screen">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-screen h-screen object-cover z-0"
      >
        <source src="/hero-banner-landing.mp4" type="video/mp4" />
        Tu navegador no admite el elemento de video.
      </video>
      {/* <div className="relative z-10">
        <h1 className="text-white text-4xl font-bold">¡Bienvenido!</h1>
        <p className="text-white text-lg">
          Este es un ejemplo de video de fondo en una página web con React y
          Tailwind CSS.
        </p>
      </div> */}
    </div>
  );
};
