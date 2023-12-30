export const openLink = (link: string) => {
    window.open(link, '_blank');
}

// export const scrollToTop = (): void => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
// }

// export const goToSection = (sectionId: string, headerHeight: number): void => {
//     const section: HTMLElement | null = document.getElementById(sectionId);

//     if (section) {
//         const offsetTop = section.offsetTop - headerHeight;
//         window.scrollTo({ top: offsetTop, behavior: 'smooth' });
//     }
// }

export const setScrollPaddingForHeader = (): void => {
    const navigation: HTMLElement | null = document.querySelector(".header");

    if (navigation) {
        const navigationHeight = navigation.offsetHeight + navigation.offsetHeight * 0.25;

        document.documentElement.style.setProperty(
            "--scroll-padding",
            navigationHeight + "px"
        );
    }
}
