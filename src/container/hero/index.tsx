import { Box, Stack, Typography } from "@mui/material";
import { HeroWrapper } from "./styled";
import { container, item } from "../../config/verticalSlideIn";
import { motion } from "motion/react";

export const Hero = () => {
    return (
        <HeroWrapper>
            <Stack
                direction={"row"}
                gap={"calc(var(--flex-gap)/4)"}
                alignItems={"center"}
                justifyContent={"center"}
                className="hero-chip"
                component={motion.div}
                variants={container}
                initial="hidden"
                whileInView="show"
            >
                <Box
                    component={motion.div}
                    variants={item}
                    className="left-inner-chip"
                >
                    <Typography
                        fontFamily={"Inter"}
                        fontWeight={500}
                        fontSize={14}
                        lineHeight={"normal"}
                        color={"#FFFFFF"}
                        textAlign={"center"}
                    >
                        New
                    </Typography>
                </Box>
                <Box
                    component={motion.div}
                    variants={item}
                    className="right-inner-chip"
                >
                    <Typography
                        fontFamily={"Inter"}
                        fontWeight={500}
                        fontSize={14}
                        lineHeight={"normal"}
                        color={"#000000"}
                        textAlign={"center"}
                    >
                        New updates goes here! 🎉
                    </Typography>
                </Box>
            </Stack>
            <Box
                component={motion.div}
                className="hero-item"
                variants={container}
                initial="hidden"
                whileInView="show"
            >
                <Typography
                    component={motion.h1}
                    variants={item}
                    fontFamily={"Inter"}
                    fontWeight={600}
                    fontSize={{ mobile: 32, miniTablet: 40, tablet: 60, laptop: 70, xl: 80 }}
                    lineHeight={"normal"}
                    textAlign={"center"}
                    marginBlock={"calc(var(--basic-margin)/2)"}
                    whiteSpace={"wrap"}
                    sx={{
                        background: "linear-gradient(180deg, #FFFFFF 0%, #FFFFFFB2 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        color: "transparent",
                        display: "inline-block"
                    }}
                >
                    Let's give your brand that edge
                </Typography>
            </Box>
            <Box
                component={motion.div}
                className="hero-item subtitle"
                variants={container}
                initial="hidden"
                whileInView="show"
            >
                <Typography
                    component={motion.p}
                    variants={item}
                    fontFamily={"Inter"}
                    fontWeight={500}
                    fontSize={{ mobile: 16, miniTablet: 20, tablet: 30, laptop: 40 }}
                    lineHeight={"normal"}
                    textAlign={"center"}
                    sx={{
                        background: "linear-gradient(89.94deg, #00D9FD 22.29%, #0E88F9 59.38%, rgba(25, 49, 223, 0.8) 99.11%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        color: "transparent",
                        display: "inline-block"
                    }}
                >
                    Igniting - Nurturing - Thriving
                </Typography>
            </Box>
        </HeroWrapper>
    )
}