export const setScrollPaddingForHeader = (): void => {
    const navigation: HTMLElement | null = document.getElementById("Header");
    const mobileMenuButton: HTMLElement | null = document.getElementById("MobileMenuButton");
    let navigationHeight: number = 0;

    if (navigation && mobileMenuButton) {

        const mobileButtonStyles = getComputedStyle(mobileMenuButton);
        const mobileButtondisplayValue = mobileButtonStyles.getPropertyValue("display");

        if (mobileButtondisplayValue === "none") {
            navigationHeight = navigation.offsetHeight + (navigation.offsetHeight * 0.50);

        } else {
            navigationHeight = navigation.offsetHeight;
        }

        document.documentElement.style.setProperty(
            "--scroll-padding",
            navigationHeight + "px"
        );
    }
}
