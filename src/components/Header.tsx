import { ModeToggle } from "./ModeToggle";

const Header = () => {
  return (
    <div className="flex justify-between items-center pb-10">
      <span className="sm:text-2xl text-xl font-semibold">
        Frequently asked questions
      </span>
      <ModeToggle />
    </div>
  );
};

export default Header;
