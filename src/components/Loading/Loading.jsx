import { BeatLoader } from "react-spinners"

import "./Loading.css";

const loading = () => {
  return (
    <div className="loading">
      <BeatLoader color="#ff005c" size={20} />
    </div>
  );
}

export default loading