import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledH1 = styled.h1`
    margin: 0;
`;

function Header() {
    return (
        <header>
            <StyledH1><Link to={"/"}>U-Friend</Link></StyledH1>
            <hr />
        </header>
    );
}

export default Header;