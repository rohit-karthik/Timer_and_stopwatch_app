<script>
	import Stopwatch from "./components/Stopwatch.svelte";
	import Timer from "./components/Timer.svelte";

	let selected = 1;
</script>

<div class="h-screen flex flex-col dark:bg-gray-800 bg-white ">
	<div class="flex justify-center items-center">
		<button
			on:click={() => {
				selected = 0;
			}}
			class="{selected == 0
				? 'bg-blue-400 text-white'
				: 'text-blue-400'} border-blue-400 border-2 p-1 rounded-lg m-2 transition"
			>Stopwatch</button
		>
		<button
			on:click={() => {
				selected = 1;
			}}
			class="{selected == 1
				? 'bg-blue-400 text-white'
				: 'text-blue-400'} border-blue-400 border-2 p-1 rounded-lg m-2 transition"
			>Timer</button
		>
	</div>

	{#if selected == 0}
		<Stopwatch />
	{:else}
		<Timer />
	{/if}
</div>
