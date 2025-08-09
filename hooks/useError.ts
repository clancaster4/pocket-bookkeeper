import { useState, useCallback } from 'react'
import toast from 'react-hot-toast'

export interface AppError {
  message: string
  code?: string
  details?: Record<string, any>
}

interface UseErrorReturn {
  error: AppError | null
  isError: boolean
  setError: (error: AppError | null) => void
  clearError: () => void
  handleError: (error: unknown, showToast?: boolean) => void
}

export function useError(): UseErrorReturn {
  const [error, setError] = useState<AppError | null>(null)

  const clearError = useCallback(() => {
    setError(null)
  }, [])

  const handleError = useCallback((error: unknown, showToast = true) => {
    let appError: AppError

    if (error instanceof Error) {
      appError = {
        message: error.message,
        code: (error as any).code,
        details: (error as any).details,
      }
    } else if (typeof error === 'string') {
      appError = { message: error }
    } else if (error && typeof error === 'object' && 'message' in error) {
      appError = error as AppError
    } else {
      appError = { message: 'An unexpected error occurred' }
    }

    setError(appError)

    if (showToast) {
      toast.error(appError.message)
    }

    console.error('Error:', appError)
  }, [])

  return {
    error,
    isError: !!error,
    setError,
    clearError,
    handleError,
  }
}

// Global error handler for async operations
export function useAsyncError() {
  const { handleError } = useError()

  return useCallback(
    async <T,>(asyncOperation: () => Promise<T>): Promise<T | null> => {
      try {
        return await asyncOperation()
      } catch (error) {
        handleError(error)
        return null
      }
    },
    [handleError]
  )
}