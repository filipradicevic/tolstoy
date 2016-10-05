import React from 'react'

const listInfo = [
		['10%', '2e17b8', 'Резерв на развитие'],
		['10%', 'f9ca0f', 'Распределение держателям Steem'],
		['10%', '1e193b', 'Cyber.Fund'],
		[' 7%', 'cd591a', 'Основателям Голоса'],
		[' 3%', '7bd915', 'Майнерам Голоса'],
		['60%', 'd80a15', 'Краудсейл']
]

export default class LandingDistribution extends React.Component {
	render() {
		// function renderDot(color) {
		// 	return <span className="Distribution__dot" style={{ backgroundColor: color }} />
		// }

		function renderList() {
			return	listInfo.map(
						(item) 	=> 	<li className="Distribution__item">
										<strong className="Distribution__strong">{item[0]}</strong>
										<span className="Distribution__dot" style={{ backgroundColor: '#' + item[1] }} />
										{item[2]}
									</li>
						)
		}

		return (
			<section className="Distribution">
				<div className="row text-center Distribution__headers">
					<div className="small-12 columns">
						<h2 className="Landing__h2_blue">Распределение Силы Голоса</h2>
						<span className="Distribution__supporting-text">Сила Голоса позволяет оценивать опубликованный контент</span>
					</div>
				</div>
				<div className="row">
					<div className="small-6">
						<img src="images/landing/pie.png" />
					</div>
					<div className="small-6 columns Distribution__list">
						<ul>
							{renderList()}
						</ul>
					</div>
				</div>
				<div className="row Distribution__action">
					<div className="small-12 columns text-center">
						<a href="" className="button">Узнать больше что такое Голос</a>
					</div>
				</div>
				<hr />
			</section>
		)
	}
}
