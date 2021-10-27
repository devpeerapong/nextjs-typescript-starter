import Head from "next/head";
import Image from "next/image";
import useDarkMode from "use-dark-mode";

export default function Home() {
  const darkMode = useDarkMode(false, {
    classNameLight: "light",
    classNameDark: "dark",
  });

  return (
    <div className="min-h-screen px-2 flex flex-col justify-center items-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="pt-10 pb-20 flex-1 flex flex-col justify-center items-center text-center">
        <button
          className="p-3 hover:bg-gray-300 dark:hover:bg-gray-700 rounded self-end mb-10"
          onClick={darkMode.toggle}
        >
          {darkMode.value ? (
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1.5em"
              width="1.5em"
            >
              <path d="M152.62 126.77c0-33 4.85-66.35 17.23-94.77C87.54 67.83 32 151.89 32 247.38 32 375.85 136.15 480 264.62 480c95.49 0 179.55-55.54 215.38-137.85-28.42 12.38-61.8 17.23-94.77 17.23-128.47 0-232.61-104.14-232.61-232.61z" />
            </svg>
          ) : (
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1.5em"
              width="1.5em"
            >
              <path d="M234 26h44v92h-44zm0 368h44v92h-44zm104.025-251.143l65.054-65.054 31.113 31.113-65.054 65.054zM77.815 403.074l65.054-65.054 31.113 31.113-65.054 65.054zM394 234h92v44h-92zm-368 0h92v44H26zm312.029 135.14l31.112-31.113 65.054 65.054-31.112 31.112zM77.802 108.92l31.113-31.113 65.054 65.054-31.113 31.112zM256 358a102 102 0 11102-102 102.12 102.12 0 01-102 102z" />
            </svg>
          )}
        </button>
        <h1
          className="text-6xl leading-tight font-bold mb-8"
          data-testid="title"
        >
          Welcome to{" "}
          <a
            href="https://nextjs.org"
            className="text-blue-600 hover:underline focus:underline active:underline"
          >
            Next.js!
          </a>
        </h1>

        <p className="leading-normal text-2xl">
          Get started by editing{" "}
          <code className="bg-gray-100 dark:bg-gray-900 rounded-lg p-3 text-xl font-mono">
            pages/index.js
          </code>
        </p>

        <div className="grid md:grid-cols-2 justify-center items-center flex-wrap max-w-screen-md mt-12">
          <a
            href="https://nextjs.org/docs"
            className="m-4 p-6 text-left border border-gray-500 rounded-xl hover:border-blue-600 hover:text-blue-600"
          >
            <h3 className="mb-4 text-2xl font-bold">Documentation &rarr;</h3>
            <p className="text-xl leading-normal">
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="m-4 p-6 text-left border border-gray-500 rounded-xl hover:border-blue-600 hover:text-blue-600"
          >
            <h3 className="mb-4 text-2xl font-bold">Learn &rarr;</h3>
            <p className="text-xl leading-normal">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="m-4 p-6 text-left border border-gray-500 rounded-xl hover:border-blue-600 hover:text-blue-600"
          >
            <h3 className="mb-4 text-2xl font-bold">Examples &rarr;</h3>
            <p className="text-xl leading-normal">
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="m-4 p-6 text-left border border-gray-500 rounded-xl hover:border-blue-600 hover:text-blue-600"
          >
            <h3 className="mb-4 text-2xl font-bold">Deploy &rarr;</h3>
            <p className="text-xl leading-normal">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className="w-full h-20 border-t border-gray-500 flex justify-center items-center">
        <a
          className="flex justify-center items-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image
            src="/vercel.svg"
            width={70}
            height={16}
            alt="Vercel Logo"
            className="h-4 ml-2 filter dark:invert"
          />
        </a>
      </footer>
    </div>
  );
}
