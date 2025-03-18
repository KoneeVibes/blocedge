import { Box, styled } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../context";

export const AboutWrapper = styled(Box)(({ theme }) => {
    const { openMenu } = useContext(Context);
    return {
        position: "relative",
        top: openMenu ? "var(--mobile-nav-height)" : "0",
        padding: "calc(var(--basic-padding)/2)",
        "& .about-introductory-text-box": {
            display: "flex",
            justifyContent: "center",
        },
        "& .image-area": {
            overflow: "hidden",
            flex: 1,
            "& svg": {
                width: "100%",
                height: "auto"
            }
        },
        "& .text-area": {
            overflow: "hidden",
            flex: 1,
            width: "100%",
        },
        [theme.breakpoints.up("miniTablet")]: {
            marginTop: "-5rem",
            padding: "0 calc(var(--basic-padding)/2) calc(var(--basic-padding))",
        },
        [theme.breakpoints.up("tablet")]: {
            marginTop: "-5rem",
            padding: "0 calc(var(--basic-padding)) calc(var(--basic-padding))",
        },
        [theme.breakpoints.up("laptop")]: {
            marginTop: "-8rem",
        },
        [theme.breakpoints.up("desktop")]: {
            marginTop: "-4rem",
        }
    }
})