<script>
	import Stopwatch from "./components/Stopwatch.svelte";
	import Timer from "./components/Timer.svelte";
	import Router, {push, location} from 'svelte-spa-router'

	const routes = {
		'/': Timer,
		'/timer': Timer,
		'/stopwatch': Stopwatch
	}
</script>

<div class="h-screen flex flex-col dark:bg-gray-800 bg-white ">
	<div class="flex justify-center items-center">
		<button
			on:click={() => {
				push('/stopwatch')
			}}
			class="{$location == '/stopwatch'
				? 'bg-blue-400 text-white'
				: 'text-blue-400'} border-blue-400 border-2 p-1 rounded-lg m-2 transition"
			>Stopwatch</button
		>
		<button
			on:click={() => {
				push('/')
			}}
			class="{$location == '/timer' || $location == '/'
				? 'bg-blue-400 text-white'
				: 'text-blue-400'} border-blue-400 border-2 p-1 rounded-lg m-2 transition"
			>Timer</button
		>
	</div>

	<Router {routes} />
</div>
