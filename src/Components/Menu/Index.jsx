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
import DisplaySection from "../../Common Components/DisplaySection/Index";
import Subheading from "../../Common Components/DisplaySection/Subheading";
import SubSection from "../../Common Components/DisplaySection/SubSection";
import Subtext from "../../Common Components/DisplaySection/Subtext";
import Proptable from "../../Common Components/DisplaySection/Proptable";

export default function MenuSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const propstable = [{
    name:"icon",
    value : [`ReactNode`],
    default : "/"
  },{
    name:"title",
    value: ["String"],
    default:"/"
  },{
    name:"type",
    value: [`"hamburger"`,`"kebab"`,`"avatar"`],
    default:"/"
  },{
    name:"avatar",
    value: [`url of avatar image`],
    default:"/"
  }] 

  return (
    <DisplaySection
      sectionTitle="Menu"
      sectionDescription="A menu allows a user to select a value from a series of options."
    >
      <Subheading>Default Menu</Subheading>
      <Subtext>Default menu. Use the <span className="prop">MenuButton</span> to render the text required inside the menu toggler. Use the <span className="prop">MenuDropdown</span> and <span className="prop">MenuItem</span> to render the options list.</Subtext>
      <SubSection>
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
          code={
`<div>
  <Menu>
    <MenuButton>Dashboard</MenuButton>
    <MenuDropdown>
      <MenuItem>Profile</MenuItem>
      <MenuItem>Settings</MenuItem>
      <MenuItem>Logout</MenuItem>
    </MenuDropdown>
  </Menu>
</div>`}
        />
      </SubSection>

      <Subheading>Menu with icons</Subheading>
      <Subtext>Use the <span className="prop">icon</span> prop in the <span className="prop">MenuItem</span> tag to pass in icons which gets rendered to the left of the dropdown list items.</Subtext>
      <SubSection>
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
          code={
`<div>
  <Menu>
    <MenuButton>Dashboard</MenuButton>
    <MenuDropdown>
      <MenuItem icon={<IconComponent />}>Profile</MenuItem>
      <MenuItem icon={<IconComponent />}>Settings</MenuItem>
      <MenuItem icon={<IconComponent />}>Logout</MenuItem>
    </MenuDropdown>
  </Menu>
</div>`}
        />
      </SubSection>

      <Subheading>Menu with icons and seperator</Subheading>
      <Subtext>Use the <span className="prop">MenuSeperator</span> prop to create a seperation between dropdown list items.</Subtext>
      <SubSection>
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
          code={
`<div>
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
</div>`}
        />
      </SubSection>

      <Subheading>Menu with icons, seperator and groups</Subheading>
      <Subtext>Use the <span className="prop">MenuGroup</span> tag to group list items to a group. Use the <span className="prop">title</span> prop in <span className="prop">MenuGroup</span> to give the grouped list items a heading.</Subtext>
      <SubSection>
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
          code={
`<div>
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
</div>`}
        />
      </SubSection>

      <Subheading>Menu types</Subheading>
      <Subtext>Use the <span className="prop">type</span> prop to change the item render in the <span className="prop">MenuButton</span>. If you use this prop and pass in children to this component, it will ignore the children text.</Subtext>
      <SubSection>
        <PreviewCode
          component={
            <div className="flex flex-wrap justify-center items-center gap-20 w-full px-20">
              <Menu>
                <MenuButton type="hamburger"/>
                <MenuDropdown>
                  <MenuItem icon={<RxAvatar />}>Profile</MenuItem>
                  <MenuItem icon={<IoSettingsOutline />}>Settings</MenuItem>
                  <MenuItem icon={<IoIosPower />}>Logout</MenuItem>
                </MenuDropdown>
              </Menu>
              <Menu>
                <MenuButton type="kebab" />
                <MenuDropdown>
                  <MenuItem icon={<RxAvatar />}>Profile</MenuItem>
                  <MenuItem icon={<IoSettingsOutline />}>Settings</MenuItem>
                  <MenuItem icon={<IoIosPower />}>Logout</MenuItem>
                </MenuDropdown>
              </Menu>
              <Menu>
                <MenuButton type="avatar" avatar={proPic} />
                <MenuDropdown>
                  <MenuItem icon={<RxAvatar />}>Profile</MenuItem>
                  <MenuItem icon={<IoSettingsOutline />}>Settings</MenuItem>
                  <MenuItem icon={<IoIosPower />}>Logout</MenuItem>
                </MenuDropdown>
              </Menu>
              <Menu>
                <MenuButton type="avatar" />
                <MenuDropdown>
                  <MenuItem icon={<RxAvatar />}>Profile</MenuItem>
                  <MenuItem icon={<IoSettingsOutline />}>Settings</MenuItem>
                  <MenuItem icon={<IoIosPower />}>Logout</MenuItem>
                </MenuDropdown>
              </Menu>
            </div>
          }
          code={
`<div>
    <Menu>
        <MenuButton type={type} />
        <MenuDropdown>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Logout</MenuItem>
        </MenuDropdown>
    </Menu>
</div>`}
        />
      </SubSection>
      <Proptable propstable={propstable}/>
    </DisplaySection>
  );
}


