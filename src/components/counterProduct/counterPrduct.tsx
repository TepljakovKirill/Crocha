import React from "react";

function CounterProduct() {
  const [count, setCount] = React.useState(1);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count >= 2) {
      setCount(count - 1);
    }
  }

  return (
    <div className="basket-total__counter flex">
      <p className="counter-number">{count}</p>
      <div className="counter-button flex">
        <button onClick={increment} className="button-arrow flex">
          <img
            className="button-arrow__img"
            src="../../../public/img/arrow-top.png"
            alt="стрелка вверх"
          />
        </button>
        <button onClick={decrement} className="button-arrow flex">
          <img
            className="button-arrow__img"
            src="../../../public/img/arrow-bottom.png"
            alt="стрелка вниз"
          />
        </button>
      </div>
    </div>
  );
}

export default CounterProduct;
