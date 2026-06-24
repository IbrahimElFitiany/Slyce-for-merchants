import LandingHeader from "@/features/landing/components/LandingHeader"

export default function NotFound() {
  return (
    <div className="flex flex-col ">

      <LandingHeader/>

      <div className="bg-[#2D7231] -mt-2 flex justify-center text-[12rem] font-bold text-whitebg py-20">
        <h1>404</h1>
      </div>

      <div className="py-10 flex flex-col items-center align-middle">

        <h2 className="text-4xl font-bold tracking-tight mb-3">
          Oops! We <span className="text-accent">can’t deliver</span> that page.
        </h2>

        <p className="text-text-grey font-medium max-w-md mb-8 leading-relaxed text-center">
          It seems the link you followed is lost in transit. Let's get your restaurant business back on track.
        </p>

      </div>

    </div>
  );
}