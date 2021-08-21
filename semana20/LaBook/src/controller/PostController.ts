import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { createPostDTO, getPostByIdDTO, getPostsByIdOutputDTO, post } from "../entities/Post";


export class PostController {
  async createPost(req: Request, res: Response) {
    try {
      let message = "Success!"
      const token: string = req.headers.authorization as string

      const input: createPostDTO = {
        photo: req.body.photo,
        description: req.body.description,
        type: req.body.type,
        token
      }

      await new PostBusiness().createPost(input)

      res.status(201).send({ message })

    } catch (error) {
      let message = error.sqlMessage || error.message
      res.statusCode = 400

      res.send({ message })
    }

  }

  async getPostById(req: Request, res: Response) {
    try {

      let message = "Success!"
      const input: getPostByIdDTO = {
        id: req.params.id
      }

      const post: post = await new PostBusiness().getPostById(input)
      const output: getPostsByIdOutputDTO = {
        photo: post.photo,
        description: post.description,
        type: post.type,
        createdAt: post.createdAt
      }

      res.status(200).send({ message, output })

    } catch (error) {
      let message = error.sqlMessage || error.message
      res.statusCode = 400

      res.send({ message })
    }
  }
}