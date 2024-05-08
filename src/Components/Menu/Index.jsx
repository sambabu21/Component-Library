import Menu from "./Menu";
import MenuButton from "./MenuButton";
import MenuDropdown from "./MenuDropdown";
import MenuItem from "./MenuItem";

export default function MenuSection() {
  return (
    <div className="py-20 flex flex-col gap-5 border-b">
      <h1 className="text-3xl font-bold">Menu</h1>
      <h2 className="text-xl mt-5 font-semibold">Preview:</h2>
      <div className="flex flex-col md:flex-row justify-around items-center gap-2">
        <div className="flex flex-col justify-around items-center gap-2">
          <Menu onOpen={() => console.log("Opened/closed")}>
            <MenuButton>Menu</MenuButton>
            <MenuDropdown>
              <MenuItem>Home</MenuItem>
              <MenuItem>About</MenuItem>
              <MenuItem>Contact</MenuItem>
              <MenuItem>Blog</MenuItem>
            </MenuDropdown>
          </Menu>
          <h2 className="text-xl mt-5 font-semibold mt-52">Code:</h2>
          <h1 className="bg-[#353535] text-[14px] p-2 rounded-md">{`<Menu onOpen={() => console.log("Opened/closed")}>
                    <MenuButton>Menu</MenuButton>
                    <MenuDropdown>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>About</MenuItem>
                    <MenuItem>Contact</MenuItem>
                    <MenuItem>Blog</MenuItem>
                    </MenuDropdown>
                </Menu>`}</h1>
        </div>
        <div className="flex flex-col justify-around items-center gap-2">
          <Menu onOpen={() => console.log("Opened/closed")}>
            <MenuButton>Sports</MenuButton>
            <MenuDropdown>
              <MenuItem>Football</MenuItem>
              <MenuItem>Cricket</MenuItem>
              <MenuItem>Basketball</MenuItem>
              <MenuItem>Boxing</MenuItem>
            </MenuDropdown>
          </Menu>
          <h2 className="text-xl mt-5 font-semibold mt-52">Code:</h2>
          <h1 className="bg-[#353535] text-[14px] p-2 rounded-md">{`<Menu onOpen={() => console.log("Opened/closed")}>
                    <MenuButton>Sports</MenuButton>
                    <MenuDropdown>
                    <MenuItem>Football</MenuItem>
                    <MenuItem>Cricket</MenuItem>
                    <MenuItem>Basketball</MenuItem>
                    <MenuItem>Boxing</MenuItem>
                    </MenuDropdown>
                </Menu>`}</h1>
        </div>
      </div>

      <h2 className="text-xl mt-5 font-semibold">Props:</h2>
      <div className="flex flex-col gap-3">
        <p className="text-lg">
          onOpen: any function that needs to be run when the menu gets opened
          can be passed through this prop.{" "}
        </p>
        <p className="text-lg">
          MenuButton: Takes in name of the menu button as children prop.
        </p>
        <p className="text-lg">
          MenuItem: Takes in name of each menu item as children prop.
        </p>
      </div>
    </div>
  );
}
