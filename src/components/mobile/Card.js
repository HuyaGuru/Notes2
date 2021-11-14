import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const Card = (props) => {
	const checks = useSelector((state) => state.checks.list);
	const dispatch = useDispatch();
	const input = useRef();

	//date calculation
	const given = props.item.date;
	const now = Date.now();
	let date = null;
	const totalSeconds = 86400; //seconds in a day
	if (given >= 2) {
		const calcSeconds = (now - given) / 1000;
		if (calcSeconds <= totalSeconds) {
			let floor = (number) => Math.floor(number);
			if (calcSeconds <= 59) {
				date = floor(calcSeconds) + "s";
			} else if (calcSeconds / 60 <= 59) {
				date = floor(calcSeconds / 60) + "m";
			} else {
				date = floor(calcSeconds / 3600) + "h";
			}
		} else {
			date = new Date(given).toDateString().substr(4);
		}
	}
	const cardClick = () => {
		dispatch({
			type: "card/setCurrent",
			payload: {
				value: props.index,
			},
		});
		dispatch({
			type: "card/setOpen",
			payload: {
				value: true,
			},
		});
	};
	const labelClick = (e) => {
		dispatch({
			type: "checks/replace",
			payload: {
				position: e.target.htmlFor,
				value: !input.current.checked,
			},
		});
	};
	return (
		<li>
			<div className="card">
				<button className="btn btn__card" onClick={cardClick}>
					<h2 className="card__title">{props.item.title}</h2>
					<p className="card__date">{date}</p>
				</button>
				<div className="card__checkbox">
					<input
						className="card__checkbox__input"
						type="checkbox"
						name={props.index}
						id={props.index}
						ref={input}
						checked={checks[props.index]}
						readOnly
					/>
					<label
						className="card__checkbox__label"
						onClick={(e) => labelClick(e)}
						htmlFor={props.index}
					></label>
				</div>
			</div>
		</li>
	);
};

export default Card;
