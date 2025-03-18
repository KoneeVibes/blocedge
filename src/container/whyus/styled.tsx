import { Box, styled } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../context";

export const WhyUsWrapper = styled(Box)(({ theme }) => {
    const { openMenu } = useContext(Context);
    return {
        position: "relative",
        top: openMenu ? "var(--mobile-nav-height)" : "0",
        padding: "calc(var(--basic-padding) / 2)",
        "& .why-us-introductory-text-box": {
            display: "flex",
            justifyContent: "center",
            width: "90%",
            margin: "0 auto",
        },
        "& .why-us-point-box": {
            height: "100%",
            display: "flex",
            alignItems: "center",
        },
        [theme.breakpoints.up("miniTablet")]: {
            padding: "calc(var(--basic-padding)) calc(var(--basic-padding) / 2)",
            "& .why-us-introductory-text-box": {
                width: "60%",
                margin: "0 auto",
            }
        },
        [theme.breakpoints.up("tablet")]: {
            padding: "calc(var(--basic-padding)) calc(var(--basic-padding))",
            "& .why-us-introductory-text-box": {
                width: "50%",
                margin: "0 auto",
            }
        },
    }
})