import axios from "axios";

const ncNews = "https://oscar-northcoders-news.onrender.com";

export const getArticles = () => {
  const articlesURL = ncNews + "/api/articles";
  return axios.get(articlesURL).then((response) => {
    if (response.data && response.data.articles) {
      return response.data.articles;
    } else {
      return [];
    }
  });
};
export const GetArticleId = () => {
  return axios.get(`/api/articles/${articles.article_id}`).then((response) => {
    if (response.data && response.data.articles) {
      return response.data.articles;
    } else {
      return null;
    }
  });
};
