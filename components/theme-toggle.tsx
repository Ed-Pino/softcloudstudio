"use client"

import { useEffect, useSyncExternalStore } from "react"
import { Moon, Sun } from "lucide-react"
import { useTranslations } from "next-intl"

const THEME_STORAGE_KEY = "softcloudstudio-theme"
const THEME_CHANGE_EVENT = "softcloudstudio-theme-change"

function subscribe(onStoreChange: () => void) {
  window.addEventListener(THEME_CHANGE_EVENT, onStoreChange)
  return () => window.removeEventListener(THEME_CHANGE_EVENT, onStoreChange)
}

function getSnapshot() {
  return document.documentElement.classList.contains("dark")
}

function getServerSnapshot() {
  return false
}

export function ThemeToggle() {
  const t = useTranslations("common")
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)
    const shouldUseDarkTheme = storedTheme === "dark"

    document.documentElement.classList.toggle("dark", shouldUseDarkTheme)
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT))
  }, [])

  function toggleTheme() {
    const nextIsDark = !document.documentElement.classList.contains("dark")

    window.localStorage.setItem(THEME_STORAGE_KEY, nextIsDark ? "dark" : "light")
    document.documentElement.classList.toggle("dark", nextIsDark)
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT))
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? t("theme.switchToLight") : t("theme.switchToDark")}
      title={isDark ? t("theme.switchToLight") : t("theme.switchToDark")}
      className="inline-flex size-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 transition-colors hover:border-indigo-300 hover:text-indigo-600"
    >
      {isDark ? <Sun aria-hidden="true" size={17} /> : <Moon aria-hidden="true" size={17} />}
    </button>
  )
}
