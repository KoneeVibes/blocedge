import { Button, ButtonProps, styled } from "@mui/material";
import { BaseButtonPropsType } from "../../type/component.type";

export const BaseButton = styled(Button)<ButtonProps & BaseButtonPropsType>(({ variant, fontsize, fontweight, radius, padding, bgcolor, border, colour, borderImage }) => {
    return {
        fontFamily: "Inter",
        fontWeight: fontweight || 500,
        fontSize: fontsize || "20px",
        lineHeight: "normal",
        borderRadius: radius || "999px",
        border: (variant === "contained") ? "none" : (border || "1.5px solid var(--border-color)"),
        // borderImage: (variant === "contained") ? "none" : (borderImage || "linear-gradient(90deg, #00D9FD, #1C36F5) 1"),
        color: (variant === "contained") ? (colour || "var(--dark-color)") : (colour || "var(--light-color)"),
        background: (variant === "contained") ? (bgcolor || "var(--primary-color)") : (bgcolor || "transparent"),
        padding: padding || "calc(var(--basic-padding)/4) calc(var(--basic-padding)/1.5)",
        textTransform: "capitalize",
        minWidth: 0,
        "&:hover": {
            border: (variant === "contained") ? "none" : (border || "1.5px solid var(--border-color)"),
            // borderImage: (variant === "contained") ? "none" : (borderImage || "linear-gradient(90deg, #00D9FD, #1C36F5) 1"),
            background: (variant === "contained") ? (bgcolor || "var(--primary-color)") : (bgcolor || "transparent"),
        }
    }
})
