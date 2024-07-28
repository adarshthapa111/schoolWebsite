
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full pt-12 md:pt-24 lg:pt-32 bg-gray-100 dark:bg-gray-800 min-h-screen my-auto">
        <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
          <div className="grid max-w-7xl mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
            <div className="flex flex-col items-start space-y-4">
              <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm ">
                Welcome to Acme Academy
              </div>
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Empowering Minds, Shaping Futures
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                At Acme Academy, we are committed to providing a transformative educational experience that empowers
                students to become critical thinkers, ethical leaders, and lifelong  learners.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Explore Our Programs
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Schedule a Tour
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                alt="Acme Academy"
                className="h-auto max-w-full rounded-full"
                height="300"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width="300"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 space-y-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700">Our Legacy</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">A Tradition of Excellence</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Acme Academy was founded in 1950 with a vision to provide exceptional education to the community. Over
                the decades, we have grown to become a renowned institution, known for our academic rigor, innovative
                teaching methods, and commitment to student success.
              </p>
            </div>
          </div>
          <div className="mx-auto grid items-center gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-2">
            <img
              alt="Our History"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              height="310"
              src="/placeholder.svg"
              width="550"
            />
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">A Rich Tradition</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Acme Academy has a long and storied history, dating back to its founding in 1950. Over the decades, we
                have remained committed to providing a world-class education to our students, preparing them for success
                in the 21st century.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6 space-y-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700">
                Our Dedicated Faculty
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Inspiring Educators</h2>
              <p className="max-w-7xl  text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                At Acme Academy, our faculty is composed of experienced educators who are passionate about their
                subjects and committed to student success. They bring a wealth of knowledge and expertise to the
                classroom, and are dedicated to fostering a love of learning in every student.
              </p>
            </div>
          </div>
          <div className="mx-auto grid items-center gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <div className="grid gap-1">
              <div className="flex items-center justify-center h-24 w-24 rounded-full bg-gray-100 dark:bg-gray-700">
                <img
                  alt="Faculty Member"
                  className="rounded-full"
                  height="64"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "64/64",
                    objectFit: "cover",
                  }}
                  width="64"
                />
              </div>
              <h3 className="text-lg font-bold">Dr. Jane Doe</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Professor of Mathematics</p>
            </div>
            <div className="grid gap-1">
              <div className="flex items-center justify-center h-24 w-24 rounded-full bg-gray-100 dark:bg-gray-700">
                <img
                  alt="Faculty Member"
                  className="rounded-full"
                  height="64"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "64/64",
                    objectFit: "cover",
                  }}
                  width="64"
                />
              </div>
              <h3 className="text-lg font-bold">Mr. John Smith</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Professor of History</p>
            </div>
            <div className="grid gap-1">
              <div className="flex items-center justify-center h-24 w-24 rounded-full bg-gray-100 dark:bg-gray-700">
                <img
                  alt="Faculty Member"
                  className="rounded-full"
                  height="64"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "64/64",
                    objectFit: "cover",
                  }}
                  width="64"
                />
              </div>
              <h3 className="text-lg font-bold">Ms. Sarah Lee</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Professor of English</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 space-y-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700">
                Our Vibrant Campus
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">A Transformative Learning Environment</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Acme Academy's campus is designed to foster creativity, collaboration, and academic excellence. From our
                state-of-the-art facilities to our beautifully landscaped grounds, every aspect of our campus is
                tailored to support the growth and development of our students.
              </p>
            </div>
          </div>
          <div className="mx-auto grid items-center gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-2">
            <img
              alt="Our Campus"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              height="310"
              src="/placeholder.svg"
              width="550"
            />
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">A Vibrant Learning Environment</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Our campus features state-of-the-art facilities, including modern classrooms, well-equipped
                laboratories, a cutting-edge library, and a variety of recreational spaces. We strive to create a
                learning environment that is both inspiring and conducive to academic success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}