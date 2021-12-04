import styled from "styled-components";
import { FaHome, FaSearch, FaBell } from "react-icons/fa";

const StyledNavigation = styled.nav`
    background: var(--clr-secondary);
    display: fixed;
    bottom: 0;
    width: 100%;
`;

const StyledNavButton = styled.span`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: var(--clr-text);
    padding: 0.5rem;
`;

const StyledNavText = styled.span`
    font-size: 15px;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    color: var(--clr-accent);
    visibility: hidden;
    opacity: 0;
    transition: all 0.35s;
`;

const StyledHomeIcon = styled(FaHome)`
    transition: "all 0.35s"
`;

const StyledSearchIcon = styled(FaSearch)`
    transition: "all 0.35s"
`;

const StyledBellIcon = styled(FaBell)`
    transition: "all 0.35s"
`;


const StyledNavInput = styled.input`
    position: absolute;
    transform: scale(0);

    &:checked ~ ${StyledNavButton} {
        color: var(--clr-accent);
    }

    &:checked ~ ${StyledNavButton} ${StyledNavText} {
        visibility: visible;
        opacity: 1;
    }

    &:checked ~ ${StyledNavButton} ${StyledHomeIcon} {
        transform: translateY(-9px);
    }

    &:checked ~ ${StyledNavButton} ${StyledSearchIcon} {
        transform: translateY(-9px);
    }

    &:checked ~ ${StyledNavButton} ${StyledBellIcon} {
        transform: translateY(-9px);
    }
`;

export default function Navigation() {
    return (
        <StyledNavigation>
            <label htmlFor="home">
                <StyledNavInput type="radio" id="home" name="group" />
                <StyledNavButton>
                    <StyledHomeIcon />
                    <StyledNavText>Home</StyledNavText>
                </StyledNavButton>
            </label>
            <label htmlFor="find">
                <StyledNavInput type="radio" id="find" name="group" />
                <StyledNavButton>
                    <StyledSearchIcon />
                    <StyledNavText>Find</StyledNavText>
                </StyledNavButton>
            </label>
            <label htmlFor="notification">
                <StyledNavInput type="radio" id="notification" name="group" />
                <StyledNavButton>
                    <StyledBellIcon />
                    <StyledNavText>Notification</StyledNavText>
                </StyledNavButton>
            </label>
        </StyledNavigation>
    )
}