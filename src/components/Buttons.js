import satData from "./satData";
import '../App';
import './styling.css'


//4 buttons when finished 

const Buttons = (props) => {
  return (
    <div className="flex-container">
      {props.displaySats.map((sat, id) => {
        return (
          <button onClick={() => props.filterByType(sat)} key={id}>
            {sat} Ortbit
          </button>
        );
      })};
      <button onClick={() => props.setSat(satData)}>
        All Orbits
        </button>
      </div>
  );
};

export default Buttons;