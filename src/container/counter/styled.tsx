import { Box, styled } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../context";

export const CounterWrapper = styled(Box)(({ theme }) => {
    const { openMenu } = useContext(Context);
    return {
        position: "relative",
        top: openMenu ? "var(--mobile-nav-height)" : "0",
        backgroundColor: "var(--primary-color)",
        borderRadius: "64px",
        padding: "var(--basic-padding)",
        border: "1px solid var(--border-color)",
        margin: "var(--basic-margin) calc(var(--basic-margin)/2) 0",
        [theme.breakpoints.up("miniTablet")]: {
            transform: "translateY(-50%)",
            margin: "0 calc(var(--basic-margin)/2)",
        },
        [theme.breakpoints.up("tablet")]: {
            margin: "0 var(--basic-margin)",
        }
    }
})