import React from "react";
import "./App.css";

interface GameSettingsProps {
   isOpen: boolean;
   pairs: number;
   countdown: number;
   setPairs: React.Dispatch<React.SetStateAction<number>>;
   setCountdown: React.Dispatch<React.SetStateAction<number>>;
   onClose: () => void;
   onSave: (pairs: number, countdown: number) => void;
}
const Settings: React.FC<GameSettingsProps> = (settings: GameSettingsProps) => {
   return (
      <div className="overlay">
         <div className="popup">
            <div className="title">
               <p>Game settings</p>
               <button className="close-btn" onClick={settings.onClose}>
                  &times;
               </button>
            </div>

            <div className="setting">
               <p>Number of pairs of cards</p>
               <input
                  type="number"
                  value={settings.pairs}
                  onChange={(e) => settings.setPairs(Number(e.target.value))}
               />
            </div>

            <div className="setting">
               <p>Countdown time (sec.)</p>
               <input
                  type="number"
                  value={settings.countdown}
                  onChange={(e) =>
                     settings.setCountdown(Number(e.target.value))
                  }
               />
            </div>

            <button
               className="save-btn"
               onClick={() =>
                  settings.onSave(settings.pairs, settings.countdown)
               }
            >
               SAVE SETTINGS
            </button>
         </div>
      </div>
   );
};

export default Settings;
