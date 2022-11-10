import { createRoot } from "react-dom/client"
import React from "react"
import App from "./App"
import "./styles.css"

//@ts-ignore
const root = createRoot(document.getElementById("root"))
root.render(<App />)
