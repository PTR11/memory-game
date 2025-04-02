import React from "react";
import {
   Overlay,
   Popup,
   Title,
   TitleText,
   CloseButton,
   Setting,
   SettingLabel,
   SettingInput,
   SaveButton,
} from "../styles/Settings.styles";
import { SettingsProps } from "../utils/types";

const Settings: React.FC<SettingsProps> = ({
   isOpen,
   onClose,
   pairs,
   setPairs,
   countdown,
   setCountdown,
   onSave,
}) => {
   if (!isOpen) return null;

   return (
      <Overlay>
         <Popup>
            <Title>
               <TitleText>Game settings</TitleText>
               <CloseButton onClick={onClose}>&times;</CloseButton>
            </Title>
            <Setting>
               <SettingLabel>Number of pairs of cards:</SettingLabel>
               <SettingInput
                  type="number"
                  defaultValue={pairs}
                  onChange={(e) => setPairs(Number(e.target.value))}
                  max={30}
                  min={5}
               />
            </Setting>
            <Setting>
               <SettingLabel>Countdown time (sec.):</SettingLabel>
               <SettingInput
                  type="number"
                  value={countdown}
                  onChange={(e) => setCountdown(Number(e.target.value))}
               />
            </Setting>
            <SaveButton onClick={() => onSave(pairs, countdown)}>
               SAVE SETTINGS
            </SaveButton>
         </Popup>
      </Overlay>
   );
};

export default Settings;
