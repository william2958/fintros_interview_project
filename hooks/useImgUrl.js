import axios from "axios";
import {useEffect, useState} from "react";

async function getGraphData(url) {
	if (!url)
		return null;
	const data = (await axios.get('https://fintros-cors-anywhere.herokuapp.com/' + url)).data;

	const searchString = '"og:image"'
	const tagIndex = data.indexOf(searchString);
	if (tagIndex >= 0) {
		const startIndex = tagIndex + searchString.length;
		// find the position of the first "
		const imgLinkStartIndex = data.indexOf('"', startIndex)+1;
		const imgLinkEndIndex = data.indexOf('"', imgLinkStartIndex);
		const imgLink = data.substring(imgLinkStartIndex, imgLinkEndIndex);
		try {
			new URL(imgLink);
			return imgLink
		} catch (_) {}
	}

	return null;

}

function useImgUrl(url) {
	const [imgUrl, setImgUrl] = useState(null);

	useEffect(() => {
		if (imgUrl === null)
			getImageLink()
	}, [])

	const getImageLink = async () => {
		try {
			const imgLink = await getGraphData(url);
			if (imgLink)
				setImgUrl(imgLink);
			else
				setImgUrl('');
		} catch (e) {
			// no image available
			setImgUrl('');
		}
	}

	return imgUrl
}

export default useImgUrl;
