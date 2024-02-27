import type { TUser } from '../types/user.type';

export async function getUserById(userId: string): Promise<TUser> {
  const response = await fetch(`${process.env.CATALOG_API_URL}/user/${userId}`);
  return response.json();
}
