import React from "react";

type ShareBtnProps = {
  shareState: boolean;
  setShareState: (value: boolean) => void;
  hidden: boolean;
};

const ShareBtn: React.FC<ShareBtnProps> = ({
  shareState,
  setShareState,
  hidden,
}) => {
  return (
    <button
      className={`${
        hidden ? "md:hidden" : ""
      } w-[35px] h-[35px] flex justify-center items-center rounded-full 
      ${
        shareState
          ? "bg-[var(--Desaturated-Dark-Blue)]"
          : "bg-[var(--Light-Grayish-Blue)]"
      }
      `}
      onClick={() => setShareState(!shareState)}
    >
      <img
        src="./images/icon-share.svg"
        alt="icon-share"
        className={`${shareState ? "brightness-[3]" : ""}`}
      />
    </button>
  );
};

export default ShareBtn;
