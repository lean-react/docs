import '../styles/base.css';

const DocsApp = ({ Component, pageProps }) => (
  <>
    <nav className="bg-gray-900 text-white px-6 py-4 text-xl">
      <div>
        <span>Lean React</span>
      </div>
    </nav>
    <Component {...pageProps} />
  </>
);

export default DocsApp;
