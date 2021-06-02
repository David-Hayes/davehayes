import Head from 'next/head'
import Link from 'next/link'

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
  return (
    <>
      <Head>
        <title>David Hayes - Technical Lead</title>
        <meta
          name="description"
          content="Techincal Lead and Front End Developer based in the UK"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="max-w-lg mx-auto my-10">
        <header className="mb-12">
          <div className="rounded-md overflow-hidden shadow-md">
            <div className="bg-white bg-opacity-20 p-5 text-center">
              <img
                src="/profile.jpg"
                alt="David Hayes"
                className="rounded-full shadow-md mx-auto w-36"
                width="144"
                height="144"
              />
              <h1 className="text-3xl font-medium mt-5">David Hayes</h1>
              <p>Engineering Manager &amp; Techincal Lead</p>
            </div>
            <div className="bg-white bg-opacity-10 p-5 flex flex-row justify-center gap-3">
              <Link href="https://twitter.com/thedavehayes">
                <a title="Twitter" className="hover:text-gray-600">
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
                <a title="LinkedIn" className="hover:text-gray-600">
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
                <a title="GitHub" className="hover:text-gray-600">
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
                <a title="Dev.to" className="hover:text-gray-600">
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
            </div>
          </div>
        </header>
        <main>
          <div className="rounded-md overflow-hidden shadow-md mb-12">
            <div className="bg-white bg-opacity-20 p-5">
              <h2 className="text-xl font-medium">About</h2>
            </div>
            <div className="bg-white bg-opacity-10 p-5 flex flex-col gap-4">
              <p>
                Hi, I&apos;m David! I am a software engineering manager and
                techincal lead with over 10 years commerical experience.
              </p>
              <p>
                With a background in Front End Development (including JavaScript
                / React / Next.js) I thrive on building and empowering teams to
                deliver high quality user centric experiences.
              </p>
              <p>Feel free to reach out.</p>
            </div>
          </div>
          {props.feed.length > 0 && (
            <div className="rounded-md overflow-hidden shadow-md">
              <div className="bg-white bg-opacity-20 p-5">
                <h2 className="text-xl font-medium">Dev.to feed</h2>
              </div>
              <div className="bg-white bg-opacity-10 p-5 flex flex-col gap-6">
                {props.feed.map((article, index) => {
                  const date = new Date(article.isoDate)
                  return (
                    <div key={index}>
                      <h3 className="text-lg mb-1">
                        <Link href={article.link}>
                          <a
                            title="{article.title}"
                            className="hover:underline"
                          >
                            {article.title}
                          </a>
                        </Link>
                      </h3>
                      <p className="text-xs">{`${date.getDate()} ${date.toLocaleString(
                        'default',
                        {
                          month: 'long'
                        }
                      )} ${date.getFullYear()}`}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  )
}
