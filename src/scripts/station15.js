const div = document.getElementById('fruits');
const ulTag = document.createElement('ul');
const items = ["リンゴ", "イチゴ", "ブドウ"];
const fragment = document.createDocumentFragment();

const displayList = () => {
	//divの小要素を全て削除
	while(div.firstChild) {
		div.removeChild(div.firstChild);
	}

	//divの子要素にulを追加
	div.appendChild(ulTag);

	//小要素ulにliを3つそれぞれ追加
	const ul = document.getElementsByTagName('ul')[0];
	console.log(ul);
	items.forEach((item, index) => {
		const liTag = document.createElement("li");
		liTag.textContent = item;
		fragment.appendChild(liTag);
	});
	ul.appendChild(fragment);
}
