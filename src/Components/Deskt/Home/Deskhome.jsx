import React from 'react'
import logo from "../../../assets/main.png";
import lock from "../../../assets/lock.png";
import "../Deskstyle.css";


function Deskhome() {
  return (
    <div className="desk_home">
			<LogoSection />
			<Description />
			<EncryptionMessage />
		</div>
	);
}
function LogoSection() {
	return (
		<>
			<img src={logo} alt="some folks with notepad and pencils" />
			<h1>Pocket Notes</h1>
		</>
	);
}
function Description() {
	return (
		<p>
			Send and receive messages without keeping your phone online.
			<br />
			Use Pocket Notes on up to 4 linked devices and 1 mobile phone.
		</p>
	);
}

function EncryptionMessage() {
	return (
		<div className="encryption-msg">
			<img src={lock} alt="lock" />
			<span> end-to-end encrypted</span>
		</div>
	);
}


export default Deskhome
