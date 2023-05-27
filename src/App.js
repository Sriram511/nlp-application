import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import alanBtn from "@alan-ai/alan-sdk-web";
import wordsToNumbers from "words-to-numbers";
import NewsCards from "./components/Newscards/NewsCards";

const LogoContainer = styled("div")(({ theme }) => ({
  margin: "1% 1%",
  diaplay: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  width: "100%",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
    textAlign: "center",
  },
}));

const Headline = styled("h3")(({ theme }) => ({
  height: "27vmin",
  padding: "0 7%",
  margin: "3% 0",

  [theme.breakpoints.down("sm")]: {
    height: "35vmin",
  },
}));

function App() {
  const [activeArticle, setActiveArticle] = useState(0);
  const [newsArticle, setNewsArticle] = useState([]);

  useEffect(() => {
    alanBtn({
      key: "7133471a473303cc422c0caa288885f32e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command, articles, number }) => {
        switch (command) {
          case "newHeadlines":
            setNewsArticle(articles);
            setActiveArticle(-1);
            break;

          case "highlight":
            setNewsArticle((prev) => prev + 1);
            break;

          case "open":
            const parsedNumbers =
              number.length > 2
                ? wordsToNumbers(number, { fuzzy: true })
                : number;
            const article = articles[parsedNumbers - 1];

            if (parsedNumbers > articles.length) {
              alanBtn.playText("Sorry, Please try again");
            } else if (article) {
              alanBtn.playText("Opening.....");
            } else {
              alanBtn.playText("Sorry, please try again");
            }
            break;

          default:
            console.log("...");
        }
      },
    });
  });

  return (
    <div>
      <LogoContainer>{newsArticle.length && <div>Test</div>}</LogoContainer>
      {/* <Headline>Headline</Headline> */}
      <NewsCards articles={newsArticle} activeArticles={activeArticle} />
    </div>
  );
}

export default App;
