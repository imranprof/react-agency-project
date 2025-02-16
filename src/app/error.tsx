'use client' // Error boundaries must be Client Components

import { useEffect } from 'react'
import errorData from "@/config/errorData.json"
import ErrorPage from '@/components/error/ErrorPage '

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <>
      <ErrorPage data={errorData.data} />
    </>
  )
}