import axios from "axios";

const baseUrl = axios.create({
  baseURL: "https://61c483b0f1af4a0017d99607.mockapi.io/cats-tinder",
});

export default class api {
  static getItems = async () => {
    const { data } = await baseUrl.get("/");
    return data;
  };

  static deleteItem = async (id) => {
    return await baseUrl.delete("/" + id);
  };

  static addItem = async (item) => {
    const post = await baseUrl.post("/", item);
    return post;
  };

  static editItem = async (id, item) => {
    await baseUrl.put(`/${id}`, item);
  };

  static async getItemById(id) {
    return await this.getItems().find((item) => item.id === id);
  }
}
