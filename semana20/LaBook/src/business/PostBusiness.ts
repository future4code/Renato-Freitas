import { PostDatabase } from "../data/PostDatabase";
import { createPostDTO, getPostByIdDTO, post } from "../entities/Post";
import { IdGenerator } from "../service/IdGenerator";
import { TokenManager } from "../service/TokenManager";


export class PostBusiness {
  async createPost(input: createPostDTO) {
    try {
      const tokenManager = new TokenManager();
      if (!input.token) {
        throw new Error("Invalid token");
      }
      const tokenData: any = tokenManager.getData(input.token)


      const idGenerator = new IdGenerator();
      const id: string = idGenerator.generateId()

      const post: post = {
        id,
        authorId: tokenData.id,
        createdAt: new Date(),
        description: input.description,
        photo: input.photo,
        type: input.type,
      }

      await new PostDatabase().createPost(post)

    } catch (error) {
      throw new Error(error.message)
    }

  }

  async getPostById(input: getPostByIdDTO) {
    try {
      const post = await new PostDatabase().getPostById(input.id)

      if (!post) {
        throw new Error("Post not found")
      }
      
      return post;

    } catch (error) {
      throw new Error(error.message)
    }
  }
}