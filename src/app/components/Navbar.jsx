import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <>
      <header className="mx-auto  mt-1 bg-white sticky top-0 dark:bg-gray-950">
        <div className="max-w-7xl container mx-auto flex h-24 items-center justify-between px-4 md:px-6">
          <Link className="flex items-center space-x-2" href="#">
            {/* <SchoolIcon className="h-6 w-6" /> */}
            <Image
              src="/images/school_logo.png"
              height={30}
              width={80}
              className=""
            />
            <span className="sr-only">Acme School</span>
            <div>
              <span className="font-medium font-garamond text-xl text-yellow-500 text-border-lowblack">
                Brilliant United Academy
              </span>
              <p className="text-sm text-center font-josefin">Tamghas, Gulmi</p>
            </div>
          </Link>
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              className="text-gray-900 hover:text-gray-700 dark:text-gray-50 dark:hover:text-gray-300 transition-colors"
              href="/"
            >
              Home
            </Link>
            <Link
              className="text-gray-900 hover:text-gray-700 dark:text-gray-50 dark:hover:text-gray-300 transition-colors"
              href="/About"
            >
              About
            </Link>
            <Link
              className="text-gray-900 hover:text-gray-700 dark:text-gray-50 dark:hover:text-gray-300 transition-colors"
              href="/A"
            >
              Teachers
            </Link>
            <Link
              className="text-gray-900 hover:text-gray-700 dark:text-gray-50 dark:hover:text-gray-300 transition-colors"
              href="/A"
            >
              Academics
            </Link>
            <Link
              className="text-gray-900 hover:text-gray-700 dark:text-gray-50 dark:hover:text-gray-300 transition-colors"
              href="/A"
            >
              Gallery
            </Link>
            {/* <Link
              className="text-gray-900 hover:text-gray-700 dark:text-gray-50 dark:hover:text-gray-300 transition-colors"
              href="/Admin/StudentMarks"
            >
              Add Grades
            </Link>
            <Link
              className="text-gray-900 hover:text-gray-700 dark:text-gray-50 dark:hover:text-gray-300 transition-colors"
              href="/AddStudent"
            >
              Add Students
            </Link>
            <Link
              className="text-gray-900 hover:text-gray-700 dark:text-gray-50 dark:hover:text-gray-300 transition-colors"
              href="/UserData"
            >
              All Students
            </Link> */}
          </nav>
          <div className="space-x-6">
            <Link
              className="text-white bg-blue-500 py-3 px-4 shadow-gray-400 border border-gray-50 shadow-md rounded-t-full rounded-bl-full transition-transform font-medium hover:scale-105 font-garamond tracking-wider "
              href="/Login"
            >
              Login
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function SchoolIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 22v-4a2 2 0 1 0-4 0v4" />
      <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
      <path d="M18 5v17" />
      <path d="m4 6 8-4 8 4" />
      <path d="M6 5v17" />
      <circle cx="12" cy="9" r="2" />
    </svg>
  );
}
