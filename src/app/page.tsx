"use client";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <div>
          <section className="max-w-7xl  rounded-xl mt-4 mx-auto py-12 md:py-24  dark:from-gray-950 dark:to-gray-900">
            <div className="container max-w-7xl mx-auto px-4 md:px-6">
              <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[1fr_550px]">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold  tracking-wide sm:text-7xl text-gray-800 font-josefin">
                      <span className="text-yellow-500 text-border-black">
                        Discover{" "}
                      </span>
                      the Best Education at{" "}
                      <span className=" bg-gradient-to-r from-blue-600 to via-purple-600 to-blue-600 bg-clip-text text-transparent">
                        Brilliant United Academy{" "}
                        <span className="text-yellow-500 text-5xl text-border-black">
                          ✦
                        </span>
                      </span>
                    </h1>
                    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 font-josefin">
                      Acme School offers a comprehensive educational experience
                      with a focus on academic excellence, personal growth, and
                      community engagement.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link
                      className="px-6 tracking-wider text-lg bg-blue-600 py-4 rounded-lg text-white font-garamond shadow-xl shadow-gray-400 border-2 border-white font-medium"
                      href="#"
                    >
                      Get Started →
                    </Link>
                  </div>
                </div>
                <div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-1 row-span-3">
                      <img
                        src="/images/teacher.jpg"
                        alt="Furniture"
                        // objectFit="cover"
                        width={600}
                        height={800}
                        className="object-cover w-full h-[450px] rounded-t-[150px]  rounded-bl-[150px]"
                      />
                    </div>
                    <div className="col-span-1 row-span-2">
                      <Image
                        src="/images/childer1.jpg"
                        alt="Furniture"
                        width={300}
                        height={400}
                        className="object-cover w-full h-full rounded-t-full rounded-br-full"
                      />
                    </div>
                    <div className="col-span-1 row-span-1">
                      <Image
                        src="/images/childern1.jpg"
                        alt="Team"
                        width={300}
                        height={400}
                        className="object-cover w-full h-full rounded-tl-full rounded-b-full"
                      />
                      <span className="text-4xl text-blue-600 text-border-black">
                        ✦
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container max-w-7xl mx-auto px-4 md:px-6">
              <h2 className="text-xl md:text-4xl xl:text-6xl font-garamond font-semibold border-b-4 border-blue-500 inline">
                About
              </h2>
              <div className="my-6 grid space-y-6 items-center gap-6 lg:grid-cols-2 lg:gap-12">
                <img
                  alt="About Image"
                  className="mx-auto aspect-video overflow-hidden rounded-tl-full rounded-b-full object-cover object-center sm:w-full "
                  height="310"
                  src="/images/classroom.webp"
                  width="550"
                />
                <div className="flex flex-col justify-center">
                  <div className="space-y-6">
                    <h2 className="text-3xl font-josefin font-bold tracking-tighter sm:text-5xl text-blue-600">
                      Empowering Minds,{" "}
                      <span className="text-border-midblack text-gray-50">
                        Shaping Futures
                      </span>
                    </h2>
                    <p className="max-w-[600px] text-gray-500 md:text-md/relaxed lg:text-base/relaxed xl:text-md/relaxed dark:text-gray-400">
                      We have a rich history of providing exceptional education,
                      nurturing students' academic, personal, and social growth.
                      Our mission is to inspire and empower learners to reach
                      their full potential.
                    </p>
                    <div className="flex space-x-4 items-center">
                      <p className="font-garamond text-sm">
                        <span className="text-4xl font-bold">10+</span> Years of
                        Experience
                      </p>
                      <div className="border-l-2 border-gray-800 h-10"></div>
                      <p className="font-garamond text-sm">
                        <span className="text-4xl font-bold">1K+</span> Students
                      </p>
                      <div className="border-l-2 border-gray-800 h-10"></div>
                      <p className="font-garamond text-sm">
                        <span className="text-4xl font-bold">30+</span> Teachers
                      </p>
                    </div>
                  </div>
                  <div className="mt-12">
                    <Link
                      className="px-6 w-fit tracking-wider text-lg bg-blue-600 py-4 rounded-tl-full rounded-b-full text-white font-garamond  shadow-gray-400 border-2 border-white font-medium"
                      href="#"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container max-w-7xl px-4 md:px-6">
              <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-blue-50 px-3 py-1 text-sm dark:bg-blue-900">
                      Academics
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                      Comprehensive Curriculum for Academic Excellence
                    </h2>
                    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                      Acme School offers a diverse range of academic programs
                      designed to challenge and inspire students. From core
                      subjects to specialized electives, our curriculum empowers
                      learners to explore their interests and reach their full
                      potential.
                    </p>
                  </div>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-r from-[#9333ea] to-[#c084fc] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-gradient-to-r hover:from-[#7e22ce] hover:to-[#a855f7] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gradient-to-r dark:from-[#a855f7] dark:to-[#9333ea] dark:hover:bg-gradient-to-r dark:hover:from-[#7e22ce] dark:hover:to-[#8b5cf6] dark:focus-visible:ring-purple-300"
                    href="#"
                  >
                    Explore Academics
                  </Link>
                </div>
                <img
                  alt="Academics Image"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                  height="310"
                  src="/placeholder.svg"
                  width="550"
                />
              </div>
            </div>
          </section>
        </div>
        <div>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container max-w-7xl px-4 md:px-6">
              <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
                <img
                  alt="Admissions Image"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  height="310"
                  src="/placeholder.svg"
                  width="550"
                />
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-blue-50 px-3 py-1 text-sm dark:bg-blue-900">
                      Admissions
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                      Join the Acme School Community
                    </h2>
                    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                      Discover our admissions process and take the first step
                      towards an exceptional educational journey. We welcome
                      students from diverse backgrounds and are committed to
                      providing a nurturing and inclusive environment.
                    </p>
                  </div>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-r from-[#9333ea] to-[#c084fc] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-gradient-to-r hover:from-[#7e22ce] hover:to-[#a855f7] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gradient-to-r dark:from-[#a855f7] dark:to-[#9333ea] dark:hover:bg-gradient-to-r dark:hover:from-[#7e22ce] dark:hover:to-[#8b5cf6] dark:focus-visible:ring-purple-300"
                    href="#"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
