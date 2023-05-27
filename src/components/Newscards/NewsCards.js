import React from "react";
import { Grid, Grow, Typography } from "@mui/material";
import NewsCard from "../Newscard/Newscard";

const cards = [
  { color: "#5e9e9e", title: "Latest News", text: "Give me the latest news" },
  {
    color: "#5e9e9e",
    title: "News by Categories",
    info: "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest technology news",
  },
];

const NewsCards = ({ articles, activeArticles }) => {
  if (!articles.length) {
  }

  return (
    <Grow in>
      <Grid container alignItems="stretch" spacing={3}>
        {articles.map((articles, i) => (
          <Grid item key={i} sm={6} md={4} lg={3} style={{ display: "flex" }}>
            <NewsCard />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
