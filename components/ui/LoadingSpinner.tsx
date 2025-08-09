import React from 'react'
import { clsx } from 'clsx'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
  label?: string
}

const sizeClasses = {
  sm: 'w-4 h-4 border-2',
  md: 'w-8 h-8 border-4',
  lg: 'w-12 h-12 border-4',
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  className,
  label,
}) => {
  return (
    <div className={clsx('flex flex-col items-center justify-center', className)}>
      <div
        className={clsx(
          'border-secondary-500 border-t-transparent rounded-full animate-spin',
          sizeClasses[size]
        )}
        role="status"
        aria-label={label || 'Loading'}
      />
      {label && (
        <p className="mt-2 text-sm text-neutral-600">{label}</p>
      )}
    </div>
  )
}

export const FullPageLoader: React.FC<{ message?: string }> = ({ message }) => {
  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
      <LoadingSpinner size="lg" label={message || 'Loading...'} />
    </div>
  )
}