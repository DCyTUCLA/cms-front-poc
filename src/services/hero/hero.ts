import { Transporter } from "../transporter";
import type { HTTPResponseList } from "../transporter/types";
import { mapHTTPResponseList } from "../transporter/utils";

interface HeroImage {
  url: string;
  alternativeText: string;
}

interface HeroAttributes {
  title: string;
  description: string;
  cover: HeroImage;
}

class HeroService extends Transporter {
  async getHero() {
    const response = await this.get<HTTPResponseList<HeroAttributes>>(
      "/api/heroes?populate=*"
    );
    const heroes = mapHTTPResponseList(response);
    const hero = heroes.data.pop();
    if (!hero) {
      throw new Error("No hero info found!");
    }
    console.log(hero);
    return hero;
  }
}

export default new HeroService();
