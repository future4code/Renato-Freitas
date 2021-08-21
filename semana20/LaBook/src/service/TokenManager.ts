import jwt from 'jsonwebtoken'

type tokenData = {
  id: string
}

export class TokenManager {

  generate(payload: tokenData) {
    return jwt.sign(payload, process.env.JWT_KEY!)
  }

  getData(token: string) {
    return jwt.verify(token, process.env.JWT_KEY!)
  }
}
