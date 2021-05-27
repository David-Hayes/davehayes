import Head from 'next/head'
import Link from 'next/link'
import { useTheme } from 'next-themes'

export async function getStaticProps() {
  const feed = await fetch(
    `${process.env.NEXT_PUBLIC_BASEURL}/.netlify/functions/devfeed`
  )
  const data = await feed.json()
  return {
    props: { feed: data }
  }
}

export default function Home(props) {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <>
      <Head>
        <title>David Hayes - Front End Developer and Tech Lead</title>
        <meta
          name="description"
          content="Front End Developer and Techincal Lead based in the UK"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className="mb-16">
        <div className="max-w-screen-md mx-auto px-5 flex justify-between items-center pt-5">
          <h1 className="text-xl flex items-center">
            <svg viewBox="0 0 800 800" version="1.1" className="w-10 mr-3">
              <circle cx="400" cy="400" r="400" fill="#d04b27" />
              <g>
                <path
                  fill="#efefef"
                  d="M253.084,689.423c-16.078,-0 -30.816,-4.02 -44.215,-12.059c-13.399,-8.039 -24.05,-20.366 -31.956,-36.98c-7.905,-16.614 -11.857,-37.114 -11.857,-61.5c-0,-22.777 4.689,-43.545 14.068,-62.303c9.379,-18.758 22.845,-33.564 40.397,-44.416c17.552,-10.853 38.253,-16.28 62.102,-16.28c13.667,0 26.128,1.474 37.382,4.422l0,-75.166l-40.999,-4.824l-0,-17.284l72.352,-7.235l1.206,-0l8.843,6.431l0,302.272l23.314,0l-0,18.491c-8.575,1.875 -16.012,3.349 -22.309,4.421c-6.297,1.072 -12.93,1.608 -19.897,1.608c-6.967,-0 -11.925,-1.206 -14.872,-3.618c-2.948,-2.411 -4.422,-7.503 -4.422,-15.274l0,-12.863c-7.503,9.111 -17.351,16.748 -29.544,22.912c-12.193,6.163 -25.39,9.245 -39.593,9.245Zm16.079,-28.539c10.451,-0 20.232,-2.345 29.343,-7.034c9.111,-4.69 15.944,-10.116 20.499,-16.28l0,-147.116c-2.143,-3.216 -7.168,-6.097 -15.073,-8.642c-7.905,-2.546 -16.279,-3.819 -25.122,-3.819c-20.902,-0 -37.583,7.972 -50.044,23.916c-12.461,15.945 -18.691,40.531 -18.691,73.76c-0,28.941 5.493,50.378 16.48,64.313c10.987,13.935 25.19,20.902 42.608,20.902Z"
                />
                <path
                  fill="#efefef"
                  d="M421.505,385.141l-33.765,-4.422l0,-17.284l65.519,-7.637l0.804,-0l8.843,6.029l0,93.254l-1.607,34.167c8.575,-7.771 20.365,-15.141 35.372,-22.108c15.006,-6.967 30.147,-10.451 45.421,-10.451c16.882,0 30.013,3.216 39.392,9.647c9.379,6.431 15.944,16.279 19.696,29.544c3.752,13.265 5.627,31.152 5.627,53.661l0,112.147l28.137,3.617l0,19.696l-96.068,0l0,-19.696l26.128,-3.617l-0,-112.549c-0,-15.81 -1.072,-28.204 -3.216,-37.181c-2.144,-8.977 -6.163,-15.676 -12.059,-20.098c-5.895,-4.421 -14.738,-6.632 -26.529,-6.632c-9.647,0 -19.964,2.412 -30.951,7.235c-10.986,4.824 -20.633,10.451 -28.941,16.883l0,152.342l27.735,3.617l0,19.696l-93.656,0l0,-19.696l24.118,-3.215l-0,-276.949Z"
                />
              </g>
            </svg>
            David Hayes
          </h1>
          <div>
            <button
              aria-label="Toggle Dark Mode"
              type="button"
              onClick={() =>
                setTheme(
                  resolvedTheme === 'dark' || resolvedTheme === undefined
                    ? 'light'
                    : 'dark'
                )
              }
              className="hover:text-primary"
            >
              {resolvedTheme === 'dark' || resolvedTheme === undefined ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-screen-md mx-auto px-5 mb-16">
          <div className="w-32 h-32 relative rounded-full overflow-hidden border-primary border-4 mx-auto mb-7">
            <img src="/profile.jpg" alt="Profile" />
          </div>
          <p className="text-center text-3xl mb-4">Hi, I&apos;m David!</p>
          <p className="text-center mb-10">
            I am a technical lead with a background in Front End Development. I
            thrive on empowering teams to deliver high quality user centric
            experiences. Feel free to reach out!
          </p>
          <p className="flex items-center justify-center space-x-5">
            <Link href="https://twitter.com/thedavehayes">
              <a title="Twitter" className="hover:text-primary">
                <svg
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-7"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/dave-hayes/">
              <a title="LinkedIn" className="hover:text-primary">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-7"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </Link>
            <Link href="https://github.com/David-Hayes">
              <a title="GitHub" className="hover:text-primary">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-7"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            </Link>
            <Link href="https://dev.to/davidhayes">
              <a title="Dev.to" className="hover:text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  role="img"
                  fill="currentColor"
                  className="w-7"
                >
                  <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z" />
                </svg>
              </a>
            </Link>
          </p>
        </div>
        <div className="bg-gray-300 dark:bg-gray-700 py-10">
          <div className="max-w-screen-md mx-auto px-5">
            <h2 className="text-2xl font-bold mb-5">My dev.to feed</h2>
            <div className="space-y-4">
              {props.feed.map((article, index) => {
                const date = new Date(article.isoDate)
                return (
                  <div
                    key={index}
                    className="bg-gray-200 dark:bg-gray-800 rounded-md p-6"
                  >
                    <h3 className="text-xl">
                      <Link href={article.link}>
                        <a
                          title={article.title}
                          target="_blank"
                          className="hover:text-primary"
                        >
                          {article.title}
                        </a>
                      </Link>
                    </h3>
                    <p>{`${date.getDate()} ${date.toLocaleString('default', {
                      month: 'long'
                    })} ${date.getFullYear()}`}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="max-w-screen-md mx-auto px-5 py-5 text-xs">
          &copy; David Hayes
        </div>
      </footer>
    </>
  )
}
