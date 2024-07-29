
import Image from "next/image";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const teachers = [
  {
    name: "Olive Yew",
    subject: "English Teacher",
    imgSrc: "/images/teacher.jpg", // Update this path to your image path
    bgColor: "bg-blue-500",
    social: {
      linkedin: "#",
      facebook: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    name: "Aida Bugg",
    subject: "Math Teacher",
    imgSrc: "/teacher2.jpg", // Update this path to your image path
    bgColor: "bg-red-500",
    social: {
      linkedin: "#",
      facebook: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    name: "Teri Dactyl",
    subject: "Science Teacher",
    imgSrc: "/teacher3.jpg", // Update this path to your image path
    bgColor: "bg-yellow-500",
    social: {
      linkedin: "#",
      facebook: "#",
      instagram: "#",
      twitter: "#",
    },
  },
  {
    name: "Allie Grater",
    subject: "Drawing Teacher",
    imgSrc: "/teacher4.jpg", // Update this path to your image path
    bgColor: "bg-green-500",
    social: {
      linkedin: "#",
      facebook: "#",
      instagram: "#",
      twitter: "#",
    },
  },
];

const TeachersSection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-center mb-2 font-garamond lg:text-5xl">
        Meet Our <span className="text-blue-600">Teachers</span>
      </h2>
      <p className="text-center mb-8">
        Schools provide numerous benefits that contribute to the holistic
        development and growth of students. Here are some key benefits of
        attending school:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teachers.map((teacher, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg"
          >
            <div className="relative w-full h-96">
              <Image
                src={teacher.imgSrc}
                alt={teacher.name}
                layout="fill"
                objectFit="cover"
                // height={600}
                // width={600}
                className="object-cover h-fu"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-gray-200 opacity-50" />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {teacher.name}
                </h3>
                <p className="text-lg text-gray-200">{teacher.subject}</p>
                <div className="flex justify-center space-x-4 mt-4">
                  <a href={teacher.social.linkedin} className="text-white hover:text-blue-400">
                    <FaLinkedinIn />
                  </a>
                  <a href={teacher.social.facebook} className="text-white hover:text-blue-400">
                    <FaFacebookF />
                  </a>
                  <a href={teacher.social.instagram} className="text-white hover:text-pink-400">
                    <FaInstagram />
                  </a>
                  <a href={teacher.social.twitter} className="text-white hover:text-blue-400">
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeachersSection;
