import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import editIcon from "./../assests/edit_black_36dp 1.svg";
import doneIcon from "./../assests/done_black_36dp 1.svg";
import backIcon from "./../assests/keyboard_backspace_black_48dp 1.svg";

const NoteHeader = () => {
	const edit = useSelector((state) => state.card.edit);
	const add = useSelector((state) => state.card.add);
	const current = useSelector((state) => state.card.current);
	const cards = useSelector((state) => state.cards.list);
	const text = useSelector((state) => state.card.text);
	const dispatch = useDispatch();

	const [title, setTitle] = useState(cards[current].title);
	const titleChange = (e) => {
		setTitle(e.target.value);
	};

	const backClick = () => {
		if (!edit) {
			dispatch({ type: "card/setOpen", payload: { value: false } });
		} else if (add) {
			dispatch({ type: "card/setAdd", payload: { value: false } });
			dispatch({ type: "card/setOpen", payload: { value: false } });
		}
		dispatch({ type: "card/setEdit", payload: { value: false } });
	};

	const doneClick = () => {
		let date = new Date().getTime();
		let tempTitle = title;
		if (title === "") {
			tempTitle = "Untitled";
			setTitle("Untitled");
		}
		dispatch({ type: "card/setEdit", payload: { value: false } });
		if (add) {
			dispatch({
				type: "cards/push",
				payload: {
					value: { title: tempTitle, date: date, text: text },
				},
			});
			dispatch({ type: "checks/push", payload: { value: false } });
		} else {
			dispatch({
				type: "cards/replace",
				payload: {
					index: current,
					title: tempTitle,
					text: cards[current].text,
					date: date,
				},
			});
		}
	};
	const editClick = () => {
		dispatch({ type: "card/setEdit", payload: { value: true } });
	};
	return (
		<header className="header">
			<div className="header__flex">
				<div className="header__flex header__flex--margin header__flex--justify">
					<button className="btn btn--circle" onClick={backClick}>
						<img className="btn__icon" src={backIcon} alt="back" />
					</button>
					{!edit && <h1>{title}</h1>}
					{edit && (
						<input
							type="text"
							value={title}
							onChange={(e) => titleChange(e)}
						/>
					)}
				</div>
				<div className="header__flex--margin">
					{edit && (
						<button className="btn btn--circle" onClick={doneClick}>
							<img
								className="btn__icon"
								src={doneIcon}
								alt="done"
							/>
						</button>
					)}
					{!edit && (
						<button className="btn btn--circle" onClick={editClick}>
							<img
								className="btn__icon"
								src={editIcon}
								alt="edit"
							/>
						</button>
					)}
				</div>
			</div>
		</header>
	);
};

export default NoteHeader;
