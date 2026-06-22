"use client"

import React, { createContext, useContext, useState, useCallback } from "react"

interface PageTitleContextType {
  dynamicLabels: Record<string, string>
  setDynamicLabel: (key: string, label: string) => void
}

const PageTitleContext = createContext<PageTitleContextType | undefined>(undefined)

export function PageTitleProvider({ children }: { children: React.ReactNode }) {
  const [dynamicLabels, setDynamicLabels] = useState<Record<string, string>>({})

  const setDynamicLabel = useCallback((key: string, label: string) => {
    setDynamicLabels((prev) => {
      if (prev[key] === label) return prev
      return { ...prev, [key]: label }
    })
  }, [])

  return (
    <PageTitleContext.Provider value={{ dynamicLabels, setDynamicLabel }}>
      {children}
    </PageTitleContext.Provider>
  )
}

export function usePageTitle() {
  const context = useContext(PageTitleContext)
  if (context === undefined) {
    throw new Error("usePageTitle must be used within a PageTitleProvider")
  }
  return context
}

/**
 * A small client component that can be used within a server component
 * to set the dynamic title for a path segment.
 */
export function DynamicTitle({ segment, label }: { segment: string, label: string }) {
  const { setDynamicLabel } = usePageTitle()
  
  React.useEffect(() => {
    if (segment && label) {
      setDynamicLabel(segment, label)
    }
  }, [segment, label, setDynamicLabel])

  return null
}
