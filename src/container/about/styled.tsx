import { Box, BoxProps, styled } from "@mui/material";
import { MotionProps } from "motion/dist/react";

export const AboutWrapper = styled(Box)<BoxProps & MotionProps>(({ theme }) => {
    return {
        padding: "calc(var(--basic-padding)/2)",
        transform: "translateY(-10%)",
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
            transform: "unset",
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