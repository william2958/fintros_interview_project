import {ArticleContent, ArticlePreviewImage, ArticlePreviewWrapper, ArticleType} from "./styles";
import useImgUrl from "hooks/useImgUrl";
import {H2} from "styles/typography/headers";
import {LabelParagraph} from "styles/typography/paragraphs";
import {DefaultLink} from "styles/typography/links";

const ArticlePreview = ({ article }) => {

	const imgUrl = useImgUrl(article.url)

	return (
		<ArticlePreviewWrapper>
			<ArticlePreviewImage image={imgUrl} />
			<ArticleContent>
				<ArticleType>{article.type}</ArticleType>
				<H2>{article.title}</H2>
				<LabelParagraph>{article.text}</LabelParagraph>
				<DefaultLink href={article.url} target="_blank">Read this article</DefaultLink>
			</ArticleContent>
		</ArticlePreviewWrapper>
	)

}

export default ArticlePreview;
