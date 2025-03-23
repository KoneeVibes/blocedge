import { Box, BoxProps, styled } from "@mui/material";
import { MotionProps } from "motion/dist/react";

export const ServicesWrapper = styled(Box)<BoxProps & MotionProps>(({ theme }) => {
    return {
        padding: "calc(var(--basic-padding) / 2)",
        "& .services-introductory-text-box": {
            display: "flex",
            justifyContent: "center",
            width: "90%",
            margin: "0 auto",
        },
        [theme.breakpoints.up("miniTablet")]: {
            padding: "calc(var(--basic-padding)) calc(var(--basic-padding) / 2)",
            "& .services-introductory-text-box": {
                width: "60%",
                margin: "0 auto",
            }
        },
        [theme.breakpoints.up("tablet")]: {
            padding: "calc(var(--basic-padding)) calc(var(--basic-padding))",
            "& .services-introductory-text-box": {
                width: "50%",
                margin: "0 auto",
            }
        },
    }
})