import Layout from "./components/Layout"
import Sidebar from "./components/Sidebar"
import Dashboard from "./pages/Dashboard"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <Sidebar />
        <Dashboard />
      </Layout>
    </>
  )
}

export default App