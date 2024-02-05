<script>
	import { flip } from "svelte/animate";
	import { fade, fly } from "svelte/transition";
	import { haptic } from "./feedback";

	export let Mounted = false
	export let menuOpen = false
	export let home = false
</script>
<div class="topnav">
	{#if Mounted}
			<button class="Chover HoverTitle link" in:fly={{ duration: 1000, delay: home ? 2800: 0, y: -70 }} on:click={() => {window.location = "/";haptic()}}>
				{menuOpen == false ? "C" : "C - Home"}
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
	.menuBtn {
background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
	}
	.menuBtnS {
background: rgba( 255, 0, 0, 0.4 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 20px );
-webkit-backdrop-filter: blur( 20px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
	}
</style>