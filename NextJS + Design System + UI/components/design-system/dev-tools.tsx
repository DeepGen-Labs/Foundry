'use client'

import * as React from "react"
import { Button } from "@/components/ui/button"
import { useDesignSystemDevTools } from "@/lib/design-system/use-design-system"

export function DesignSystemDevTools() {
  const { gridVisible, toggleGrid } = useDesignSystemDevTools();
  
  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 flex gap-2 z-50">
      <Button
        onClick={toggleGrid}
        variant={gridVisible ? "default" : "outline"}
        size="sm"
        className="shadow-lg"
      >
        {gridVisible ? "Hide Grid" : "Show Grid"} (Cmd+G)
      </Button>
    </div>
  );
} 