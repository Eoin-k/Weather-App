import { sidebarCardInner, sliderWrapper } from "./rendering";

export const sevenDayButtonListeners = () => {
	const dailyBtnLeft = document.getElementById("daily-btn-left");
	const dailyBtnRight = document.getElementById("daily-btn-right");
	let dailySlide = document.getElementsByClassName("sidebar-slide-item");
	dailyBtnLeft.textContent = "<";
	dailyBtnRight.textContent = ">";

	dailyBtnLeft.addEventListener("click", (e) => {
		sidebarCardInner.prepend(dailySlide[dailySlide.length - 1]);
		e.stopPropagation();
	});

	dailyBtnRight.addEventListener("click", (e) => {
		sidebarCardInner.append(dailySlide[0]);
		e.stopPropagation();
	});
};

export const hourlyListeners = () => {
	const slideBtnLeft = document.getElementById("button-left");
	const slideBtnRight = document.getElementById("button-right");
	let slide = document.getElementsByClassName("slide-item");
	slideBtnLeft.textContent = "<";
	slideBtnRight.textContent = ">";

	slideBtnRight.addEventListener("click", (e) => {
		sliderWrapper.append(slide[0]);
		e.stopPropagation();
	});

	slideBtnLeft.addEventListener("click", (e) => {
		sliderWrapper.prepend(slide[slide.length - 1]);
		e.stopPropagation();
	});
};
