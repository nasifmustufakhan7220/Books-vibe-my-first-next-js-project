import Image from "next/image";
import bannerImg from "@/assets/pngwing 1.png";

const Banner = () => {
  return (
    <section className="max-w-6xl mx-auto py-6 sm:px-6 sm:py-10 lg:px-8">
      <div className="grid grid-cols-1 items-center gap-8 overflow-hidden rounded-3xl bg-linear-to-r from-green-50 to-emerald-100 px-5 py-8 sm:px-8 sm:py-10 md:grid-cols-2 md:gap-10 md:px-10 lg:px-14 lg:py-12">
        {/* Left Content */}
        <div className="space-y-5 text-center md:text-left">
          <span className="inline-block rounded-full bg-green-100 px-3 py-1.5 text-xs font-semibold text-green-700 sm:px-4 sm:py-2 sm:text-sm">
            Discover Your Next Read
          </span>

          <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
            Books to freshen up
            <br />
            your <span className="text-green-600">bookshelf</span>
          </h1>

          <p className="mx-auto max-w-md text-sm leading-6 text-gray-600 sm:text-base sm:leading-7 md:mx-0 md:text-lg">
            Explore amazing books, discover new stories, and find your next
            favorite read.
          </p>

          <button className="rounded-xl bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl sm:px-6 sm:py-3 sm:text-base">
            View The List →
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
            <div className="absolute inset-0 rounded-full bg-green-300/30 blur-3xl"></div>

            <Image
              src={bannerImg}
              alt="Books"
              priority
              className="relative h-auto w-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
