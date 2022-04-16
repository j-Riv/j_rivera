import MenuLinks from "./MenuLinks";

const Menu: React.FC = () => {
  return (
    <div className="w-full flex-grow lg:flex lg:items-start lg:w-auto lg:justify-end hidden">
      <MenuLinks />
    </div>
  );
};

export default Menu;
