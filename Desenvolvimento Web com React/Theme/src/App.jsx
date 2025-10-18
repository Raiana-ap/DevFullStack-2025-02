import { ThemeProvider } from "./context/ThemeContext"
import ThemeToggle from "./component/ThemeToggle"
import ThemeStatus from "./component/ThemeStatus"

export default function App() {
  return (
    <ThemeProvider>
      <div style={{ padding: 20 }}>
        <h1>Mini-app de Tema</h1>
        <ThemeToggle />
        <ThemeStatus />
      </div>
    </ThemeProvider>
  )
}