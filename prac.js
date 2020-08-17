displaySong(data)) 
        
        function displaySong(songs) {
            for (let i = 0; i < 10; i++) {
                const element = songs.data[i];
                console.log(element.title);             
            }
        }