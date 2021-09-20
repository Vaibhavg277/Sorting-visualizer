// The keyword async before a function makes the function return a promise:
// Here is how to use the Promise:

// myFunction().then(
//   function(value) { /* code if successful */ },
//   function(error) { /* code if some error */ }
// );
// The await keyword can only be used inside an async function.

// ele=n(no. of bars or numbers)
    // cyan->before comparison
    // blue->while comparison
    // green->last ele(After each iteration, the largest element among the unsorted elements is placed at the end.)
async function bubble() {
    console.log('In bubbe()');
    const ele = document.querySelectorAll(".bar");
    
    for(let i = 0; i < ele.length-1; i++){
        console.log('In ith loop');
        for(let j = 0; j < ele.length-i-1; j++){
            console.log('In jth loop');
            ele[j].style.background = 'blue';
            ele[j+1].style.background = 'blue';
            // parseInt is imp
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                console.log('In if condition');
                await waitforme(delay);
                swap(ele[j], ele[j+1]);
            }
            ele[j].style.background = 'cyan';
            ele[j+1].style.background = 'cyan';
        }
        ele[ele.length-1-i].style.background = 'green';
    }
    ele[0].style.background = 'green';
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubble();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
