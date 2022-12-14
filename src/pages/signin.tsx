import { Logo } from '@/components';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function SignIn() {
  const router = useRouter();

  return (
    <>
      <div className="flex min-h-full w-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Logo className="mx-auto h-12 w-auto text-primary-9" />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-12">
            Sign in to your account
          </h2>
          <div className="mt-2 flex items-center justify-center gap-2">
            <span className="text-center text-sm text-gray-11">{`Don't have an account?`}</span>
            <a href="#" className="font-medium text-primary-9 hover:text-primary-10">
              Sign up
            </a>
          </div>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow dark:bg-gray-2 sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-10">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="test@gmail.com"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-7 bg-gray-1 px-3 py-2 placeholder-gray-8 shadow-sm focus:border-primary-9 focus:outline-none focus:ring-primary-9 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-10">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-7 bg-gray-1 px-3 py-2 placeholder-gray-8 shadow-sm focus:border-primary-9 focus:outline-none focus:ring-primary-9 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-7 bg-gray-1 text-primary-9 focus:ring-primary-9 focus:ring-offset-gray-1"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-12">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-primary-9 hover:text-primary-10">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-primary-9 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary-10 focus:outline-none focus:ring-2 focus:ring-primary-9 focus:ring-offset-2 focus:ring-offset-gray-1"
                >
                  Sign in
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="flex items-center text-sm">
                <hr className="flex-grow border-t border-gray-6" />
                <span className="px-2 text-gray-11">Or continue with</span>
                <hr className="flex-grow border-t border-gray-6" />
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={() =>
                    signIn('google', { callbackUrl: (router.query.callbackUrl as string) || '/' })
                  }
                  className="text-gray-111 inline-flex w-full justify-center rounded-md border border-gray-7 bg-gray-1 py-2 px-4 text-sm font-medium shadow-sm hover:bg-gray-2"
                >
                  <span className="sr-only">Sign in with Google</span>
                  <svg className="h-5 w-5" width="0.98em" height="1em" viewBox="0 0 256 262">
                    <path
                      fill="#4285F4"
                      d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                    ></path>
                    <path
                      fill="#34A853"
                      d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                    ></path>
                    <path
                      fill="#FBBC05"
                      d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                    ></path>
                    <path
                      fill="#EB4335"
                      d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                    ></path>
                  </svg>
                </button>

                {/* <a
                  href="#"
                  className="inline-flex w-full justify-center rounded-md border border-gray-7 bg-gray-1 py-2 px-4 text-sm font-medium text-gray-11 shadow-sm hover:bg-gray-2"
                >
                  <span className="sr-only">Sign in with Twitter</span>
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a> */}

                {/* <a
                  href="#"
                  className="inline-flex w-full justify-center rounded-md border border-gray-7 bg-gray-1 py-2 px-4 text-sm font-medium text-gray-11 shadow-sm hover:bg-gray-2"
                >
                  <span className="sr-only">Sign in with GitHub</span>
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
