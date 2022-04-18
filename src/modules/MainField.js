import LatestStory from "./LatestStory";
import SideNews from "./SideNews";
import "./MainField.css";
import React, { useState } from "react";

export function MainField() {
	const [currentNews, setMainNews] = useState({
		title: "A world-renowned guide has put together the most eco-friendly, self-propelled ski adventure possible, teaching travellers to lower their carbon footprint along the way.",
		text: "The long description of the article. Snowflakes gathered lightly on Greg Hill's jacketed shoulders as he broke trail on his skis, guiding our group up a mountain in British Columbia's Rogers Pass. It was February, prime time to experience this ski mecca, which lies less than 70km from the town of Revelstoke that Hill has called home for the last two and a half decades. Expounding on how our personal buying choices can make a difference in the fight against climate change, he paused to point with his ski pole at yet another dead pine tree.",
		url: 'https://www.bbc.com/travel/article/20220314-canadas-rare-new-skiing-adventure',
		image: 'https://ychef.files.bbci.co.uk/1600x900/p0btj4f8.webp',
		date: new Date().toLocaleDateString(),
	});

	function updateNews(selectedNews) {
		console.log('click')
		setMainNews(selectedNews);
	}

	return (
		<section className="main_field">
			<LatestStory news={currentNews} />
			<SideNews updateNews={updateNews} />
		</section>
	);
}