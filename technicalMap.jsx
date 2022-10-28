class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      appVersion: "",
    };
  }

  render() {
    return (
      <div class="container">
        <header>
          <h1>
            <a href="#">Jiwon Hwang - programming map</a>
          </h1>
        </header>
        <nav>
          <ol>
            <li>
              <a href="#" alter="html&css">
                HTML, CSS
              </a>
            </li>
            <li>
              <a href="#" alter="dom">
                DOM structure
              </a>
            </li>
            <li>
              <a href="#" alter="js">
                JavaScript
              </a>
            </li>
            <li>
              <a href="#" alter="ts">
                TypeScript
              </a>
            </li>
            <li>
              <a href="#" alter="java">
                Java
              </a>
            </li>
            <li>
              <a href="#" alter="python">
                Python
              </a>
            </li>
            <li>
              <a href="#" alter="linux">
                Linux
              </a>
            </li>
            <li>
              <a href="#" alter="qa">
                QA
              </a>
            </li>
            <li>
              <a href="#" alter="algorithm">
                Algorithm
              </a>
            </li>
          </ol>
        </nav>
      </div>
    );
  }
}
