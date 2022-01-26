import React, { useEffect } from "react";
import TenderDto from './TenderDto';
import { useSelector, useDispatch } from "react-redux";
import { selectTenders, getAllTendersAsync } from "./TendersSlice";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import TenderListsItem from './TenderListsItem';


export default function TenderLists() {
  
  const dispatch = useDispatch();
  const getAllTenders = useSelector(selectTenders);


  useEffect(() => {
    dispatch(getAllTendersAsync("5"));
    const interval = setInterval(() => {
        dispatch(getAllTendersAsync("5"));
    }, 15000);
    return () => clearInterval(interval);

  }, [dispatch]);


  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Container >
          {getAllTenders.data.map((item: TenderDto, index: number) => {
            return (
               <TenderListsItem key={index} item={item} index={index}   />
              )
          })}
        </Container>
      </React.Fragment>
    </div>
  );

}
