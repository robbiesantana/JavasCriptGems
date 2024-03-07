//
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
