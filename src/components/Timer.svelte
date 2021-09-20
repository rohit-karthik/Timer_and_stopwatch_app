<script>
    let count = 0;
    let countSec = 0;
    let started = false;
    let interval;
    let snd = new Audio('../../done_sound.wav')
</script>

<div class="flex flex-col sm:flex-row justify-center items-center bg-white h-full dark:bg-gray-800">
    <div
        class="flex flex-col w-1/2 justify-center items-center bg-white dark:bg-gray-800"
    >
        <p class="text-blue-400 text-5xl mb-6">Timer</p>
        <div class="flex">
            <p
                class="
            mt-2
            flex
            w-20
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
                class="flex text-blue-400 text-center text-5xl ml-2 w-6 h-20 justify-center items-center"
            >
                {":"}
            </p>
            <p
                class="
            mt-2
            flex
            w-20
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
        {#if !started}
        <div class="flex w-60">
            <button
                class="
            mt-2
            flex
            w-20
            text-center
            text-green-400
            ml-6
            mb-6
            h-20
            border-green-400
            border-2
            rounded-lg
            items-center
            justify-center
            text-3xl
            transition
            hover:border-none
            hover:bg-green-400
            hover:text-white    
        "
                on:click={() => {
                    count += 1;
                }}
            >
                +
            </button>
            <button
                class="
            mt-2
            flex
            w-20
            text-center
            text-green-400
            ml-10
            mb-6
            h-20
            border-green-400
            border-2
            rounded-lg
            items-center
            justify-center
            text-3xl
            transition
            hover:border-none
            hover:bg-green-400
            hover:text-white    
        "
                on:click={() => {
                    countSec += 1;
                }}
            >
                +
            </button>
        </div>
        <div class="flex w-60">
            <button
                class="
            mt-2
            flex
            w-20
            text-center
            text-red-400
            ml-6
            mb-6
            h-20
            border-red-400
            border-2
            rounded-lg
            items-center
            justify-center
            text-3xl
            transition
            hover:border-none
            hover:bg-red-400
            hover:text-white    
        "
                on:click={() => {
                    if (count != 0) count -= 1;
                }}
            >
                -
            </button>
            <button
                class="
            mt-2
            flex
            w-20
            text-center
            text-red-400
            ml-10
            mb-6
            h-20
            border-red-400
            border-2
            rounded-lg
            items-center
            justify-center
            text-3xl
            transition
            hover:border-none
            hover:bg-red-400
            hover:text-white    
        "
                on:click={() => {
                    if (countSec != 0) countSec -= 1;
                }}
            >
                -
            </button>
        </div>
        {/if}
    </div>
    <div class="flex flex-col w-1/2 justify-center items-center">
        <button
            class="
            mt-2
            flex
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
            style="width: 12.5rem"
            on:click={() => {
                if (!started && countSec != 0 || count != 0) {
                    started = true;
                    interval = setInterval(() => {
                        countSec -= 1;
                        if (countSec == 0 && count == 0) {
                            started = false;
                            snd.play();
                            clearInterval(interval);
                        } else if (countSec == -1 && count != 0) {
                            count -= 1;
                            countSec = 59;
                        }
                    }, 1000);
                }
            }}
        >
            Start
        </button>
        <button
            class="
            mt-2
            flex
            text-center
            text-red-400
            ml-2
            mb-6
            h-20
            border-red-400
            border-2
            rounded-lg
            items-center
            justify-center
            text-3xl
            transition
            hover:border-none
            hover:bg-red-400
            hover:text-white
        "
            style="width: 12.5rem"
            on:click={() => {
                snd.pause()
                snd.currentTime = 0
                if (started) {
                    clearInterval(interval);
                    started = false;
                }
            }}
        >
            Stop
        </button>
        <button
            class="
            mt-2
            flex
            text-center
            text-red-600
            ml-2
            mb-6
            h-20
            border-red-600
            border-2
            rounded-lg
            items-center
            justify-center
            text-3xl
            transition
            hover:border-none
            hover:bg-red-600
            hover:text-white
        "
            style="width: 12.5rem"
            on:click={() => {
                count = 0;
                snd.pause()
                snd.currentTime = 0
                countSec = 0;
            }}
        >
            Reset
        </button>
    </div>
</div>
