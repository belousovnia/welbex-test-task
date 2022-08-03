import { useEffect, useState } from "react";
import PageButton from "./PageButton";
import Filter from "./Filter";

function MainPage() {
  const [lines, setLines] = useState([]);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  const amountLines = 10;
  const amountPage = Math.ceil(data.length / amountLines);

  function buildTableLine(data, amount, page) {
    const listLine = [];
    for (var i = amount * (page - 1); i < data.length && i < amount * page; i++) {
      listLine.push(
        <tr  className="table__tr" key={`tr${i}`}>
          <th className="table__th">
            {data[i].date}
          </th>
          <th className="table__th">
            {data[i].name}
          </th>
          <th className="table__th">
            {data[i].amount}
          </th>
          <th className="table__th">
            {data[i].distance}
          </th>
        </tr>
      );
    };
    return listLine;
  };

  useEffect(() => {
    setLines(buildTableLine(data, amountLines, page));
  }, [page, data]);

  return (
    <>
      <header className="header"></header>
      <main className="main">
        <div className="table-container">
          <Filter
            setData={setData}
          />
          <table className="table">
            <thead className="table__thead">
              <tr className="table__tr table__tr_header">
                <th className="table__th">
                  Дата
                </th>
                <th className="table__th">
                  Название
                </th>
                <th className="table__th">
                  Количество
                </th>
                <th className="table__th">
                  Расстояние
                </th>
              </tr>
            </thead>
            <tbody className="table__tbody">
              {lines}
            </tbody>
          </table>
          <div>
            <PageButton
              amount = {amountPage}
              page = {page}
              callbeckPage = {setPage}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default MainPage;