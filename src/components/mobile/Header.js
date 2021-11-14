import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import add from "./../assests/add_black_36dp 1.svg";
import remove from "./../assests/remove_black_24dp 1.svg";

const Header = () => {
	const checks = useSelector((state) => state.checks.list);
	const dispatch = useDispatch();
	const [check, setCheck] = useState(false);
	useEffect(() => {
		if (checks.includes(true)) {
			setCheck(true);
		} else {
			setCheck(false);
		}
	}, [checks]);
	const removeClick = () => {
		dispatch({
			type: "cards/splice",
			payload: { positions: checks, length: checks.length },
		});
		dispatch({ type: "checks/remove" });
	};
	const addClick = () => {
		dispatch({ type: "card/setCurrent", payload: { value: 0 } });
		dispatch({ type: "card/setOpen", payload: { value: true } });
		dispatch({ type: "card/setEdit", payload: { value: true } });
		dispatch({ type: "card/setAdd", payload: { value: true } });
	};
	return (
		<header className="header">
			<div className="header__flex header__flex--margin">
				<h1>Notes</h1>
				{check && (
					<button className="btn btn--circle" onClick={removeClick}>
						<img className="btn__icon" src={remove} alt="remove" />
					</button>
				)}
				{!check && (
					<button className="btn btn--circle" onClick={addClick}>
						<img className="btn__icon" src={add} alt="add" />
					</button>
				)}
			</div>
		</header>
	);
};

export default Header;
