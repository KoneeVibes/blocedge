import { Box, Grid2, Stack, Typography } from "@mui/material";
import { TeamWrapper } from "./styled";
import { TeamIcon } from "../../asset";
import { teamMembers } from "../../config/static";
import { motion } from "motion/react";
import { container, item } from "../../config/verticalSlideIn";

export const Team = () => {
    return (
        <TeamWrapper
            id="team"
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
                    <TeamIcon style={{ color: "var(--hover-text-color)" }} />
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
                        Our Team
                    </Typography>
                </Box>
            </Stack>
            <Box
                component={motion.div}
                variants={container}
                initial="hidden"
                whileInView="show"
                className="team-introductory-text-box"
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
                    Our team brings decades of experience
                </Typography>
            </Box>
            <Grid2
                container
                spacing={{ mobile: "calc(var(--flex-gap)/2)" }}
                justifyContent={{ mobile: "space-between" }}
                component={motion.div}
                variants={container}
                initial="hidden"
                whileInView="show"
            >
                {teamMembers.map((member, index) => {
                    return (
                        <Grid2
                            key={index}
                            size={{ mobile: 12, tablet: 6, laptop: 3 }}
                            display={"flex"}
                            flexDirection={"column"}
                            overflow={"hidden"}
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
                                className="team-member-thumbnail"
                            >
                                <img src={member.thumbnail} alt="team-member-photo" />
                            </Box>
                            <Box
                                component={"div"}
                                className="team-member-info"
                            >
                                <Typography
                                    variant="subtitle1"
                                    fontFamily={"Inter"}
                                    fontWeight={600}
                                    fontSize={{ mobile: 14, miniTablet: 16, xl: 24 }}
                                    lineHeight={"normal"}
                                    color={"var(--hover-text-color)"}
                                >
                                    {member.name}
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    fontFamily={"Inter"}
                                    fontWeight={600}
                                    fontSize={{ mobile: 14, miniTablet: 16, xl: 24 }}
                                    lineHeight={"normal"}
                                    color={"var(--hover-text-color)"}
                                >
                                    {member.title}
                                </Typography>
                            </Box>
                        </Grid2>
                    )
                })}
            </Grid2>
        </TeamWrapper>
    )
}