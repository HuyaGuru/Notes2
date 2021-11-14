import { useSelector } from "react-redux";
import Card from "./Card";

const Cards = () => {
	const cards = useSelector((state) => state.cards.list);

	return (
		<ul className="list card__list">
			{cards.map((item, index) => {
				if (index !== 0) {
					return <Card item={item} index={index} key={index} />;
				}
				else {
					return null
				}
			})}
		</ul>
	);
};

export default Cards;
