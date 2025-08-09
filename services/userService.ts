import { API_ENDPOINTS } from '@/constants/app'
import { UserUsageResponse } from '@/types/api'

export class UserService {
  private static instance: UserService

  private constructor() {}

  static getInstance(): UserService {
    if (!UserService.instance) {
      UserService.instance = new UserService()
    }
    return UserService.instance
  }

  async fetchUsage(): Promise<UserUsageResponse> {
    const response = await fetch(API_ENDPOINTS.CHAT)
    
    if (!response.ok) {
      throw new Error(`Failed to fetch usage: ${response.statusText}`)
    }
    
    return response.json()
  }
}

export const userService = UserService.getInstance()