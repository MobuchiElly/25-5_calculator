import React, { useState } from "react";

const App = () => {
  const [inputStr, setInputStr] = useState("");
  const [input, setInput] = useState("0");
  const [total, setTotal] = useState(0);

  const handleNumClick = (number) => {
    setInput(number);
    setInputStr((prevInput) => {
      if (prevInput !== 0) {
        return prevInput + number;
      } else {
        return number;
      }
    });
  };

  const handleOperator = (operator) => {
    setInputStr((prevInputStr) => {
      if(inputStr.includes('=')){
        setInputStr(total + operator);
        setTotal(0)
        setInput(operator);
      }
      if (prevInputStr.slice(-1) === ".") {
        return prevInputStr.slice(0, -1) + operator;
      } else if (!isNaN(Number(prevInputStr.slice(-1)))) {
        return prevInputStr + operator;
      } else {
        return prevInputStr.slice(0, -1) + operator;
      }
    });
  };

  const handleDecimal = () => {
    setInputStr((prevInputStr) => {
      if (!prevInputStr.includes(".")) {
        return prevInputStr + ".";
      } else {
        // if(prevInputStr.startsWith('.')){
        //   //this is where i would convert .23471 to 0.23471
        // }
        return prevInputStr;
      }
    });
  };

  const handleClear = () => {
    setInput("0");
    setTotal("0");
    setInputStr("");
  };

  const handleCalc = () => {
    try {
      const res = eval(inputStr);
      const resStr = res.toString();
      setTotal(resStr);
      setInputStr(inputStr + '=' + resStr);
    } catch {
      setTotal("Error");
    }
  };
  return (
    <div className="bg-[rgb(194,194,214)] h-screen w-screen flex flex-col justify-center items-center">
      {/* <div className=''> */}
      <div className="bg-black px-2 pb-1 w-96">
        <div className="pt-1 text-[rgb(214,165,0)] text-right font-ibm-plex-mono text-xl h-8">
          {inputStr}
        </div>
        <div className="pt-1 text-white text-right font-ibm-plex-mono text-2xl">
          {total && total !== 0 ? total : input}
        </div>
        <div>
          <div className="grid grid-cols-4 text-white text-center">
            <div
              id="clear"
              className="col-span-2 bg-[hsl(0,50%,45%)] py-6 hover:scale-[1.03] hover:border hover:border-1"
              style={{ margin: "0.6px" }} onClick={handleClear}
            >
              AC
            </div>
            <div
              id="divide"
              className="col-span-1 bg-[rgb(102,102,102)] py-6 hover:scale-[1.03] hover:border hover:border-1"
              style={{ margin: "0.6px" }} onClick={() => handleOperator('/')}
            >
              /
            </div>
            <div
              id="multiply"
              className="col-span-1 bg-[rgb(102,102,102)] py-6 hover:scale-[1.03] hover:border hover:border-1"
              style={{ margin: "0.6px" }} onClick={() => handleOperator('*')}
            >
              x
            </div>
            <div
              id="seven"
              className="col-span-1 bg-[rgb(77,77,77)] py-6 hover:scale-[1.03] hover:border hover:border-1"
              style={{ margin: "0.6px" }}
              onClick={() => handleNumClick(7)}
            >
              7
            </div>
            <div
              id="eight"
              className="col-span-1 bg-[rgb(77,77,77)] py-6 hover:scale-[1.03] hover:border hover:border-1"
              style={{ margin: "0.6px" }}
              onClick={() => handleNumClick(8)}
            >
              8
            </div>
            <div
              id="nine"
              className="col-span-1 bg-[rgb(77,77,77)] py-6 hover:scale-[1.03] hover:border hover:border-1"
              style={{ margin: "0.6px" }}
              onClick={() => handleNumClick(9)}
            >
              9
            </div>
            <div
              id="subtract"
              className="col-span-1 bg-[rgb(102,102,102)] py-6 hover:scale-[1.03] hover:border hover:border-1"
              style={{ margin: "0.6px" }} onClick={() => handleOperator('-')}
            >
              -
            </div>
            <div
              id="four"
              className="col-span-1 bg-[rgb(77,77,77)] py-6 hover:scale-[1.03] hover:border hover:border-1"
              style={{ margin: "0.6px" }}
              onClick={() => handleNumClick(4)}
            >
              4
            </div>
            <div
              id="five"
              className="col-span-1 bg-[rgb(77,77,77)] py-6 hover:scale-[1.03] hover:border hover:border-1"
              style={{ margin: "0.6px" }}
              onClick={() => handleNumClick(5)}
            >
              5
            </div>
            <div
              id="six"
              className="col-span-1 bg-[rgb(77,77,77)] py-6 hover:scale-[1.03] hover:border hover:border-1"
              style={{ margin: "0.6px" }}
              onClick={() => handleNumClick(6)}
            >
              6
            </div>
            <div
              id="add"
              className="col-span-1 bg-[rgb(102,102,102)] py-6 hover:scale-[1.03] hover:border hover:border-1"
              style={{ margin: "0.6px" }} onClick={() => handleOperator('+')}
            >
              +
            </div>
            <div
              id="one"
              className="col-span-1 bg-[rgb(77,77,77)] py-6 hover:scale-[1.03] hover:border hover:border-1"
              style={{ margin: "0.6px" }}
              onClick={() => handleNumClick(1)}
            >
              1
            </div>
            <div
              id="two"
              className="col-span-1 bg-[rgb(77,77,77)] py-6 hover:scale-[1.03] hover:border hover:border-1"
              style={{ margin: "0.6px" }}
              onClick={() => handleNumClick(2)}
            >
              2
            </div>
            <div
              id="three"
              className="col-span-1 bg-[rgb(77,77,77)] py-6 hover:scale-[1.03] hover:border hover:border-1"
              style={{ margin: "0.6px" }}
              onClick={() => handleNumClick(3)}
            >
              3
            </div>
            <div
              id="equals"
              className="col-span-1 row-span-2 bg-[rgb(0,68,102)] py-6 hover:scale-[1.03] hover:border hover:border-1"
              style={{ margin: "0.6px" }}
              onClick={handleCalc}
            >
              =
            </div>
            <div
              id="zero"
              className="col-span-2 bg-[rgb(77,77,77)] py-6 hover:scale-[1.03] hover:border hover:border-1"
              style={{ margin: "0.6px" }}
              onClick={() => handleNumClick(0)}
            >
              0
            </div>
            <div
              id="decimal"
              className="col-span-1 bg-[rgb(77,77,77)] py-6 hover:scale-[1.03] hover:border hover:border-1"
              style={{ margin: "0.6px" }}
              onClick={handleDecimal}
            >
              .
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 font-ibm-plex-mono-mono">
        Designed and Coded By BuchiDev
      </div>
      {/* </div> */}
    </div>
  );
};

export default App;
