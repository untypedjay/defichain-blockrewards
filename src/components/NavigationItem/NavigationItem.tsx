import styled from "styled-components";
import { StyledHomeIcon, StyledSearchIcon,  StyledBellIcon } from "../Navigation/Navigation";

interface Props {
    id: string;
    children: JSX.Element;
    label: string;
}

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

export default function NavigationItem({ id, children, label }: Props) {
    return (
        <label htmlFor={id}>
            <StyledNavInput type="radio" id={id} name="group" />
            <StyledNavButton>
                {children}
                <StyledNavText>{label}</StyledNavText>
            </StyledNavButton>
        </label>
    );
}