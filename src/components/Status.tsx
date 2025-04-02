import React from "react";
import {
   StatusContainer,
   Timer,
   StatusTable,
   TableRow,
   TableCell,
} from "../styles/Status.styles";
import { StatusProps } from "../utils/types";

const Status: React.FC<StatusProps> = ({
   matchedCards,
   mistakes,
   timeLeft,
}) => {
   return (
      <StatusContainer>
         <Timer>{timeLeft}</Timer>
         <StatusTable>
            <tbody>
               <TableRow>
                  <TableCell>{matchedCards} matches</TableCell>
               </TableRow>
               <TableRow>
                  <TableCell>{mistakes} mistakes</TableCell>
               </TableRow>
            </tbody>
         </StatusTable>
      </StatusContainer>
   );
};

export default Status;
