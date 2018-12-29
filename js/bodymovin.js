var container = document.getElementById('anim_container');
     // Set up our animation

     var animData = {
         container: container,
         renderer: 'svg',
         autoplay: true,
         loop: true,
         path : 'data.json'
     };
     var anim = bodymovin.loadAnimation(animData);
