import React from "react";
import TenderDto from './TenderDto';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Styles from './Tenders.module.scss'
import { textAlign } from "@mui/system";

interface IProps {
    item: TenderDto, index: number
}

export default function TenderLists({ item, index }: IProps) {
    return (
        <>
            <Box className={Styles.BoxMain} key={index} sx={{ p: 2, border: '1px solid grey' }}>
                <Box className={Styles.BoxHead}>
                    {(() => {

                        switch (item.Statuses) {
                            case 'Active':
                                return (
                                    <><Box><Button variant="contained">00:14:32</Button></Box><Box><Button variant="contained">פעיל</Button></Box><Box>מס׳: {item.TenderNumber}</Box><Box className={Styles.headText}>{item.Name}</Box></>
                                )
                            case 'NotStarted':
                                return (
                                    <><Box></Box><Box><Button style={{
                                        backgroundColor: "#FCC100", width: "116px", color: "#000000"
                                    }} variant="contained">טרם החל</Button></Box><Box>מס׳: {item.TenderNumber}</Box><Box className={Styles.headText}>{item.Name}</Box></>
                                )
                            case 'Ended':
                                return (
                                    <>
                                        <Box></Box><Box><Button color="error" style={{
                                            backgroundColor: "#000000", width: "100px"
                                        }}
                                            variant="contained">המכרז הסתיים</Button></Box><Box>מס׳: {item.TenderNumber}</Box><Box className={Styles.headText}>{item.Name}</Box></>
                                )
                            case 'Frozen':
                                return (
                                    <><Box><Button variant="contained">00:14:32</Button></Box><Box><Button variant="contained">המכרז בהקפאה</Button></Box><Box>מס׳: {item.TenderNumber}</Box><Box className={Styles.headText}>{item.Name}</Box></>
                                )
                            default:
                                return (
                                    " "
                                )
                        }
                    })()}
                </Box>
                <Box className={Styles.line}></Box>
                {
                    (item.Statuses === "NotStarted" || item.Statuses === "Frozen") ? (
                        <>
                            <Box style={{textAlign : "right"}}>
                                <Box>טרם החל</Box>
                                <Box>15:00</Box>
                                <Box>יחל בעוד 3 שעות ו-44 דקות</Box>
                            </Box>
                            <Box className={Styles.line}></Box>
                        </>
                    ) : (<><Box style={{top : "40%"}}></Box></>)
                }
                <Box className={Styles.Proposal} >
                    <Box className={Styles.leadPrice}>
                        <Box>מחיר מוביל</Box>
                        <Box className={Styles.bold}>{item.CurrencyId} 18,234</Box>
                    </Box>
                    <Box className={Styles.greenProposal}>
                        <Box>הצעתך מובילה</Box>
                        <Box className={Styles.bold}>₪ 18,234</Box></Box>
                </Box>
            </Box>
        </>
    )
}