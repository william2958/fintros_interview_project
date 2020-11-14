import {gql} from "@apollo/client";

export const GET_BLOG_POSTS = gql`
	query Blog($pageNum: Int!) {
	  retrievePageArticles(page: $pageNum) {
	    id
	    author
	    createdAt
	    score
	    updatedAt
	    title
	    text
	    type
	    url
	  }
	}
`
