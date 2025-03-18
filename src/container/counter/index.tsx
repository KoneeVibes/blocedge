import { Box, Grid2, Typography } from "@mui/material";
import { CounterWrapper } from "./styled";
import { impact } from "../../config/static";
import CountUp from "react-countup";

export const Counter = () => {
    return (
        <CounterWrapper>
            <Box>
                <Typography
                    variant="subtitle1"
                    fontFamily={"Inter"}
                    fontWeight={400}
                    fontSize={{ mobile: 14, miniTablet: 16, tablet: 22, desktop: 28, xl: 32 }}
                    lineHeight={"normal"}
                    color={"var(--sky-blue-color)"}
                    textAlign={"center"}
                    marginBlockEnd={"calc(var(--basic-margin)/2)"}
                >
                    Fueling Global Web3 impact
                </Typography>
            </Box>
            <Grid2
                container
                gap={{ mobile: "calc(var(--flex-gap))" }}
                justifyContent={{ mobile: "space-between" }}
            >
                {Object.entries(impact).map((metric, key) => {
                    return (
                        <Grid2
                            key={key}
                            size={{ mobile: 12, miniTablet: 4.5, desktop: 2.5 }}
                        >
                            <CountUp
                                end={metric[1]}
                                enableScrollSpy={true}
                                separator=""
                                suffix="+"
                            >
                                {({ countUpRef }) => (
                                    <Typography
                                        ref={countUpRef}
                                        variant="h3"
                                        fontFamily={"Inter"}
                                        fontWeight={700}
                                        fontSize={{ mobile: 25, tablet: 40, laptop: 60, desktop: 72, xl: 90 }}
                                        lineHeight={"normal"}
                                        color={"var(--text-ash-color)"}
                                    >
                                        {metric[1]}
                                    </Typography>
                                )}
                            </CountUp>
                            <Typography
                                variant="body1"
                                component={"p"}
                                fontFamily={"Inter"}
                                fontWeight={600}
                                fontSize={{ mobile: 15, desktop: 20 }}
                                lineHeight={"normal"}
                                color={"var(--foundation-color)"}
                                whiteSpace={"normal"}
                            >
                                {metric[0].replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^./, str => str.toUpperCase())}
                            </Typography>
                        </Grid2>
                    )
                })}
            </Grid2>
        </CounterWrapper>
    )
}