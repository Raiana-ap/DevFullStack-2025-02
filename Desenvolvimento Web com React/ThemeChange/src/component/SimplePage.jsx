import { useTheme } from "../context/auth";


function SimplePage() {
    const { theme, dark, light } = useTheme();

    return (
        <>
        <header>
            <h1>Wellcome! This is just a little page.</h1>
        </header>
        <main>
            <button>Dark</button>
        </main>
        </>
    );
}

export default SimplePage
