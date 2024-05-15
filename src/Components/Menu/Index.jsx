import Menu from "./Menu";
import MenuButton from "./MenuButton";
import MenuDropdown from "./MenuDropdown";
import MenuItem from "./MenuItem";
import MenuSeperator from "./MenuSeperator";
import { RxAvatar } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosPower } from "react-icons/io";
import { FiHelpCircle } from "react-icons/fi";
import { IoDocumentOutline } from "react-icons/io5";
import { FaQ } from "react-icons/fa6";
import MenuGroup from "./MenuGroup";
import proPic from "../../Assets/avatar_pic.jpeg";
import PreviewCode from "../../PreviewCode/Index";
import { useEffect } from "react";

export default function MenuSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" flex justify-center items-center">
      <div className="max-w-3xl flex flex-col items-start p-20 gap-10">
        <h1 className="font-semibold text-2xl text-[#EEEEEE] tracking-tight selection:">
          Menu
        </h1>
        <h2 className="text-[#B4B4B4] -mt-5">
          A dropdown allows a user to select a value from a series of options.
        </h2>
        <h3 className="font-semibold text-xl text-[#EEEEEE] tracking-tight">
          Default Menu
        </h3>
        <PreviewCode
          component={
            <div className="flex justify-center flex-col items-center gap-10 w-full">
              <Menu>
                <MenuButton>Dashboard</MenuButton>
                <MenuDropdown>
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuDropdown>
              </Menu>
            </div>
          }
          code={`
    <div>
      <Menu>
        <MenuButton>Dashboard</MenuButton>
        <MenuDropdown>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuDropdown>
      </Menu>
    </div>
          `}
        />

        <h3 className="font-semibold text-xl text-[#EEEEEE] tracking-tight">
          Menu with icons
        </h3>
        <PreviewCode
          component={
            <div className="flex justify-center flex-col items-center gap-10 w-full">
              <Menu>
                <MenuButton>Dashboard</MenuButton>
                <MenuDropdown>
                  <MenuItem icon={<RxAvatar />}>Profile</MenuItem>
                  <MenuItem icon={<IoSettingsOutline />}>Settings</MenuItem>
                  <MenuItem icon={<IoIosPower />}>Logout</MenuItem>
                </MenuDropdown>
              </Menu>
            </div>
          }
          code={`
    <div>
      <Menu>
        <MenuButton>Dashboard</MenuButton>
        <MenuDropdown>
          <MenuItem icon={<IconComponent />}>Profile</MenuItem>
          <MenuItem icon={<IconComponent />}>Settings</MenuItem>
          <MenuItem icon={<IconComponent />}>Logout</MenuItem>
        </MenuDropdown>
      </Menu>
    </div>
          `}
        />

        <h3 className="font-semibold text-xl text-[#EEEEEE] tracking-tight">
          Menu with icons and seperator
        </h3>
        <PreviewCode
          component={
            <div className="flex justify-center flex-col items-center gap-10 w-full">
              <Menu onOpen={() => console.log("opened")}>
                <MenuButton>Dashboard</MenuButton>
                <MenuDropdown>
                  <MenuItem icon={<RxAvatar />}>Profile</MenuItem>
                  <MenuItem icon={<IoSettingsOutline />}>Settings</MenuItem>
                  <MenuItem icon={<IoIosPower />}>Logout</MenuItem>
                  <MenuSeperator />
                  <MenuItem icon={<FiHelpCircle />}>Help</MenuItem>
                  <MenuItem icon={<IoDocumentOutline />}>Docs</MenuItem>
                  <MenuItem icon={<FaQ />}>FAQ</MenuItem>
                </MenuDropdown>
              </Menu>
            </div>
          }
          code={`
    <div>
      <Menu>
        <MenuButton>Dashboard</MenuButton>
        <MenuDropdown>
          <MenuItem icon={<IconComponent />}>Profile</MenuItem>
          <MenuItem icon={<IconComponent />}>Settings</MenuItem>
          <MenuItem icon={<IconComponent />}>Logout</MenuItem>
          <MenuSeperator />
          <MenuItem icon={<IconComponent />}>Help</MenuItem>
          <MenuItem icon={<IconComponent />}>Docs</MenuItem>
          <MenuItem icon={<IconComponent />}>FAQ</MenuItem>
        </MenuDropdown>
      </Menu>
    </div>
          `}
        />

        <h3 className="font-semibold text-xl text-[#EEEEEE] tracking-tight">
          Menu with icons, seperator and groups
        </h3>
        <PreviewCode
          component={
            <div className="flex justify-center flex-col items-center gap-10 w-full">
              <Menu onOpen={() => console.log("opened")}>
                <MenuButton>Dashboard</MenuButton>
                <MenuDropdown>
                  <MenuGroup title="Profile">
                    <MenuItem icon={<RxAvatar />}>Profile</MenuItem>
                    <MenuItem icon={<IoSettingsOutline />}>Settings</MenuItem>
                    <MenuItem icon={<IoIosPower />}>Logout</MenuItem>
                  </MenuGroup>
                  <MenuSeperator />
                  <MenuGroup title="Help">
                    <MenuItem icon={<FiHelpCircle />}>Help</MenuItem>
                    <MenuItem icon={<IoDocumentOutline />}>Docs</MenuItem>
                    <MenuItem icon={<FaQ />}>FAQ</MenuItem>
                  </MenuGroup>
                </MenuDropdown>
              </Menu>
            </div>
          }
          code={`
    <div>
      <Menu>
        <MenuButton>Dashboard</MenuButton>
        <MenuDropdown>
          <MenuGroup title="Profile">
            <MenuItem icon={<IconComponent />}>Profile</MenuItem>
            <MenuItem icon={<IconComponent />}>Settings</MenuItem>
            <MenuItem icon={<IconComponent />}>Logout</MenuItem>
          </MenuGroup>
          <MenuSeperator />
          <MenuGroup title="Help">
            <MenuItem icon={<IconComponent />}>Help</MenuItem>
            <MenuItem icon={<IconComponent />}>Docs</MenuItem>
            <MenuItem icon={<IconComponent />}>FAQ</MenuItem>
          </MenuGroup>
        </MenuDropdown>
      </Menu>
    </div>
          `}
        />

        <h3 className="font-semibold text-xl text-[#EEEEEE] tracking-tight">
          Menu types
        </h3>
        <PreviewCode
          component={
            <div className="flex justify-center items-center gap-20 w-full px-20">
              <Menu>
                <MenuButton type="hamburger">Dashboard</MenuButton>
                <MenuDropdown>
                  <MenuItem icon={<RxAvatar />}>Profile</MenuItem>
                  <MenuItem icon={<IoSettingsOutline />}>Settings</MenuItem>
                  <MenuItem icon={<IoIosPower />}>Logout</MenuItem>
                </MenuDropdown>
              </Menu>
              <Menu>
                <MenuButton type="kebab">Dashboard</MenuButton>
                <MenuDropdown>
                  <MenuItem icon={<RxAvatar />}>Profile</MenuItem>
                  <MenuItem icon={<IoSettingsOutline />}>Settings</MenuItem>
                  <MenuItem icon={<IoIosPower />}>Logout</MenuItem>
                </MenuDropdown>
              </Menu>
              <Menu>
                <MenuButton type="avatar" avatar={proPic}>
                  Dashboard
                </MenuButton>
                <MenuDropdown>
                  <MenuItem icon={<RxAvatar />}>Profile</MenuItem>
                  <MenuItem icon={<IoSettingsOutline />}>Settings</MenuItem>
                  <MenuItem icon={<IoIosPower />}>Logout</MenuItem>
                </MenuDropdown>
              </Menu>
              <Menu>
                <MenuButton type="avatar">Dashboard</MenuButton>
                <MenuDropdown>
                  <MenuItem icon={<RxAvatar />}>Profile</MenuItem>
                  <MenuItem icon={<IoSettingsOutline />}>Settings</MenuItem>
                  <MenuItem icon={<IoIosPower />}>Logout</MenuItem>
                </MenuDropdown>
              </Menu>
            </div>
          }
          code={`
          <div>
            <Menu>
              <MenuButton>Dashboard</MenuButton>
              <MenuDropdown>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuDropdown>
            </Menu>
          </div>
          `}
        />

      </div>
    </div>
  );
}
