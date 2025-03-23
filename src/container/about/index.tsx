import { Box, Stack, Typography } from "@mui/material";
import { AboutWrapper } from "./styled";
import TungstenIcon from '@mui/icons-material/Tungsten';
import { AboutImg } from "../../asset";
import { container, item } from "../../config/verticalSlideIn";
import { leftParent, rightParent, leftChild } from "../../config/horizontalSlideIn";
import { motion } from "motion/react";

export const About = () => {
    return (
        <AboutWrapper
            id="about"
        >
            <Stack
                direction={{ mobile: "row" }}
                gap={"calc(var(--flex-gap)/4)"}
                alignItems={"center"}
                justifyContent={"center"}
                component={motion.div}
                variants={container}
                initial="hidden"
                whileInView="show"
            >
                <Box
                    overflow={"hidden"}
                    component={motion.div}
                    variants={item}
                >
                    <TungstenIcon style={{ transform: "rotate(180deg)", color: "var(--hover-text-color)" }} />
                </Box>
                <Box
                    overflow={"hidden"}
                    component={motion.div}
                    variants={item}
                >
                    <Typography
                        variant="subtitle1"
                        fontFamily={"Inter"}
                        fontWeight={600}
                        fontSize={{ mobile: 14, miniTablet: 16, xl: 24 }}
                        lineHeight={"normal"}
                        color={"var(--hover-text-color)"}
                        textAlign={"center"}
                    >
                        About Us
                    </Typography>
                </Box>
            </Stack>
            <Box
                component={motion.div}
                variants={container}
                initial="hidden"
                whileInView="show"
                className="about-introductory-text-box"
            >
                <Typography
                    component={motion.h2}
                    variants={item}
                    fontFamily={"Inter"}
                    fontWeight={500}
                    fontSize={{ mobile: 20, miniTablet: 25, tablet: 32, laptop: 40, xl: 48 }}
                    lineHeight={"normal"}
                    marginBlock={"calc(var(--basic-margin)/2)"}
                    sx={{
                        background: "linear-gradient(180deg, #FFFFFF 0%, #FFFFFFB2 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        color: "transparent",
                        display: "inline-block"
                    }}
                >
                    Welcome to Blocedge
                </Typography>
            </Box>
            <Stack
                direction={{ mobile: "column-reverse", tablet: "row" }}
                gap={{ mobile: "calc(var(--flex-gap)/1.4)", tablet: "var(--flex-gap)" }}
                alignItems={"center"}
                justifyContent={"space-between"}
                padding={{ tablet: "calc(var(--basic-padding)/2) 0" }}
                overflow={"hidden"}
                component={motion.div}
                variants={container}
                initial="hidden"
                whileInView="show"
            >
                <Box
                    component={motion.div}
                    variants={leftParent}
                    initial={"hidden"}
                    whileInView={"show"}
                    className="text-area"
                >
                    <Typography
                        component={motion.p}
                        variants={leftChild}
                        fontFamily={"Inter"}
                        fontWeight={400}
                        fontSize={{ mobile: 14, tablet: 16, laptop: 20 }}
                        lineHeight={"normal"}
                        marginBlockEnd={"calc(var(--basic-margin)/2)"}
                        color="var(--foundation-color)"
                        whiteSpace={"normal"}
                    >
                        We are your strategic partner for Web3 expansion, providing all-inclusive solutions designed to support projects in the decentralised environment. From project development and community building to marketing, collaborations, and fundraising, we offer the know-how required for scaling successfully.
                    </Typography>
                    <Typography
                        component={motion.p}
                        variants={leftChild}
                        fontFamily={"Inter"}
                        fontWeight={400}
                        fontSize={{ mobile: 14, tablet: 16, laptop: 20 }}
                        lineHeight={"normal"}
                        color="var(--foundation-color)"
                        whiteSpace={"normal"}
                    >
                        At BlocEdge, we are driven by innovation. We maintain our lead by utilising modern methods, in-depth knowledge of the sector, and an extensive network of partners to produce quantifiable results.
                        This is the Edge you need to attain the next level.
                    </Typography>
                </Box>
                <Box
                    component={motion.div}
                    className="image-area"
                    variants={rightParent}
                    initial={"hidden"}
                    whileInView={"show"}
                >
                    <AboutImg />
                </Box>
            </Stack>
        </AboutWrapper>
    )
}