async function getAliens(path, callback) {
	return callback(await fetch(path).then(r => r.json()));
}
getAliens('aliens.json', aliens => {
	aliens = aliens.sort(() => 0.5 - Math.random());
	let aliensContainer = document.querySelector('.aliens');
	for(alien of aliens){
		let [name, power] = Object.values(alien);
			alien = `
			<div class="alien">
			  <img src="./aliens/${name}.png" title="${name} has power of ${power}" style='width:150px;height:250px;'>
			  <div class="container">
			    <h4><b>${name}</b></h4>
			  </div>
			</div>
			`
			aliensContainer.innerHTML += alien;
	}
});