import { Button } from "antd";
import { useEffect, useState } from "react";

function PageButton(props) {
  const  {
    amount,
    page,
    callbeckPage,
  } = props;

  const [listButton, setListButton] = useState([]);

  function buildPage(page, amount) {
    const newListButton = [];
    let min = page - 2;
    let max = page + 2;
    if (amount < 5) {
      min = 1;
      max = amount;
    } else if (min < 1) {
      min = 1;
      max = 5;
    } else if (max > amount) {
      min = amount - 4;
      max = amount;
    };

    for (let i = min; i <= max; i++) {
      if (i == page) {
        newListButton.push(
          <Button 
            type="primary" 
            size={'small'}
            key={`pb${i}`}
            onClick={() => callbeckPage(i)}
          >
              {i}
          </Button>
        )
      } else { 
        newListButton.push(
          <Button 
            type="default" 
            size={'small'}
            key={`pb${i}`}
            onClick={() => callbeckPage(i)}
          >
              {i}
          </Button>
        )
      };
    };
    return newListButton;
  };

  function pageIncrement() {
    if (page + 1 <= amount) {
      callbeckPage(page + 1);
    };
  };

  function pageDecrement() {
    if (page - 1 >= 1) {
      callbeckPage(page - 1);
    };
  };

  useEffect(() => {
    setListButton(buildPage(page, amount));
  }, [page, amount]);

  return (
    <div className="page-button">
      <Button 
        type="default" 
        size={'small'}
        onClick={pageDecrement}
      >
          {'<'}
      </Button>
      <Button 
        type="default" 
        size={'small'}
        onClick={() => callbeckPage(1)}
      >
        {'<<'}
      </Button>

      {listButton}

      <Button 
        type="default" 
        size={'small'}
        onClick={() => callbeckPage(amount)}
      >
        {'>>'}
      </Button>
      <Button 
        type="default" 
        size={'small'}
        onClick={pageIncrement}
      >
        {'>'}
      </Button>
    </div>
  );
};

export default PageButton;