import { useEffect, useState } from "react";
import Grid from "../components/grid";
import Bot from "../components/bot";

const directions = ["up", "right", "down", "left"];

export default function Index() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [direction, setDirection] = useState("up");
  const [alert, setAlert] = useState("");
  const [prize, setPrize] = useState(0);
  const [loading, setLoading] = useState(false);

  const moveForward = () => {
    if (direction === "up" && y > 0) {
      setY(y - 1);
      setAlert("");
    } else if (direction === "right" && x < 4) {
      setX(x + 1);
      setAlert("");
    } else if (direction === "down" && y < 4) {
      setY(y + 1);
      setAlert("");
    } else if (direction === "left" && x > 0) {
      setX(x - 1);
      setAlert("");
    } else setAlert("Je ne peux plus bouger dans cette direction !");
  };

  const turnLeft = () => {
    const currentIndex = directions.indexOf(direction);
    const newIndex = (currentIndex + 3) % 4;
    setDirection(directions[newIndex]);
  };

  const turnRight = () => {
    const currentIndex = directions.indexOf(direction);
    const newIndex = (currentIndex + 1) % 4;
    setDirection(directions[newIndex]);
  };

  const controller = [
    {
      name: "Tourner à gauche",
      handler: turnLeft,
    },
    {
      name: "Avance",
      handler: moveForward,
    },
    {
      name: "Tournez à droite",
      handler: turnRight,
    },
  ];

  useEffect(() => {
    setLoading(true);
    setPrize(Math.floor(Math.random(0) * 24));
    setLoading(false);
  }, []);

  if (!loading)
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-[#EFEAE5]">
        <div className="bg-primary w-full absolute top-0 flex items-center justify-center font-semibold py-2.5 lg:h-[30px]">
          Développeur Front End chez Collingwood, Victoria, Australie
        </div>
        <Grid prize={prize}>
          <Bot x={x} y={y} direction={direction} />
        </Grid>
        <div className="mt-4 flex gap-4">
          {controller.map((item, index) => {
            return (
              <button
                disabled={x === prize % 5 && y === Math.floor(prize / 5) ? true : false}
                className="px-4 py-2 bg-primary text-white rounded-[0.375rem]"
                key={index}
                onClick={item.handler}
              >
                {item.name}
              </button>
            );
          })}
        </div>
        {alert !== "" && (
          <p className="text-red-500 absolute top-20 text-xl">{alert}</p>
        )}
        <p
          className={`text-green-600 font-bold text-5xl top-32 absolute ${
            x === prize % 5 && y === Math.floor(prize / 5) ? "block" : "hidden"
          }`}
        >
          Tu as gagné!
        </p>
      </div>
    );
}
