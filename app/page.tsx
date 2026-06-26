"use client"

import { useState } from "react"
import type { Section } from "@/components/app-sidebar"
import { AuthScreen } from "@/components/auth-screen"
import { Dashboard } from "@/components/dashboard"
import { PatientDetail } from "@/components/patient-detail"
import { patients } from "@/lib/data"

type View = "auth" | "dashboard" | "detail"

export default function Page() {
  const [view, setView] = useState<View>("auth")
  const [section, setSection] = useState<Section>("dashboard")
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const selectedPatient = patients.find((p) => p.id === selectedId) ?? null

  function navigate(next: Section) {
    setSection(next)
    setView("dashboard")
  }

  if (view === "auth") {
    return <AuthScreen onLogin={() => setView("dashboard")} />
  }

  if (view === "detail" && selectedPatient) {
    return (
      <PatientDetail
        patient={selectedPatient}
        onBack={() => setView("dashboard")}
        onNavigate={navigate}
        onLogout={() => setView("auth")}
      />
    )
  }

  return (
    <Dashboard
      section={section}
      onNavigate={navigate}
      onSelectPatient={(id) => {
        setSelectedId(id)
        setView("detail")
      }}
      onLogout={() => setView("auth")}
    />
  )
}
