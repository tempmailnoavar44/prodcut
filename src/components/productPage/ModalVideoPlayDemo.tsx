import { IntroductionVideo } from "@/src/types";
import HeaderModals from "./HeaderModals";
import Image from "next/image";
import { PlayDemoVideoProduct } from "@/src/icons";
import { useEffect } from "react";

interface Props {
  closeModal: (value: boolean) => void;
  videoDetail: IntroductionVideo[];
}

const ModalVideoPlayDemo = ({ closeModal, videoDetail }: Props) => {
  
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="bg-white p-4 rounded-md animate-fadeIn" onClick={(e)=>e.stopPropagation()}>
      <HeaderModals closeModal={closeModal} name="تحلیل ویدیوئی" className="flex justify-between pr-5 pl-5"/>
      <hr />
      <div className="py-4">
        <iframe
          src="https://www.aparat.com/video/video/embed/videohash/26bHW/vt/frame"
          className="rounded-md w-full h-[170px]"
        />
      </div>
      <div className="flex gap-2 relative">
        <Image
          src={videoDetail[0].small_poster}
          width={60}
          height={60}
          alt="can not load the picture"
          className="size-[60px] rounded-md md:hidden object-cover brightness-75 cursor-pointer"
        />

        <div className="size-6 absolute right-4 top-5 ">
          <PlayDemoVideoProduct />
        </div>

        <p className="font-medium text-xs leading-7">{videoDetail[0].title}</p>
      </div>
    </div>
  );
};

export default ModalVideoPlayDemo;
