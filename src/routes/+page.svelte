<script lang="ts">
	import { projectlist } from "$lib/projects";
	import { onMount } from "svelte";
	import { fly, blur, fade } from "svelte/transition";
	import Menus from "$lib/Menus.svelte"
	import { maximiseImage, minimiseImage } from "$lib/animation";
	import Topnav from "$lib/Topnav.svelte";
	import { haptic } from "$lib/feedback";
	let Mounted = false;
	const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
	let value = 0;
	let menuOpen = false;
	let delayFinish = false;
	function animation() {
		if (hovering == true) {
			value += 0.05;
		} else {
			value += 0.15;
		}
		requestAnimationFrame(animation);
	}
	onMount(async () => {
		menuOpen = false;
		Mounted = true;
		await sleep(2800);
		delayFinish = true;
		animation();
	});
	function outscreenDetecter(num: number, offsets: number) {
		if (width >= 600) {
			return ((num + offsets) % 130) - 20;
		} else {
			return ((num + offsets) % 170) - 70;
		}
	}
	let hovering = false;
	function hoverd() {
		hovering = true;
	}
	function unhoverd() {
		hovering = false;
	}
	function menu() {
		menuOpen = menuOpen ? false : true;
		haptic()
	}
	let width = 700;
	function topScreenAdjuster(num: number) {
		if (width >= 600) {
			return num;
		} else {
			return num * 4;
		}
	}
	function mousemove(e: MouseEvent) {
		screenX = e.clientX
		screenY = e.clientY
	}
	let screenX = 0
	let screenY = 0
</script>

<svelte:window bind:innerWidth={width} on:mousemove={mousemove}/>
<Menus {menuOpen}/>
{#if Mounted == false || menuOpen == true}
	<div
		class="backgroundcolor"
		in:fade={{ duration: 1000, delay: 100 }}
		out:fade={{ duration: 1000, delay: 100 }}
		class:laytotop={menuOpen}
	></div>
<div class="secondbackground"
></div>
{/if}
<div class="background"

style="background: radial-gradient(circle closest-corner at {screenX}px {screenY}px, rgba(226, 110, 229, 0.5) 0%, rgba(243, 248, 255, 0.8) 66%);"
></div>
<h1 class="centerText">Cephas</h1>

<Topnav on:click={menu} bind:Mounted bind:menuOpen home={true}/>
<div class="stopoverflow">
	{#each projectlist as project}
		{#if Mounted && menuOpen == false && delayFinish}
			<!-- man city empty seat -->
			<img
				src={project.src}
				alt=""
				class="movingImage"
				style="top: {topScreenAdjuster(
					project.pos,
				)}vw; left: {outscreenDetecter(value, project.offset)}vw"
				on:mouseover={hoverd}
				on:mouseleave={unhoverd}
				on:focus={() => {}}
				in:maximiseImage={{ duration: 1000 }}
				out:minimiseImage={{ duration: 1000 }}
				loading="lazy"
			/>
		{/if}
	{/each}
</div>

<style lang="scss">
	.laytotop {
		z-index: 993 !important;
	}
	.stopoverflow {
		overflow: hidden;
	}
	.movingImage {
		position: fixed;
		height: 30vh;
		background-color: aqua;
		z-index: 140;
		opacity: 0.9;
		transition:
			transform 2s,
			opacity 2s;
		background-position: center;
		border-radius: 10px;
		border: 1px solid rgba(255, 255, 255, 0.18);
		box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
		@media (max-width: 600px) {
			height: 20vh;
		}
	}
	.movingImage:hover {
		transition: transform 2s;
		transform: scale(120%);
	}
	.backgroundcolor {
		background-color: aquamarine;
		top: 0px;
		position: absolute;
		width: 100vw;
		height: 100vh;
		z-index: 100;
	}
	.background {
		top: 0px;
		width: 100vw;
		height: 100vh;
		// background-image: url("./background.jpg");
		// background-position-y: 70%;
		// background-position-x: center;
		// background-size: cover;
		// filter: blur(30px);
		z-index: 1;
		// animation:
		// 	nothingblur 2.8s linear,
		// 	blur 2s linear 2.8s;
	}
	// @keyframes nothingblur {
	// 	0% {
	// 		filter: blur(0px);
	// 	}
	// 	100% {
	// 		filter: blur(0px);
	// 	}
	// }
	// @keyframes blur {
	// 	0% {
	// 		filter: blur(0px);
	// 	}
	// 	100% {
	// 		filter: blur(30px);
	// 	}
	// }
	.centerText {
		color: #7ED3B2;
		text-align: center;
		font-size: 18vw;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		letter-spacing: 2vw;
		font-family: "Days One", sans-serif;
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		flex-shrink: 0;
		margin: 0px;
		z-index: 120;
		animation:
			text 1s ease-in 0.3s,
			textB 1.5s cubic-bezier(0.9, 0.03, 0.69, 0.22) 1.3s;
		@media (max-width: 600px) {
			letter-spacing: 2vw;
		}
	}
	@keyframes text {
		0% {
		color: #B9E6D3;
			font-family: "Days One", sans-serif;
			letter-spacing: 0rem;
			font-size: 15vw;
		}
		20% {
			font-family: "Dela Gothic One", sans-serif;
		}
		40% {
			font-family: "Days One", sans-serif;
		}
		60% {
			font-family: "Dela Gothic One", sans-serif;
		}
		100% {
			font-family: "Days One", sans-serif;
			letter-spacing: 0vw;
			font-size: 15vw;
		color: #B9E6D3;
		}
	}
	@keyframes textB {
		0% {
		color: #B9E6D3;
			letter-spacing: 0rem;
			font-size: 15vw;
		}
		100% {
		color: #7ED3B2;
			letter-spacing: 2vw;
			font-size: 18vw;
		}
	}
	:global(body) {
		margin: 0px;
		overflow: hidden;
	}
	.secondbackground {
		width: 100vw;
		height: 100vh;
		position: absolute;
		z-index: 994;
	}
</style>