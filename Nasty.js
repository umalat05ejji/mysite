	console.log('Привет от JavaScript!');

	let burger = document.querySelector('.menu__burger');
	let list = document.querySelector('.menu__list');

		burger.onclick = function() {
	burger.classList.toggle('active');
	list.classList.toggle('active');
	};

	let teamMember = document.querySelector('.container_our_team_member');
	let radioLabel1 = document.querySelector('.our_team_radio_label1');
	let radioLabel2 = document.querySelector('.our_team_radio_label2');
	let radioLabel3 = document.querySelector('.our_team_radio_label3');

	let icon1Title = document.querySelector('.our_team_icon_title1');
	let icon1Post = document.querySelector('.our_team_icon_post1');

	let icon2Title = document.querySelector('.our_team_icon_title2');
	let icon2Post = document.querySelector('.our_team_icon_post2');

	let icon3Title = document.querySelector('.our_team_icon_title3');
	let icon3Post = document.querySelector('.our_team_icon_post3');





		radioLabel1.onclick = function() {
	teamMember.classList.remove('radio2');
	teamMember.classList.remove('radio3');
	icon1Title.textContent = 'John Doe';
	icon1Post.textContent = 'Huy Manager';
	icon2Title.textContent = 'Alex Smith';
	icon2Post.textContent = 'Programmer';
	icon3Title.textContent = 'Brendon Jones';
	icon3Post.textContent = 'Designer';
	}


		radioLabel2.onclick = function() {
	teamMember.classList.add('radio2');
	teamMember.classList.remove('radio3');
	icon1Title.textContent = 'Vip Hachan';
	icon1Post.textContent = 'Compuctershik';
	icon2Title.textContent = 'Uzkiy';
	icon2Post.textContent = 'Tentakleman';
	icon3Title.textContent = 'Pavlick';
	icon3Post.textContent = 'NARUTO';
	}

		radioLabel3.onclick = function() {
	teamMember.classList.add('radio3');
	teamMember.classList.remove('radio2');
	icon1Title.textContent = 'Oldman';
	icon1Post.textContent = 'Tele 2 Slave';
	icon2Title.textContent = 'Soldier';
	icon2Post.textContent = 'Dog on a mission';
	icon3Title.textContent = 'Skeleton';
	icon3Post.textContent = 'Mister-Dildo';
	}








/*
<div class="our_team_icon_title"> John Doe <br>
	<span class="our_team_icon_post"> General Manager </span>
</div>




*/