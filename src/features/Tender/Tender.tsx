import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TenderListsItem from './../Tenders/TenderListsItem';
import { selectTender, getTenderAsync } from "./TenderSlice";
import TenderDto from './../Tenders/TenderDto';
import { Box } from "@mui/material";





export default function Tender() {


const dispatch = useDispatch();
const getTender = useSelector(selectTender);


useEffect(() => {
  dispatch(getTenderAsync("15"));
  const interval = setInterval(() => {
      dispatch(getTenderAsync("15"));
  }, 15000);
  return () => clearInterval(interval);
  

}, [dispatch]);

    return (
      <Box>
   
        {getTender.data.filter((x: { Id: number; })=>x.Id===15).map((item: TenderDto, index: number) => {
            return (
               <TenderListsItem key={index} item={item} index={index}   />
              )
          })}
      </Box>
    );
  };
  
