import * as React from 'react'
import { Sun, Moon, Monitor } from 'lucide-react'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { useTheme } from '@/components/theme-provider'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <ToggleGroup type="single" defaultValue="system" className="gap-1 bg-neutral-800 p-1 rounded-md border border-neutral-700">
      <ToggleGroupItem
        value="light"
        aria-label="Light theme"
        onClick={() => setTheme('light')}
        data-state={theme === 'light' ? 'on' : 'off'}
      >
        <Sun className="h-4 w-4" />
      </ToggleGroupItem>
      
      <ToggleGroupItem
        value="dark"
        aria-label="Dark theme"
        onClick={() => setTheme('dark')}
        data-state={theme === 'dark' ? 'on' : 'off'}
      >
        <Moon className="h-4 w-4" />
      </ToggleGroupItem>
      
      <ToggleGroupItem
        value="system"
        aria-label="System theme"
        onClick={() => setTheme('system')}
        data-state={theme === 'system' ? 'on' : 'off'}
      >
        <Monitor className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}