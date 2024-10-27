import buttons from "../../css/home/summonButton.module.css";
import { useNavigate } from "react-router-dom";

const SummonButton = () => {
  const navigate = useNavigate();

  return (
    <div className={buttons.button}>
      <img src="/home/SummonButton/button.svg" alt="召喚" onClick={() => navigate("/camera")}/>
    </div>
  );
};

export default SummonButton;
