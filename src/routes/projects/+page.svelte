<script>
	import { onMount } from "svelte";
	import { fade, fly } from "svelte/transition";
	import Menus from "$lib/Menus.svelte";
	import { projectlist } from "$lib/projects";
	import Topnav from "$lib/Topnav.svelte";
	import { haptic } from "$lib/feedback";
	let menuOpen = false;
	let delayFinish = false;
	let Mounted = false;
	let projectOn = 0;
	function menu() {
		menuOpen = menuOpen ? false : true;
		haptic();
	}
	function nextProject() {
		positive_neg = 1;
		haptic();
		if (projectlist.length - 1 == projectOn) {
			projectOn = 0;
		} else {
			projectOn += 1;
		}
	}
	function backProject() {
		positive_neg = -1;
		haptic();
		if (projectOn == 0) {
			projectOn = projectlist.length - 1;
		} else {
			projectOn -= 1;
		}
	}
	onMount(() => {
		Mounted = true;
	});
	let Cwidth = 1000;
	let positive_neg = 1;
</script>

<svelte:window bind:innerWidth={Cwidth} />
{#if Mounted == false || menuOpen == true}
	<div
		class="backgroundcolor"
		in:fade={{ duration: 1000, delay: 100 }}
		out:fade={{ duration: 1000, delay: 100 }}
		class:laytotop={menuOpen}
	></div>
{/if}

<Menus {menuOpen} />

<Topnav on:click={menu} bind:Mounted bind:menuOpen />
<div class="bottom">
	{#if Cwidth >= 600}
		<button class="stretchButton left" on:click={backProject}></button>
	{/if}
	{#key projectOn}
		<div
			class="middle"
			in:fly={{
				duration: 1000,
				x: -100 * positive_neg,
				y: 0,
				delay: 500,
			}}
			out:fly={{ duration: 500, x: 100 * positive_neg, y: 0 }}
		>
			<img src={projectlist[projectOn].src} alt="" class="image" />
			<div class="row">
				<div class="col">
					<h2 class="des">
						<span class="material-symbols-outlined"> info </span> Description:
					</h2>
					<span class="desc"
						>{projectlist[projectOn].description}</span
					>
				</div>
				<div class="col">
					<a class="desc" href={projectlist[projectOn].link}
						><h2 class="des">
							<span class="material-symbols-outlined"> link</span>
							link:
						</h2></a
					>
				</div>
				<div class="col">
					<a class="desc" href={projectlist[projectOn].source_code}
						><h2 class="des">
							<span class="material-symbols-outlined"> code</span>
							code
						</h2></a
					>
				</div>
			</div>
		</div>
	{/key}
	{#if Cwidth >= 600}
		<button class="stretchButton right" on:click={nextProject}></button>
	{:else}
		<button on:click={backProject} class="smallphone"
			><img src="/lefts.png" alt="" /></button
		>
		<button on:click={nextProject} class="smallphone"
			><img src="/rights.png" alt="" /></button
		>
	{/if}
</div>

<style lang="scss">
	.bottom {
		display: grid;
		align-items: center;
		justify-items: center;
		margin-top: 10vh;
		height: 80vh;
		@media (max-width: 600px) {
			grid-template-columns: auto;
		}
		grid-template-columns: 35% auto 35%;
	}

	.backgroundcolor {
		background-color: aquamarine;
		top: 0px;
		position: absolute;
		width: 100vw;
		height: 100vh;
		z-index: 100;
	}
	.stretchButton {
		width: 100%;
		height: 100%;
		background-color: transparent;
		border-style: none;
	}
	.stretchButton:hover {
		background-color: transparent;
		border-style: none;
	}
	.image {
		width: 100%;
		transition: transform 0.5s;
		transform: scale(100%);
		@media (max-width: 600px) {
			width: 80%;
		}
	}
	.image:hover {
		transition: transform 0.5s;
		transform: scale(120%);
	}
	.middle {
		display: grid;
		align-content: center;
		justify-items: center;
	}
	.des,
	.desc {
		font-family: "IBM Plex Sans", sans-serif;
	}
	.left {
		cursor: url("/lefts.png"), auto;
		background-image: url(../../../left.png);
		background-position: center center;
		background-repeat: no-repeat;
		background-size: 20%;
		grid-column-start: 1;
		grid-column-end: 1;
		grid-row-start: 1;
		grid-row-end: 1;
	}
	.right {
		cursor: url("/rights.png"), auto;
		background-image: url(../../../right.png);
		background-position: center center;
		background-repeat: no-repeat;
		background-size: 20%;
		grid-column-start: 3;
		grid-column-end: 3;
		grid-row-start: 1;
		grid-row-end: 1;
	}
	.row {
		display: grid;
		grid-template-columns: auto auto;
		gap: 10px;
	}
	.smallphone {
		border-style: none;
		border-color: transparent;
		background-color: transparent;
	}
</style>
