export interface SideBarProps {
    children: JSX.Element
}

export interface NavBarProps {
    childData: JSX.Element | string,
    handleDrawerToggle: () => void
}
