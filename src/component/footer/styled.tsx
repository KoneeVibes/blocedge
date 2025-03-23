import { Box, BoxProps, styled } from "@mui/material";
import { MotionProps } from "motion/dist/react";

export const FooterWrapper = styled(Box)<BoxProps & MotionProps>(({ theme }) => {
    return {
        padding: "calc(var(--basic-padding) / 2)",
        "& .footer-top-box": {
            width: "90%",
            overflow: "hidden",
        },
        "& .contact-button": {
            overflow: "hidden",
            marginBlockEnd: "calc(var(--basic-margin))"
        },
        "& a": {
            textDecoration: "none",
        },
        [theme.breakpoints.up("miniTablet")]: {
            padding: "calc(var(--basic-padding)) calc(var(--basic-padding) / 2)",
            "& .footer-top-box": {
                width: "60%",
            },
        },
        [theme.breakpoints.up("tablet")]: {
            padding: "calc(var(--basic-padding)) calc(var(--basic-padding))",
            "& .footer-top-box": {
                width: "50%",
            },
        },
    }
})