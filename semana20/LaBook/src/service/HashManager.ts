import bcrypt from 'bcryptjs'

export class HashManager {
  async hash(password: string) {
    const rounds = 12
    const salt = await bcrypt.genSalt(rounds)
    return bcrypt.hash(password, salt)
  }

  async compare(password: string, hash: string) {
    return bcrypt.compare(password, hash)
  }
}
