import menu1 from "../assets/img/daily-menu/menu1.png";
import menu2 from "../assets/img/daily-menu/menu2.png";
import menu3 from "../assets/img/daily-menu/menu3.png";

const DailyMenu = () => {
  return (
    <div className="menu-daily">
      <div className="daily-menu w-100">
        <img src={menu1} alt="menu-1" loading="lazy" />
        <img src={menu2} alt="menu-2" loading="lazy" />
        <img src={menu3} alt="menu-3" loading="lazy" />
      </div>
    </div>
  );
};

export default DailyMenu;
