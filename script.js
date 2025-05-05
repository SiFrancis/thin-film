const wl_input = document.querySelector('#wl_input');
const wl_val = document.querySelector('#wl_val')
wl_val.textContent = wl_input.value + " nm"
wl_input.addEventListener("input", (event) => {
    wl_val.textContent = event.target.value + " nm";
});