import { Link } from "react-router-dom";
import "./Button.css";

export function Button() {
  return (
    <Link to="sign-up">
      <button className="btn">기업 서비스</button>
    </Link>
  );
}
