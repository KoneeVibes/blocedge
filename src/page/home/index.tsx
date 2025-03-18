import { Box } from "@mui/material";
import { Navigation } from "../../component/navigation";
import { HomeWrapper } from "./styled";
import { Hero } from "../../container/hero";
import { Counter } from "../../container/counter";
import { About } from "../../container/about";
import { WhyUs } from "../../container/whyus";

export const Home = () => {
    return (
        <HomeWrapper
            maxWidth={false}
            sx={{
                padding: "0 !important",
            }}
        >
            <Box
                component={"div"}
                className="header-box"
            >
                <Box sx={{ height: "1px" }} />
                <Navigation />
                <Hero />
            </Box>
            <Counter />
            <About />
            <WhyUs />
        </HomeWrapper>
    )
}