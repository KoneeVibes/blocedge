import { Box, BoxProps, styled } from "@mui/material";
import { MotionProps } from "motion/dist/react";

export const TeamWrapper = styled(Box)<BoxProps & MotionProps>(({ theme }) => {
    return {
        padding: "calc(var(--basic-padding) / 2)",
        marginBlockStart: "calc(var(--basic-margin)/2)",
        "& .team-introductory-text-box": {
            display: "flex",
            justifyContent: "center",
            width: "90%",
            margin: "0 auto",
        },
        "& .team-member-info": {
            padding: "calc(var(--basic-padding)/2)",
        },
        "& .team-member-thumbnail": {
            "& img": {
                width: "100%",
                height: "auto",
                minHeight: "418px"
            }
        },
        [theme.breakpoints.up("miniTablet")]: {
            padding: "calc(var(--basic-padding)) calc(var(--basic-padding) / 2)",
            marginBlockStart: "auto",
            "& .team-introductory-text-box": {
                width: "60%",
                margin: "0 auto",
            },
        },
        [theme.breakpoints.up("tablet")]: {
            padding: "calc(var(--basic-padding)) calc(var(--basic-padding))",
            "& .team-introductory-text-box": {
                width: "50%",
                margin: "0 auto",
            },
        },
    }
})