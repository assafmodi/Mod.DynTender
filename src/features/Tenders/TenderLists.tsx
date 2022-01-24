import React, { useEffect } from "react";
import TenderDto from './TenderDto';
import { useSelector, useDispatch } from "react-redux";
import { selectTenders, getAllTendersAsync } from "./TendersSlice";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Styles from './Tenders.module.scss'
export default function TenderLists() {


  const dispatch = useDispatch();
  const getAllTenders = useSelector(selectTenders);

  useEffect(() => {
    dispatch(getAllTendersAsync("5"));

  }, [])

W

  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Container >
          {getAllTenders.data.map((item: TenderDto, index: number) => {
            return (
              <Box className={Styles.BoxMain} key={index} sx={{ p: 2, border: '1px solid grey' }}>
                <Box className={Styles.BoxHead}>
                  {item.RankInfo==="Active"?
                      <><Box><Button variant="contained">00:14:32</Button></Box><Box><Button variant="contained">פעיל</Button></Box><Box>מס׳: 6589547859</Box><Box className={Styles.headText}>{item.Name}</Box></>
                   :"" }
                    
                </Box>
                <Box className={Styles.line}></Box>
                <Box className={Styles.Proposal} >
                  <Box className={Styles.leadPrice}>
                    <Box>מחיר מוביל</Box>
                    <Box className={Styles.bold}>{item.CurrencyId} 18,234</Box>
                  </Box>
                  <Box className={Styles.greenProposal}>
                    <Box>הצעתך מובילה</Box>
                    <Box className={Styles.bold}>₪ 18,234</Box></Box>
                </Box>
              </Box>)
          })}
        </Container>
      </React.Fragment>
    </div>
  );

}
