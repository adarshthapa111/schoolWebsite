import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center  bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 dark:bg-gray-950">
        <div className="hidden xl:block">
          <h1 className="md:text-4xl font-bold "> Briliant United Academy</h1>
        </div>
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Welcome Back
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
              Sign in to your account to continue
            </p>
          </div>
          <form className="mt-8 space-y-6 rounded-lg bg-white p-8 shadow-xl dark:bg-gray-800">
            <div className="space-y-4">
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  htmlFor="email"
                >
                  Email address
                </label>
                <input
                  autoComplete="email"
                  className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 p-2.5 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-50 dark:focus:border-indigo-500 dark:focus:ring-indigo-500"
                  id="email"
                  name="email"
                  placeholder="Enter your Email address..."
                  required
                  type="email"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  autoComplete="current-password"
                  className="mt-1 w-full rounded-md border border-gray-300 bg-gray-50 p-2.5 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-50 dark:focus:border-indigo-500 dark:focus:ring-indigo-500"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                  type="password"
                />
              </div>
            </div>
            <div>
              <button
                className="w-full rounded-md bg-indigo-600 py-2 px-4 text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-indigo-600"
                type="submit"
              >
                Sign in
              </button>
            </div>
          </form>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-700 dark:checked:bg-indigo-500 dark:checked:border-indigo-500"
                id="remember"
                name="remember"
              />
              <label
                className="ml-2 block text-sm text-gray-900 dark:text-gray-50"
                htmlFor="remember"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <Link
                className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                href="#"
              >
                Forgot your password?
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link
                className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                href="#"
              >
                Don't have an account? Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
