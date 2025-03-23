import { Box, Grid2, Stack, Typography } from "@mui/material";
import { ServicesWrapper } from "./styled";
import { ServiceIcon } from "../../asset";
import { serviceOfferings } from "../../config/static";
import { motion } from "motion/react";
import { container, item } from "../../config/verticalSlideIn";

export const Services = () => {
    return (
        <ServicesWrapper
            id="services"
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
                    <ServiceIcon style={{ color: "var(--hover-text-color)" }} />
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
                        Our Services
                    </Typography>
                </Box>
            </Stack>
            <Box
                component={motion.div}
                variants={container}
                initial="hidden"
                whileInView="show"
                className="services-introductory-text-box"
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
                    We inspire development and drive growth
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
                {serviceOfferings.map((service, index) => {
                    return (
                        <Grid2
                            key={index}
                            size={{ mobile: 12, tablet: 6, xl: 4 }}
                            display={"flex"}
                            flexDirection={"column"}
                            gap={"calc(var(--flex-gap)/2)"}
                            overflow={"hidden"}
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
                                overflow={"hidden"}
                            >
                                {service.icon}
                            </Box>
                            <Box
                                overflow={"hidden"}
                            >
                                <Typography
                                    variant="h3"
                                    fontFamily={"Inter"}
                                    fontWeight={700}
                                    fontSize={{ mobile: 20, tablet: 25, desktop: 28 }}
                                    lineHeight={"normal"}
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
                                    {service.title}
                                </Typography>
                            </Box>
                            <Box
                                overflow={"hidden"}
                            >
                                <Typography
                                    variant="body1"
                                    fontFamily={"Inter"}
                                    fontWeight={400}
                                    fontSize={{ mobile: 14, miniTablet: 16, tablet: 20 }}
                                    lineHeight={"normal"}
                                    whiteSpace={"normal"}
                                    color="var(--active-text-color)"
                                >
                                    {service.body}
                                </Typography>
                            </Box>
                        </Grid2>
                    )
                })}
            </Grid2>
        </ServicesWrapper>
    )
}