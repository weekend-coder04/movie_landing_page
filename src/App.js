import { useState } from "react";
import "./App.css";

const images = [
  {
    name: "Deadpool and Wolverine",
    url: require("./assets/dead_wol.jpg"),
    description: [
      "Deadpool's peaceful existence comes crashing down when the Time Variance Authority recruits him to help safeguard the multiverse.",
      "He soon unites with his would-be pal, Wolverine, to complete the mission and save his world from an existential threat.",
    ],
  },
  {
    name: "Captain America",
    url: require("./assets/captain_america.webp"),
    description: [
      "Captain America is a superhero created by Joe Simon and Jack Kirby who appears in American comic books published by Marvel Comics.",
      "The character first appeared in Captain America Comics #1, published on December 20, 1940, by Timely Comics, a corporate predecessor to Marvel.",
      "In the final days of the war, an accident left Captain America frozen in a state of suspended animation until he was revived in modern times.",
    ],
  },
  {
    name: "Spider-Man",
    url: require("./assets/spiderman.jpg"),
    description: [
      "Spider-Man is a superhero in American comic books published by Marvel Comics. Created by writer-editor Stan Lee and artist Steve Ditko, he first appeared in the anthology comic book Amazing Fantasy #15 in the Silver Age of Comic Books.",
      "Spider-Man's secret identity is Peter Benjamin Parker. Initially, Peter was depicted as a teenage high-school student and an orphan raised by his Aunt May and Uncle Ben in New York City after his parents, Richard and Mary Parker, died in a plane crash.",
    ],
  },
  {
    name: "Deadpool",
    url: require("./assets/deadpool.jpg"),
    description: [
      "Deadpool is a 2016 American superhero film directed by Tim Miller, in his directorial debut, and written by Rhett Reese and Paul Wernick. Based on the Marvel Comics character of the same name and distributed by 20th Century Fox, it is a spin-off of the X-Men film series and its overall eighth installment.",
      "The film stars Ryan Reynolds in the title role, alongside Morena Baccarin, Ed Skrein, T.J. Miller, Gina Carano, and Brianna Hildebrand. In the film, Wade Wilson hunts the man responsible for giving him mutant abilities and a scarred physical appearance, becoming the antihero Deadpool.",
    ],
  },
  {
    name: "Thor",
    url: require("./assets/thor.webp"),
    description: [
      "Thor is exiled by his father, Odin, the King of Asgard, to the Earth to live among mortals.",
      "When he lands on Earth, his trusted weapon Mjolnir is discovered and captured by S.H.I.E.L.D.",
      "Thor is a prominent god in Germanic paganism. In Norse mythology, he is a hammer-wielding god associated with lightning, thunder, storms, sacred groves and trees, strength, the protection of humankind, hallowing, and fertility.",
    ],
  },
];

function App() {
  const [current, setCurrent] = useState(images[0]);
  const [zoom, setZoom] = useState(false);

  const handleClick = (index) => {
    setZoom(true);
    setTimeout(() => {
      setCurrent(images[index]);
      setZoom(false);
    }, 500); // Wait for the zoom-out effect to finish before updating
  };

  return (
    <div className="main-div">
      <section className={`wallpaper ${zoom ? "zoom-out" : "zoom-in"}`}>
        <div>
          <img src={current.url} alt={current.name} />
          <section>
            <label>{current.name}</label>
            {current.description.map((desc) => (
              <span key={desc}>{desc}</span>
            ))}
          </section>
        </div>
      </section>
      <section className="wallpaper-list">
        {images.map((image, index) => (
          <img
            key={image.name}
            src={image.url}
            height={100}
            width={50}
            alt={image.name}
            onClick={() => handleClick(index)}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
