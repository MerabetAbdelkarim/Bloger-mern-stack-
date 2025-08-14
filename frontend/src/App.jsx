import { ToastProvider } from "./assets/plugins/Toast/ToastProvider"
import Router from "./routers/Router"

function App() {

  return (
    <ToastProvider>
      <Router/>
    </ToastProvider>
  )
}

export default App
