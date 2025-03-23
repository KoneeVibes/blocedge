import { Box, styled } from "@mui/material";

export const CounterWrapper = styled(Box)(({ theme }) => {
    return {
        backgroundColor: "var(--primary-color)",
        borderRadius: "64px",
        padding: "var(--basic-padding)",
        border: "1px solid var(--border-color)",
        transform: "translateY(-20%)",
        margin: "0 calc(var(--basic-margin)/2)",
        [theme.breakpoints.between(425, 449)]: {
            transform: "translateY(-30%)",
            margin: "0 var(--basic-margin)",
        },
        [theme.breakpoints.up(449)]: {
            transform: "translateY(-50%)",
            margin: "0 var(--basic-margin)",
        }
    }
})