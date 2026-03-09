import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(() => {
  const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'Ailatan-website'
  const isGitHubActions = process.env.GITHUB_ACTIONS === 'true'
  const base = process.env.VITE_BASE ?? (isGitHubActions ? `/${repoName}/` : '/')

  return {
    base,
    plugins: [react()],
  }
})
