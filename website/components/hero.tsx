import waves from "@/public/images/layered-waves-haikei.svg";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div className="absolute inset-0 -z-1">
        <Image
          src={waves}
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="Programming"
        />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16 z-[100]">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-t from-purple-500 to-pink-400">
                家酿AI
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                俱乐部
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-white mb-8">
                我们目标是让每个人都能够了解人工智能，培养实践团队，创造实际价值。
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div>
                  <a
                    className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
                    href="#0"
                  >
                    详细信息
                  </a>
                </div>
                <div>
                  <a
                    className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                    href="/about"
                  >
                    了解我们
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
        </div>
      </div>
    </section>
  );
}
