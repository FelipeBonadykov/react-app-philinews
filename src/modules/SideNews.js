import React, { useState, useEffect } from "react";
import './SideNews.css';

export default function SideNews(props) {
	const [news, setNews] = useState([{
		title: "Loading",
		image: null,
		date: new Date().toLocaleDateString(),
	}]);

	useEffect(() => {
		const getLatestNews = async (url) => {
			await fetch(url).then(res => res.json())
				.then(data => {
					console.log(data);
					for (let i = 0; i < 4; i++) {
						let element = data.results[i];
						let latestNewsObject = {
							title: element.title,
							text: element.description,
							url: element.link,
							image: element.image_url,
							date: element.pub_date,
						}
						i == 0
							? setNews(news => [latestNewsObject])
							: setNews((news) => [...news, latestNewsObject])
					}
				}).catch(err => {
					console.err(err);
					setNews((news) => [{
						title: "Sorry, you exceeded number of news",
						image: null,
						date: new Date().toLocaleDateString(),
					}]);
				});
		}
		getLatestNews("https://newsdata.io/api/1/news?apikey=pub_somenumbers&country=us&language=en");
	}, []);


	return (
		<aside className="popular_stories">
			<ul className="popular_articles_head">
				<li>Random news</li>
			</ul>
			<hr />
			<ol>
				{news.map((news, index) => (<li key={index}>
					<div className="pop_story">
						<div title="Click to read" className="pop_story_text">
							<div className="pop_story_title" onClick={() => props.updateNews(news)}>{news.title}</div>
							<div className="pop_story_sub">
								<p className="news_time">{news.date}</p>
							</div>
						</div>
						<div className="newspicture">
							<img alt="Image of popular news"
								src={news.image = (news.image === null)
									? `https://picsum.photos/200/300?random=${4 + index}`
									: news.image} />
						</div>
					</div>
					<hr />
				</li>))}
			</ol>
		</aside>
	);

}
