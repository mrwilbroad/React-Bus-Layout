import React, { useCallback } from "react";
import BusLayoutContext from "../Context/BusLayoutContext";
import ColLayout from "./ColLayout";

const RowLayout = () => {
  const { nRows, Left, Right, showInfo, SelectedSeat, onSeatCancel } =
    React.useContext(BusLayoutContext);
  const Rows = Array.from({ length: nRows }, (_, index) => index);

  const CachedSeat = useCallback(
    () => (
      <section className="vstack gap-2">
        {SelectedSeat.length > 0 && showInfo && (
          <section
            style={{
              maxWidth: "30em",
              overflowX: "auto",
            }}
            className="card text-center bg-dark-blue border shadow"
          >
            <section className="card-body gap-1 hstack text-light">
              {SelectedSeat.map((seat, index) => (
                <i
                  onClick={() => onSeatCancel(seat)}
                  role="button"
                  key={index}
                  className="hstack gap-1 bg-danger"
                >
                  <span className="rounded p-1">{seat}</span>
                  <span className="badge badge-danger">x</span>
                </i>
              ))}
              <span></span>
            </section>
          </section>
        )}

        {Rows.length > 0 &&
          Rows.map((_row, index) => (
            <section
              key={index}
              className="hstack  justify-content-center p-2 gap-3"
            >
              <section>
                {index === 0 && (
                  <section className=" mb-3 text-light fw-bold text-start py-1">
                    <strong className="border p-2">{Left.title}</strong>
                  </section>
                )}
                <section className="hstack justify-content-center">
                  <ColLayout
                    start={(Left.col + Right.col) * index + 1}
                    nCols={Left.col}
                  />
                </section>
              </section>

              <section className="vr border" />
              <section>
                {index === 0 && (
                  <section className="mb-3 text-light fw-bold text-end py-1">
                    <strong className="border p-2">{Right.title}</strong>
                  </section>
                )}
                <section className="hstack justify-content-start">
                  <ColLayout
                    start={(Left.col + Right.col) * index + 1 + Left.col}
                    nCols={Right.col}
                  />
                </section>
              </section>
            </section>
          ))}
      </section>
    ),
    [nRows, Left, Right, showInfo, SelectedSeat, onSeatCancel]
  );
  return CachedSeat();
};

export default RowLayout;
