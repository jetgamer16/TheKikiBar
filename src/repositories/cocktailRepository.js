import axios from "axios";

export class CocktailRepository {
  async getAll() {
    const response = await axios.get("http://localhost:3000/cocktails");
    return response.data;
  }

  async getCocktail(id) {
    const response = await axios.get(`http://localhost:3000/cocktails/${id}`);
    return response.data;
  }

  async addCocktail(item) {
    const response = await axios.post("http://localhost:3000/cocktails", item);
    return response.data;
  }

  async editCocktail(item) {
    const response = await axios.put(`http://localhost:3000/cocktails/${item.id}`, item);
    return response.data;
  }

  async delCocktail(id) {
    const response = await axios.delete(`http://localhost:3000/cocktails/${id}`);
    return response.data;
  }
}
