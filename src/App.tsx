import "./global.css";
import Button from "./components/button/Button";
import List from "./components/list/List";
import Title from "./components/title/Title";

function App() {
  return (
    <div className="container">
      <main className="main">
        <div className="text">
          <Title styleHeading="heading">Go beyond and create your space</Title>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
            imperdiet sed idt.
          </p>
          <Button styleBtn="btn">Get started</Button>
        </div>
        <div className="number">
          <div>
            <Title styleHeading="">Title</Title>
            <p>pragrfo</p>
          </div>
          <div>
            <Title styleHeading="">Title</Title>
            <p>pragrfo</p>
          </div>
        </div>
      </main>
      <div className="list">
        <List />
      </div>
    </div>
  );
}

export default App;
