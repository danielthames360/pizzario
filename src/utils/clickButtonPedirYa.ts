export const clickButtonPedirYa = (id: string) => {
    const button: HTMLButtonElement | null = document.querySelector(`button[data-glf-ruid='${id}']`);

    if (button) {
        button.click();
    }
}