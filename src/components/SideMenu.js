const SideMenu = ({ sideMenuItems }) => {
  return (
    <ul className="category-name side">
      {sideMenuItems.map((sideMenuItem) => (
        <li className="sidemenu-item" key={sideMenuItem}>
          {sideMenuItem}
          <i className="fas fa-chevron-right"></i>
        </li>
      ))}
    </ul>
  );
};

export default SideMenu;
