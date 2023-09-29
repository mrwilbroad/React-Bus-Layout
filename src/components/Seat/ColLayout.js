import React, { useContext, useState, useEffect } from "react";
import BusLayoutContext from "../Context/BusLayoutContext";

const ColLayout = ({ nCols = 1, start }) => {
  const cols = Array.from({ length: nCols }, (_, index) => index);
  const { isDisabled,onSeatSelect,AddSelectedSeat} = useContext(BusLayoutContext);
  const [colorFill] = useState({
    success: "#00FF00",
    disabled: "#e80d0d",
  });

  return (
    <React.Fragment>
      {cols.map((col, index) => {
        const SeatNo = index + start;
        return (
          <section key={index} className="mx-1">
            <button
              type="button"
              disabled={isDisabled(SeatNo)}
              onClick={() => {
                AddSelectedSeat(SeatNo);
                onSeatSelect(SeatNo);
              }}
              className="btn bg-dark-blue position-relative"
            >
              <i>
                <svg
                  fill={
                    isDisabled(SeatNo)
                      ? colorFill.disabled
                      : colorFill.success
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  height="2em"
                  viewBox="0 0 576 512"
                >
                  <path d="M288 0C422.4 0 512 35.2 512 80V96l0 32c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32l0 160c0 17.7-14.3 32-32 32v32c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32V448H192v32c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32l0-32c-17.7 0-32-14.3-32-32l0-160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h0V96h0V80C64 35.2 153.6 0 288 0zM128 160v96c0 17.7 14.3 32 32 32H272V128H160c-17.7 0-32 14.3-32 32zM304 288H416c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H304V288zM144 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM384 80c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16s7.2 16 16 16H368c8.8 0 16-7.2 16-16z" />
                </svg>
                <span
                  className={`badge position-absolute top-0 start-0 ${
                    isDisabled(SeatNo) ? "bg-danger" : "bg-success"
                  }`}
                >
                  {SeatNo}
                </span>
              </i>
            </button>
          </section>
        );
      })}
    </React.Fragment>
  );
};


export default ColLayout;
