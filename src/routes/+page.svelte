<script lang="ts">
	import { projectlist } from "$lib/projects";
	import { onMount } from "svelte";
	import { fly, blur, fade, crossfade } from "svelte/transition";
	import Menus from "$lib/Menus.svelte";
	import { maximiseImage, minimiseImage } from "$lib/animation";
	import Topnav from "$lib/Topnav.svelte";
	import { haptic } from "$lib/feedback";
	import { flip } from "svelte/animate";
	import Project from "$lib/Project.svelte";
	const [send, receive] = crossfade({});
	let received_src = ""

	let Mounted = false;
	const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
	let value = 0;
	let menuOpen = false;
	let delayFinish = false;
	function animation() {
		if (clicked == false) {
			if (hovering == true) {
				value += 0.05;
			} else {
				value += 0.15;
			}
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
	let clicked = false;
	function hoverd() {
		hovering = true;
	}
	function unhoverd() {
		hovering = false;
	}
	function mousedown(src: string) {
		received_src = src
		clicked = true;
	}
	function mouseup() {
		// clicked = false;
	}
	function menu() {
		menuOpen = menuOpen ? false : true;
		haptic();
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
		screenX = e.clientX;
		screenY = e.clientY;
	}
	let screenX = 0;
	let screenY = 0;
</script>

{#if clicked}
	<div class="blocker"> 
		<div class="popups" in:receive={{key: received_src}} out:send={{key: received_src}}>
			<button class="popupCloseBtn" on:click={() => clicked = false}>
				<div class="popupClose material-symbols-outlined"> add</div>
			</button>
			<img class="popupImage" src={received_src} alt="" >
			<Project projectOn={projectlist.findIndex(value => value.src == received_src)}/>
		</div>
	</div>
{/if}
<svelte:window bind:innerWidth={width} on:mousemove={mousemove} />
<Menus {menuOpen} />
{#if Mounted == false || menuOpen == true}
	<div
		class="backgroundcolor"
		in:fade={{ duration: 1000, delay: 100 }}
		out:fade={{ duration: 1000, delay: 100 }}
		class:laytotop={menuOpen}
	></div>
	<div class="secondbackground"></div>
{/if}
<div
	class="background"
	style="background: radial-gradient(circle closest-corner at {screenX}px {screenY}px, rgba(226, 110, 229, 0.5) 0%, rgba(243, 248, 255, 0.8) 66%);"
></div>
<h1 class="centerText">Cephas</h1>

<Topnav on:click={menu} bind:Mounted bind:menuOpen home={true} />
<div class="stopoverflow">
	{#each projectlist as project}
		{#if Mounted && menuOpen == false && delayFinish}
			<button
				class="movingImageFrame"
				style="top: {topScreenAdjuster(
					project.pos
				)}vw; left: {outscreenDetecter(value, project.offset)}vw"
				on:mouseover={hoverd}
				on:mouseleave={unhoverd}
				on:mousedown={() => {mousedown(project.src)}}
				on:mouseup={mouseup}
				on:focus={() => {}}
				in:maximiseImage={{ duration: 1000 }}
				out:minimiseImage={{ duration: 1000 }}
			>
			 {#if clicked==false}
				<img 
				class="movingImage"
				src={project.src}
				alt=""
				loading="lazy"
				in:receive={{key: project.src}}
				out:send={{key: project.src}}
				/>
			{/if}
			</button>
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
	.movingImageFrame {
		position: fixed;
		z-index: 140;
		background-color: transparent;
		border-style: none;
	}
	.movingImage {
		height: 30vh;
		background-color: aqua;
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
	.popupImage {
		height: 40vh;
		background-color: aqua;
		opacity: 0.9;
		background-position: center;
		border-radius: 10px;
		border: 1px solid rgba(255, 255, 255, 0.18);
		box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
		@media (max-width: 600px) {
			height: 20vh;
		}
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
		color: #7ed3b2;
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
		// textC 0.2s cubic-bezier(0.9, 0.03, 0.69, 0.22) 2.8s;
		user-select: none;
		@media (max-width: 600px) {
			letter-spacing: 2vw;
		}
		// top: 200px;
	}
	@keyframes text {
		0% {
			color: #b9e6d3;
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
			color: #b9e6d3;
		}
	}
	@keyframes textB {
		0% {
			color: #b9e6d3;
			letter-spacing: 0rem;
			font-size: 15vw;
			top: 0px;
		}
		100% {
			color: #7ed3b2;
			letter-spacing: 2vw;
			font-size: 18vw;
			top: 0px;
		}
	}
	@keyframes textC {
		0% {
			top: 0px;
		}
		100% {
			top: 200px;
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
	.blocker{
		position: fixed;
		width: 100vw;
		z-index: 999;
		height: 100vh;
		background-color: rgba(255, 255, 255, 0.18);
		top: 0px;
		left: 0px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.popups {
		background: rgba(127, 255, 212, 0.6);
		border-radius: 16px;
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
		border: 1px solid rgba(127, 255, 212, 0.3);

		height: 70vh;
		width: 70vw;
		display: grid;
		grid-template-columns: min-content;
		grid-template-rows:max-content auto ;
		padding: 10px;
	}
	.popupClose {
		transform: rotate(45deg);
		font-size: 40px;
		width: min-content;
		color: red;
		user-select: none;
	}
	.popupCloseBtn {
		border-style: none;
		width: min-content;
		background-color: transparent;
	}
</style>
