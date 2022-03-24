import TrollFace from './Troll Face.png';

export default function Header() {
  return (
    <header>
      <div className="title-box">
        <img src={TrollFace} className="header-logo" />
        <h2>Meme Generator</h2>
      </div>
      <h3 className="header-project">React Course - Project 3</h3>
    </header>
  );
}
