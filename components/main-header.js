import Link from 'next/link';

const MainHeader = () => {
  return (
    <>
      <header className="py-6">
        <div
          className="
          container
          flex
          justify-between
          items-center
          mx-auto
          px-8
          md:px-14
          lg:px-24
          w-full
        "
        >
          <div className="text-lg">JPerezdevinjp.com</div>
          <div className="hidden md:flex space-x-12 items-center">
            <Link href="#">
              <a className="text-selected-text">Home</a>
            </Link>
            <Link href="#my-work">
              <a>My projects</a>
            </Link>
            <Link href="#clients">
              <a>Clients</a>
            </Link>
            <Link href="#hire-me">
              <a>
                <button className="px-6 py-2 bg-theme font-bold">
                  Hire me
                </button>
              </a>
            </Link>
          </div>
          <div className="md:hidden">
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 25.5H4.25V22.6667H17V25.5ZM29.75 18.4167H4.25V15.5833H29.75V18.4167ZM29.75 11.3333H17V8.5H29.75V11.3333Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </header>
    </>
  );
};
export default MainHeader;
