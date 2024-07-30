import Image from "next/image";

export default function FeedbackSection() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 aspect-square">
          <Image
            src="/images/parents.jpeg"
            alt="Teri Dactyl"
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
          <div className="absolute top-2 left-2 text-2xl text-red-500">★</div>
          <div className="absolute top-2 right-2 text-2xl text-yellow-500">
            ★
          </div>
          <div className="absolute bottom-2 left-2 text-2xl text-red-500">★</div>
          <div className="absolute bottom-2 right-2 text-2xl text-yellow-500">
            ★
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl lg:text-6xl font-bold mb-4 font-garamond">
            Feedback From <span className="text-indigo-600">Parents</span>
          </h2>
          <div className="h-0.5 w-96 bg-pink-500 mb-6"></div>

          <h3 className="text-2xl font-semibold mb-4 font-garamond">
            Best Solution For My Child Education
          </h3>

          <p className="text-gray-600 mb-6">
            Schools provide numerous benefits that contribute to the holistic
            development and growth of students. Here are some key benefits of
            attending school Schools provide numerous benefits that contribute
            to the holistic development and growth.
          </p>

          <div className="mb-6">
            <p className="font-semibold">Dr.Sandeep Thapa</p>
            <p className="text-red-500">Doctor at abc.co</p>
          </div>

          <div className="flex gap-4">
            <button className="border border-red-500 text-red-500 px-4 py-2 rounded-full">
              ←
            </button>
            <button className="border border-red-500 text-red-500 px-4 py-2 rounded-full">
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
