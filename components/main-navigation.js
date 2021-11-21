import { useState, useEffect } from 'react';

import Link from 'next/link';

const staticLinks = [
  {
    id: 1,
    title: 'Home',
    slug: '/#',
  },
  {
    id: 2,
    title: 'Projects',
    slug: '#my-work',
  },
  {
    id: 3,
    title: 'Clients',
    slug: '#clients',
  },
  {
    id: 4,
    title: 'Hire',
    slug: '#hire-me',
  },
];

const MainNavigation = () => {
  const [isSelected, setIsSelected] = useState(true);

  const handleScroll = () => {
    const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
      return (
        Math.abs(a.getBoundingClientRect().top) -
        Math.abs(b.getBoundingClientRect().top)
      );
    });

    setIsSelected(false);
    document
      .querySelectorAll('.selected-circle')
      .forEach((c) => c.classList.remove('selected-circle'));

    document
      .querySelectorAll('.nav-dot')
      [
        [...document.querySelectorAll('h1, h2')].indexOf(titles[0])
      ].classList.add('selected-circle');
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (isSelected) {
        setIsSelected(true);
      } else {
        setIsSelected(false);
      }
    };
  }, []);

  return (
    <div
      className="
        container
        mt-16
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
      <div className="flex flex-wrap md:flex-nowrap">
        <nav
          className="
            inline-block
            lg:mr-24 lg:w-4
            fixed
            left-percentage
            hidden
            xl:block
          "
        >
          <div className="absolute left-50 transform -translate-x-1/2 space-y-6 mt-37">
            {staticLinks.map((link) => {
              return (
                <Link key={link.id} href={link.slug}>
                  <a
                    className={`nav-dot
                ${isSelected && link.id === 1 ? 'selected-circle' : ''}
                block
                w-7
                h-7
                rounded-full
                border-4 border-nav
                bg-body`}
                  >
                    <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">
                      {link.title}
                    </span>
                  </a>
                </Link>
              );
            })}
            {/* <Link href="#">
              <a
                className="
                nav-dot
                selected-circle
                block
                w-7
                h-7
                rounded-full
                border-4 border-nav
                bg-body
              "
              >
                <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">
                  Home
                </span>
              </a>
            </Link>

            <Link href="#my-work">
              <a
                className="
                nav-dot
                block
                w-7
                h-7
                rounded-full
                border-4 border-nav
                bg-body
              "
              >
                <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">
                  Projects
                </span>
              </a>
            </Link>

            <Link href="#clients">
              <a
                className="
                nav-dot
                block
                w-7
                h-7
                rounded-full
                border-4 border-nav
                bg-body
              "
              >
                <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">
                  Clients
                </span>
              </a>
            </Link>

            <Link href="#hire-me">
              <a
                className="
                nav-dot
                block
                w-7
                h-7
                rounded-full
                border-4 border-nav
                bg-body
              "
              >
                <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">
                  Hire
                </span>
              </a>
            </Link> */}
          </div>
        </nav>

        {/* <!-- Hero --> */}
        <div
          className="
            flex flex-wrap
            lg:ml-20
            justify-center
            md:justify-start
            max-w-xl
            mt-0
            md:my-36
          "
        >
          <h1
            className="
              font-bold
              text-5xl
              md:text-6xl
              lg:text-7xl
              text-center
              md:text-left
            "
          >
            Building fast & beautiful web experiences.
          </h1>

          {/* <!-- Hero button --> */}
          <div className="w-full flex justify-center md:justify-start">
            <button
              className="
                px-8
                py-4
                bg-theme
                text-white
                font-bold
                mt-12
                flex
                items-center
                space-x-3
              "
            >
              <div>
                <img
                  className="work-icon"
                  src="/static/images/web-design.svg"
                  alt="web design icon"
                />
              </div>
              <span>My projects</span>
            </button>
          </div>
        </div>
        {/* <!-- Hero image --> */}
        <img
          className="w-3/4 mt-12 md:absolute -mt-6 md:mt-0 right-0 -z-1"
          src="/static/images/computer.jpg"
          alt="computer"
        />
      </div>
    </div>
  );
};

export default MainNavigation;
