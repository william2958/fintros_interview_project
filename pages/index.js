import {useQuery} from "@apollo/client";
import _ from 'lodash';
import {useEffect, useState} from "react";

import {GET_BLOG_POSTS} from "queries";
import {H1} from "styles/typography/headers";
import ArticlePreview from "components/ArticlePreview";
import ThemeToggle from "components/ThemeToggle";

export default function Home({ toggleTheme }) {

  const [pageNum, setPageNum] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        // bottom of page
        throttledLoadNextPage();
      }
    };
  })

  const { loading, error, data, fetchMore } = useQuery(GET_BLOG_POSTS, {
    variables: {
      pageNum: pageNum
    }
  });

  if (loading) return (<div>Loading...</div>);
  if (error) console.log('error: ', error);

  const { retrievePageArticles: articles } = data;

  const loadNextPage = () => {
    fetchMore({
      variables: {
        pageNum: pageNum + 1
      }
    })
    setPageNum(pageNum + 1);
  }

  const throttledLoadNextPage = _.throttle(loadNextPage);

  return (
    <div>
      <H1 center bold>Explore the Journal</H1>
      <ThemeToggle toggleTheme={toggleTheme} />
      {articles.map(article => <ArticlePreview article={article} key={article.id} />)}
    </div>
  )
}
