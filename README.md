# STOP-WATCH
Brought required elements witheir ids to do functionalities.
taken count as -1 initially as i am calling setInterval function every 10ms when count reaches to 100,
container shakes with addition of extra letter in the millisec count display.
timer variable is a game changer here with that presence you cannot let start button do its action again when it is on. so that timer will not go crazy like increasing timer count speed everytime you click on start button.
i am using setInterval inside start button only so for that i am taking interval null globally.
start button click event happening when that happening, start function address is referred.
i am calling setInterval only when the timer is false i.e !timer to make start counter count only once when it is clicked and no further action until start or stop is clicked.
start counter put conditions with the time change to defferentiate with seconds,minutes,hours.

now making timer to false inside stop function to enable start btn.
disabling the interval functionality with clear interval function.
inside reset function, if you set timer to true after start button is enabled, reset button also have access to stop timer but i am making the flow from start>>>>stop>>>>reset i.e after clicking start if you click only stop then reset is enabled. if not with timer is true, reset also stops the start button functionality.
clearing the interval and making count, seconds, minutes, hours, to their default values to make start to count from theinitial values.
