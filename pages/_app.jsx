import Link from 'next/link';

import '../styles/base.css';

const DocsApp = ({ Component, pageProps }) => (
  <>
    <nav className="text-white bg-gray-900 px-6 py-4 flex justify-between">
      <div>
        <Link href="/">
          <a className="text-xl text-teal-200 hover:text-white">Lean React</a>
        </Link>
      </div>
      <div className="flex">
        <Link href="/">
          <a className="mr-4">Dokumente</a>
        </Link>
        <Link href="/">
          <a className="">Tipps</a>
        </Link>
      </div>
    </nav>
    <Component {...pageProps} />
  </>
);

export default DocsApp;
