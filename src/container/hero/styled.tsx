import { Stack, StackProps, styled } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../context";
import { MotionProps } from "motion/dist/react";

export const HeroWrapper = styled(Stack)<StackProps & MotionProps>(({ theme }) => {
    const { openMenu } = useContext(Context);
    return {
        visibility: openMenu ? "hidden" : "visible",
        position: "relative",
        alignItems: "center",
        padding: "calc(var(--basic-padding)) calc(var(--basic-padding) / 2) calc(var(--basic-padding) * 3)",
        "& .hero-item": {
            display: "flex",
            justifyContent: "center",
            width: "100%",
        },
        "& .hero-chip": {
            backgroundColor: "#FFFFFF",
            borderRadius: "999px",
            padding: "calc(var(--basic-padding)/8)",
            width: "100%",
            "& .left-inner-chip": {
                background: "#000000",
                borderRadius: "inherit",
                padding: "inherit",
                overflow: "hidden",
            },
            "& .right-inner-chip": {
                overflow: "hidden",
            },
        },
        [theme.breakpoints.up(320)]: {
            "& .hero-chip": {
                width: "auto",
            },
        },
        [theme.breakpoints.up("miniTablet")]: {
            padding: "var(--basic-padding) var(--basic-padding) calc(var(--basic-padding) * 4.5)",
            "& .hero-item": {
                width: "85%",
            },
        },
        [theme.breakpoints.up("tablet")]: {
            padding: "var(--basic-padding) var(--basic-padding) calc(var(--basic-padding) * 5)",
            "& .hero-item": {
                width: "70%",
            },
        },
        [theme.breakpoints.up("laptop")]: {
            padding: "var(--basic-padding) var(--basic-padding) calc(var(--basic-padding) * 5.5)",
            "& .hero-item": {
                width: "60%",
            }
        },
        [theme.breakpoints.up("desktop")]: {
            padding: "var(--basic-padding) var(--basic-padding) calc(var(--basic-padding) * 4.5)",
        },
        [theme.breakpoints.up("xl")]: {
            padding: "var(--basic-padding) var(--basic-padding) calc(var(--basic-padding) * 5)",
            "& .hero-item": {
                width: "60%",
            }
        }
    }
})