<script>
	import { onMount } from "svelte";
	import { fade, fly } from "svelte/transition";
	import Menus from "$lib/Menus.svelte"
	import Topnav from "$lib/Topnav.svelte";
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
<Topnav on:click={menu} bind:Mounted bind:menuOpen/>
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