import { CMS_NAME, CMS_URL } from '../lib/constants'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Blog.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        A client side generated blog example using{' '}
        <a
          href="https://docs.microsoft.com/en-us/azure/static-web-apps/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Static Web Apps
        </a>{' '}
        and{' '}
        <a
          href="https://reactjs.org/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          React
        </a>{' '}
        and{' '}
        <a
          href={CMS_URL}
          className="underline hover:text-success duration-200 transition-colors"
        >
          {CMS_NAME}
        </a>
        .
      </h4>
    </section>
  )
}
