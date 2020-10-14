import React from "react";

const App = () => {
  return (
    <div>
      <nav>
        <a href="#" className="home-link">
          <span className="purple">{`<`}</span>
          {`ELLA `}
          <span className="purple">{`/>`}</span>
        </a>
        <ul className="nav-links">
          <li>
            <a href="#about">
              {`< `}
              <span>About </span>
              {`/>`}
            </a>
          </li>
          <li>
            <a href="#projects">
              {`< `}
              <span>Projects </span>
              {`/>`}
            </a>
          </li>
          <li>
            <a href="#contact">
              {`< `}
              <span>Contact </span>
              {`/>`}
            </a>
          </li>
        </ul>
      </nav>
      <main>
        {/*Landing Section*/}
        <section id="landing">
          <div className="addspace"></div>
          <div className="intro">
            <h1>Hello, I'm Ella.</h1>
            <h4>I'm an aspiring web developer</h4>
            <p className="intro-p">
              that has lived around the world but is currently settled in sunny
              Miami. I have experience in multiple industries - modeling,
              finance and sales - and now I like to make cool things people can
              use on the Internet.
            </p>
          </div>
          <a href="#about" className="down-arrow arrow-1">
            <img
              src="https://mbotaswbcw-flywheel.netdna-ssl.com/wp-content/uploads/sites/6/2019/06/white-down-arrow-png-2.png"
              alt=""
              className="down-arrow-image"
            />
          </a>
        </section>

        {/*About Section*/}
        <section id="about">
          <div className="about-div">
            <div className="inner-about-div">
              <h2>
                {` <`}
                <span>About</span> {`/>`}
              </h2>
              <div className="about-info">
                <p>It all started when I was born... Just kidding.</p>
                <p>
                  I've lived on four different continents during my lifetime
                  (forever the new kid) and worked professionally since I was
                  fifteen years old. I've worn a lot of hats - full-time
                  student, professional model, administrative assistant at a law
                  firm, and intern for a financial advisor. My current hat is in
                  sales at one of the largest insurance carriers in the world.
                </p>
                <p>
                  I graduated from the University of Miami with a Bachelor's in
                  Finance. My senior year, I took a digital marketing class in
                  which I had to build a website for a project. I used Wix, but
                  I remember thinking to myself, "Wouldn't it be nice if I could
                  control ALL of this?" And thus, my interest in coding was born
                  and you were subsequently brought by destiny to my website. I
                  enrolled in a fullstack engineering program and am now
                  proficient in HTML, CSS, JavaScript, React, Node, Express, and
                  PostgreSQL. Scroll down and you'll find my projects that
                  showcase said proficiency.
                </p>
                <p>Other useful links for you to check out:</p>
                <ul>
                  <li>Resume</li>
                  <li>LinkedIn</li>
                  <li>GitHub</li>
                </ul>
              </div>
            </div>
          </div>
          <a href="#about" className="down-arrow arrow-2">
            <img
              src="https://mbotaswbcw-flywheel.netdna-ssl.com/wp-content/uploads/sites/6/2019/06/white-down-arrow-png-2.png"
              alt=""
              className="down-arrow-image"
            />
          </a>
        </section>

        {/*Projects Section*/}
        <section id="projects">
          <h1>Projects</h1>
        </section>
      </main>
    </div>
  );
};

export default App;
