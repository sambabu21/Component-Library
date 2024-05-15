import { useEffect } from "react";
import Avatar from "./Avatar";
import proPic from "../../Assets/avatar_pic.jpeg";
import Highlight from "react-highlight";
import PreviewCode from "../../PreviewCode/Index";

export default function AvatarSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex justify-center items-center">
      <div className="min-h-screen max-w-3xl flex flex-col items-start p-20 gap-10">
        <h1 className="font-semibold text-2xl text-[#EEEEEE] tracking-tight selection:">
          Avatar
        </h1>
        <h2 className="text-[#B4B4B4] -mt-5">
          An avatar is a graphical representation of users or characters
        </h2>
        <h3 className="font-semibold text-xl text-[#EEEEEE] tracking-tight">
          Default avatar
        </h3>
        <PreviewCode
          component={
            <div className="flex justify-center items-center gap-20">
              <Avatar size="small" />
              <Avatar />
              <Avatar size="large" />
            </div>
          }
          code={`
          <div>  
              <Avatar size="small" />
              <Avatar />
              <Avatar size="large" />
          </div>`}
        />
        <h3 className="font-semibold text-xl text-[#EEEEEE] tracking-tight">
          Avatars with intials
        </h3>
        <PreviewCode
          component={
            <div className="flex justify-center items-center gap-20">
              <Avatar size="small">SB</Avatar>
              <Avatar>SB</Avatar>
              <Avatar size="large">SB</Avatar>
            </div>
          }
          code={`
        <div>  
            <Avatar size="small">SB</Avatar>
            <Avatar>SB</Avatar>
            <Avatar size="large">SB</Avatar>
        </div>`}
        />
        <h3 className="font-semibold text-xl text-[#EEEEEE] tracking-tight">
          Avatars with image
        </h3>
        <PreviewCode component={
        <div className="flex justify-center items-center gap-20">
            <Avatar src={proPic} size="small" />
            <Avatar src={proPic} />
            <Avatar src={proPic} size="large" />
        </div>} code={`
        <div>
            <Avatar src={avatarImageUrl} size="small" />
            <Avatar src={avatarImageUrl} />
            <Avatar src={avatarImageUrl} size="large" />
        </div>`}/>       
      </div>
    </div>
  );
}
