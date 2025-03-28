import { Box, BoxProps, styled } from "@mui/material";
import { MotionProps } from "motion/dist/react";

export const WhyUsWrapper = styled(Box)<BoxProps & MotionProps>(({ theme }) => {
    return {
        padding: "calc(var(--basic-padding) / 2)",
        transform: "translateY(-5%)",
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
        "& .index-box": {
            position: "absolute",
            top: "50%",
            left: "calc(var(--basic-padding) / -3.5)",
            transform: "translateY(-50%)",
        },
        [theme.breakpoints.up("miniTablet")]: {
            padding: "calc(var(--basic-padding)) calc(var(--basic-padding) / 2)",
            transform: "unset",
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