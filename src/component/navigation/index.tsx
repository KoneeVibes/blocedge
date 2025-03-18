import { Box, Stack, Typography } from "@mui/material";
import { NavigationWrapper } from "./styled";
import { Logo } from "../../asset";
import { useNavigate } from "react-router-dom";
import { navLinks } from "../../config/static";
import { BaseButton } from "../button/styled";
import { HashLink } from 'react-router-hash-link';
import { MenuButton } from "../button/menu";

export const Navigation = () => {
    const navigate = useNavigate();
    const handleLogoClick = () => {
        navigate("/");
    };
    return (
        <NavigationWrapper>
            <Box
                component={"div"}
                className="favicon-box"
            >
                <Logo
                    onClick={handleLogoClick}
                />
            </Box>
            <Stack
                className="nav-links"
            >
                {navLinks.map((navLink, index) => {
                    return (
                        <HashLink
                            key={index}
                            to={navLink.url}
                            smooth={true}
                        >
                            <Typography
                                variant="subtitle1"
                                fontFamily={"Inter"}
                                fontWeight={400}
                                fontSize={20}
                                lineHeight={"normal"}
                                color={"var(--active-text-color)"}
                                textAlign={"center"}
                                sx={{
                                    cursor: "pointer",
                                    "&:hover": {
                                        color: "var(--hover-text-color)"
                                    }
                                }}
                            >
                                {navLink.name}
                            </Typography>
                        </HashLink>
                    )
                })}
            </Stack>
            <Box
                component={"div"}
                className="contact-button"
            >
                <BaseButton>
                    <Typography
                        variant={"button"}
                        fontFamily={"inherit"}
                        fontWeight={"inherit"}
                        fontSize={"inherit"}
                        lineHeight={"inherit"}
                        color={"inherit"}
                        textTransform={"inherit"}
                    >
                        Contact Us
                    </Typography>
                </BaseButton>
            </Box>
            <Box
                component={"div"}
                className="hamburger"
            >
                <MenuButton />
            </Box>
        </NavigationWrapper>
    )
}