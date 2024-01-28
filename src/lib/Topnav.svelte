<script>
	import { flip } from "svelte/animate";
	import { fade, fly } from "svelte/transition";

	export let Mounted = false
	export let menuOpen = false
	export let home = false
</script>
<div class="topnav">
	{#if Mounted}
		<button class="Chover HoverTitle link" in:fly={{ duration: 1000, delay: home ? 2800: 0, y: -70 }} on:click={() => {window.location = "/"}} >
			C
		</button>
		<button
			class="Chover link"
			in:fly={{ duration: 1000, delay: home ? 2800 : 0, y: -70 }}
			on:click
		>
			{#if menuOpen}
<span class="material-symbols-outlined HoverTitle menuBtnS" >
add
</span>
			{:else}
<span class="material-symbols-outlined HoverTitle menuBtn">
add
</span>
			{/if}
		</button>
	{/if}
</div>
<style>
	.menuBtn {
		transform: rotate(0deg);
		transition: transform 0.2s;
	}
	.menuBtn:hover {
		transform: rotate(45deg);
		transition: transform 0.2s;
	}
	.menuBtnS {
		transform: rotate(45deg);
		transition: transform 0.2s;
	}
	.menuBtnS:hover {
		transform: rotate(0deg);
		transition: transform 0.2s;
	}
</style>