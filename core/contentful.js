import { createClient } from "contentful";

const Space = process.env.CONTENTFUL_SPACE_ID;
const Token = process.env.CONTENTFUL_ACCESS_TOKEN;

export class ContentfulService {
  client = createClient({
    space: Space,
    accessToken: Token,
  });

  async getContentType(content, slug) {
    return await this.client.getEntries({
      content_type: content,
      "fields.slug[match]": slug,
    });
  }
}
