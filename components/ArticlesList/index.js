import {ArticlesListWrapper} from "./styles";
import ArticlePreview from "../ArticlePreview";

const ArticlesList = ({ articles }) => {

	if (!articles)
		return null;

	return (
		<ArticlesListWrapper>
			{articles.map(article => <ArticlePreview article={article} key={article.id} />)}
		</ArticlesListWrapper>
	)

}

export default ArticlesList;
