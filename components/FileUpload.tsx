'use client'

import { useState, useRef, useEffect } from 'react'
import { Upload, X, FileText, Image, File, AlertCircle } from 'lucide-react'

interface FileUploadProps {
  onFileUpload: (files: File[]) => void
  disabled?: boolean
  reset?: boolean
}

interface UploadedFile {
  id: string
  file: File
  preview?: string
  status: 'uploading' | 'success' | 'error'
  error?: string
}

export default function FileUpload({ onFileUpload, disabled = false, reset = false }: FileUploadProps) {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [isDragOver, setIsDragOver] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Reset the component when reset prop changes
  useEffect(() => {
    if (reset) {
      setUploadedFiles([])
      setIsDragOver(false)
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    }
  }, [reset])

  const acceptedFileTypes = [
    'image/jpeg',
    'image/jpg', 
    'image/png',
    'image/gif',
    'image/webp',
    'application/pdf',
    'text/plain',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  ]

  const maxFileSize = 10 * 1024 * 1024 // 10MB
  const maxFiles = 5

  const getFileIcon = (file: File) => {
    if (file.type.startsWith('image/')) {
      return <Image className="w-5 h-5" />
    } else if (file.type === 'application/pdf') {
      return <FileText className="w-5 h-5" />
    } else {
      return <File className="w-5 h-5" />
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const validateFile = (file: File): string | null => {
    if (!acceptedFileTypes.includes(file.type)) {
      return 'File type not supported. Please upload images, PDFs, or documents.'
    }
    if (file.size > maxFileSize) {
      return 'File size too large. Maximum size is 10MB.'
    }
    if (uploadedFiles.length >= maxFiles) {
      return 'Maximum 5 files allowed.'
    }
    return null
  }

  const createPreview = (file: File): Promise<string> => {
    return new Promise((resolve) => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader()
        reader.onload = (e) => {
          resolve(e.target?.result as string)
        }
        reader.readAsDataURL(file)
      } else {
        resolve('')
      }
    })
  }

  const handleFileSelect = async (files: FileList) => {
    const newFiles: UploadedFile[] = []
    
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const error = validateFile(file)
      
      if (error) {
        alert(error)
        continue
      }

      const id = Math.random().toString(36).substr(2, 9)
      const preview = await createPreview(file)
      
      newFiles.push({
        id,
        file,
        preview,
        status: 'uploading'
      })
    }

    if (newFiles.length > 0) {
      setUploadedFiles(prev => [...prev, ...newFiles])
      
      // Simulate upload process
      setTimeout(() => {
        setUploadedFiles(prev => 
          prev.map(f => 
            newFiles.some(nf => nf.id === f.id) 
              ? { ...f, status: 'success' as const }
              : f
          )
        )
        
        // Call the parent callback with the new files
        onFileUpload(newFiles.map(f => f.file))
      }, 1000)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    
    if (disabled) return
    
    const files = e.dataTransfer.files
    handleFileSelect(files)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    if (!disabled) {
      setIsDragOver(true)
    }
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  const handleClick = () => {
    if (!disabled) {
      fileInputRef.current?.click()
    }
  }

  const removeFile = (id: string) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== id))
  }

  return (
    <div className="mb-4">
      {/* File Upload Area */}
      <div
        className={`relative border-2 border-dashed rounded-xl p-6 text-center transition-all cursor-pointer ${
          isDragOver 
            ? 'border-secondary-500 bg-secondary-50' 
            : 'border-neutral-300 hover:border-neutral-400'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={handleClick}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept={acceptedFileTypes.join(',')}
          onChange={(e) => e.target.files && handleFileSelect(e.target.files)}
          className="hidden"
          disabled={disabled}
        />
        
        <Upload className={`w-8 h-8 mx-auto mb-3 ${isDragOver ? 'text-secondary-500' : 'text-neutral-400'}`} />
        
        <div className="space-y-2">
          <p className="text-sm font-medium text-neutral-700">
            Drop files here or click to upload
          </p>
          <p className="text-xs text-neutral-500">
            Supports images, PDFs, and documents up to 10MB each
          </p>
          <p className="text-xs text-neutral-500">
            Maximum 5 files
          </p>
        </div>
      </div>

      {/* Uploaded Files List */}
      {uploadedFiles.length > 0 && (
        <div className="mt-4 space-y-2">
          <h4 className="text-sm font-medium text-neutral-700">Uploaded Files:</h4>
          <div className="space-y-2">
            {uploadedFiles.map((file) => (
              <div
                key={file.id}
                className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg border border-neutral-200"
              >
                <div className="flex items-center space-x-3">
                  {file.preview ? (
                    <img
                      src={file.preview}
                      alt={file.file.name}
                      className="w-10 h-10 object-cover rounded"
                    />
                  ) : (
                    <div className="w-10 h-10 bg-neutral-200 rounded flex items-center justify-center">
                      {getFileIcon(file.file)}
                    </div>
                  )}
                  
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-neutral-700 truncate">
                      {file.file.name}
                    </p>
                    <p className="text-xs text-neutral-500">
                      {formatFileSize(file.file.size)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  {file.status === 'uploading' && (
                    <div className="w-4 h-4 border-2 border-secondary-500 border-t-transparent rounded-full animate-spin" />
                  )}
                  {file.status === 'success' && (
                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                  )}
                  {file.status === 'error' && (
                    <AlertCircle className="w-4 h-4 text-red-500" />
                  )}
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      removeFile(file.id)
                    }}
                    className="p-1 hover:bg-neutral-200 rounded transition-colors"
                  >
                    <X className="w-4 h-4 text-neutral-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
} 