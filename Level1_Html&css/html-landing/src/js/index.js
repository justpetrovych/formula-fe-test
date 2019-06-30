import 'lazysizes';

console.log(navigator.serviceWorker);
if ('serviceWorker' in navigator) {
  console.log('yes');
  navigator.serviceWorker
    .register('/sw.js')
    .then(reg => console.log('serviceWorker is registered', reg))
    .catch(err => console.log('serviceWorker is not registered. ', err));
}
