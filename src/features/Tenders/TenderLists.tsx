import React, { useEffect } from "react";
import TenderDto from './TenderDto';
import { useSelector, useDispatch } from "react-redux";
import { selectTenders, getAllTendersAsync } from "./TendersSlice";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Styles from './Tenders.module.scss';
import TenderListsItem from './TenderListsItem';

export default function TenderLists() {
  
  const dispatch = useDispatch();
  const getAllTenders = useSelector(selectTenders);

  useEffect(() => {
    dispatch(getAllTendersAsync("5"));

  }, []);


  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Container >
          {getAllTenders.data.map((item: TenderDto, index: number) => {
            return (
               <TenderListsItem item={item} index={index}   />
              )
          })}
        </Container>
      </React.Fragment>
    </div>
  );

}
