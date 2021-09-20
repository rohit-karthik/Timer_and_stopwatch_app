<script>
    let count = 0;
    let countSec = 0;
    let started = false;

    let interval;

</script>

<div
    class="flex flex-col h-full justify-center items-center bg-white dark:bg-gray-800"
>
    <p class="text-blue-400 text-5xl mb-6">Stopwatch</p>
    <div class="flex">
        <p
            class="
                mt-2
                flex
                w-32
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
            {count} min
        </p>
        <p
            class="
                mt-2
                flex
                w-32
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
            {countSec} sec
        </p>
    </div>

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
                    started = true;
                    interval = setInterval(() => {
                        countSec += 1;
                        if (countSec == 60) {
                            count += 1
                            countSec = 0
                        }
                    }, 1000);
                }
            }}>Start</button
        >
        <button
            class="bg-red-600 text-white p-4 ml-2 rounded-lg active:bg-red-800"
            on:click={() => {
                count = 0;
                countSec = 0;
            }}>Reset</button
        >
    </div>
</div>
