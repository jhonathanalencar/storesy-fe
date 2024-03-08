import crypto from 'node:crypto';

export function generateCardHash(data: string): string {
  const algorithm = process.env.ALGORITHM as string;
  const secretKey = process.env.SECRET_KEY as string;
  const iv = process.env.INITIALIZATION_VECTOR as string;
  const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
  const encryptedData =
    cipher.update(data, 'utf8', 'hex') + cipher.final('hex');
  return encryptedData;
}
