import { Stack, styled } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../context";

export const HeroWrapper = styled(Stack)(({ theme }) => {
    const { openMenu } = useContext(Context);
    return {
        position: "relative",
        top: openMenu ? "var(--mobile-nav-height)" : "0",
        alignItems: "center",
        padding: openMenu ? "0 calc(var(--basic-padding) / 2)" : "calc(var(--basic-padding) * 2) calc(var(--basic-padding) / 2) calc(var(--basic-padding) * 3.5)",
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
            padding: openMenu ? "0 var(--basic-padding)" : "var(--basic-padding) var(--basic-padding) calc(var(--basic-padding) * 4.5)",
            "& .hero-item": {
                width: "85%",
            },
        },
        [theme.breakpoints.up("tablet")]: {
            padding: openMenu ? "0 var(--basic-padding) calc(var(--basic-padding) * 5)" : "var(--basic-padding) var(--basic-padding) calc(var(--basic-padding) * 5)",
            "& .hero-item": {
                width: "70%",
            },
        },
        [theme.breakpoints.up("laptop")]: {
            padding: openMenu ? "0 var(--basic-padding) calc(var(--basic-padding) * 5.5)" : "var(--basic-padding) var(--basic-padding) calc(var(--basic-padding) * 5.5)",
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