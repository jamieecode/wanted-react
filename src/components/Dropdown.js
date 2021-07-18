import SideMenu from "./SideMenu";
import "./Dropdown.css";

const Dropdown = ({ categories }) => {
  const sideMenuItems = [
    "엔지니어링설계",
    "물류무역",
    "제조생산",
    "의료제약바이오",
    "교육",
    "법률법집행기관",
    "식음료",
    "건설시설",
    "공공복지",
  ];

  return (
    <div className="dropdown-nav">
      <ul className="categories">
        {categories.map(({ categoryName, categoryItems }) => (
          <li className="category-name" key={categoryName}>
            <div>
              {categoryName}
              <i className="fas fa-chevron-right"></i>
            </div>
            <ul className="category-items">
              {categoryItems.map((categoryItem) => (
                <li className="category-item" key={categoryItem}>
                  {categoryItem}
                </li>
              ))}
              <button className="more-btn">
                더보기
                <i className="fas fa-chevron-right"></i>
              </button>
            </ul>
          </li>
        ))}
      </ul>
      <SideMenu sideMenuItems={sideMenuItems} />
    </div>
  );
};

export default Dropdown;
