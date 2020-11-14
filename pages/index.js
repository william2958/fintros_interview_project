import Link from 'next/link';
import {useQuery} from "@apollo/client";
import {useState} from "react";
import {GET_BLOG_POSTS} from "../queries";
import {H1} from "styles/typography/headers";

export default function Blog({ toggleTheme }) {

  const [pageNum, setPageNum] = useState(0);

  const { loading, error, data, fetchMore } = useQuery(GET_BLOG_POSTS, {
    variables: {
      pageNum: pageNum
    }
  });

  if (loading) return <p>Loading...</p>;
  if (error) console.log('error: ', error);

  const loadNextPage = () => {
    fetchMore({
      variables: {
        pageNum: pageNum + 1
      }
    })
    setPageNum(pageNum + 1);
  }

  console.log('data: ', data);

  return (
    <div>
      <H1>Test Text</H1>
      <button onClick={loadNextPage}>load next</button>
      <button onClick={toggleTheme}>toggle theme</button>
    </div>
  )
}
