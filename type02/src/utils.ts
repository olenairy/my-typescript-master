
/* Create your script */
const body = <HTMLDivElement> document.body
const script = document.createElement('script')
script.src = 'https://maps.googleapis.com/maps/api/js?key=' + process.env.GOOGLEMAP_KEY
       
/* add your script to DOM */
body.appendChild(script);
