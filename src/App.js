import "./styles/styles.scss";

function App() {
  return (
    <div id="container">
      <div id="content">
        <div id="about">
          <h1>
            <div style={{ float: "left", marginBottom: "20px" }}>
              Zach Saucier
            </div>
            <div className="stage">
              <div className="pyramid3d">
                <div className="triangle side1"></div>
                <div className="triangle side2"></div>
                <div className="triangle side3"></div>
                <div className="triangle side4"></div>
              </div>
            </div>
          </h1>
          <h3 style={{ clear: "both" }} className="subhead">
            <a href="https://plus.google.com/108495471566196018473/posts">
              Zach
            </a>{" "}
            is an enthusiastic, young, self-taught web applications developer
            currently studying at the University of Georgia.
          </h3>
          <p id="pleft">
            He does freelance work, writes for{" "}
            <a href="https://css-tricks.com/css-animation-tricks/">CSS</a>{" "}
            <a href="https://css-tricks.com/controlling-css-animations-transitions-javascript/">
              Tricks
            </a>
            , worked at{" "}
            <a href="http://deltadatasoft.com/">Delta Data Software</a> as a
            front-end developer, and is continuously working on personal
            projects to up his game.
          </p>
          <p id="pright">
            Look for some of his work &amp; experiments on{" "}
            <a href="https://codepen.io/Zeaklous">CodePen</a>,{" "}
            <a href="http://stackoverflow.com/users/2065702/zeaklous">
              StackOverflow
            </a>
            , <a href="https://cssdeck.com/user/Zeaklous">CSS Deck</a>, or a bit
            of his recent work below.
          </p>
          <ul>
            <li>
              <a href="https://cssdeck.com/labs/css-only-full-page-slider">
                CSS Only Full Page Slider
              </a>
            </li>
            <li>
              <a href="https://codepen.io/Zeaklous/pen/alpEm">
                CSS3 Circular Questionnaire (Plugin in development)
              </a>
            </li>
            <li>
              <a href="https://zachsaucier.com/TumblrBook.html">TumblrBook</a>
            </li>
          </ul>
          <p className="contactleft">
            Feel free to contact him at zachsaucier[at]gmail.com if you'd like
            for him to work for you!
          </p>
          <p className="contactright">
            Feel free to contact him at social network as well .com if you'd
            like for him to work for you!
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
