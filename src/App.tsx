import { useState } from "react";
import "./App.css";
import Canvas from "./components/Canvas";
import ShareBtn from "./components/ShareBtn";

function App() {
  const [shareState, setShareState] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--Light-Grayish-Blue)] flex justify-center items-center">
      <div className="main w-[320px] md:w-auto md:flex bg-[white] rounded-xl shadow-lg">
        <div className="image">
          <img
            src="./images/drawers.jpg"
            alt="drawers"
            className="md:w-[297px] md:h-[291px] md:object-cover md:object-left rounded-t-xl md:rounded-r-none md:rounded-l-xl"
          />
        </div>
        <div className="contentBlock md:w-[410px]">
          <div className="detail p-8 pb-6 md:pb-0">
            <h1 className="font-bold text-[var(--Very-Dark-Grayish-Blue)] md:text-[1.2em]">
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </h1>
            <p className="text-[var(--Desaturated-Dark-Blue)] leading-relaxed mt-4">
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I’ve got some simple tips to
              help you make any room feel complete.
            </p>
          </div>
          <div
            className={`profileBlock relative h-[77px] md:h-[45px] flex justify-between items-center px-8 pb-4 md:mt-8 md:mb-4`}
          >
            <div className="profile flex gap-4 items-center">
              <img
                src="./images/avatar-michelle.jpg"
                alt="avatar-michelle"
                width={"45px"}
                className="rounded-full"
              />
              <div className="flex flex-col gap-1">
                <p className="font-bold text-[var(--Very-Dark-Grayish-Blue)]">
                  Michelle Appleton
                </p>
                <p className="text-[var(--Desaturated-Dark-Blue)]">
                  28 Jun 2020
                </p>
              </div>
            </div>
            <ShareBtn
              setShareState={setShareState}
              shareState={shareState}
              hidden={false}
            />

            <div
              className={`shareBlock ${
                shareState ? "flex" : "hidden"
              } absolute top-0 md:-top-[6.1em] left-0 md:left-[15.8em] w-full md:w-max h-[77px] md:h-[45px] 
              justify-between items-center bg-[var(--Very-Dark-Grayish-Blue)] rounded-b-xl md:rounded-lg 
              px-8 md:px-6 md:mt-4 md:mb-8 shadow-md`}
            >
              <div className="profile  h-[45px] flex gap-4 items-center">
                <p className="text-[var(--Grayish-Blue)] tracking-[0.3em]">
                  SHARE
                </p>
                <img src="./images/icon-facebook.svg" alt="icon-facebook" />
                <img src="./images/icon-twitter.svg" alt="icon-twitter" />
                <img src="./images/icon-pinterest.svg" alt="icon-pinterest" />
              </div>
              <ShareBtn
                setShareState={setShareState}
                shareState={shareState}
                hidden={true}
              />
              <Canvas />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
