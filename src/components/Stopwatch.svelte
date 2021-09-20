<script>
    let count = 0;

    let started = false;

    let interval;

</script>

<div
    class="flex flex-col h-full justify-center items-center bg-white dark:bg-gray-800"
>
    <p class="text-blue-400 text-5xl mb-6">Stopwatch</p>
    <p
        class="
            mt-2
            flex
            w-60
            text-center
            text-blue-400
            ml-2
            mb-6
            h-20
            border-blue-400
            border-2
            rounded-lg
            items-center
            justify-center
            text-3xl
            transition
            hover:border-none
            hover:bg-blue-400
            hover:text-white
        "
    >
        {count} {count == 1 ? 'second' : 'seconds'}
    </p>

    <div class="flex w-60">
        <button
            class="bg-red-400 text-white p-4 ml-1 mr-2 rounded-lg active:bg-red-600"
            on:click={() => {
                if (started) {
                    clearInterval(interval);
                    started = false;
                }
            }}>Stop</button
        >
        <button
            class="bg-green-400 text-white p-4 mx-2 rounded-lg active:bg-green-600"
            on:click={() => {
                if (!started) {
                    interval = setInterval(() => {
                        count += 1;
                    }, 1000);
                    started = true;
                }
            }}>Start</button
        >
        <button
            class="bg-red-600 text-white p-4 ml-2 rounded-lg active:bg-red-800"
            on:click={() => {
                count = 0;
            }}>Reset</button
        >
    </div>
</div>
