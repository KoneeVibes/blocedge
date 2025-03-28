import { Box, Grid2, Stack, Typography } from "@mui/material";
import { WhyUsWrapper } from "./styled";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { sellingPoints } from "../../config/static";
import { motion } from "motion/react";
import { container, item } from "../../config/verticalSlideIn";

export const WhyUs = () => {
    return (
        <WhyUsWrapper>
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
                    <QuestionMarkIcon style={{ color: "var(--hover-text-color)" }} />
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
                        Why Us?
                    </Typography>
                </Box>
            </Stack>
            <Box
                component={motion.div}
                variants={container}
                initial="hidden"
                whileInView="show"
                className="why-us-introductory-text-box"
            >
                <Typography
                    component={motion.h2}
                    variants={item}
                    fontFamily={"Inter"}
                    fontWeight={500}
                    fontSize={{ mobile: 20, miniTablet: 25, tablet: 32, laptop: 40, xl: 48 }}
                    lineHeight={"normal"}
                    marginBlock={"calc(var(--basic-margin)/2)"}
                    marginBlockEnd={{ tablet: "calc(var(--basic-margin))" }}
                    whiteSpace={"normal"}
                    textAlign={"center"}
                    sx={{
                        background: "linear-gradient(180deg, #FFFFFF 0%, #FFFFFFB2 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        color: "transparent",
                        display: "inline-block"
                    }}
                >
                    Let’s Make Your Web3 Dream A Reality
                </Typography>
            </Box>
            <Grid2
                container
                spacing={{ mobile: "calc(var(--flex-gap)/2)", tablet: "calc(var(--flex-gap))" }}
                justifyContent={{ mobile: "space-between" }}
                component={motion.div}
                variants={container}
                initial="hidden"
                whileInView="show"
            >
                {sellingPoints.map((point, key) => {
                    return (
                        <Grid2
                            key={key}
                            size={{ mobile: 12, tablet: 6 }}
                            display={"flex"}
                            flexDirection={"column"}
                            gap={"calc(var(--flex-gap)/2)"}
                            position={"relative"}
                            padding={{ mobile: "calc(var(--basic-padding)/2)", miniTablet: "calc(var(--basic-padding)/1) calc(var(--basic-padding)/2)", laptop: "calc(var(--basic-padding))" }}
                            bgcolor={"var(--card-bg-color)"}
                            border={"1px solid var(--border-color)"}
                            sx={{
                                backdropFilter: "blur(16px)",
                                borderRadius: "24px",
                            }}
                            component={motion.div}
                            variants={item}
                        >
                            <Box
                                component={"div"}
                                className="index-box"
                            >
                                {point.index}
                            </Box>
                            <Box
                                component={"div"}
                                className="why-us-point-box"
                            >
                                <Typography
                                    variant="body1"
                                    fontFamily={"Inter"}
                                    fontWeight={500}
                                    fontSize={{ mobile: 14, miniTablet: 16, tablet: 20 }}
                                    lineHeight={"normal"}
                                    whiteSpace={"normal"}
                                    color="var(--card-text-color)"
                                >
                                    {point.description}
                                </Typography>
                            </Box>
                        </Grid2>
                    )
                })}
            </Grid2>
        </WhyUsWrapper >
    )
}