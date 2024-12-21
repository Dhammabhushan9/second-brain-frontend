import { ReactElement } from "react"
import { Tweeticon } from "../icons/TweetIcon"
import { VideoIcon } from "../icons/VideoIcon"
import { DocsIcon } from "../icons/DocsIcon"
import { LinkIcons } from "../icons/LinkIcon"
import { HashIcon } from "../icons/HasIcon"
import { BrianIcon } from "../icons/BrainIcon"
 

export function Sidebar(){
  return <div className=" flex flex-col min-h-screen w-80 fixed top-0 left-0 bg-white border-2 gap-2 " >
            <div className="my-6 mx-6 flex content-center gap-3">
            <BrianIcon/>
            <h1  className="font-bold text-2xl mt-3">Second Brain</h1>
            </div>
        
        <SidebarCard SideIcon={<Tweeticon/>} SideText={"Twitter"} />
        <SidebarCard SideIcon={<VideoIcon/>} SideText={"Videos"} />
        <SidebarCard SideIcon={<DocsIcon/>} SideText={"Document"} />
        <SidebarCard SideIcon={<LinkIcons/>} SideText={"Links"} />
        <SidebarCard SideIcon={<HashIcon/>} SideText={"Tag"} />
  
  </div>
}

export function SidebarCard({SideIcon,SideText}:{
    SideIcon:ReactElement,
    SideText:string
}){
    return <div className="flex p-3   items-center  gap-4 mx-9 hover:shadow-lg shadow-salate-700/60 rounded-2xl  hover:bg-salate-100   ">
            {SideIcon}
            {SideText}
    </div>
}