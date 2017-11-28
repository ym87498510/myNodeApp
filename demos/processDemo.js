/**
 * Created by edison on 2017/11/14.
 */
console.log(1);
// nextTick
process.nextTick(() => {
    console.log(2)
});
console.log(3);
