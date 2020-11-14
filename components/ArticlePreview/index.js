import {ArticlePreviewImage, ArticlePreviewWrapper} from "./styles";
import useImgUrl from "../../hooks/useImgUrl";

const ArticlePreview = ({ article }) => {

	const imgUrl = useImgUrl(article.url)

	return (
		<ArticlePreviewWrapper>
			<ArticlePreviewImage src={imgUrl} />
			{article.title}
		</ArticlePreviewWrapper>
	)

}

export default ArticlePreview;
