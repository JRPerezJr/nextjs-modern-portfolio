const WorkSection = () => {
  return (
    <div
      className="
          container
          mt-64
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
      <section className="w-full 3xl:mt-36">
        <h2 id="my-work" className="secondary-title">
          My work
        </h2>
        <p className="section-paragraph">
          I’ve had the pleasure of working with multiple Fortune 500 companies,
          designing and implementing both frontend and backend.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <img src="/static/images/web-dev.jpg" alt="web development" />
          <img src="/static/images/web-dev2.jpg" alt="web development" />
          <img src="/static/images/web-dev3.jpg" alt="web development" />
          <img src="/static/images/web-dev4.jpg" alt="web development" />
          <img src="/static/images/web-dev5.jpg" alt="web development" />
          <img src="/static/images/web-dev6.jpg" alt="web development" />
        </div>
      </section>
    </div>
  );
};

export default WorkSection;
