//An useful practice for undestanding callBacks in Javascript.
//Now days modern pattern recommends Promises, but is always good to be familiar with the format we innevitablemente will find in legacy code in the wild.

function walkDog(callback){
    setTimeout(() => {
    console.log('Loading data... 🥁')
    callback()
  }, 1500)}

function cleanKitchen(callback){
    setTimeout(() => {
    console.log('checking background🥾');
    callback();
    }, 2044)};

function takeOutTrash(callback) {
  setTimeout(() => {
    console.log('analyzing behaviors in social media🤤');
    callback();
  }, 4000)};

walkDog(() => {
    cleanKitchen(() => {
    takeOutTrash(() => setTimeout(() => console.log('Your media score is 🫡76 out of 100'), 3200));
    });
});
