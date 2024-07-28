import Link from "next/link";

export default function Page() {
  return (
    <div className="flex min-h-screen w-full bg-gradient-to-r from-purple-500 to-indigo-500 dark:bg-gray-900">
      <div className="flex w-full flex-col items-center justify-center px-4 py-12 lg:flex-row lg:justify-between lg:px-8">
        <div className="hidden lg:flex lg:w-1/2 lg:items-center lg:justify-center">
          <h1 className="text-5xl font-extrabold text-white"> Welcome to Brilliant United Academy</h1>
        </div>
        <div className="flex w-full max-w-xl flex-col space-y-8 rounded-lg bg-white p-8 shadow-xl transform transition-transform duration-500 hover:scale-105 dark:bg-gray-800 lg:w-1/2">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50">Create an Account</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">Enter your details to get started.</p>
          </div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="name">Name</label>
                <input className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-purple-500 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-purple-500 dark:focus:ring-purple-500" id="name" placeholder="Enter your name" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="email">Email</label>
                <input className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-purple-500 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-purple-500 dark:focus:ring-purple-500" id="email" placeholder="you@example.com" required type="email" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="password">Password</label>
                <input className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-purple-500 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-purple-500 dark:focus:ring-purple-500" id="password" placeholder="Enter a password" required type="password" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="confirm-password">Confirm Password</label>
                <input className="w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-purple-500 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-purple-500 dark:focus:ring-purple-500" id="confirm-password" placeholder="Confirm your password" required type="password" />
              </div>
            </div>
            <button className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-3 text-sm font-medium text-white shadow-md transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:bg-purple-600 dark:hover:bg-indigo-700 dark:focus:ring-purple-600" type="submit">Sign up</button>
          </div>
          <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <Link className="font-medium text-purple-500 hover:underline dark:text-purple-400" href="#">
              Sign in
            </Link>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-center text-gray-600 dark:text-gray-400 lg:hidden">
          <p>By signing up, you agree to our</p>
          <div className="flex gap-2">
            <Link className="font-medium text-purple-500 hover:underline dark:text-purple-400" href="#">
              Terms of Service
            </Link>
            <span>and</span>
            <Link className="font-medium text-purple-500 hover:underline dark:text-purple-400" href="#">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
