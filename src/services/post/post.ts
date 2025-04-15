import { Transporter } from "../transporter";
import type { HTTPResponse, HTTPResponseList } from "../transporter/types";
import { mapHTTPResponse, mapHTTPResponseList } from "../transporter/utils";

interface PostAttributes {
  title: string;
  subtitle: string;
  content: string;
}

class PostService extends Transporter {
  async getPosts(page = 1, pageSize = 10) {
    const response = await this.get<HTTPResponseList<PostAttributes>>(
      `/api/posts?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
    );
    return mapHTTPResponseList(response);
  }

  async getPost(id: string) {
    const response = await this.get<HTTPResponse<PostAttributes>>(
      `/api/posts/${id}?populate=*`
    );
    const mapped = mapHTTPResponse(response);
    return mapped.data;
  }
}

export default new PostService();
