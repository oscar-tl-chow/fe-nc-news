import axios from "axios";

const ncNews = "https://oscar-northcoders-news.onrender.com";

export const getArticles = () => {
  const articlesURL = `${ncNews}/api/articles`;
  return axios
    .get(articlesURL)
    .then((response) => {
      if (response.data && response.data.articles) {
        return response.data.articles;
      } else {
        return [];
      }
    })
    .catch((error) => {
      console.error("Failed to fetch articles:", error);
      throw new Error("Failed to fetch articles");
    });
};

export const getSingleArticle = (article_id) => {
  const articleURL = `${ncNews}/api/articles/${article_id}`;
  return axios
    .get(articleURL)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Failed to fetch article:", error);
      throw new Error("Failed to fetch article");
    });
};
