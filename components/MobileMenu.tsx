import MenuLinks from "./MenuLinks";

const MobileMenu: React.FC = () => {
  return (
    <div className="w-full block flex-grow lg:hidden">
      <MenuLinks />
    </div>
  );
};

export default MobileMenu;
