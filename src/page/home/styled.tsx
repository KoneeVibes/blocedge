import { Container, styled } from "@mui/material";
import headerbg from "../../asset/headerbg.svg";

export const HomeWrapper = styled(Container)(({ theme }) => {
    return {
        "& .header-box": {
            // overflow: "hidden",
            backgroundImage: `url(${headerbg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom center",
        }
    }
})
