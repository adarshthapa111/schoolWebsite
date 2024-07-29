"use client";
import Link from "next/link";
import Image from "next/image";
import Teachers from "./components/Teachers";
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
                      <span className="text-yellow-400 text-border-black">
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
                      Our School offers a comprehensive educational experience
                      with a focus on academic excellence, personal growth, and
                      community engagement.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link
                      className="px-6 tracking-wider text-lg bg-blue-600 py-4 rounded-full text-white font-garamond shadow-md shadow-gray-400 border-2 border-white font-medium"
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
          <section className="max-w-7xl mx-auto">
            {/* <h4 className="text-6xl tracking-wider inline font-semibold font-garamond py-4">Our Offering </h4>
            <p className="text-gray-400 py-2">Your trust us what make us stronger. We always try to stand with your trust...</p> */}
            <div className="container mx-auto px-4 py-8">
              <h2 className="text-4xl font-bold text-center mb-4 font-garamond tracking-wider lg:text-6xl">
                What <span className="text-gray-50 text-border-black">We</span>{" "}
                <span className="text-blue-600">Offer ?</span>
              </h2>
              <p className="text-center mb-8">
                Trust us to provide innovative solutions tailored to your
                specific needs and goals
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* <!-- Card 1 --> */}
                <div className="border-2 border-dashed border-blue-500 rounded-lg p-6 text-center">
                  <div className="mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-blue-500 mx-auto"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8c.552 0 1 .895 1 2 0 1.105-.448 2-1 2s-1-.895-1-2c0-1.105.448-2 1-2zm0 4h8M12 8h8M4 12v2m16-2v2M4 16v2m16-2v2M4 8v2m16-2v2"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 font-garamond">
                    Digital Classes
                  </h3>
                  <p className="mb-4">
                    Trust us to provide innovative solutions tailored to your
                    specific needs and goals
                  </p>
                  <a href="#" className="text-blue-500 font-semibold">
                    Get Started
                  </a>
                </div>

                {/* <!-- Card 2 --> */}
                <div className="border-2 border-dashed border-red-500 rounded-lg p-6 text-center">
                  <div className="mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-red-500 mx-auto"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8c.552 0 1 .895 1 2 0 1.105-.448 2-1 2s-1-.895-1-2c0-1.105.448-2 1-2zm0 4h8M12 8h8M4 12v2m16-2v2M4 16v2m16-2v2M4 8v2m16-2v2"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 font-garamond">
                    Jr & Sr. Nursery
                  </h3>
                  <p className="mb-4">
                    Trust us to provide innovative solutions tailored to your
                    specific needs and goals
                  </p>
                  <a
                    href="#"
                    className=" font-medium rounded-sm border border-red-500 shadow-md text-red-500 px-6 py-3 font-garamond tracking-wider"
                  >
                    Get Started
                  </a>
                </div>

                {/* <!-- Card 3 --> */}
                <div className="border-2 border-dashed border-yellow-500 rounded-lg p-6 text-center">
                  <div className="mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-yellow-500 mx-auto"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8c.552 0 1 .895 1 2 0 1.105-.448 2-1 2s-1-.895-1-2c0-1.105.448-2 1-2zm0 4h8M12 8h8M4 12v2m16-2v2M4 16v2m16-2v2M4 8v2m16-2v2"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 font-garamond">
                    High School
                  </h3>
                  <p className="mb-4">
                    Trust us to provide innovative solutions tailored to your
                    specific needs and goals
                  </p>
                  <a href="#" className="text-yellow-500 font-semibold">
                    Get Started
                  </a>
                </div>
              </div>

              <div className="text-center mt-8">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700 transition duration-300">
                  See All
                </button>
              </div>
            </div>
          </section>

          <section>
            <Teachers />
          </section>
          <section>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 relative mb-8 md:mb-0">
                  <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-300 rounded-full -z-10 transform -translate-x-4 translate-y-4"></div>
                  <Image
                    src="/images/"
                    alt="Student"
                    width={400}
                    height={800}
                    className="w-full h-96 object-cover max-w-[300px] md:max-w-[400px] z-10 relative mx-auto"
                  />
                  <div className="absolute top-0 left-0 w-full h-full">
                    <svg
                      className="absolute top-0 left-0 w-12 h-12 md:w-16 md:h-16 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"
                      />
                    </svg>
                    <svg
                      className="absolute bottom-0 right-0 w-12 h-12 md:w-16 md:h-16 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0 md:pl-4 lg:pl-8">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 font-garamond xl:text-6xl">
                    Benefits That Contribute
                    <br />
                    <span className="text-indigo-600">
                      Development And Growth
                    </span>
                    <br />
                    Of Students
                  </h2>
                  <p className="text-sm md:text-base text-gray-600 mb-6">
                    Schools provide numerous benefits that contribute to the
                    holistic development and growth of students. Here are some
                    key benefits of attending school:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {[
                      "Education",
                      "Socialization",
                      "Social Support",
                      "Cultural Diversity",
                      "Lifelong Learning",
                      "Career Preparation",
                    ].map((benefit, index) => (
                      <div
                        key={index}
                        className="border-b-2 border-red-500 pb-1"
                      >
                        <span className="font-semibold text-sm md:text-base font-josefin">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div></div>
      </main>
    </>
  );
}
