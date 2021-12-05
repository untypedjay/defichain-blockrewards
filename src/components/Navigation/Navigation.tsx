import styled from "styled-components";
import { FaHome, FaSearch, FaBell } from "react-icons/fa";
import { NavigationItem } from "../NavigationItem";

const StyledNavigation = styled.nav`
    background: var(--clr-secondary);
    display: fixed;
    bottom: 0;
    width: 100%;
`;

export const StyledHomeIcon = styled(FaHome)`
    transition: "all 0.35s"
`;

export const StyledSearchIcon = styled(FaSearch)`
    transition: "all 0.35s"
`;

export const StyledBellIcon = styled(FaBell)`
    transition: "all 0.35s"
`;

export default function Navigation() {
    return (
        <StyledNavigation>
            <NavigationItem id="home" label="Home"><StyledHomeIcon/></NavigationItem>
            <NavigationItem id="find" label="Find"><StyledSearchIcon/></NavigationItem>
            <NavigationItem id="notifications" label="Notifications"><StyledBellIcon/></NavigationItem>
        </StyledNavigation>
    )
}