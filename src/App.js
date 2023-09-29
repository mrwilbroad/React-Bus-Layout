import "./App.css";
import Layout from "./components/Layout/Layout";
import BusLayoutContext from "./components/Context/BusLayoutContext";
import { useEffect, useState } from "react";

const App = ({
  nRows = 5,
  Right = {
    col: 2,
    title: "DRIVER",
  },
  Left = {
    col: 4,
    title: "ASSISTANCE",
  },
  onSeatSelect = () => {},
  onSeatCancel = () => {},
  DisabledSeat = [],
  onlyOnce = false,
  showInfo = true,
  valid = {
    AllowMax: false,
    max: 2,
  },
}) => {
  useEffect(() => {
    console.log("App Rendered .....********************##############");
  });

  const [SelectedSeat, setSelectedSeat] = useState([]);

  const RemoveFromSelected = (seat) => {
    setSelectedSeat((prev) => prev.filter((item) => item !== seat));
    onSeatCancel(seat);
  };

  const AddSelectedSeat = (seat) => {
    if (valid.AllowMax) {
      SelectedSeat.length < valid.max &&
        setSelectedSeat(() => [...SelectedSeat, seat]);
    } else {
      setSelectedSeat(() => [...SelectedSeat, seat]);
    }
  };

  const isDisabled = (seat) => {
    return (
      SelectedSeat.includes(seat) ||
      DisabledSeat.includes(seat) ||
      (onlyOnce && SelectedSeat.length > 0)
    );
  };

  return (
    <BusLayoutContext.Provider
      value={{
        Left: Left,
        valid: valid,
        Right: Right,
        nRows: nRows,
        showInfo: showInfo,
        onSeatSelect: onSeatSelect,
        onSeatCancel: RemoveFromSelected,
        DisabledSeat: DisabledSeat,
        SelectedSeat: SelectedSeat,
        AddSelectedSeat: AddSelectedSeat,
        isDisabled: isDisabled,
      }}
    >
      <main
        className="rounded mt-1 shadow bg-dark-blue"
        style={{
          overflowX: "auto",
          width: "max-content",
        }}
      >
        <Layout />
      </main>
    </BusLayoutContext.Provider>
  );
};

export default App;
