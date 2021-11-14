import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Pad = () => {
	const current = useSelector((state) => state.card.current);
	const cards = useSelector((state) => state.cards.list);
	const edit = useSelector((state) => state.card.edit);
	const dispatch = useDispatch();
	const [text, setText] = useState(cards[current].text);
	const date = new Date(cards[current].date).toDateString().substr(4);
	const textChange = (e) => {
		setText(e.target.value);
		dispatch({ type: "card/setText", payload: { value: e.target.value } });
	};
	return (
		<div className="pad">
			<p className="card__date pad--date">{date}</p>
			{!edit && <p className="card__title pad__text">{text}</p>}
			{edit && (
				<textarea
					className="card__title pad__text pad__text--edit"
					value={text}
					onChange={(e) => textChange(e)}
				></textarea>
			)}
		</div>
	);
};

export default Pad;
