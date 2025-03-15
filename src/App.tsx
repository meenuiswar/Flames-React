import { useState } from "react";
import { TiHeart } from "react-icons/ti";

const App = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [flames, setFlames] = useState("");

  const [name1Withstrikes, setName1Withstrikes] = useState("");
  const [name2Withstrikes, setName2Withstrikes] = useState("");

  function getResultText(ch: string) {
    switch (ch) {
      case "f":
        return "Friendship";

      case "l":
        return "Lovers";

      case "a":
        return "Affection";

      case "m":
        return "Marriage";

      case "e":
        return "Enemity";

      case "s":
        return "Siblings";

      default:
        return "FLAME Test works only for different names";
    }
  }

  const calculateFlames = () => {
    if (name1 === name2) {
      setFlames("FLAME Test works only for different names");
      return;
    }
    let tempName1 = name1.toLowerCase();
    let tempName2 = name2.toLowerCase();
    let i, j;
    for (i = 0; i < tempName1.length; i++) {
      for (j = 0; j < tempName2.length; j++) {
        if (tempName1[i] === tempName2[j]) {
          const ch = tempName1[i];
          if (ch != "#") {
            tempName1 = tempName1.replace(ch, "#");
            tempName2 = tempName2.replace(ch, "#");
          }
        }
      }
    }
    setName1Withstrikes(tempName1);
    setName2Withstrikes(tempName2);
    const n1 = tempName1.split("#").join("");
    const n2 = tempName2.split("#").join("");
    let name = n1 + n2;
    let temp;
    const resultLength = name.length;
    let baseInput = "flames";
    let relationIs = "";
    if (resultLength > 0) {
      while (baseInput.length != 1) {
        var tmpLen = resultLength % baseInput.length; //finding char position to strike
        if (tmpLen != 0) {
          temp =
            baseInput.substring(tmpLen) + baseInput.substring(0, tmpLen - 1); //Append part start from next char to strike and first charater to char before strike.
        } else {
          temp = baseInput.substring(0, baseInput.length - 1); //If mod result zero we can strike last letter easily
        }
        baseInput = temp; //Assign the temp to baseinput for next iteration.
      }
      relationIs = baseInput.charAt(0);
      const resultText = getResultText(relationIs);
      setFlames(resultText);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#F7CFD8] font-serif">
      <div className="flex flex-col gap-4 bg-white p-12 rounded-lg shadow-md md:min-w-md">
        <div className="flex flex-row gap-2 justify-center  pb-4 ">
          <div className="text-[#ff6699] text-3xl font-normal">
            <TiHeart />
          </div>
          <div className="text-[#00bfff] text-3xl font-normal">FLAMES</div>
          <div className="text-[#ff6699] text-3xl font-normal">
            <TiHeart />
          </div>
        </div>
        <input
          type="text"
          placeholder="Your Name"
          className="border border-b-[#ff6699] border-t-0 border-x-0 text-[#ff6699] p-2 mb-2 focus:outline-none "
          value={name1}
          onChange={(e) => setName1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Your Crush's Name"
          className="border border-b-[#ff6699] border-t-0 border-x-0 text-[#ff6699] p-2 mb-8 focus:outline-none "
          value={name2}
          onChange={(e) => setName2(e.target.value)}
        />
        <div className="flex flex-row gap-1 justify-center items-center">
         
         
          <button
            className=" text-[#00bfff]  font-semibold cursor-pointer hover:bg-blue-50 p-2 rounded-md"
            onClick={calculateFlames}
          >
            Check FLAMES
          </button>
          <TiHeart className="text-[#F7CFD8] text-2xl" />
          <button
            className="  text-[#00bfff] font-semibold cursor-pointer hover:bg-blue-50 p-2 rounded-b-md"
            onClick={() => {
              setName1("");
              setName2("");
              setFlames("");
              setName1Withstrikes("");
              setName2Withstrikes("");
            }}
            disabled={name1 === "" && name2 === "" && flames === ""}
          >
            Clear
          </button>
        </div>
        {/* <div className="flex flex-row justify-between  text-[#ff6699]"><div>{name1Withstrikes}</div> <div>{name2Withstrikes}</div></div> */}
        <div className="animate-bounce h-4 font-semibold text-[#ff6699] text-center mt-8">
          {flames}
        </div>
      </div>
    </div>
  );
};

export default App;
