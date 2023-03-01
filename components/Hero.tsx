import Image from "next/image";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("hero");

  return (
    <div className="relative">
      <div
        className="hero overflow-y-hidden bg-neutral-400 pb-12 dark:bg-black"
        style={{ minHeight: 700 }}
      >
        <div className="hero__inner bg-neutral-400 dark:bg-black">
          <div className="hero__divider container mx-auto flex flex-col items-center py-12 sm:py-24">
            <div className="mb-5 w-11/12 flex-col items-center justify-center sm:mb-10 sm:w-2/3 lg:flex">
              <h1 className="mb-10 text-center text-2xl font-black leading-7 text-zinc-500 dark:text-white sm:text-3xl md:text-4xl md:leading-10 lg:text-5xl xl:text-6xl">
                {t("iam")}{" "}
                <span className="text-black dark:text-zinc-700">j-Riv</span>
              </h1>
              <div className="text-center">
                <Image
                  className="rounded-full"
                  src="/images/iam-jriv.jpeg"
                  alt="I am j-Riv"
                  height={140}
                  width={140}
                />
              </div>
              <p className="mt-5 text-center text-sm font-normal text-black dark:text-gray-400 sm:mt-10 sm:text-lg lg:w-10/12">
                {t("content")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
