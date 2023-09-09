document.addEventListener("DOMContentLoaded", function () {
    const videoContainer = document.getElementById("video");
    const masVContainer = document.getElementById("mas_v");
    const videoList = document.querySelectorAll("#video-menu li a");
    const cerrarMasV = document.getElementById("cerrarmas_v");
    const addedVideos = new Set();

    function cargarVideo(src) {
        videoContainer.setAttribute("src", src);
        videoContainer.load();
    }

    videoList.forEach((video) => {
        video.addEventListener("click", function () {
            const videoSrc = this.getAttribute("data-video-src");

            if (!addedVideos.has(videoSrc)) {
                cargarVideo(videoSrc);

                const nuevoElementoLista = document.createElement("li");
                nuevoElementoLista.textContent = this.textContent;
                listaMasV.appendChild(nuevoElementoLista);

                addedVideos.add(videoSrc);
            }
        });
    });

    cerrarMasV.addEventListener("click", function () {
        masVContainer.style.display = "none";
    });

    document.getElementById("mas_videos").addEventListener("click", function () {
        masVContainer.style.display = "block";
    });

    document.getElementById("add_video").addEventListener("click", function () {
        document.getElementById("c_archivo").style.display = "block";
    });

    document.getElementById("cerrarc_archivo").addEventListener("click", function () {
        document.getElementById("c_archivo").style.display = "none";
    });

    document.getElementById("video-file").addEventListener("change", function () {
        const selectedFile = this.files[0];
        const objectURL = URL.createObjectURL(selectedFile);
        cargarVideo(objectURL);

        const listaMasV = document.querySelector("#mas_v ul");
        const nuevoElementoLista = document.createElement("li");
        nuevoElementoLista.textContent = selectedFile.name;
        listaMasV.appendChild(nuevoElementoLista);

        document.getElementById("c_archivo").style.display = "none";
    });
});