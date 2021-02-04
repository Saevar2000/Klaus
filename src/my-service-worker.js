self.addEventListener('fetch', event => {

    // Handle the share_target shares.
    if (event.request.method === 'POST') {

        // Make sure we're only getting shares to the share-photo route.
        const path = event.request.url.split("/").pop();

        if(path === "share-photo"){

            event.waitUntil(async function() {

                // Get the images from the share request.
                const formData = await event.request.formData();

                // Find the correct client in order to share the results.
                const client = await self.clients.get(event.resultingClientId || event.clientId);
                
                // Get the images.
                const file = formData.get('file');

                console.log("file", file);
                console.log("(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧");
                
                // Send them to the client.
                client.postMessage({ file, action: 'load-image' });
            }());

            
        }
            
        //     event.request.formData().then(formData => {

                
        //         const clientId = event.resultingClientId !== "" ? event.resultingClientId : event.clientId;
        //         self.clients.get(clientId).then(client => {

                    
        //             const image = formData.getAll('image');

                    
        //             client.postMessage(
        //                 {
        //                     message: "newMedia",
        //                     image: image
        //                 }
        //             );
        //         });
        //     });
        // }
    }
});
  
importScripts('./ngsw-worker.js');