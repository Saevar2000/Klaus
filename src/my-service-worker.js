self.addEventListener('fetch', event => {

    // Handle the share_target shares.
    if (event.request.method === 'POST') {

        // Make sure we're only getting shares to the share-photo route.
        const path = event.request.url.split("/").pop();

        if(path === "share-photo"){

            // Get the images from the share request.
            event.request.formData().then(formData => {

                // Find the correct client in order to share the results.
                const clientId = event.resultingClientId !== "" ? event.resultingClientId : event.clientId;
                self.clients.get(clientId).then(client => {

                    // Get the images.
                    const image = formData.getAll('image');

                    // Send them to the client.
                    client.postMessage(
                        {
                            message: "newMedia",
                            image: image
                        }
                    );
                });
            });
        }
    }
});
  
importScripts('./ngsw-worker.js');