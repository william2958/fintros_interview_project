import {useQuery} from "@apollo/client";
import _ from 'lodash';
import Head from "next/head";
import {useEffect, useState} from "react";

import {GET_BLOG_POSTS} from "queries";
import {H1} from "styles/typography/headers";
import ThemeToggle from "components/ThemeToggle";
import ArticlesList from "components/ArticlesList";

export default function Home({ toggleTheme }) {

  useEffect(() => {
    window.onscroll = () => {
      if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        // bottom of page
        throttledLoadNextPage();
      }
    };
  })

  const [pageNum, setPageNum] = useState(0);

  const { loading, error, data, fetchMore } = useQuery(GET_BLOG_POSTS, {
    variables: {
      pageNum: pageNum
    }
  });

  if (loading) return (<p>Loading...</p>);
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
      <Head>
        <title>Will | Fintros</title>
      </Head>
      <H1 center bold>Explore the Journal</H1>
      <ThemeToggle toggleTheme={toggleTheme} />
      <ArticlesList articles={articles} />
    </div>
  )
}
