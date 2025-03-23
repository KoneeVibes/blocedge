import { Box, Stack, Typography } from "@mui/material";
import { FooterWrapper } from "./styled";
import { BaseButton } from "../button/styled";
import { ArrowForward } from "../../asset";
import logo from "../../asset/logoII.png";
import { HashLink } from "react-router-hash-link";
import { footerLinks, socialMedia } from "../../config/static";
import { motion } from "motion/react";
import { container, item } from "../../config/verticalSlideIn";

export const Footer = () => {
    return (
        <FooterWrapper>
            <Box
                component={motion.div}
                variants={container}
                initial="hidden"
                whileInView="show"
                className="footer-top-box"
            >
                <Typography
                    component={motion.h2}
                    variants={container}
                    fontFamily={"Inter"}
                    fontWeight={500}
                    fontSize={{ mobile: 32, miniTablet: 40, tablet: 60, laptop: 70, xl: 80 }}
                    lineHeight={"normal"}
                    marginBlock={"calc(var(--basic-margin)/2)"}
                    whiteSpace={"normal"}
                    sx={{
                        background: "linear-gradient(180deg, #FFFFFF 0%, #FFFFFFB2 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        color: "transparent",
                        display: "inline-block"
                    }}
                >
                    Want to start a Project?
                </Typography>
            </Box>
            <Box
                component={motion.div}
                variants={container}
                initial="hidden"
                whileInView="show"
                className="contact-button"
            >
                <BaseButton
                    endIcon={<ArrowForward />}
                    variant={"contained"}
                    bgcolor="var(--light-color)"
                    component={motion.div}
                    variants={item}
                >
                    <Typography
                        variant={"button"}
                        fontFamily={"inherit"}
                        fontWeight={"inherit"}
                        fontSize={"inherit"}
                        lineHeight={"inherit"}
                        color={"inherit"}
                        textTransform={"inherit"}
                    >
                        Let's Talk
                    </Typography>
                </BaseButton>
            </Box>
            <Stack
                overflow={"hidden"}
                direction={{ laptop: "row" }}
                alignItems={{ laptop: "center" }}
                justifyContent={"space-between"}
                gap={"calc(var(--flex-gap))"}
                padding={"calc(var(--basic-padding)/2) 0"}
                borderBottom={"1px solid #B0B3C680"}
                component={motion.div}
                variants={container}
                initial="hidden"
                whileInView="show"
            >
                <Box
                    component={motion.div}
                    variants={item}
                >
                    <img
                        src={logo}
                        alt="logo"
                    />
                </Box>
                <Stack
                    direction={{ tablet: "row" }}
                    alignItems={{ tablet: "center" }}
                    gap={{ mobile: "calc(var(--flex-gap)/2)", tablet: "calc(var(--flex-gap)/1)" }}
                    overflow={"hidden"}
                    component={motion.div}
                    variants={item}
                >
                    {footerLinks.map((footerLink, index) => {
                        return (
                            <HashLink
                                key={index}
                                to={footerLink.url}
                                smooth={true}
                            >
                                <Typography
                                    variant="subtitle1"
                                    fontFamily={"Inter"}
                                    fontWeight={600}
                                    fontSize={14}
                                    lineHeight={"normal"}
                                    color={"var(--footer-text-color)"}
                                    sx={{
                                        cursor: "pointer",
                                        "&:hover": {
                                            color: "var(--hover-text-color)"
                                        }
                                    }}
                                >
                                    {footerLink.name}
                                </Typography>
                            </HashLink>
                        )
                    })}
                </Stack>
            </Stack>
            <Stack
                overflow={"hidden"}
                direction={{ laptop: "row" }}
                alignItems={{ laptop: "center" }}
                justifyContent={"space-between"}
                gap={{ mobile: "calc(var(--flex-gap)/2)", laptop: "calc(var(--flex-gap))" }}
                padding={"calc(var(--basic-padding)/2) 0"}
                component={motion.div}
                variants={container}
                initial="hidden"
                whileInView="show"
            >
                <Box
                    component={motion.div}
                    variants={item}
                >
                    <Typography
                        variant="subtitle1"
                        fontFamily={"Inter"}
                        fontWeight={400}
                        fontSize={14}
                        lineHeight={"normal"}
                        color={"var(--hover-text-color)"}
                        sx={{
                            cursor: "pointer",
                            "&:hover": {
                                color: "var(--hover-text-color)"
                            }
                        }}
                    >
                        © identityhub 2024. All rights reserved
                    </Typography>
                </Box>
                <Stack
                    direction={{ mobile: "row" }}
                    alignItems={{ mobile: "center" }}
                    gap={{ mobile: "calc(var(--flex-gap)/4)", tablet: "calc(var(--flex-gap)/2)" }}
                    overflow={"hidden"}
                    component={motion.div}
                    variants={item}
                >
                    {socialMedia.map((social, index) => {
                        return (
                            <Box
                                key={index}
                                onClick={() => {
                                    window.open(social.url, "_blank")
                                }}
                                sx={{
                                    cursor: "pointer",
                                    display: "inline-block"
                                }}
                            >
                                {social.icon}
                            </Box>
                        )
                    })}
                </Stack>
            </Stack>
        </FooterWrapper>
    )
}