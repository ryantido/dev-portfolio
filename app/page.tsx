import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AboutCta } from "@/components/about-cta";
import { MdVerified } from "react-icons/md";
import { TechStack } from "@/constants";
import Image from "next/image";

export default function Home() {
  return (
    <section
      aria-labelledby="hero-title"
      className="grid place-content-center min-h-[calc(100dvh-6rem)] xl:h-dvh"
    >
      <div className="mx-auto max-w-md lg:max-w-[1280px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <figure className="relative flex justify-center lg:justify-end order-1 lg:order-2">
          <div
            aria-hidden
            className="absolute inset-0 -m-6 lg:m-auto lg:w-[90%] lg:h-[90%] bg-primary/20 blur-2xl lg:blur-[80px] rounded-full -z-10"
          />

          <div
            className="
              relative
              h-40 w-40
              lg:h-auto lg:w-full lg:max-w-[500px] lg:aspect-square
              overflow-hidden
              rounded-full lg:rounded-2xl
              border-2 lg:border
              border-white dark:border-[#282e39]
              shadow-2xl
              bg-[#282e39]
            "
          >
            <Image
              src="/ryan.jpg"
              alt="Ryan Tido professional portrait"
              fill
              priority
              sizes="(max-width: 1024px) 160px, 500px"
              className="object-cover"
            />

            <figcaption className="hidden lg:flex absolute bottom-6 left-6 right-6 items-center gap-4 rounded-lg bg-white/90 dark:bg-[#111318]/90 backdrop-blur-md p-4 border border-[#e5e7eb] dark:border-[#282e39] shadow-lg">
              <span
                aria-hidden
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary"
              >
                <MdVerified size={24} />
              </span>
              <div>
                <p className="text-sm font-bold text-[#111318] dark:text-white">
                  {new Date().getFullYear() - 2023}+ Years Experience
                </p>
                <p className="text-xs text-[#637588] dark:text-[#93adc8]">
                  Delivering high-quality code
                </p>
              </div>
            </figcaption>
          </div>

          <div className="absolute bottom-1 translate-y-1 lg:hidden">
            <span className="flex items-center gap-2 rounded-full bg-white dark:bg-[#111318] border border-gray-200 dark:border-gray-700 px-3 py-1.5 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-600 dark:text-gray-300">
                Available
              </span>
            </span>
          </div>
        </figure>

        <header className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 order-2 lg:order-1">
          <div
            role="status"
            className="hidden lg:inline-flex w-fit items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="text-xs font-medium text-green-600 dark:text-green-400">
              Available for work
            </span>
          </div>

          <h1
            id="hero-title"
            className="font-black tracking-tight leading-[1.15] text-[#111318] dark:text-white text-[32px] lg:text-6xl"
          >
            Building digital{" "}
            <span className="block lg:inline">
              <span className="text-primary lg:text-inherit">experiences</span>{" "}
              <span className="hidden lg:inline">
                that <span className="text-primary">matter</span>.
              </span>
            </span>
          </h1>

          <p className="text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-[32ch] lg:max-w-xl">
            I’m a Mid-level Systems Architect based in Cameroon, Africa.
            Specializing in scalable backend infrastructure and intuitive UI.
          </p>

          <AboutCta />

          <section className="pt-8 w-full px-2">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
              Tech Stack
            </p>

            <ul className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {TechStack.slice(0, 5).map(({ label, icon: Icon }) => (
                <li
                  key={label}
                  className="flex h-9 items-center gap-2 rounded-lg bg-[#e5e7eb] dark:bg-[#282e39] px-3"
                >
                  <span aria-hidden className="text-lg">
                    <Icon />
                  </span>
                  <span className="text-sm font-medium">{label}</span>
                </li>
              ))}
            </ul>
          </section>

          <ul className="hidden lg:flex gap-4 pt-2">
            <li>
              <a
                href="https://github.com/ryantido"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/ryan-tido-29450633a"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linkedin"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://x.com/ryantido34"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition"
              >
                <FaTwitter />
              </a>
            </li>
          </ul>
        </header>
      </div>
    </section>
  );
}
