<script>
	import { onMount } from "svelte";
	import { fade, fly } from "svelte/transition";
	import Menus from "$lib/Menus.svelte"
	let menuOpen = false;
	let delayFinish = false;
    let Mounted = false
	function menu() {
		menuOpen = menuOpen ? false : true;
	}
    onMount(()=> {
        Mounted = true
    })
	let Cwidth = 1000
</script>
<svelte:window bind:innerWidth={Cwidth}/>
{#if Mounted == false || menuOpen == true}
	<div
		class="backgroundcolor"
		in:fade={{ duration: 1000, delay: 100 }}
		out:fade={{ duration: 1000, delay: 100 }}
		class:laytotop={menuOpen}
	></div>
{/if}

<Menus {menuOpen}/>
<div class="topnav">
	{#if Mounted}
		<button class="Chover HoverTitle link" in:fly={{ duration: 1000, y: -70 }} on:click={() => {window.location = "/"}} >
			C
		</button>
		<button
			class="Chover link"
			in:fly={{ duration: 1000, y: -70 }}
			on:click={menu}
		>
			{#if menuOpen}
				close
			{:else}
				menu
			{/if}
		</button>
	{/if}
</div>
<div class="bottom">
	<div class="normalfont center">
		<a href="https://github.com/seabass6969/"
			><img
				src="/assets/GitHub.svg"
				alt="github icon"
				width="190px"
			/></a
		>
		<a href="https://gitlab.com/seabass6969group">
			<img
				class=""
				src="/assets/gitlab.svg"
				alt="gitlab logo"
				width="190px"
			/>
		</a>
		<a href="https://discord.com/users/665915259848228884">
			<img
				class=""
				src="/assets/Discord.svg"
				alt="Discord logo"
				width="208px"
			/>
		</a>
	</div>
</div>
<style lang="scss">

	.topnav {
		position: absolute;
		display: flex;
		top: 0px;
		width: 100vw;
		flex: 0 0 100%;
		justify-content: space-between;
		max-width: 100%;
		z-index: 9999;
	}

	.Chover {
		margin: 2vw;
		font-family: "Days One", sans-serif;
		font-size: 34px;
	}

	.HoverTitle:hover{
		transform: scale(1.2);
		transition: transform 1s;
	}
	.link {
		color: black;
		text-decoration: none;
		border: none;
		background-color: transparent;
		cursor: pointer;
	}

.bottom {
    display: grid;
    align-items: center;
    justify-items: center;
    margin-top: 10vh;
}

	.backgroundcolor {
		background-color: aquamarine;
		top: 0px;
		position: absolute;
		width: 100vw;
		height: 100vh;
		z-index: 100;
	}
</style>