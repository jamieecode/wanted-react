import { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const onMouseEnterRest = () => setDropdown(false);
  const onMouseEnter = () => {
    if (window.innerWidth < 768) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const categories = [
    {
      categoryName: "영업",
      categoryItems: [
        "기업영업",
        "외부영업",
        "영업 관리자",
        "기술영업",
        "주요고객사 담당자",
        "솔루션 컨설턴트",
        "해외영업",
      ],
    },
    {
      categoryName: "미디어",
      categoryItems: [
        "콘텐츠 크리에이터",
        "PD",
        "영상 편집가",
        "에디터",
        "비디오 제작",
        "작가",
        "출판기획자",
      ],
    },
    {
      categoryName: "인사",
      categoryItems: [
        "인사담당",
        "리크루터",
        "조직문화",
        "평가 보상",
        "헤드헌터",
        "HRD",
        "HRBP",
      ],
    },
    {
      categoryName: "게임제작",
      categoryItems: [
        "게임 기획자",
        "게임 그래픽 디자이너",
        "모바일 게임 개발자",
        "게임 클라이언트 개발자",
        "게임 아티스트",
        "유니티 개발자",
        "게임 서버 개발자",
      ],
    },
    {
      categoryName: "금융",
      categoryItems: [
        "회계담당",
        "재무 담당자",
        "IR",
        "투자증권",
        "재무 분석가",
        "애널리스트",
        "내부통제 담당자",
      ],
    },
  ];

  return (
    <>
      <nav>
        <div className="navbar">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <h1>wanted</h1>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item" onMouseEnter={onMouseEnter}>
              <Link
                to="/search"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                탐색
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/career"
                className="nav-links"
                onMouseEnter={onMouseEnterRest}
                onClick={closeMobileMenu}
              >
                커리어 성장
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/salary"
                className="nav-links"
                onMouseEnter={onMouseEnterRest}
                onClick={closeMobileMenu}
              >
                직군별 연봉
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/resumes"
                className="nav-links"
                onMouseEnter={onMouseEnterRest}
                onClick={closeMobileMenu}
              >
                이력서
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/match-ups"
                className="nav-links"
                onClick={closeMobileMenu}
                onMouseEnter={onMouseEnterRest}
              >
                매치업
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/freelancers"
                className="nav-links"
                onClick={closeMobileMenu}
                onMouseEnter={onMouseEnterRest}
              >
                프리랜서
              </Link>
            </li>
          </ul>
          <div className="nav-icons">
            <div className="nav-icon">
              <i className="fas fa-search"></i>
              <div className="nav-icon-badge">N</div>
            </div>
            <div className="nav-icon">
              <i className="far fa-bell"></i>
              <div className="nav-icon-badge">N</div>
            </div>
            <img
              src="https://images.pexels.com/photos/4664463/pexels-photo-4664463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="donuts"
            />
            <Button />
          </div>
        </div>
        <div>{dropdown && <Dropdown categories={categories} />}</div>
      </nav>
    </>
  );
};

export default Navbar;
