import styled from "styled-components";

export const StatusContainer = styled.div`
   display: flex;
   align-items: center;

   justify-content: center;
`;

export const Timer = styled.div`
   font-size: calc(40px + 2vmin);
   color: red;
   font-weight: bolder;
   line-height: normal;
   margin: 0 10px;
   display: inline;
`;

export const StatusTable = styled.table`
   border-collapse: collapse;
   border-left: 2px solid gray;
   font-size: calc(10px + 2vmin);
   color: red;
   font-weight: bolder;
   height: auto;
   line-height: normal;
`;

export const TableRow = styled.tr`
   border-bottom: 2px solid gray;

   &:last-child {
      border-bottom: none;
   }
`;

export const TableCell = styled.td`
   padding: 10px;
`;
