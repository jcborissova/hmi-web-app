// src/App.tsx
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import VistaAerea from './pages/VistaAerea'
import Dashboard from './pages/Dashboard'
import DiagramaHMI from './pages/DiagramaHMI'

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <VistaAerea />
          </Layout>
        }
      />
      <Route
        path="/dashboard"
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />
      <Route
        path="/diagrama"
        element={
          <Layout>
            <DiagramaHMI />
          </Layout>
        }
      />
    </Routes>
  )
}
