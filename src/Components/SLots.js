import React, { useState, useRef } from "react";
import "./style.css";
import Button from '@material-ui/core/Button';

function SLots() {
  const [cards1, setcards1] = useState("❤️");
  const [cards2, setcards2] = useState("❤️");
  const [cards3, setcards3] = useState("❤️");
  const [spining, setspining] = useState(false);
  let slotRef = [useRef(null), useRef(null), useRef(null)];
  const cardss = ["❤️", "♠️", "♦️", "♣️"];
  let balance = localStorage.getItem('balance') || 9.99;
    const spin = () => {
    

    // deduct $2 from balance
    localStorage.setItem('balance', (balance * 10 - 2 * 10) / 100);
    setspining(true);
    setTimeout(() => {
      setspining(false);
    }, 700);
    let selections = [];
    slotRef.forEach((slot, i) => {
      const [selected, option] = triggerSlotRotation(slot.current);
      if (i + 1 === 1) setcards1(selected);
      else if (i + 1 === 2) setcards2(selected);
      else setcards3(selected);
      selections.push(option);
    });

    const [a, b, c] = selections;
    if (a === b && b === c && c === 0) {
      // You won $5
      localStorage.setItem('balance', (balance * 10 + 5 * 10) / 100)

    }
    else if (a === b && b === c) {
        // you won $2
      localStorage.setItem('balance', (balance * 10 + 2 * 10) / 100)

    }
    else if (a === b || b === c || c === a) {
      // You won $0.5
      localStorage.setItem('balance', (balance * 10 + 0.5 * 10) / 100)
    }


 
    slotRef.forEach((slot, i) => {
      const selected = triggerSlotRotation(slot.current);
      if (i + 1 === 1) setcards1(selected);
      else if (i + 1 === 2) setcards2(selected);
      else setcards3(selected);
    });
  };

  const triggerSlotRotation = (ref) => {
    function setTop(top) {
      ref.style.top = `${top}px`;
    }
    let options = ref.children;
    let randomOption = Math.floor(Math.random() * cardss.length);
    let choosenOption = options[randomOption];
    setTop(-choosenOption.offsetTop + 2);
    return cardss[randomOption];
  };

  return (
    <div className="SlotMachine">
      <div className="slot">
        <section>
          <div className="container" ref={slotRef[0]}>
            {cardss.map((cards, i) => (
              <div key={i}>
                <span>{cards}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="slot">
        <section>
          <div className="container" ref={slotRef[1]}>
            {cardss.map((cards) => (
              <div>
                <span>{cards}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="slot">
        <section>
          <div className="container" ref={slotRef[2]}>
            {cardss.map((cards) => (
              <div>
                <span>{cards}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Button
        className={!spining ? "spin spining" : "spin"}
        onClick={!spining && spin}
        disabled={spining}
        variant="contained"  color="primary"     >
        {spining ? "Spining..." : "SPIN"}
      </Button>
    </div>
  );
}

export default SLots;
